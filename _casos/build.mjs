#!/usr/bin/env node
// Gera as páginas de case (PT/EN/ES) a partir de _casos/<case>/meta.json + pt.md/en.md/es.md,
// e a lista de casos de cada idioma. Topo, rodapé e visual vêm do casco comum (_home/casca.mjs), o mesmo da home.
//
// Uso (na pasta site/_casos):  node build.mjs [--check]
// Depende do "marked" em ../_blog/node_modules e do "yaml" em ../_home ou ../_blog (rode `npm install` em _blog antes).

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { pagina, servico, chamada, esc, BASE_URL as BASE, IDIOMAS as CASCA } from '../_home/casca.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const SITE = join(AQUI, '..');
const require = createRequire(join(SITE, '_blog', 'package.json'));
const { marked } = require('marked');
const CHECK = process.argv.includes('--check');

const IDIOMAS = {
  pt: { lang: 'pt-BR', pasta: 'casos', inicio: '/', volta: '← Todos os casos', titulo: 'Casos de clientes', subtitulo: 'Projetos da Nocodeia funcionando em empresas de verdade: o problema, o que foi feito e os números.', descricao: 'Casos de clientes da Nocodeia: agentes de IA, automação e sites no ar em empresas de verdade, com o problema, a solução e os resultados medidos.', ver: 'Ver case', casos: 'Casos', home: 'Início', meta: 'Case de cliente', atualizado: 'Atualizado em', faq: 'Perguntas frequentes', autor: 'Alexandre, fundador da Nocodeia', autorBio: 'Mais de 25 anos em tecnologia, em empresas como IBM, Xerox, DHL e Bosch. Hoje coloca produtos no ar com no-code e IA em semanas.', mes: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'], data: (d, m, a, M) => `${d} de ${M[m]} de ${a}` },
  en: { lang: 'en', pasta: 'en/cases', inicio: '/en/', volta: '← All cases', titulo: 'Client case studies', subtitulo: 'Nocodeia projects running in real businesses: the problem, what we built and the numbers.', descricao: 'Nocodeia client case studies: AI agents, automation and websites live in real businesses, with the problem, the solution and the measured results.', ver: 'Read case', casos: 'Cases', home: 'Home', meta: 'Client case', atualizado: 'Updated', faq: 'FAQ', autor: 'Alexandre, founder of Nocodeia', autorBio: '25+ years in tech at companies like IBM, Xerox, DHL and Bosch. Today he ships products with no-code and AI in weeks.', mes: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], data: (d, m, a, M) => `${M[m]} ${d}, ${a}` },
  es: { lang: 'es', pasta: 'es/casos', inicio: '/es/', volta: '← Todos los casos', titulo: 'Casos de clientes', subtitulo: 'Proyectos de Nocodeia funcionando en empresas reales: el problema, lo que se hizo y los números.', descricao: 'Casos de clientes de Nocodeia: agentes de IA, automatización y sitios funcionando en empresas reales, con el problema, la solución y los resultados.', ver: 'Ver caso', casos: 'Casos', home: 'Inicio', meta: 'Caso de cliente', atualizado: 'Actualizado el', faq: 'Preguntas frecuentes', autor: 'Alexandre, fundador de Nocodeia', autorBio: 'Más de 25 años en tecnología, en empresas como IBM, Xerox, DHL y Bosch. Hoy lanza productos con no-code e IA en semanas.', mes: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'], data: (d, m, a, M) => `${d} de ${M[m]} de ${a}` },
};

const semTags = s => s.replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'").trim();
const slugify = s => semTags(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const urlIndice = l => `/${IDIOMAS[l].pasta}/`;

let total = 0;
const indice = { pt: [], en: [], es: [] };
for (const nomeCaso of readdirSync(AQUI, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name)) {
  const pastaCaso = join(AQUI, nomeCaso);
  const meta = JSON.parse(readFileSync(join(pastaCaso, 'meta.json'), 'utf8'));
  const disponiveis = Object.keys(IDIOMAS).filter(l => meta[l] && existsSync(join(pastaCaso, `${l}.md`)));
  const rel = l => `/${IDIOMAS[l].pasta}/${meta[l].slug}/`;
  const url = l => `${BASE}${rel(l)}`;
  if (!servico('pt', meta.service)) throw new Error(`${nomeCaso}: "service" desconhecido: ${meta.service} (use site, agentes, automacao ou sistemas)`);

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
    const s = servico(l, meta.service);

    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article', '@id': `${url(l)}#case`, headline: m.title, description: m.description, inLanguage: cfg.lang,
          datePublished: meta.date, dateModified: meta.updated, url: url(l), mainEntityOfPage: url(l), image: `${BASE}/assets/og-image.png`,
          articleSection: s.nome,
          author: { '@type': 'Person', '@id': `${BASE}/#fundador`, name: 'Alexandre Fornes', url: `${BASE}/#sobre` },
          publisher: { '@id': `${BASE}/#empresa` },
          about: { '@type': 'Organization', name: meta.cliente, ...(meta.cliente_url ? { url: meta.cliente_url } : {}) },
        },
        {
          '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: cfg.home, item: `${BASE}${cfg.inicio}` },
            { '@type': 'ListItem', position: 2, name: cfg.casos, item: `${BASE}${urlIndice(l)}` },
            { '@type': 'ListItem', position: 3, name: m.title, item: url(l) },
          ],
        },
      ],
    };
    if (faq.length) ld['@graph'].push({ '@type': 'FAQPage', '@id': `${url(l)}#faq`, inLanguage: cfg.lang, mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.r } })) });

    const alternativos = Object.fromEntries(disponiveis.map(x => [x, rel(x)]));
    const idiomas = Object.fromEntries(Object.keys(IDIOMAS).map(x => [x, alternativos[x] || urlIndice(x)]));

    const html = pagina({
      l, titulo: `${m.title} | Nocodeia`, descricao: m.description, canonico: rel(l), alternativos, idiomas,
      imagem: '/assets/og-image.png', tipoOg: 'article', ld, atual: 'casos',
      corpo: `<div class="wrap"><article>
<div class="trilha"><a class="volta" href="${urlIndice(l)}">${cfg.volta}</a><a class="tag" href="${CASCA[l].base}/#${s.id}">${esc(s.nome)}</a></div>
<h1>${esc(m.title)}</h1>
<p class="resumo">${esc(m.description)}</p>
<div class="meta"><span>${cfg.meta}: ${esc(meta.cliente)}</span><span aria-hidden="true">·</span><span>${cfg.atualizado} <time datetime="${meta.updated}">${dataTexto}</time></span></div>
<div class="conteudo">
${corpo}
</div>
${chamada(l, meta.service, 'case')}
<div class="autor"><img src="/assets/icon.webp" alt="" width="48" height="48"><p><strong>${cfg.autor}</strong><br>${cfg.autorBio}</p></div>
</article></div>`,
    });

    if (!CHECK) {
      const destino = join(SITE, cfg.pasta, m.slug);
      mkdirSync(destino, { recursive: true });
      writeFileSync(join(destino, 'index.html'), html);
    }
    indice[l].push({ meta, m, url: rel(l), s });
    total++;
    console.log(`${CHECK ? 'ok (check)' : 'gerado'}: ${rel(l)} · ${faq.length} perguntas no FAQ`);
  }
}

// Página-lista de casos em cada idioma.
const idiomasComCaso = Object.keys(IDIOMAS).filter(l => indice[l].length);
for (const l of idiomasComCaso) {
  const cfg = IDIOMAS[l];
  const itens = indice[l].sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  const cartoes = itens.map(({ meta, m, url, s }) => {
    const d = m.destaque;
    const faixa = d ? `<div class="faixa"><strong>${esc(d.numero)}</strong><span>${esc(d.texto)}</span></div>` : `<div class="faixa"><strong>${esc(meta.cliente)}</strong></div>`;
    return `<div class="cartao" data-cat="${s.id}">${faixa}<div class="corpo"><div class="linha"><span class="tag">${esc(s.nome)}</span><span class="cliente">${esc(meta.cliente)}</span></div><h2><a href="${url}">${esc(m.title)}</a></h2><p>${esc(m.description)}</p><span class="mais" aria-hidden="true">${cfg.ver} →</span></div></div>`;
  }).join('\n');
  const ld = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${BASE}${urlIndice(l)}#casos`, name: cfg.titulo, description: cfg.descricao,
    inLanguage: cfg.lang, url: `${BASE}${urlIndice(l)}`, publisher: { '@id': `${BASE}/#empresa` },
    hasPart: itens.map(({ m, url }) => ({ '@type': 'Article', headline: m.title, url: `${BASE}${url}` })),
  };
  const alternativos = Object.fromEntries(idiomasComCaso.map(x => [x, urlIndice(x)]));
  const html = pagina({
    l, titulo: `${cfg.titulo} | Nocodeia`, descricao: cfg.descricao, canonico: urlIndice(l), alternativos,
    idiomas: Object.fromEntries(Object.keys(IDIOMAS).map(x => [x, urlIndice(x)])),
    imagem: '/assets/og-image.png', tipoOg: 'website', ld, atual: 'casos',
    corpo: `<div class="wrap">
<div class="cabeca"><h1>${esc(cfg.titulo)}</h1><p>${esc(cfg.subtitulo)}</p></div>
<div class="grade">
${cartoes}
</div>
</div>`,
  });
  if (!CHECK) { mkdirSync(join(SITE, cfg.pasta), { recursive: true }); writeFileSync(join(SITE, cfg.pasta, 'index.html'), html); }
  console.log(`${CHECK ? 'ok (check)' : 'gerado'}: ${urlIndice(l)} · ${itens.length} caso(s)`);
}
console.log(`ok: ${total} página(s) de case e ${idiomasComCaso.length} lista(s) de casos.`);
