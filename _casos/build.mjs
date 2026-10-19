#!/usr/bin/env node
// Gera as páginas de case (PT/EN/ES) a partir de _casos/<case>/meta.json + pt.md/en.md/es.md.
// Usa como molde a página de um post já gerado pelo blog (menu, rodapé, aviso de cookies e GTM iguais).
//
// Uso (na pasta site/_casos):  node build.mjs [--check]
// Depende do "marked" instalado em ../_blog/node_modules (rode `npm ci` em _blog antes).

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const AQUI = dirname(fileURLToPath(import.meta.url));
const SITE = join(AQUI, '..');
const require = createRequire(join(SITE, '_blog', 'package.json'));
const { marked } = require('marked');
const CHECK = process.argv.includes('--check');
const BASE = 'https://nocodeiaww.com';

// Molde: um post já publicado em cada idioma (só o "casco" da página é aproveitado).
const IDIOMAS = {
  pt: { lang: 'pt-BR', pasta: 'casos', molde: 'blog/quanto-custa-um-agente-de-ia/index.html', inicio: '/', volta: '← Projetos', casos: 'Casos', home: 'Início', meta: 'Case de cliente', atualizado: 'Atualizado em', faq: 'Perguntas frequentes', mes: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'], data: (d, m, a, M) => `${d} de ${M[m]} de ${a}` },
  en: { lang: 'en', pasta: 'en/cases', molde: 'en/blog/how-much-does-an-ai-agent-cost/index.html', inicio: '/en/', volta: '← Projects', casos: 'Cases', home: 'Home', meta: 'Client case', atualizado: 'Updated', faq: 'FAQ', mes: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], data: (d, m, a, M) => `${M[m]} ${d}, ${a}` },
  es: { lang: 'es', pasta: 'es/casos', molde: 'es/blog/cuanto-cuesta-un-agente-de-ia/index.html', inicio: '/es/', volta: '← Proyectos', casos: 'Casos', home: 'Inicio', meta: 'Caso de cliente', atualizado: 'Actualizado el', faq: 'Preguntas frecuentes', mes: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'], data: (d, m, a, M) => `${d} de ${M[m]} de ${a}` },
};

const ESTILO = `<style>
.numeros{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:8px 0 36px}
.numeros div{background:var(--sup);border:1px solid var(--borda);border-radius:14px;padding:16px;display:flex;flex-direction:column;gap:6px}
.numeros strong{font-family:'Space Grotesk',Inter,sans-serif;font-size:26px;line-height:1.1;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.numeros span{font-size:14px;line-height:1.4;color:var(--suave)}
.fluxo{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:8px 0 28px;font-size:14px}
.fluxo span{padding:8px 12px;border:1px solid #343843;border-radius:10px;background:var(--sup)}
.fluxo span.destaque{background:var(--grad);border-color:transparent;font-weight:600}
.fluxo b{color:#6B7080;font-weight:400}
</style>`;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const semTags = s => s.replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'").trim();
const slugify = s => semTags(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function trocar(html, re, novo, nome) {
  if (!re.test(html)) throw new Error(`molde sem ${nome}`);
  return html.replace(re, novo);
}

let total = 0;
for (const nomeCaso of readdirSync(AQUI, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)) {
  const pastaCaso = join(AQUI, nomeCaso);
  const meta = JSON.parse(readFileSync(join(pastaCaso, 'meta.json'), 'utf8'));
  const disponiveis = Object.keys(IDIOMAS).filter(l => meta[l] && existsSync(join(pastaCaso, `${l}.md`)));
  const url = l => `${BASE}/${IDIOMAS[l].pasta}/${meta[l].slug}/`;
  const rel = l => `/${IDIOMAS[l].pasta}/${meta[l].slug}/`;

  for (const l of disponiveis) {
    const cfg = IDIOMAS[l];
    const m = meta[l];
    for (const campo of ['slug', 'title', 'description']) if (!m[campo]) throw new Error(`${nomeCaso}/${l}: falta ${campo}`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(m.slug)) throw new Error(`${nomeCaso}/${l}: slug inválido`);
    if (m.title.length > 60) console.warn(`aviso: ${nomeCaso}/${l} título com ${m.title.length} caracteres`);
    if (m.description.length < 140 || m.description.length > 155) console.warn(`aviso: ${nomeCaso}/${l} descrição com ${m.description.length} caracteres`);

    // Markdown → HTML, com id nos títulos.
    let corpo = marked.parse(readFileSync(join(pastaCaso, `${l}.md`), 'utf8'));
    corpo = corpo.replace(/<h([23])>(.*?)<\/h\1>/g, (_, n, t) => `<h${n} id="${slugify(t)}">${t}</h${n}>`);
    corpo = corpo.replace(/<a href="(https?:\/\/[^"]+)">/g, '<a href="$1" target="_blank" rel="noopener">');

    // Perguntas frequentes para os dados estruturados.
    const faq = [];
    const blocoFaq = corpo.split(/<h2[^>]*>/).find(b => b.startsWith(cfg.faq));
    if (blocoFaq) for (const [, q, r] of blocoFaq.matchAll(/<h3[^>]*>(.*?)<\/h3>\s*<p>(.*?)<\/p>/gs)) faq.push({ q: semTags(q), r: semTags(r) });

    const [a, mm, d] = meta.updated.split('-').map(Number);
    const dataTexto = cfg.data(d, mm - 1, a, cfg.mes);

    const molde = readFileSync(join(SITE, cfg.molde), 'utf8');
    const chamada = molde.match(/<aside class="chamada">[\s\S]*?<\/aside>/)[0];
    const autor = molde.match(/<div class="autor">[\s\S]*?<\/div>/)[0];

    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article', '@id': `${url(l)}#case`, headline: m.title, description: m.description, inLanguage: cfg.lang,
          datePublished: meta.date, dateModified: meta.updated, url: url(l), mainEntityOfPage: url(l), image: `${BASE}/assets/og-image.png`,
          author: { '@type': 'Person', '@id': `${BASE}/#fundador`, name: 'Alexandre Fornes', url: `${BASE}/#sobre`, sameAs: ['https://www.linkedin.com/in/alexandredefornes/'] },
          publisher: { '@id': `${BASE}/#empresa` },
          about: { '@type': 'Organization', name: meta.cliente, url: meta.cliente_url },
        },
        {
          '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: cfg.home, item: `${BASE}${cfg.inicio}` },
            { '@type': 'ListItem', position: 2, name: cfg.casos, item: `${BASE}${cfg.inicio}#projetos` },
            { '@type': 'ListItem', position: 3, name: m.title, item: url(l) },
          ],
        },
      ],
    };
    if (faq.length) ld['@graph'].push({ '@type': 'FAQPage', '@id': `${url(l)}#faq`, inLanguage: cfg.lang, mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.r } })) });

    const alternativos = disponiveis.map(x => `<link rel="alternate" hreflang="${IDIOMAS[x].lang}" href="${url(x)}">`).join('\n')
      + `\n<link rel="alternate" hreflang="x-default" href="${url(disponiveis.includes('pt') ? 'pt' : l)}">`;
    const idiomas = `<div class="idiomas" role="group" aria-label="${l === 'pt' ? 'Idioma' : l === 'en' ? 'Language' : 'Idioma'}">`
      + ['pt', 'en', 'es'].filter(x => disponiveis.includes(x)).map(x => `<a href="${rel(x)}" hreflang="${IDIOMAS[x].lang}"${x === l ? ' aria-current="page"' : ''}>${x.toUpperCase()}</a>`).join('') + '</div>';

    const main = `<main>
${ESTILO}
<article>
<a class="volta" href="${cfg.inicio}#projetos">${cfg.volta}</a>
<h1>${esc(m.title)}</h1>
<p class="resumo">${esc(m.description)}</p>
<div class="meta"><span>${cfg.meta}: ${esc(meta.cliente)}</span><span>·</span><span>${cfg.atualizado} <time datetime="${meta.updated}">${dataTexto}</time></span></div>
<div class="conteudo">
${corpo}
</div>
${chamada}
${autor}
</article>
</main>`;

    let html = molde;
    html = trocar(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)} | Nocodeia</title>`, 'title');
    html = trocar(html, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(m.description)}">`, 'description');
    html = trocar(html, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url(l)}">`, 'canonical');
    html = trocar(html, /(<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?)+/, alternativos + '\n', 'hreflang');
    html = trocar(html, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(m.title)} | Nocodeia">`, 'og:title');
    html = trocar(html, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(m.description)}">`, 'og:description');
    html = trocar(html, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url(l)}">`, 'og:url');
    html = trocar(html, /<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${BASE}/assets/og-image.png">`, 'og:image');
    html = trocar(html, /<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n${JSON.stringify(ld, null, 1)}\n</script>`, 'json-ld');
    html = trocar(html, /<div class="idiomas"[\s\S]*?<\/div>/, idiomas, 'idiomas');
    html = html.replace(/(<a class="item" [^>]*?) aria-current="page"/g, '$1');
    html = trocar(html, /<main>[\s\S]*<\/main>/, main, 'main');

    if (!CHECK) {
      const destino = join(SITE, cfg.pasta, m.slug);
      mkdirSync(destino, { recursive: true });
      writeFileSync(join(destino, 'index.html'), html);
    }
    total++;
    console.log(`${CHECK ? 'ok (check)' : 'gerado'}: ${rel(l)} · ${faq.length} perguntas no FAQ`);
  }
}
console.log(`ok: ${total} página(s) de case.`);
