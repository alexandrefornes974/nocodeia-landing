// Casco comum das páginas do site: topo, rodapé, botão de WhatsApp, GTM adiado e CSS base.
// Usado pela home (_home/build.mjs), pelo blog (_blog/build.mjs) e pelos cases (_casos/build.mjs),
// para os três terem sempre o mesmo visual. Os textos vêm de _home/conteudo/*.yml.

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { avisoCookies } from '../_blog/aviso-cookies.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const SITE = join(AQUI, '..');

// O pacote "yaml" pode estar em _home/node_modules (npm ci em _home) ou em _blog/node_modules (npm install em _blog).
function carregarYaml() {
  for (const pasta of [AQUI, join(SITE, '_blog')]) {
    try { return createRequire(join(pasta, 'package.json'))('yaml'); } catch { /* tenta a próxima */ }
  }
  throw new Error('Falta o pacote "yaml": rode "npm ci" em site/_home ou "npm install" em site/_blog.');
}
const YAML = carregarYaml();

export const BASE_URL = 'https://nocodeiaww.com';
export const GTM = 'GTM-W3GSX8NZ';
export const IDIOMAS = {
  pt: { base: '', html: 'pt-BR', og: 'pt_BR', rotulo: 'Português' },
  en: { base: '/en', html: 'en', og: 'en_US', rotulo: 'English' },
  es: { base: '/es', html: 'es', og: 'es_ES', rotulo: 'Español' },
};
export const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const cache = {};
const lerYml = f => (cache[f] ??= YAML.parse(readFileSync(join(AQUI, 'conteudo', f), 'utf8')));
export const empresa = () => lerYml('empresa.yml');
export const textos = l => lerYml(`${l}.yml`);

// CSS sem comentários e sem quebras, para ir inline no <head>.
export const cssArquivo = nome => readFileSync(join(AQUI, nome), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').trim();

export const ICONE_ZAP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.1 1.3Z"/></svg>';
const ICONE_MENU = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

export const linkWhatsapp = msg => `https://wa.me/${empresa().whatsapp}?text=${encodeURIComponent(msg)}`;
export const urlCasos = l => ({ pt: '/casos/', en: '/en/cases/', es: '/es/casos/' })[l];

// Google Tag Manager carregado depois da página (não trava a tela). A fila de dados existe desde o início.
export const gtmAdiado = () => `<!-- Google Tag Manager carregado depois da página (não trava a tela). A fila de dados existe desde o início. -->
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
(function(w,d){var foi=0;function gtm(){if(foi)return;foi=1;w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=${GTM}';d.head.appendChild(j);}
function depois(){setTimeout(gtm,5000);}
if(d.readyState==='complete')depois();else w.addEventListener('load',depois);
['scroll','pointerdown','keydown','touchstart'].forEach(function(e){w.addEventListener(e,gtm,{once:true,passive:true});});
})(window,document);
</script>`;
export const gtmNoscript = () => `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;

const PULAR = { pt: 'Pular para o conteúdo', en: 'Skip to content', es: 'Saltar al contenido' };
const RODAPE = { pt: 'Rodapé', en: 'Footer', es: 'Pie de página' };
export const pular = l => `<a class="pular" href="#conteudo">${PULAR[l]}</a>`;

/**
 * Topo do site.
 * l: idioma; idiomas: { pt, en, es } com o endereço desta página em cada idioma;
 * naHome: true na própria home (links viram âncoras da página); atual: 'casos' | 'blog' marca o item do menu.
 */
export function topo(l, { idiomas, naHome = false, atual = null }) {
  const c = textos(l), emp = empresa(), base = IDIOMAS[l].base;
  const ancora = id => (naHome ? `#${id}` : `${base}/#${id}`);
  const itens = [
    [ancora('o-que-fazemos'), c.menu.o_que_fazemos, null],
    [naHome ? '#casos' : urlCasos(l), c.menu.casos, 'casos'],
    [ancora('para-quem'), c.menu.para_quem, null],
    [ancora('como-funciona'), c.menu.como_funciona, null],
    [ancora('duvidas'), c.menu.duvidas, null],
    [c.rodape.blog_url, c.menu.blog, 'blog'],
  ];
  const marca = k => (k && k === atual ? ' aria-current="page"' : '');
  const lista = itens.map(([h, t, k]) => `<li><a href="${h}"${marca(k)}>${esc(t)}</a></li>`).join('');
  const painel = itens.map(([h, t, k]) => `<a href="${h}"${marca(k)}>${esc(t)}</a>`).join('');
  const seletor = Object.entries(IDIOMAS).map(([k, I]) =>
    `<a href="${idiomas[k] || `${I.base}/`}" hreflang="${I.html}" lang="${I.html}"${k === l ? ' aria-current="page"' : ''} title="${I.rotulo}">${k.toUpperCase()}</a>`).join('');
  const inicio = `${base}/`;
  return `<header class="topo">
<div class="wrap nav">
<a class="logo" href="${inicio}" aria-label="${esc(emp.nome)}"><img src="/assets/logo_h.webp" alt="${esc(emp.nome)}" width="120" height="44"></a>
<div class="menu">
<nav aria-label="${esc(c.menu.navegacao || 'Principal')}"><ul>${lista}</ul></nav>
<div class="idiomas" role="group" aria-label="${esc(c.menu.idioma)}">${seletor}</div>
<a class="btn btn-main btn-cta" href="${ancora('diagnostico')}">${esc(c.menu.botao)}</a>
<details class="burger"><summary aria-label="${esc(c.menu.abrir_menu)}">${ICONE_MENU}</summary>
<div class="painel">${painel}<a href="${ancora('diagnostico')}">${esc(c.menu.botao)}</a><div class="idiomas" role="group" aria-label="${esc(c.menu.idioma)}">${seletor}</div></div>
</details>
</div>
</div>
</header>`;
}

export function rodape(l) {
  const c = textos(l), emp = empresa();
  const temCnpj = emp.cnpj && emp.razao_social;
  return `<footer class="site">
<div class="wrap cols">
<div>${esc(emp.nome)} · ${esc(c.rodape.local)}<br>${temCnpj ? `${esc(emp.razao_social)} · ${esc(c.rodape.cnpj)} ${esc(emp.cnpj)}<br>` : ''}<!--email_off--><a href="mailto:${esc(emp.email)}">${esc(emp.email)}</a><!--/email_off--><br>© ${new Date().getFullYear()} ${esc(emp.nome)}. ${esc(c.rodape.direitos)}</div>
<nav aria-label="${RODAPE[l]}">${emp.redes.map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener me">${esc(r.nome)}</a>`).join('')}<a href="${esc(c.rodape.casos_url)}">${esc(c.menu.casos)}</a><a href="${esc(c.rodape.blog_url)}">${esc(c.menu.blog)}</a><a href="${esc(c.rodape.privacidade_url)}">${esc(c.rodape.privacidade)}</a></nav>
</div>
</footer>`;
}

export const zapFlutuante = l => {
  const c = textos(l);
  return `<a class="float-zap" href="${esc(linkWhatsapp(c.hero.mensagem_whatsapp))}" data-wa="flutuante" target="_blank" rel="noopener" aria-label="${esc(c.hero.botao_whatsapp)}">${ICONE_ZAP}</a>`;
};

// ---------- serviços (as 4 abas da home) ----------
// Categoria de cada post ou case: o "service" do meta.json aponta para uma das 4 abas.
const ABA_DO_SERVICO = {
  'site-seo-geo': 0, site: 0,
  agentes: 1,
  automacao: 2, 'raio-x': 2, continuo: 2,
  mvp: 3, 'sistema-interno': 3, sistemas: 3,
};
export const servicosConhecidos = Object.keys(ABA_DO_SERVICO);
/** Aba da home para um "service": { id, nome, titulo, prazo, ordem } no idioma pedido (ou null). */
export function servico(l, chave) {
  const i = ABA_DO_SERVICO[chave];
  if (i == null) return null;
  const s = textos(l).servicos.itens[i];
  return { id: s.id, nome: s.nome, titulo: s.titulo, prazo: s.prazo, ordem: i };
}
/** As 4 abas, na ordem da home. */
export const servicosDaHome = l => textos(l).servicos.itens.map((s, i) => ({ id: s.id, nome: s.nome, ordem: i }));

/** Bloco "Quer isso na sua empresa?" do fim de posts e cases. */
export function chamada(l, chave, origem) {
  const c = textos(l), s = servico(l, chave), base = IDIOMAS[l].base, K = c.chamada;
  // mesma frase da opção marcada no diagnóstico da home (as opções seguem a ordem das abas)
  const frase = s && c.diagnostico.opcoes[s.ordem]?.frase;
  const msg = `${c.diagnostico.mensagem_inicio}${frase ? ` ${c.diagnostico.mensagem_precisa} ${frase}` : ''}. ${c.diagnostico.mensagem_fim}`;
  return `<aside class="chamada" aria-labelledby="chamada-titulo">
${s ? `<a class="tag" href="${base}/#${s.id}">${esc(s.nome)}</a>` : ''}
<h2 id="chamada-titulo">${esc(K.titulo)}</h2>
<p>${s ? `${esc(s.titulo)}. ${esc(s.prazo)} ` : ''}${esc(K.nota)}</p>
<div class="acoes">
<a class="btn btn-claro" href="${base}/#diagnostico">${esc(K.botao)}</a>
<a class="btn btn-zap" href="${esc(linkWhatsapp(msg))}" data-wa="${esc(origem)}" target="_blank" rel="noopener">${ICONE_ZAP}${esc(c.hero.botao_whatsapp)}</a>
${s ? `<a class="ver" href="${base}/#${s.id}">${esc(K.ver_servico)} →</a>` : ''}
</div>
</aside>`;
}

// Script comum das páginas internas: fecha o menu do celular e mede cliques no WhatsApp.
export const SCRIPT_COMUM = `<script>
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-wa]');if(a){window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'whatsapp_click',wa_origem:a.getAttribute('data-wa')});}
var m=document.querySelector('.burger[open]');if(m&&(!m.contains(e.target)||e.target.closest('.painel a')))m.removeAttribute('open');});
</script>`;

/**
 * Página interna completa (blog e cases).
 * alternativos: { pt, en, es } só com os idiomas em que a página existe (vira hreflang);
 * idiomas: { pt, en, es } para o seletor (idioma sem versão aponta para outra página, como o índice).
 */
export function pagina({ l, titulo, descricao, canonico, alternativos, idiomas, imagem, tipoOg, ld, corpo, atual, cssExtra = '', scriptExtra = '', preload = '' }) {
  const I = IDIOMAS[l], emp = empresa();
  const hreflang = Object.entries(alternativos).map(([k, u]) => `<link rel="alternate" hreflang="${IDIOMAS[k].html}" href="${BASE_URL}${u}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${BASE_URL}${alternativos.pt || alternativos[l]}">`;
  const css = cssArquivo('casca.css') + cssArquivo('paginas.css') + cssExtra;
  return `<!doctype html>
<html lang="${I.html}">
<head>
${avisoCookies(l)}
${gtmAdiado()}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${BASE_URL}${canonico}">
${hreflang}
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" href="/assets/icon.png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<meta name="theme-color" content="#0E0F14">
<meta property="og:type" content="${tipoOg}">
<meta property="og:site_name" content="${esc(emp.nome)}">
<meta property="og:locale" content="${I.og}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${BASE_URL}${canonico}">
<meta property="og:image" content="${BASE_URL}${imagem}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="/assets/fontes/space-grotesk.woff2" as="font" type="font/woff2" crossorigin>
${preload}<style>${css}</style>
<script type="application/ld+json">
${JSON.stringify(ld)}
</script>
</head>
<body>
${gtmNoscript()}
${pular(l)}
${topo(l, { idiomas, atual })}
<main id="conteudo">
${corpo}
</main>
${rodape(l)}
${zapFlutuante(l)}
${SCRIPT_COMUM}${scriptExtra}
</body>
</html>
`;
}
