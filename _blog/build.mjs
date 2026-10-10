// Gera o blog estático (PT/EN/ES) a partir de _blog/posts/.
// Uso: node build.mjs [--check]
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, rmSync, copyFileSync, statSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';
import { avisoCookies } from './aviso-cookies.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const SITE = join(AQUI, '..');
const POSTS = join(AQUI, 'posts');
const BASE_URL = 'https://nocodeiaww.com';
const SO_CONFERIR = process.argv.includes('--check');

const IDIOMAS = {
  pt: {
    base: '', html: 'pt-BR', og: 'pt_BR', locale: 'pt-BR',
    blog: 'Blog', blogTitulo: 'Blog da Nocodeia',
    blogDescricao: 'Automação, agentes de IA, no-code e sites que o Google e a IA recomendam — explicado sem jargão, com exemplos do dia a dia de empresa.',
    inicio: 'Início', servicos: 'Serviços', cta: 'Garantir vaga', leitura: 'min de leitura', por: 'Por',
    atualizado: 'Atualizado em', voltar: '← Todos os posts', semPosts: 'Os primeiros posts chegam em breve.',
    faq: ['perguntas frequentes', 'faq'], rodape: 'Feito com no-code, claro.',
    ctaTitulo: 'Quer isso funcionando na sua empresa?', ctaBotao: 'Quero meu diagnóstico grátis',
    ctaNota: 'Diagnóstico grátis de 45 minutos. Você sai com preço e prazo fechados.',
    autor: 'Alexandre, fundador da Nocodeia',
    autorBio: 'Mais de 25 anos em tecnologia, em empresas como IBM, Xerox, DHL e Bosch. Hoje coloca produtos no ar com no-code e IA em semanas.',
    lerPost: 'Ler post'
  },
  en: {
    base: '/en', html: 'en', og: 'en_US', locale: 'en-US',
    blog: 'Blog', blogTitulo: 'Nocodeia Blog',
    blogDescricao: 'Automation, AI agents, no-code and websites Google and AI recommend — explained without jargon, with real business examples.',
    inicio: 'Home', servicos: 'Services', cta: 'Get a spot', leitura: 'min read', por: 'By',
    atualizado: 'Updated', voltar: '← All posts', semPosts: 'The first posts are coming soon.',
    faq: ['frequently asked questions', 'faq'], rodape: 'Built with no-code, of course.',
    ctaTitulo: 'Want this working in your business?', ctaBotao: 'Get my free diagnosis',
    ctaNota: 'Free 45-minute diagnosis. You leave with a fixed price and deadline.',
    autor: 'Alexandre, founder of Nocodeia',
    autorBio: '25+ years in tech at companies like IBM, Xerox, DHL and Bosch. Today he ships products with no-code and AI in weeks.',
    lerPost: 'Read post'
  },
  es: {
    base: '/es', html: 'es', og: 'es_ES', locale: 'es-ES',
    blog: 'Blog', blogTitulo: 'Blog de Nocodeia',
    blogDescricao: 'Automatización, agentes de IA, no-code y sitios que Google y la IA recomiendan — explicado sin jerga, con ejemplos reales de empresa.',
    inicio: 'Inicio', servicos: 'Servicios', cta: 'Reservar lugar', leitura: 'min de lectura', por: 'Por',
    atualizado: 'Actualizado el', voltar: '← Todos los posts', semPosts: 'Los primeros posts llegan pronto.',
    faq: ['preguntas frecuentes', 'faq'], rodape: 'Hecho con no-code, claro.',
    ctaTitulo: '¿Quieres esto funcionando en tu empresa?', ctaBotao: 'Quiero mi diagnóstico gratis',
    ctaNota: 'Diagnóstico gratis de 45 minutos. Sales con precio y plazo cerrados.',
    autor: 'Alexandre, fundador de Nocodeia',
    autorBio: 'Más de 25 años en tecnología, en empresas como IBM, Xerox, DHL y Bosch. Hoy lanza productos con no-code e IA en semanas.',
    lerPost: 'Leer post'
  }
};

const SERVICOS = {
  'raio-x': { pt: 'Raio-X de automação', en: 'Automation X-ray', es: 'Radiografía de automatización' },
  'automacao': { pt: 'Automação de processos', en: 'Process automation', es: 'Automatización de procesos' },
  'agentes': { pt: 'Agentes de IA', en: 'AI agents', es: 'Agentes de IA' },
  'site-seo-geo': { pt: 'Site que o Google e a IA recomendam', en: 'A website Google and AI recommend', es: 'Un sitio que Google y la IA recomiendan' },
  'mvp': { pt: 'MVP de produto', en: 'Product MVP', es: 'MVP de producto' },
  'sistema-interno': { pt: 'Sistema interno', en: 'Internal system', es: 'Sistema interno' },
  'continuo': { pt: 'Nocodeia contínuo', en: 'Nocodeia ongoing', es: 'Nocodeia continuo' }
};

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const semTags = s => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const dataLonga = (iso, l) => new Date(iso + 'T12:00:00Z').toLocaleDateString(IDIOMAS[l].locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const urlBlog = l => `${IDIOMAS[l].base}/blog/`;
const urlPost = (l, slug) => `${IDIOMAS[l].base}/blog/${slug}/`;

// ---------- leitura e validação ----------
const erros = [], avisos = [];
function lerPosts() {
  if (!existsSync(POSTS)) return [];
  const lista = [];
  for (const pasta of readdirSync(POSTS).sort()) {
    const dir = join(POSTS, pasta);
    if (!statSync(dir).isDirectory() || pasta.startsWith('_')) continue;
    const metaPath = join(dir, 'meta.json');
    if (!existsSync(metaPath)) { erros.push(`${pasta}: falta meta.json`); continue; }
    let meta;
    try { meta = JSON.parse(readFileSync(metaPath, 'utf8')); } catch (e) { erros.push(`${pasta}: meta.json inválido (${e.message})`); continue; }
    if (meta.draft) { avisos.push(`${pasta}: rascunho (draft), não publicado`); continue; }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date || '')) erros.push(`${pasta}: "date" deve ser AAAA-MM-DD`);
    if (meta.updated && !/^\d{4}-\d{2}-\d{2}$/.test(meta.updated)) erros.push(`${pasta}: "updated" deve ser AAAA-MM-DD`);
    if (meta.service && !SERVICOS[meta.service]) erros.push(`${pasta}: "service" desconhecido: ${meta.service}`);
    if (meta.image && !existsSync(join(dir, meta.image))) erros.push(`${pasta}: imagem ${meta.image} não encontrada`);
    if (!meta.image) avisos.push(`${pasta}: post sem imagem destacada`);
    const versoes = {};
    for (const l of Object.keys(IDIOMAS)) {
      const md = join(dir, `${l}.md`);
      if (!meta[l] && !existsSync(md)) continue;
      if (!meta[l] || !existsSync(md)) { erros.push(`${pasta}: idioma ${l} precisa de ${l}.md e do bloco "${l}" no meta.json`); continue; }
      const v = meta[l];
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(v.slug || '')) erros.push(`${pasta}/${l}: slug inválido "${v.slug}" (só minúsculas, números e hífen)`);
      if (!v.title) erros.push(`${pasta}/${l}: falta title`);
      if (!v.description) erros.push(`${pasta}/${l}: falta description`);
      if (v.title && v.title.length > 65) avisos.push(`${pasta}/${l}: título com ${v.title.length} caracteres (ideal até 60)`);
      if (v.description && (v.description.length < 110 || v.description.length > 165)) avisos.push(`${pasta}/${l}: descrição com ${v.description.length} caracteres (ideal 120–160)`);
      if (meta.image && !v.image_alt) avisos.push(`${pasta}/${l}: falta image_alt`);
      versoes[l] = { ...v, md: readFileSync(md, 'utf8') };
    }
    if (!Object.keys(versoes).length) { erros.push(`${pasta}: nenhum idioma completo`); continue; }
    lista.push({ pasta, dir, meta, versoes });
  }
  // slugs repetidos no mesmo idioma
  for (const l of Object.keys(IDIOMAS)) {
    const vistos = {};
    for (const p of lista) { const s = p.versoes[l]?.slug; if (!s) continue; if (vistos[s]) erros.push(`slug "${s}" repetido em ${l}: ${vistos[s]} e ${p.pasta}`); vistos[s] = p.pasta; }
  }
  return lista.sort((a, b) => (b.meta.date).localeCompare(a.meta.date));
}

// ---------- markdown ----------
function renderizar(md, l) {
  const texto = md.replace(/^﻿/, '').replace(/^#\s+[^\n]*\n+/, ''); // o título vem do meta.json
  const faq = []; let secaoFaq = false; let pergunta = null; const respostas = {};
  const tokens = new Marked().lexer(texto);
  for (const t of tokens) {
    if (t.type === 'heading' && t.depth === 2) { secaoFaq = IDIOMAS[l].faq.includes(semTags(t.text).toLowerCase()); pergunta = null; continue; }
    if (!secaoFaq) continue;
    if (t.type === 'heading' && t.depth === 3) { pergunta = semTags(t.text); faq.push(pergunta); respostas[pergunta] = []; continue; }
    if (pergunta && t.type !== 'space') respostas[pergunta].push(t.raw);
  }
  const ids = {};
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        let id = slugify(html) || 'secao'; if (ids[id]) id += '-' + (++ids[id]); else ids[id] = 1;
        return `<h${depth} id="${id}">${html}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const html = this.parser.parseInline(tokens);
        const externo = /^https?:\/\//.test(href) && !href.startsWith(BASE_URL);
        return `<a href="${esc(href)}"${title ? ` title="${esc(title)}"` : ''}${externo ? ' target="_blank" rel="noopener"' : ''}>${html}</a>`;
      },
      image({ href, title, text }) {
        return `<img src="${esc(href)}" alt="${esc(text)}"${title ? ` title="${esc(title)}"` : ''} loading="lazy">`;
      }
    }
  });
  const html = marked.parse(texto);
  const faqLd = faq.map(q => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: semTags(new Marked().parse(respostas[q].join('\n'))) } })).filter(x => x.acceptedAnswer.text);
  const palavras = semTags(html).split(' ').length;
  return { html, faqLd, minutos: Math.max(1, Math.round(palavras / 200)), palavras };
}

// ---------- layout ----------
const CSS = `
:root{--bg:#121316;--sup:#1A1C21;--borda:#2A2D35;--texto:#FFFFFF;--suave:#C9CCD4;--apagado:#A7ABB6;--link:#7FA3FF;--grad:linear-gradient(45deg,#0047FF,#8A2BE2)}
*{box-sizing:border-box}html{scroll-padding-top:90px}
body{margin:0;background:var(--bg);color:var(--texto);font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased;line-height:1.6}
a{color:var(--link)}a:hover{color:#A9C1FF}
*:focus-visible{outline:3px solid #7FA3FF;outline-offset:3px;border-radius:6px}
.topo{position:sticky;top:0;z-index:10;background:rgba(18,19,22,.92);border-bottom:1px solid #23262D;backdrop-filter:blur(10px)}
.topo nav{max-width:1200px;margin:0 auto;padding:14px clamp(20px,5vw,48px);display:flex;align-items:center;justify-content:space-between;gap:20px}
.topo .logo img{height:40px;display:block}
.menu{display:flex;align-items:center;gap:clamp(12px,2.5vw,28px);flex-wrap:wrap;justify-content:flex-end}
.menu>a.item{font-size:15px;text-decoration:none;color:var(--suave)}.menu>a.item[aria-current]{color:#fff;font-weight:600}
.idiomas{display:flex;gap:2px;padding:3px;border:1px solid #343843;border-radius:10px}
.idiomas a{min-width:38px;min-height:34px;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;text-decoration:none;color:var(--apagado);border-radius:7px}
.idiomas a[aria-current]{color:#fff;background:#2A2D35;font-weight:700}
.botao{display:inline-flex;align-items:center;min-height:44px;padding:0 18px;border-radius:10px;font-size:15px;font-weight:600;text-decoration:none;color:#fff;background:var(--grad)}
.botao:hover{color:#fff;filter:brightness(1.08)}
main{max-width:1200px;margin:0 auto;padding:clamp(40px,7vw,80px) clamp(20px,5vw,48px)}
.titulo-blog{font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:clamp(40px,6vw,72px);line-height:1;letter-spacing:-.03em;margin:0 0 16px}
.sub-blog{color:var(--suave);font-size:clamp(17px,1.8vw,20px);max-width:60ch;margin:0 0 48px}
.grade{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(320px,100%),1fr));gap:28px}
.cartao{display:flex;flex-direction:column;background:var(--sup);border:1px solid var(--borda);border-radius:16px;overflow:hidden;text-decoration:none;color:inherit;transition:border-color .2s}
.cartao:hover{border-color:#4A4F5C;color:inherit}
.cartao img{width:100%;height:auto;aspect-ratio:1200/630;object-fit:cover;display:block;background:#23262D}
.cartao .corpo{padding:22px;display:flex;flex-direction:column;gap:10px;flex:1}
.cartao h2{font-family:'Space Grotesk',Inter,sans-serif;font-size:22px;line-height:1.2;margin:0;letter-spacing:-.01em}
.cartao p{margin:0;color:var(--suave);font-size:15px}
.cartao .mais{margin-top:auto;color:var(--link);font-weight:600;font-size:15px}
.data{font-size:13px;color:var(--apagado)}
article{max-width:760px;margin:0 auto}
.volta{font-size:15px;text-decoration:none}
article h1{font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:clamp(34px,5vw,54px);line-height:1.05;letter-spacing:-.025em;margin:18px 0 16px}
.resumo{font-size:clamp(18px,2vw,21px);color:var(--suave);margin:0 0 20px}
.meta{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:14px;color:var(--apagado);margin-bottom:28px}
.capa{margin:0 0 36px}.capa img{width:100%;height:auto;border-radius:16px;display:block;background:#23262D}
.capa figcaption{font-size:12px;color:var(--apagado);margin-top:8px}
.conteudo{font-size:18px;color:#E4E6EB}
.conteudo h2{font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(26px,3vw,32px);line-height:1.15;letter-spacing:-.02em;margin:48px 0 14px;color:#fff}
.conteudo h3{font-family:'Space Grotesk',Inter,sans-serif;font-size:22px;line-height:1.25;margin:32px 0 10px;color:#fff}
.conteudo p{margin:0 0 20px}.conteudo ul,.conteudo ol{margin:0 0 22px;padding-left:24px}.conteudo li{margin-bottom:8px}
.conteudo strong{color:#fff}
.conteudo blockquote{margin:28px 0;padding:18px 22px;border-left:4px solid #5A39F0;background:var(--sup);border-radius:0 12px 12px 0;color:var(--suave)}
.conteudo blockquote p:last-child{margin:0}
.conteudo code{font-size:.9em;background:#23262D;padding:2px 6px;border-radius:6px}
.conteudo pre{background:#0D0E10;border:1px solid var(--borda);border-radius:12px;padding:16px;overflow-x:auto}.conteudo pre code{background:none;padding:0}
.conteudo table{width:100%;border-collapse:collapse;margin:0 0 24px;font-size:16px;display:block;overflow-x:auto}
.conteudo th,.conteudo td{border:1px solid var(--borda);padding:10px 12px;text-align:left}.conteudo th{background:var(--sup)}
.conteudo img{max-width:100%;height:auto;border-radius:12px}
.conteudo hr{border:0;border-top:1px solid var(--borda);margin:40px 0}
.chamada{margin:56px 0 0;padding:clamp(28px,5vw,44px);border-radius:20px;background:var(--grad)}
.chamada h2{font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(24px,3vw,32px);line-height:1.15;margin:0 0 10px}
.chamada p{margin:0 0 20px;color:#fff;opacity:.92}
.chamada a.botao{background:#121316}
.chamada .servico{font-size:14px;opacity:.85;margin:0 0 6px;text-transform:uppercase;letter-spacing:.06em}
.autor{margin-top:40px;padding-top:24px;border-top:1px solid var(--borda);display:flex;gap:16px;align-items:flex-start}
.autor img{width:48px;height:48px;flex-shrink:0}.autor p{margin:0;font-size:15px;color:var(--suave)}.autor strong{color:#fff}
footer{border-top:1px solid #23262D;padding:56px clamp(20px,5vw,48px) 44px;display:flex;flex-direction:column;align-items:center;gap:22px;text-align:center}
footer .marca{display:flex;align-items:center;gap:10px}footer .marca img:first-child{height:40px}footer .marca img:last-child{height:26px}
footer p{margin:0;font-size:14px;color:var(--apagado)}
@media (max-width:640px){.menu>a.item{display:none}.topo .logo img{height:34px}}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
`;

function cabecalho(l, alternativos, pagina) {
  const L = IDIOMAS[l];
  const idiomas = Object.keys(IDIOMAS).map(k => {
    const href = alternativos[k] || urlBlog(k);
    return `<a href="${href}" hreflang="${IDIOMAS[k].html}"${k === l ? ' aria-current="page"' : ''}>${k.toUpperCase()}</a>`;
  }).join('');
  return `<header class="topo"><nav aria-label="Principal">
<a class="logo" href="${L.base}/" aria-label="Nocodeia"><img src="/assets/logo_h.png" alt="nocodeia worldwide"></a>
<div class="menu">
<a class="item" href="${L.base}/">${L.inicio}</a>
<a class="item" href="${L.base}/#servicos">${L.servicos}</a>
<a class="item" href="${urlBlog(l)}"${pagina === 'blog' ? ' aria-current="page"' : ''}>${L.blog}</a>
<div class="idiomas" role="group" aria-label="Idioma">${idiomas}</div>
<a class="botao" href="${L.base}/#vaga">${L.cta}</a>
</div></nav></header>`;
}

const rodape = l => `<footer><div class="marca"><img src="/assets/icon.png" alt=""><img src="/assets/wordmark.png" alt="nocodeia worldwide"></div>
<p><a href="mailto:contato@nocodeiaww.com">contato@nocodeiaww.com</a></p><p>© ${new Date().getFullYear()} Nocodeia. ${IDIOMAS[l].rodape}</p></footer>`;

function documento({ l, titulo, descricao, canonico, alternativos, imagem, tipoOg, ld, corpo, pagina }) {
  const hreflang = Object.entries(alternativos).map(([k, u]) => `<link rel="alternate" hreflang="${IDIOMAS[k].html}" href="${BASE_URL}${u}">`).join('\n')
    + (alternativos.pt ? `\n<link rel="alternate" hreflang="x-default" href="${BASE_URL}${alternativos.pt}">` : '');
  return `<!doctype html>
<html lang="${IDIOMAS[l].html}">
<head>
${avisoCookies(l)}
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1PHQ7W3WDX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-1PHQ7W3WDX');
</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${BASE_URL}${canonico}">
${hreflang}
<link rel="icon" type="image/png" href="/assets/icon.png">
<meta property="og:type" content="${tipoOg}">
<meta property="og:site_name" content="Nocodeia">
<meta property="og:locale" content="${IDIOMAS[l].og}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${BASE_URL}${canonico}">
<meta property="og:image" content="${BASE_URL}${imagem}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>${CSS}</style>
<script type="application/ld+json">
${JSON.stringify(ld, null, 1)}
</script>
</head>
<body>
${cabecalho(l, alternativos, pagina)}
<main>
${corpo}
</main>
${rodape(l)}
</body>
</html>
`;
}

function paginaPost(p, l) {
  const L = IDIOMAS[l], v = p.versoes[l], m = p.meta;
  const { html, faqLd, minutos } = renderizar(v.md, l);
  const alternativos = Object.fromEntries(Object.keys(p.versoes).map(k => [k, urlPost(k, p.versoes[k].slug)]));
  const canonico = alternativos[l];
  const imagem = m.image ? `/blog/img/${p.versoes.pt?.slug || v.slug}${extname(m.image).toLowerCase()}` : '/assets/og-image.png';
  const atualizado = m.updated && m.updated !== m.date;
  const servico = m.service ? SERVICOS[m.service][l] : null;
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting', '@id': `${BASE_URL}${canonico}#post`, headline: v.title, description: v.description,
        inLanguage: L.html, datePublished: m.date, dateModified: m.updated || m.date,
        image: `${BASE_URL}${imagem}`, url: `${BASE_URL}${canonico}`, mainEntityOfPage: `${BASE_URL}${canonico}`,
        author: { '@type': 'Person', '@id': `${BASE_URL}/#fundador`, name: 'Alexandre', url: `${BASE_URL}/#sobre` },
        publisher: { '@type': 'Organization', '@id': `${BASE_URL}/#empresa`, name: 'Nocodeia', logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/icon.png` } },
        isPartOf: { '@type': 'Blog', '@id': `${BASE_URL}${urlBlog(l)}#blog`, name: L.blogTitulo }
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: L.inicio, item: `${BASE_URL}${L.base}/` },
          { '@type': 'ListItem', position: 2, name: L.blog, item: `${BASE_URL}${urlBlog(l)}` },
          { '@type': 'ListItem', position: 3, name: v.title, item: `${BASE_URL}${canonico}` }
        ]
      },
      ...(faqLd.length ? [{ '@type': 'FAQPage', '@id': `${BASE_URL}${canonico}#faq`, inLanguage: L.html, mainEntity: faqLd }] : [])
    ]
  };
  const corpo = `<article>
<a class="volta" href="${urlBlog(l)}">${L.voltar}</a>
<h1>${esc(v.title)}</h1>
<p class="resumo">${esc(v.description)}</p>
<div class="meta"><span>${L.por} Alexandre</span><span>·</span><time datetime="${m.date}">${dataLonga(m.date, l)}</time>${atualizado ? `<span>·</span><span>${L.atualizado} <time datetime="${m.updated}">${dataLonga(m.updated, l)}</time></span>` : ''}<span>·</span><span>${minutos} ${L.leitura}</span></div>
${m.image ? `<figure class="capa"><img src="${imagem}" alt="${esc(v.image_alt || '')}" width="1200" height="630">${m.image_credit ? `<figcaption>${esc(m.image_credit)}</figcaption>` : ''}</figure>` : ''}
<div class="conteudo">
${html}
</div>
<aside class="chamada">
${servico ? `<p class="servico">${esc(servico)}</p>` : ''}
<h2>${L.ctaTitulo}</h2>
<p>${L.ctaNota}</p>
<a class="botao" href="${L.base}/#vaga">${L.ctaBotao}</a>
</aside>
<div class="autor"><img src="/assets/icon.png" alt=""><p><strong>${L.autor}</strong><br>${L.autorBio}</p></div>
</article>`;
  return { html: documento({ l, titulo: `${v.title} | Nocodeia`, descricao: v.description, canonico, alternativos, imagem, tipoOg: 'article', ld, corpo, pagina: 'post' }), canonico, imagem };
}

function paginaIndice(posts, l) {
  const L = IDIOMAS[l];
  const meus = posts.filter(p => p.versoes[l]);
  const alternativos = Object.fromEntries(Object.keys(IDIOMAS).map(k => [k, urlBlog(k)]));
  const cartoes = meus.map(p => {
    const v = p.versoes[l];
    const img = p.meta.image ? `/blog/img/${p.versoes.pt?.slug || v.slug}${extname(p.meta.image).toLowerCase()}` : '/assets/og-image.png';
    return `<a class="cartao" href="${urlPost(l, v.slug)}"><img src="${img}" alt="${esc(v.image_alt || '')}" loading="lazy" width="1200" height="630"><div class="corpo"><time class="data" datetime="${p.meta.date}">${dataLonga(p.meta.date, l)}</time><h2>${esc(v.title)}</h2><p>${esc(v.description)}</p><span class="mais">${L.lerPost} →</span></div></a>`;
  }).join('\n');
  const ld = {
    '@context': 'https://schema.org', '@type': 'Blog', '@id': `${BASE_URL}${urlBlog(l)}#blog`, name: L.blogTitulo, description: L.blogDescricao,
    inLanguage: L.html, url: `${BASE_URL}${urlBlog(l)}`, publisher: { '@id': `${BASE_URL}/#empresa` },
    blogPost: meus.map(p => ({ '@type': 'BlogPosting', headline: p.versoes[l].title, url: `${BASE_URL}${urlPost(l, p.versoes[l].slug)}`, datePublished: p.meta.date }))
  };
  const corpo = `<h1 class="titulo-blog">${L.blogTitulo}</h1>
<p class="sub-blog">${L.blogDescricao}</p>
${meus.length ? `<div class="grade">\n${cartoes}\n</div>` : `<p class="sub-blog">${L.semPosts}</p>`}`;
  return documento({ l, titulo: `${L.blogTitulo} | Nocodeia`, descricao: L.blogDescricao, canonico: urlBlog(l), alternativos, imagem: '/assets/og-image.png', tipoOg: 'website', ld, corpo, pagina: 'blog' });
}

// ---------- sitemap e llms.txt ----------
function sitemap(posts) {
  const hoje = new Date().toISOString().slice(0, 10);
  const urls = [['/', hoje], ['/en/', hoje], ['/es/', hoje], ['/privacidade/', '2026-10-09']];
  if (posts.length) for (const l of Object.keys(IDIOMAS)) if (posts.some(p => p.versoes[l])) urls.push([urlBlog(l), posts.find(p => p.versoes[l]).meta.updated || posts.find(p => p.versoes[l]).meta.date]);
  for (const p of posts) for (const l of Object.keys(p.versoes)) urls.push([urlPost(l, p.versoes[l].slug), p.meta.updated || p.meta.date]);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([u, d]) => `<url><loc>${BASE_URL}${u}</loc><lastmod>${d}</lastmod></url>`).join('\n')}\n</urlset>\n`;
}

function atualizarLlms(posts) {
  const arq = join(SITE, 'llms.txt');
  if (!existsSync(arq)) return;
  const ini = '<!-- blog:inicio -->', fim = '<!-- blog:fim -->';
  const lista = posts.filter(p => p.versoes.pt).map(p => `- [${p.versoes.pt.title}](${BASE_URL}${urlPost('pt', p.versoes.pt.slug)}): ${p.versoes.pt.description}`).join('\n');
  const bloco = `${ini}\n## Blog\n\n${lista || '- Em breve.'}\n${fim}`;
  let s = readFileSync(arq, 'utf8');
  s = s.includes(ini) ? s.replace(new RegExp(`${ini}[\\s\\S]*?${fim}`), bloco) : s.replace(/\s*$/, '') + `\n\n${bloco}\n`;
  writeFileSync(arq, s);
}

// ---------- execução ----------
const posts = lerPosts();
for (const a of avisos) console.log('  aviso:', a);
if (erros.length) { for (const e of erros) console.error('  ERRO:', e); console.error(`\n${erros.length} erro(s). Nada foi gravado.`); process.exit(1); }
if (SO_CONFERIR) { console.log(`ok: ${posts.length} post(s) válidos.`); process.exit(0); }

for (const l of Object.keys(IDIOMAS)) rmSync(join(SITE, IDIOMAS[l].base.slice(1), 'blog'), { recursive: true, force: true });
const grava = (rel, conteudo) => { const f = join(SITE, rel); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, conteudo); };
for (const p of posts) {
  if (p.meta.image) {
    const destino = join(SITE, 'blog', 'img', `${p.versoes.pt?.slug || Object.values(p.versoes)[0].slug}${extname(p.meta.image).toLowerCase()}`);
    mkdirSync(dirname(destino), { recursive: true }); copyFileSync(join(p.dir, p.meta.image), destino);
  }
  for (const l of Object.keys(p.versoes)) grava(join(urlPost(l, p.versoes[l].slug), 'index.html'), paginaPost(p, l).html);
}
for (const l of Object.keys(IDIOMAS)) grava(join(urlBlog(l), 'index.html'), paginaIndice(posts, l));
grava('sitemap.xml', sitemap(posts));
atualizarLlms(posts);
const total = posts.reduce((n, p) => n + Object.keys(p.versoes).length, 0);
console.log(`ok: ${posts.length} post(s), ${total} página(s) de post, 3 índices, sitemap e llms.txt atualizados.`);
