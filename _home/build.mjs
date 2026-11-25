// Gera a página inicial estática (PT, e EN/ES quando existir o arquivo de conteúdo) a partir de
// _home/conteudo/*.yml e _home/estilo.css. HTML final, sem runtime de molde: robôs leem tudo na primeira visita.
//
// Uso:
//   node _home/build.mjs                 grava index.html (e en/, es/ se houver conteúdo) na pasta do site
//   node _home/build.mjs --saida <pasta> grava em outra pasta (o deploy usa a cópia limpa do site)
//   node _home/build.mjs --check         só confere; não grava nada
//
// Falha (exit 1) se faltar campo, sobrar marcador {…}, houver mais de um <h1> ou o HTML passar de 120 KB.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { avisoCookies } from '../_blog/aviso-cookies.mjs';
import { topo, rodape, zapFlutuante, gtmAdiado, gtmNoscript, pular, cssArquivo } from './casca.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const SITE = join(AQUI, '..');
const BASE_URL = 'https://nocodeiaww.com';
const LIMITE_KB = 120;

const args = process.argv.slice(2);
const SO_CONFERIR = args.includes('--check');
const iSaida = args.indexOf('--saida');
const SAIDA = iSaida >= 0 ? args[iSaida + 1] : SITE;

const IDIOMAS = {
  pt: { base: '', html: 'pt-BR', og: 'pt_BR', rotulo: 'Português' },
  en: { base: '/en', html: 'en', og: 'en_US', rotulo: 'English' },
  es: { base: '/es', html: 'es', og: 'es_ES', rotulo: 'Español' },
};

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ler = f => parse(readFileSync(join(AQUI, 'conteudo', f), 'utf8'));
const erros = [];

// número de artigos publicados no blog (pasta de cada post com pt.md e sem draft)
function contarArtigos() {
  const pasta = join(SITE, '_blog', 'posts');
  if (!existsSync(pasta)) return 0;
  return readdirSync(pasta, { withFileTypes: true }).filter(d => {
    if (!d.isDirectory()) return false;
    const dir = join(pasta, d.name);
    if (!existsSync(join(dir, 'pt.md'))) return false;
    try { return !JSON.parse(readFileSync(join(dir, 'meta.json'), 'utf8')).draft; } catch { return true; }
  }).length;
}
const MARCADORES = { artigos: String(contarArtigos()) };
const txt = s => esc(String(s ?? '').replace(/\{(\w+)\}/g, (m, k) => (k in MARCADORES ? MARCADORES[k] : m)));

const ICONE_ZAP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.1 1.3Z"/></svg>';

function exigir(obj, caminhos, l) {
  for (const c of caminhos) {
    const v = c.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) erros.push(`${l}.yml: falta "${c}"`);
  }
}

// ---------- página ----------
function pagina(l, c, emp, disponiveis) {
  const L = IDIOMAS[l];
  const inicio = `${L.base}/`;
  const wa = msg => `https://wa.me/${emp.whatsapp}?text=${encodeURIComponent(msg)}`;
  const linkExterno = u => /^https?:/.test(u) ? ' target="_blank" rel="noopener"' : '';

  const provas = c.hero.provas.map(p => `<li><b>${esc(p.numero)}</b> ${txt(p.texto)}</li>`).join('');

  const abas = c.servicos.itens.map((s, i) =>
    `<button class="step" role="tab" id="aba-${s.id}" aria-controls="painel-${s.id}" aria-selected="${i === 0}"${i ? ' tabindex="-1"' : ''}><span class="n">${i + 1}</span><span class="t">${esc(s.nome)}</span></button>`).join('\n');
  const paineis = c.servicos.itens.map((s, i) => {
    const ex = s.exemplo || {};
    const link = ex.link ? `<a href="${esc(ex.link)}"${linkExterno(ex.link)}>${esc(ex.link_texto || c.casos.ver_case)} →</a>` : '';
    return `<div class="panel" role="tabpanel" id="painel-${s.id}" aria-labelledby="aba-${s.id}" tabindex="0"${i ? ' hidden' : ''}>
<div><h3>${txt(s.titulo)}</h3><ul>${s.entregas.map(e => `<li>${txt(e)}</li>`).join('')}</ul><p class="time">${txt(s.prazo)}</p></div>
${ex.nome ? `<div class="case"><small>${esc(c.servicos.rotulo_exemplo)}</small><strong>${txt(ex.nome)}</strong><p>${txt(ex.texto)}</p>${link}</div>` : ''}
</div>`;
  }).join('\n');

  const linhasCasos = c.casos.itens.map(k =>
    `<div class="row"><div class="who">${esc(k.cliente)}<small>${esc(k.segmento)}</small></div><div class="what">${txt(k.texto)}</div><div class="res">${txt(k.resultado)}${k.link ? `<a href="${esc(k.link)}"${linkExterno(k.link)} aria-label="${esc(c.casos.ver_case)}: ${esc(k.cliente)}">${esc(c.casos.ver_case)} →</a>` : ''}</div></div>`).join('\n');
  const depoimentos = (c.casos.depoimentos || []).map(d =>
    `<blockquote><p>“${txt(d.texto)}”</p><footer>${esc(d.nome)}, ${esc(d.cargo)}</footer></blockquote>`).join('\n');

  const paraQuem = c.para_quem.itens.map(p => `<div><h3>${esc(p.nome)}</h3><p>${txt(p.problema)}</p><p>${txt(p.solucao)}</p></div>`).join('\n');
  const passos = c.como_funciona.passos.map(p => `<li><h3>${esc(p.titulo)}</h3><p>${txt(p.texto)}</p></li>`).join('\n');
  const fatos = c.sobre.fatos.map(f => `<li><b>${esc(f.destaque)}</b> ${txt(f.texto)}</li>`).join('\n');
  const faq = c.duvidas.itens.map(q => `<details class="q"><summary>${esc(q.pergunta)}</summary><p>${txt(q.resposta)}</p></details>`).join('\n');
  const opcoes = c.diagnostico.opcoes.map(o => `<label><input type="checkbox" name="precisa" value="${esc(o.frase)}"> ${esc(o.rotulo)}</label>`).join('\n');
  const D = c.diagnostico, E = D.email;
  const msgDiag = `${D.mensagem_inicio}. ${D.mensagem_fim}`;

  const temCnpj = emp.cnpj && emp.razao_social;

  // ---------- dados estruturados ----------
  const empresaLd = {
    '@type': 'ProfessionalService', '@id': `${BASE_URL}/#empresa`, name: emp.nome, alternateName: 'Nocodeia Worldwide',
    ...(temCnpj ? { legalName: emp.razao_social, taxID: emp.cnpj } : {}),
    url: `${BASE_URL}/`, logo: `${BASE_URL}/assets/icon.png`, image: `${BASE_URL}/assets/og-image.png`,
    description: c.meta.descricao, email: emp.email, telephone: emp.telefone,
    address: { '@type': 'PostalAddress', addressLocality: emp.cidade, addressRegion: emp.estado, addressCountry: 'BR' },
    areaServed: [
      { '@type': 'City', name: emp.cidade },
      { '@type': 'AdministrativeArea', name: emp.regiao_atendida },
      { '@type': 'Country', name: 'Brasil' },
    ],
    knowsLanguage: ['pt-BR', 'en', 'es'],
    founder: { '@id': `${BASE_URL}/#fundador` },
    sameAs: emp.redes.map(r => r.url),
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: c.servicos.titulo,
      itemListElement: c.servicos.itens.map(s => ({
        '@type': 'Offer', itemOffered: {
          '@type': 'Service', name: s.titulo, url: `${BASE_URL}${inicio}#${s.id}`,
          description: `${s.entregas.join(' ')} ${s.prazo}`.replace(/\{(\w+)\}/g, (m, k) => MARCADORES[k] ?? m),
          provider: { '@id': `${BASE_URL}/#empresa` },
        },
      })),
    },
  };
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      empresaLd,
      { '@type': 'Person', '@id': `${BASE_URL}/#fundador`, name: emp.fundador.nome, jobTitle: l === 'pt' ? 'Fundador da Nocodeia' : l === 'en' ? 'Founder of Nocodeia' : 'Fundador de Nocodeia', worksFor: { '@id': `${BASE_URL}/#empresa` } },
      { '@type': 'WebSite', '@id': `${BASE_URL}/#site`, url: `${BASE_URL}/`, name: emp.nome, inLanguage: ['pt-BR', 'en', 'es'], publisher: { '@id': `${BASE_URL}/#empresa` } },
      { '@type': 'WebPage', '@id': `${BASE_URL}${inicio}#pagina`, url: `${BASE_URL}${inicio}`, name: c.meta.titulo, description: c.meta.descricao, inLanguage: L.html, isPartOf: { '@id': `${BASE_URL}/#site` }, about: { '@id': `${BASE_URL}/#empresa` } },
      { '@type': 'FAQPage', '@id': `${BASE_URL}${inicio}#faq`, inLanguage: L.html, mainEntity: c.duvidas.itens.map(q => ({ '@type': 'Question', name: q.pergunta, acceptedAnswer: { '@type': 'Answer', text: q.resposta } })) },
    ],
  };

  const hreflang = Object.entries(IDIOMAS).map(([k, I]) => `<link rel="alternate" hreflang="${I.html}" href="${BASE_URL}${I.base}/">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${BASE_URL}/">`;

  const css = cssArquivo('casca.css') + cssArquivo('estilo.css');

  // Textos usados pelo script da página
  const T = {
    wa: emp.whatsapp, inicio: D.mensagem_inicio, precisa: D.mensagem_precisa, fim: D.mensagem_fim,
    semItens: D.sem_itens, previa: D.previa,
    enviando: E.enviando, botao: E.botao, ok: E.ok, invalido: E.invalido, falhou: E.falhou,
  };

  return `<!doctype html>
<html lang="${L.html}">
<head>
${avisoCookies(l)}
${gtmAdiado()}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.meta.titulo)}</title>
<meta name="description" content="${esc(c.meta.descricao)}">
<link rel="canonical" href="${BASE_URL}${inicio}">
${hreflang}
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" href="/assets/icon.png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<meta name="theme-color" content="#0E0F14">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(emp.nome)}">
<meta property="og:locale" content="${L.og}">
<meta property="og:title" content="${esc(c.meta.titulo)}">
<meta property="og:description" content="${esc(c.meta.descricao)}">
<meta property="og:url" content="${BASE_URL}${inicio}">
<meta property="og:image" content="${BASE_URL}/assets/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="/assets/fontes/space-grotesk.woff2" as="font" type="font/woff2" crossorigin>
<style>${css}</style>
<script type="application/ld+json">
${JSON.stringify(ld)}
</script>
</head>
<body>
${gtmNoscript()}
${pular(l)}
${topo(l, { idiomas: { pt: '/', en: '/en/', es: '/es/' }, naHome: true })}

<main id="conteudo">
<section class="hero">
<div class="wrap">
<h1>${txt(c.hero.titulo)}</h1>
<p class="lead">${txt(c.hero.subtitulo)}</p>
<div class="hero-cta">
<a class="btn btn-main" href="#diagnostico">${esc(c.hero.botao_principal)}</a>
<a class="btn btn-zap" href="${esc(wa(c.hero.mensagem_whatsapp))}" data-wa="hero" target="_blank" rel="noopener">${ICONE_ZAP}${esc(c.hero.botao_whatsapp)}</a>
</div>
<ul class="proof" aria-label="${esc(c.hero.rotulo_provas)}">${provas}</ul>

<div class="trail" id="o-que-fazemos"><span id="servicos"></span>
<div class="trail-head"><h2>${txt(c.servicos.titulo)}</h2><p>${txt(c.servicos.subtitulo)}</p></div>
<div class="steps" role="tablist" aria-label="${esc(c.menu.o_que_fazemos)}">
${abas}
</div>
${paineis}
</div>
</div>
</section>

<section id="casos" class="adiada">
<div class="wrap">
<h2>${txt(c.casos.titulo)}</h2>
<div class="cases">
${linhasCasos}
</div>
${depoimentos}
</div>
</section>

<section id="para-quem" class="adiada">
<div class="wrap">
<h2>${txt(c.para_quem.titulo)}</h2>
<p class="lead" style="margin-top:1rem">${txt(c.para_quem.subtitulo)}</p>
<div class="who-grid" id="setores">
${paraQuem}
</div>
${c.para_quem.itens.length > 6 && c.para_quem.ver_mais ? `<button type="button" class="who-mais" aria-controls="setores" aria-expanded="false" data-mais="${esc(c.para_quem.ver_mais.replace('{n}', c.para_quem.itens.length - 6))}" data-menos="${esc(c.para_quem.ver_menos)}">${esc(c.para_quem.ver_mais.replace('{n}', c.para_quem.itens.length - 6))}</button>` : ''}
${c.para_quem.nota ? `<p class="who-nota">${txt(c.para_quem.nota)} <a href="#diagnostico">${esc(c.para_quem.nota_link || c.menu.botao)} →</a></p>` : ''}
</div>
</section>

<section id="como-funciona" class="adiada">
<div class="wrap">
<h2>${txt(c.como_funciona.titulo)}</h2>
<ol class="process">
${passos}
</ol>
</div>
</section>

<section id="sobre" class="adiada">
<div class="wrap about">
<div><h2>${txt(c.sobre.titulo)}</h2><p class="lead">${txt(c.sobre.texto)}</p></div>
<ul class="facts">
${fatos}
</ul>
</div>
</section>

<section id="duvidas" class="adiada">
<div class="wrap">
<h2>${txt(c.duvidas.titulo)}</h2>
<div class="faq">
${faq}
</div>
</div>
</section>

<section id="diagnostico" style="padding-top:0"><span id="vaga"></span>
<div class="wrap build">
<h2>${txt(D.titulo)}</h2>
<p class="lead">${txt(D.subtitulo)}</p>
<form id="montar">
<fieldset>
<legend>${esc(D.pergunta)}</legend>
<div class="chips">
${opcoes}
</div>
</fieldset>
<a class="btn btn-main" id="enviar" href="${esc(wa(msgDiag))}" data-wa="diagnostico" target="_blank" rel="noopener">${esc(D.botao)}</a>
<output id="resumo" aria-live="polite">${esc(D.sem_itens)}</output>
</form>
<form class="por-email" id="por-email" novalidate>
<h3>${esc(E.titulo)}</h3>
<p>${esc(E.texto)}</p>
<div class="linha-email">
<label class="armadilha" aria-hidden="true">Website<input type="text" name="website_url" tabindex="-1" autocomplete="off"></label>
<label for="email-lead" class="armadilha">${esc(E.rotulo)}</label>
<input id="email-lead" type="email" name="email" autocomplete="email" inputmode="email" required placeholder="${esc(E.exemplo)}" aria-label="${esc(E.rotulo)}">
<button class="btn btn-main" type="submit">${esc(E.botao)}</button>
</div>
<p class="retorno" id="retorno-email" role="status" aria-live="polite"></p>
<p class="aviso">${esc(E.privacidade)} <a href="${esc(c.rodape.privacidade_url)}">${esc(E.privacidade_link)}</a>.</p>
</form>
</div>
</section>
</main>

${rodape(l)}

${zapFlutuante(l)}

<script>
(function(){
var T=${JSON.stringify(T)},dl=function(o){window.dataLayer=window.dataLayer||[];window.dataLayer.push(o);};
/* abas dos serviços: clique, setas do teclado e endereço (#automacao abre a aba Automação) */
var tabs=[].slice.call(document.querySelectorAll('.step'));
function pick(t,foco){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on;});if(foco)t.focus();}
tabs.forEach(function(t,i){
t.addEventListener('click',function(){pick(t);var id=t.id.slice(4);dl({event:'servico_aba',servico:id});if(history.replaceState)history.replaceState(null,'','#'+id);});
t.addEventListener('keydown',function(e){var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(d){e.preventDefault();pick(tabs[(i+d+tabs.length)%tabs.length],true);}});
});
function porEndereco(suave){var id=decodeURIComponent(location.hash.slice(1));var t=id&&document.getElementById('aba-'+id);if(t){pick(t);document.getElementById('o-que-fazemos').scrollIntoView({behavior:suave?'smooth':'instant'});}}
porEndereco(false);window.addEventListener('hashchange',function(){porEndereco(true);});
/* setores: no celular mostra 6 e abre o resto */
var bm=document.querySelector('.who-mais');if(bm)bm.addEventListener('click',function(){var g=document.getElementById('setores'),ab=g.classList.toggle('aberto');bm.setAttribute('aria-expanded',ab);bm.textContent=ab?bm.dataset.menos:bm.dataset.mais;});
/* WhatsApp: mensagem montada com o que o cliente marcou */
var f=document.getElementById('montar'),out=document.getElementById('resumo'),link=document.getElementById('enviar');
function itens(){return [].slice.call(f.querySelectorAll('input:checked')).map(function(i){return i.value});}
f.addEventListener('change',function(e){if(e.target.type==='checkbox')e.target.parentNode.classList.toggle('marcado',e.target.checked);var v=itens();var msg=T.inicio+(v.length?' '+T.precisa+' '+v.join(', '):'')+'. '+T.fim;link.href='https://wa.me/'+T.wa+'?text='+encodeURIComponent(msg);out.textContent=v.length?T.previa+' "'+msg+'"':T.semItens;});
f.addEventListener('submit',function(e){e.preventDefault();});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-wa]');if(a)dl({event:'whatsapp_click',wa_origem:a.getAttribute('data-wa'),wa_itens:a.id==='enviar'?itens().length:undefined});
var m=document.querySelector('.burger[open]');if(m&&(!m.contains(e.target)||e.target.closest('.painel a')))m.removeAttribute('open');});
/* e-mail: grava no Proacta CRM pela função /api/lead; generate_lead só depois da confirmação */
var fe=document.getElementById('por-email'),ret=document.getElementById('retorno-email'),bt=fe.querySelector('button'),ocupado=0;
fe.addEventListener('submit',function(e){e.preventDefault();if(ocupado)return;
var email=String(fe.elements.email.value||'').trim();
if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)){ret.dataset.tipo='erro';ret.textContent=T.invalido;fe.elements.email.focus();return;}
ocupado=1;bt.disabled=true;bt.textContent=T.enviando;ret.textContent='';
var q=new URLSearchParams(location.search),utm={};['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(function(k){if(q.get(k))utm[k]=q.get(k);});
var ctrl=window.AbortController?new AbortController():null,tm=setTimeout(function(){if(ctrl)ctrl.abort();},10000);
fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},signal:ctrl?ctrl.signal:undefined,body:JSON.stringify({email:email,website_url:fe.elements.website_url.value,lead_source:'form_diagnostico',origem_form:'diagnostico',interesses:itens(),idioma:document.documentElement.lang,pagina:location.href,referrer:document.referrer||'',utm:utm})})
.then(function(r){return r.ok;}).catch(function(){return false;}).then(function(ok){clearTimeout(tm);ocupado=0;bt.disabled=false;bt.textContent=T.botao;
if(ok){dl({event:'generate_lead',lead_source:'form_diagnostico'});ret.dataset.tipo='ok';ret.textContent=T.ok;fe.reset();}
else{ret.dataset.tipo='erro';ret.textContent=T.falhou+' ';var a=document.createElement('a');a.href='https://wa.me/'+T.wa+'?text='+encodeURIComponent(T.inicio+'. '+T.fim+' '+email);a.textContent='WhatsApp';a.target='_blank';a.rel='noopener';a.setAttribute('data-wa','email-falhou');ret.appendChild(a);}});
});
})();
</script>
</body>
</html>
`;
}

// ---------- execução ----------
const emp = ler('empresa.yml');
const disponiveis = Object.keys(IDIOMAS).filter(l => existsSync(join(AQUI, 'conteudo', `${l}.yml`)));
const saidas = [];
for (const l of disponiveis) {
  const c = ler(`${l}.yml`);
  exigir(c, ['meta.titulo', 'meta.descricao', 'hero.titulo', 'hero.subtitulo', 'hero.provas', 'servicos.itens', 'casos.itens', 'para_quem.itens', 'como_funciona.passos', 'sobre.texto', 'duvidas.itens', 'diagnostico.opcoes', 'diagnostico.email.botao', 'rodape.local'], l);
  const ids = (c.servicos?.itens || []).map(s => s.id);
  for (const id of ids) if (!/^[a-z0-9-]+$/.test(id || '')) erros.push(`${l}.yml: id de serviço inválido "${id}" (use só letras minúsculas, números e hífen)`);
  if (new Set(ids).size !== ids.length) erros.push(`${l}.yml: ids de serviço repetidos`);
  if (erros.length) continue;
  const html = pagina(l, c, emp, disponiveis);
  const semScripts = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const h1 = (semScripts.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) erros.push(`${l}: ${h1} <h1> na página (precisa ser 1)`);
  const sobra = semScripts.replace(/<[^>]*>/g, ' ').match(/\{\w+\}/);
  if (sobra) erros.push(`${l}: marcador ${sobra[0]} sem valor`);
  const kb = Buffer.byteLength(html) / 1024;
  if (kb > LIMITE_KB) erros.push(`${l}: HTML com ${kb.toFixed(0)} KB (limite ${LIMITE_KB} KB)`);
  saidas.push([join(IDIOMAS[l].base.slice(1), 'index.html'), html, kb]);
}
if (erros.length) { for (const e of erros) console.error('  ERRO:', e); console.error(`\n${erros.length} erro(s). Nada foi gravado.`); process.exit(1); }
for (const [rel, html, kb] of saidas) {
  if (!SO_CONFERIR) { const f = join(SAIDA, rel); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, html); }
  console.log(`${SO_CONFERIR ? 'ok' : 'gravado'}: ${rel} (${kb.toFixed(1)} KB)`);
}
if (!emp.cnpj || !emp.razao_social) console.log('  aviso: CNPJ e razão social ainda vazios em _home/conteudo/empresa.yml (rodapé e taxID ficam de fora)');
console.log(`  artigos do blog contados: ${MARCADORES.artigos}`);
