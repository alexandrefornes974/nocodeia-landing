// Pré-renderização das páginas iniciais (PT, EN, ES) para SEO e GEO.
//
// Problema: o conteúdo das páginas só existe pronto depois que /support.js monta o componente no navegador.
// O HTML cru traz o molde ({{perdido}}, <sc-if>...), que é o que robôs sem JavaScript (a maioria dos
// rastreadores de IA) leem e indexam.
//
// Solução: renderiza cada página num navegador, captura o HTML pronto e grava no arquivo publicado:
//   - o HTML pronto fica em <div id="dc-prerender"> (o que robôs e visitantes sem JS veem);
//   - o molde cru vai para <script type="text/x-dc-template"> (script não é lido como texto);
//   - o <helmet> do molde (fontes e CSS global, que o JS levaria ao <head>) é copiado para o <head> com
//     data-prerender, para a página sem JS sair estilizada; o boot remove essas cópias;
//   - um pequeno script recria o <x-dc> a partir desse molde antes do boot do support.js e, quando
//     o componente monta (#dc-root com conteúdo), remove o HTML pré-renderizado.
//
// Uso: node prerender.mjs <pasta-do-site>     (a pasta é alterada no lugar)
// Falha (exit 1) se qualquer página sair com molde vazando: nesse caso o deploy não deve seguir.

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const raiz = path.resolve(process.argv[2] || '');
if (!raiz || !fs.existsSync(raiz)) { console.error('Uso: node prerender.mjs <pasta-do-site>'); process.exit(1); }
const PAGINAS = ['index.html', 'en/index.html', 'es/index.html'];

const { chromium } = await import(process.env.PLAYWRIGHT_ENTRY || 'playwright');

const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml' };
const servidor = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = path.join(raiz, p);
  if (!f.startsWith(raiz)) { res.writeHead(403).end(); return; }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'Content-Type': TIPOS[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise(r => servidor.listen(0, '127.0.0.1', r));
const base = 'http://127.0.0.1:' + servidor.address().port;

let browser;
try { browser = await chromium.launch(); } catch (e) { browser = await chromium.launch({ channel: 'chrome' }); }

const BOOT = `<script>(function(){
  var t=document.getElementById('dc-tpl'),p=document.getElementById('dc-prerender');
  if(!t)return;
  var x=document.createElement('x-dc');x.style.display='none';x.innerHTML=t.textContent;
  t.parentNode.insertBefore(x,t);
  function pronto(){var r=document.getElementById('dc-root');if(r&&r.firstChild){if(p&&p.parentNode)p.parentNode.removeChild(p);var h=document.querySelectorAll('[data-prerender]');for(var i=0;i<h.length;i++)h[i].parentNode.removeChild(h[i]);return true}return false}
  document.addEventListener('DOMContentLoaded',function(){
    if(pronto())return;
    var o=new MutationObserver(function(){if(pronto())o.disconnect()});
    o.observe(document.body,{childList:true,subtree:true});
  });
})();</script>`;

let erros = 0;
for (const rel of PAGINAS) {
  const arquivo = path.join(raiz, rel);
  const fonte = fs.readFileSync(arquivo, 'utf8');
  const crlf = fonte.includes('\r\n');
  const src = fonte.replace(/\r\n/g, '\n');
  const a = src.indexOf('<x-dc>');
  const b = src.indexOf('</x-dc>');
  if (a < 0 || b < a) { console.error(`${rel}: <x-dc> não encontrado (já pré-renderizado?)`); erros++; continue; }
  const molde = src.slice(a + '<x-dc>'.length, b);
  if (/<\/script/i.test(molde)) { console.error(`${rel}: o molde contém </script`); erros++; continue; }

  // renderiza a página como um visitante, sem rede externa
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.route('**/*', r => (r.request().url().startsWith(base) ? r.continue() : r.abort()));
  const url = base + '/' + rel.replace(/index\.html$/, '');
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForSelector('#dc-root > *', { timeout: 20000 });
  await page.waitForTimeout(800);
  const pronto = await page.$eval('#dc-root', e => e.innerHTML);
  await ctx.close();

  const texto = pronto.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ');
  const problemas = [];
  if (/\{\{|\}\}/.test(texto)) problemas.push('molde {{…}} vazando no texto');
  if (/<sc-(if|for)/i.test(pronto)) problemas.push('<sc-if>/<sc-for> sobrando');
  if (!/<h1[\s>]/i.test(pronto)) problemas.push('sem <h1>');
  if (pronto.length < 20000) problemas.push('HTML pronto pequeno demais (' + pronto.length + ')');
  if (problemas.length) { console.error(`${rel}: ${problemas.join('; ')}`); erros++; continue; }

  const helmet = (molde.match(/<helmet>([\s\S]*?)<\/helmet>/) || [])[1] || '';
  if (!helmet.includes('<style')) { console.error(`${rel}: <helmet> sem <style>`); erros++; continue; }
  const headExtra = helmet.replace(/<link /g, '<link data-prerender ').replace(/<style>/g, '<style data-prerender>');
  const bloco = `<div id="dc-prerender">${pronto}</div>\n<script type="text/x-dc-template" id="dc-tpl">${molde}</script>\n${BOOT}`;
  let saida = src.slice(0, a) + bloco + src.slice(b + '</x-dc>'.length);
  const h = saida.indexOf('</head>');
  if (h < 0) { console.error(`${rel}: </head> não encontrado`); erros++; continue; }
  saida = saida.slice(0, h) + headExtra + '\n' + saida.slice(h);
  if (crlf) saida = saida.replace(/\n/g, '\r\n');
  fs.writeFileSync(arquivo, saida);
  console.log(`${rel}: ok (${(fonte.length / 1024).toFixed(0)} KB -> ${(saida.length / 1024).toFixed(0)} KB)`);
}

await browser.close();
servidor.close();
process.exit(erros ? 1 : 0);
