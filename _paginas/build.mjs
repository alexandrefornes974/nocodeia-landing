#!/usr/bin/env node
// Gera as páginas avulsas com o casco comum (_home/casca.mjs), nos três idiomas:
//   - calculadora de WhatsApp: /calculadora-whatsapp/, /en/whatsapp-cost-calculator/, /es/calculadora-whatsapp/
//   - política de privacidade: /privacidade/, /en/privacy/, /es/privacidad/
//   - página de erro: /404.html, /en/404.html, /es/404.html (o Cloudflare Pages usa o 404.html mais próximo da pasta)
// O conteúdo fica em _paginas/<página>/<idioma>.html; este script só monta a página em volta.
//
// Uso (na pasta site):  node _paginas/build.mjs [--check]

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { pagina, chamada, esc, empresa, textos, BASE_URL, IDIOMAS } from '../_home/casca.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const SITE = join(AQUI, '..');
const CHECK = process.argv.includes('--check');
const Calc = createRequire(import.meta.url)(join(SITE, 'calculadora-whatsapp', 'calculadora.js'));
const LS = ['pt', 'en', 'es'];
const frag = (p, l) => readFileSync(join(AQUI, p, `${l}.html`), 'utf8');
const gravados = [];
function gravar(rel, html) {
  const h1 = (html.replace(/<script[\s\S]*?<\/script>/g, '').match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) throw new Error(`${rel}: ${h1} <h1> (precisa ser 1)`);
  if (!CHECK) { const f = join(SITE, rel); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, html); }
  gravados.push(rel);
  console.log(`${CHECK ? 'ok (check)' : 'gravado'}: ${rel} (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`);
}
const inicio = l => `${IDIOMAS[l].base}/`;
const breadcrumb = (l, nome, url) => ({ '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: { pt: 'Início', en: 'Home', es: 'Inicio' }[l], item: `${BASE_URL}${inicio(l)}` },
  { '@type': 'ListItem', position: 2, name: nome, item: `${BASE_URL}${url}` },
] });

// ---------- calculadora ----------
const CALC = {
  pt: {
    url: '/calculadora-whatsapp/', h1: 'Calculadora de mensagens do WhatsApp (API oficial)',
    titulo: 'Calculadora de mensagens do WhatsApp | Nocodeia',
    descricao: 'Calcule quanto a Meta cobra por mensagem na API oficial do WhatsApp, com as tarifas do Brasil, e veja quanto o chat do site evita dessa tarifa.',
    volta: ['/blog/como-criar-um-agente-de-ia-para-whatsapp/', '← Voltar ao post: como criar um agente de IA para WhatsApp'],
    so: 'Qualquer (navegador)', requer: 'Requer JavaScript para recalcular',
  },
  en: {
    url: '/en/whatsapp-cost-calculator/', h1: 'WhatsApp message cost calculator (official API)',
    titulo: 'WhatsApp Message Cost Calculator | Nocodeia',
    descricao: 'Estimate what Meta charges per message on the official WhatsApp API using its Brazil rates, and see how much a website chat avoids in message fees.',
    volta: ['/en/blog/how-to-create-an-ai-agent-for-whatsapp/', '← Back to the article: how to create an AI agent for WhatsApp'],
    so: 'Any (web browser)', requer: 'Requires JavaScript to recalculate',
  },
  es: {
    url: '/es/calculadora-whatsapp/', h1: 'Calculadora de mensajes de WhatsApp (API oficial)',
    titulo: 'Calculadora de mensajes de WhatsApp | Nocodeia',
    descricao: 'Calcula cuánto cobra Meta por mensaje en la API oficial de WhatsApp con las tarifas de Brasil y mira cuánto evita el chat del sitio en esa tarifa.',
    volta: ['/es/blog/crear-agente-de-ia-para-whatsapp/', '← Volver al artículo: cómo crear un agente de IA para WhatsApp'],
    so: 'Cualquiera (navegador)', requer: 'Requiere JavaScript para recalcular',
  },
};
const altCalc = Object.fromEntries(LS.map(l => [l, CALC[l].url]));
const exemplo = l => Calc.renderResultado(Calc.calcular(Calc.EXEMPLO), l);
for (const l of LS) {
  const C = CALC[l];
  let corpo = frag('calculadora', l).replace('<!--nc-pre--><!--/nc-pre-->', `<!--nc-pre-->${exemplo(l)}<!--/nc-pre-->`);
  if (!corpo.includes('R$')) throw new Error(`calculadora/${l}: resultado do exemplo não entrou`);
  const ld = { '@context': 'https://schema.org', '@graph': [
    {
      '@type': 'WebApplication', '@id': `${BASE_URL}${C.url}#app`, name: C.h1, description: C.descricao, url: `${BASE_URL}${C.url}`,
      inLanguage: IDIOMAS[l].html, applicationCategory: 'BusinessApplication', operatingSystem: C.so, browserRequirements: C.requer,
      isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
      publisher: { '@type': 'Organization', '@id': `${BASE_URL}/#empresa`, name: 'Nocodeia', logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/icon.png` } },
    },
    breadcrumb(l, C.h1, C.url),
  ] };
  gravar(join(C.url.slice(1), 'index.html'), pagina({
    l, titulo: C.titulo, descricao: C.descricao, canonico: C.url, alternativos: altCalc, idiomas: altCalc,
    imagem: '/assets/og-image.png', tipoOg: 'website', ld,
    preload: '<link rel="stylesheet" href="/calculadora-whatsapp/calculadora.css">\n',
    corpo: `<div class="wrap pagina-larga">
<div class="trilha"><a class="volta" href="${C.volta[0]}">${esc(C.volta[1])}</a></div>
<h1>${esc(C.h1)}</h1>
${corpo}
${chamada(l, 'agentes', 'calculadora')}
</div>`,
    scriptExtra: '\n<script src="/calculadora-whatsapp/calculadora.js" defer></script>',
  }));
}

// ---------- privacidade ----------
const PRIV = {
  pt: { url: '/privacidade/', titulo: 'Política de Privacidade | Nocodeia', volta: '← Voltar ao início', descricao: 'Política de Privacidade da Nocodeia e do aplicativo interno Carol CEO: quais dados do Google acessamos, como usamos, onde processamos e como revogar.' },
  en: { url: '/en/privacy/', titulo: 'Privacy Policy | Nocodeia', volta: '← Back to home', descricao: 'How nocodeiaww.com handles visitor data: contact form, cookies, Google Analytics, Microsoft Clarity, Better Stack, Meta Pixel and LinkedIn Insight Tag.' },
  es: { url: '/es/privacidad/', titulo: 'Política de Privacidad | Nocodeia', volta: '← Volver al inicio', descricao: 'Cómo nocodeiaww.com trata los datos de visitantes: formulario, cookies, Google Analytics, Microsoft Clarity, Better Stack, Meta Pixel y LinkedIn Insight Tag.' },
};
const altPriv = Object.fromEntries(LS.map(l => [l, PRIV[l].url]));
for (const l of LS) {
  const P = PRIV[l];
  const ld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${BASE_URL}${P.url}#pagina`, url: `${BASE_URL}${P.url}`, name: P.titulo.replace(' | Nocodeia', ''), description: P.descricao, inLanguage: IDIOMAS[l].html, isPartOf: { '@id': `${BASE_URL}/#site` }, publisher: { '@id': `${BASE_URL}/#empresa` } },
    breadcrumb(l, P.titulo.replace(' | Nocodeia', ''), P.url),
  ] };
  gravar(join(P.url.slice(1), 'index.html'), pagina({
    l, titulo: P.titulo, descricao: P.descricao, canonico: P.url, alternativos: altPriv, idiomas: altPriv,
    imagem: '/assets/og-image.png', tipoOg: 'website', ld,
    corpo: `<div class="wrap"><article>
<div class="trilha"><a class="volta" href="${inicio(l)}">${esc(P.volta)}</a></div>
${frag('privacidade', l)}</article></div>`,
  }));
}

// ---------- 404 ----------
const E404 = {
  pt: { titulo: 'Página não encontrada | Nocodeia', h1: 'Página não encontrada', texto: 'O endereço que você abriu não existe ou mudou de lugar. Estes caminhos levam ao que a maioria procura:', inicio: 'Ir para o início', blog: 'Ver o blog', casos: 'Ver os casos', calc: 'Calculadora de WhatsApp', blogUrl: '/blog/', calcUrl: CALC.pt.url },
  en: { titulo: 'Page not found | Nocodeia', h1: 'Page not found', texto: 'The address you opened doesn\'t exist or has moved. These links lead to what most people look for:', inicio: 'Go to the home page', blog: 'Read the blog', casos: 'See the case studies', calc: 'WhatsApp cost calculator', blogUrl: '/en/blog/', calcUrl: CALC.en.url },
  es: { titulo: 'Página no encontrada | Nocodeia', h1: 'Página no encontrada', texto: 'La dirección que abriste no existe o cambió de lugar. Estos enlaces llevan a lo que la mayoría busca:', inicio: 'Ir al inicio', blog: 'Ver el blog', casos: 'Ver los casos', calc: 'Calculadora de WhatsApp', blogUrl: '/es/blog/', calcUrl: CALC.es.url },
};
const CASOS = { pt: '/casos/', en: '/en/cases/', es: '/es/casos/' };
for (const l of LS) {
  const E = E404[l], c = textos(l);
  gravar(join(IDIOMAS[l].base.slice(1), '404.html'), pagina({
    l, titulo: E.titulo, descricao: E.texto, noindex: true, alternativos: {}, idiomas: { pt: '/', en: '/en/', es: '/es/' },
    imagem: '/assets/og-image.png', tipoOg: 'website', ld: null,
    corpo: `<div class="wrap"><div class="erro404">
<p class="codigo">404</p>
<h1>${esc(E.h1)}</h1>
<p>${esc(E.texto)}</p>
<div class="acoes"><a class="btn btn-main" href="${inicio(l)}">${esc(E.inicio)}</a><a class="btn btn-zap" href="${E.blogUrl}">${esc(E.blog)}</a><a class="btn btn-zap" href="${CASOS[l]}">${esc(E.casos)}</a><a class="btn btn-zap" href="${E.calcUrl}">${esc(E.calc)}</a></div>
<p class="contato">${esc(c.rodape.local)} · <!--email_off--><a href="mailto:${esc(empresa().email)}">${esc(empresa().email)}</a><!--/email_off--></p>
</div></div>`,
  }));
}
console.log(`ok: ${gravados.length} páginas.`);
