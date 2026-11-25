// Gera o blog estático (PT/EN/ES) a partir de _blog/posts/.
// Uso: node build.mjs [--check]
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, rmSync, copyFileSync, statSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';
import { pagina, servico, servicosDaHome, servicosConhecidos, chamada, empresa, IDIOMAS as CASCA_IDIOMAS } from '../_home/casca.mjs';

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
    inicio: 'Início', casos: 'Casos', leitura: 'min de leitura', por: 'Por',
    atualizado: 'Atualizado em', voltar: '← Todos os posts', semPosts: 'Os primeiros posts chegam em breve.',
    faq: ['perguntas frequentes', 'faq'],
    autor: 'Alexandre, fundador da Nocodeia',
    autorBio: 'Mais de 25 anos em tecnologia, em empresas como IBM, Xerox, DHL e Bosch. Hoje coloca produtos no ar com no-code e IA em semanas.',
    lerPost: 'Ler post', todos: 'Todos', filtrar: 'Filtrar por serviço'
  },
  en: {
    base: '/en', html: 'en', og: 'en_US', locale: 'en-US',
    blog: 'Blog', blogTitulo: 'Nocodeia Blog',
    blogDescricao: 'Automation, AI agents, no-code and websites Google and AI recommend — explained without jargon, with real business examples.',
    inicio: 'Home', casos: 'Cases', leitura: 'min read', por: 'By',
    atualizado: 'Updated', voltar: '← All posts', semPosts: 'The first posts are coming soon.',
    faq: ['frequently asked questions', 'faq'],
    autor: 'Alexandre, founder of Nocodeia',
    autorBio: '25+ years in tech at companies like IBM, Xerox, DHL and Bosch. Today he ships products with no-code and AI in weeks.',
    lerPost: 'Read post', todos: 'All', filtrar: 'Filter by service'
  },
  es: {
    base: '/es', html: 'es', og: 'es_ES', locale: 'es-ES',
    blog: 'Blog', blogTitulo: 'Blog de Nocodeia',
    blogDescricao: 'Automatización, agentes de IA, no-code y sitios que Google y la IA recomiendan — explicado sin jerga, con ejemplos reales de empresa.',
    inicio: 'Inicio', casos: 'Casos', leitura: 'min de lectura', por: 'Por',
    atualizado: 'Actualizado el', voltar: '← Todos los posts', semPosts: 'Los primeros posts llegan pronto.',
    faq: ['preguntas frecuentes', 'faq'],
    autor: 'Alexandre, fundador de Nocodeia',
    autorBio: 'Más de 25 años en tecnología, en empresas como IBM, Xerox, DHL y Bosch. Hoy lanza productos con no-code e IA en semanas.',
    lerPost: 'Leer post', todos: 'Todos', filtrar: 'Filtrar por servicio'
  }
};

// Categoria do post = uma das 4 abas da home (ver _home/casca.mjs). Valores aceitos em "service":
const SERVICOS_ACEITOS = servicosConhecidos;

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const semTags = s => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const dataLonga = (iso, l) => new Date(iso + 'T12:00:00Z').toLocaleDateString(IDIOMAS[l].locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const urlBlog = l => `${IDIOMAS[l].base}/blog/`;
const urlCasos = l => ({ pt: '/casos/', en: '/en/cases/', es: '/es/casos/' })[l];
const capaDe = (p, v) => p.meta.image ? `/blog/img/${p.versoes.pt?.slug || v.slug}${extname(p.meta.image).toLowerCase()}` : '/assets/og-image.png';
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
    if (meta.service && !SERVICOS_ACEITOS.includes(meta.service)) erros.push(`${pasta}: "service" desconhecido: ${meta.service}`);
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

// ---------- páginas ----------
// Topo, rodapé, fontes e cores vêm do casco comum (_home/casca.mjs), o mesmo da home.
// O seletor de idioma leva à versão do post em cada idioma; se faltar, ao índice do blog daquele idioma.
const seletorIdiomas = alternativos => Object.fromEntries(Object.keys(IDIOMAS).map(k => [k, alternativos[k] || urlBlog(k)]));

function paginaPost(p, l) {
  const L = IDIOMAS[l], v = p.versoes[l], m = p.meta;
  const { html, faqLd, minutos } = renderizar(v.md, l);
  const alternativos = Object.fromEntries(Object.keys(p.versoes).map(k => [k, urlPost(k, p.versoes[k].slug)]));
  const canonico = alternativos[l];
  const imagem = capaDe(p, v);
  const atualizado = m.updated && m.updated !== m.date;
  const s = m.service ? servico(l, m.service) : null;
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting', '@id': `${BASE_URL}${canonico}#post`, headline: v.title, description: v.description,
        inLanguage: L.html, datePublished: m.date, dateModified: m.updated || m.date,
        image: `${BASE_URL}${imagem}`, url: `${BASE_URL}${canonico}`, mainEntityOfPage: `${BASE_URL}${canonico}`,
        ...(s ? { articleSection: s.nome } : {}),
        author: { '@type': 'Person', '@id': `${BASE_URL}/#fundador`, name: 'Alexandre Fornes', url: `${BASE_URL}/#sobre` },
        publisher: { '@type': 'Organization', '@id': `${BASE_URL}/#empresa`, name: 'Nocodeia', sameAs: empresa().redes.map(r => r.url), logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/icon.png` } },
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
  const corpo = `<div class="wrap"><article>
<div class="trilha"><a class="volta" href="${urlBlog(l)}">${L.voltar}</a>${s ? `<a class="tag" href="${urlBlog(l)}?servico=${s.id}">${esc(s.nome)}</a>` : ''}</div>
<h1>${esc(v.title)}</h1>
<p class="resumo">${esc(v.description)}</p>
<div class="meta"><span>${L.por} Alexandre</span><span aria-hidden="true">·</span><time datetime="${m.date}">${dataLonga(m.date, l)}</time>${atualizado ? `<span aria-hidden="true">·</span><span>${L.atualizado} <time datetime="${m.updated}">${dataLonga(m.updated, l)}</time></span>` : ''}<span aria-hidden="true">·</span><span>${minutos} ${L.leitura}</span></div>
${m.image ? `<figure class="capa"><img src="${imagem}" alt="${esc(v.image_alt || '')}" width="1200" height="630" fetchpriority="high">${m.image_credit ? `<figcaption>${esc(m.image_credit)}</figcaption>` : ''}</figure>` : ''}
<div class="conteudo">
${html}
</div>
${chamada(l, m.service, 'blog')}
<div class="autor"><img src="/assets/icon.webp" alt="" width="48" height="48"><p><strong>${L.autor}</strong><br>${L.autorBio}</p></div>
</article></div>`;
  return {
    html: pagina({ l, titulo: `${v.title} | Nocodeia`, descricao: v.description, canonico, alternativos, idiomas: seletorIdiomas(alternativos), imagem, tipoOg: 'article', ld, corpo, atual: 'blog' }),
    canonico, imagem
  };
}

// Filtro por serviço no índice: sem JavaScript todos os posts aparecem; com JavaScript os botões filtram
// e o endereço guarda a escolha (/blog/?servico=automacao), para a home e os posts poderem linkar direto.
const SCRIPT_FILTRO = `<script>
(function(){var f=document.querySelector('.filtro');if(!f)return;f.hidden=false;
var bs=[].slice.call(f.querySelectorAll('button')),cs=[].slice.call(document.querySelectorAll('.cartao[data-cat]'));
function escolher(cat,registrar){bs.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.cat===cat));});
cs.forEach(function(c){c.hidden=!!cat&&c.dataset.cat!==cat;});
if(registrar){if(history.replaceState)history.replaceState(null,'',cat?'?servico='+cat:location.pathname);window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'blog_filtro',servico:cat||'todos'});}}
bs.forEach(function(b){b.addEventListener('click',function(){escolher(b.dataset.cat,true);});});
var q=new URLSearchParams(location.search).get('servico');if(q&&bs.some(function(b){return b.dataset.cat===q;}))escolher(q,false);
})();
</script>`;

function paginaIndice(posts, l) {
  const L = IDIOMAS[l];
  const meus = posts.filter(p => p.versoes[l]);
  const alternativos = Object.fromEntries(Object.keys(IDIOMAS).map(k => [k, urlBlog(k)]));
  const cartoes = meus.map((p, i) => {
    const v = p.versoes[l], s = p.meta.service ? servico(l, p.meta.service) : null;
    const carga = i === 0 ? ' fetchpriority="high"' : i < 3 ? '' : ' loading="lazy"';
    return `<div class="cartao"${s ? ` data-cat="${s.id}"` : ''}><img src="${capaDe(p, v)}" alt="${esc(v.image_alt || '')}" width="1200" height="630"${carga}><div class="corpo"><div class="linha">${s ? `<span class="tag">${esc(s.nome)}</span>` : ''}<time class="data" datetime="${p.meta.date}">${dataLonga(p.meta.date, l)}</time></div><h2><a href="${urlPost(l, v.slug)}">${esc(v.title)}</a></h2><p>${esc(v.description)}</p><span class="mais" aria-hidden="true">${L.lerPost} →</span></div></div>`;
  }).join('\n');
  // botões só das categorias que têm post, na ordem das abas da home
  const contagem = {};
  for (const p of meus) { const s = p.meta.service && servico(l, p.meta.service); if (s) contagem[s.id] = (contagem[s.id] || 0) + 1; }
  const botoes = [`<button type="button" data-cat="" aria-pressed="true">${L.todos}<span>${meus.length}</span></button>`]
    .concat(servicosDaHome(l).filter(s => contagem[s.id]).map(s => `<button type="button" data-cat="${s.id}" aria-pressed="false">${esc(s.nome)}<span>${contagem[s.id]}</span></button>`)).join('');
  const ld = {
    '@context': 'https://schema.org', '@type': 'Blog', '@id': `${BASE_URL}${urlBlog(l)}#blog`, name: L.blogTitulo, description: L.blogDescricao,
    inLanguage: L.html, url: `${BASE_URL}${urlBlog(l)}`, publisher: { '@id': `${BASE_URL}/#empresa` },
    blogPost: meus.map(p => ({ '@type': 'BlogPosting', headline: p.versoes[l].title, url: `${BASE_URL}${urlPost(l, p.versoes[l].slug)}`, datePublished: p.meta.date }))
  };
  const corpo = `<div class="wrap">
<div class="cabeca"><h1>${L.blogTitulo}</h1><p>${L.blogDescricao}</p></div>
${meus.length ? `<div class="filtro" role="group" aria-label="${L.filtrar}" hidden>${botoes}</div>
<div class="grade">
${cartoes}
</div>` : `<p class="cabeca">${L.semPosts}</p>`}
</div>`;
  const primeira = meus[0] ? `<link rel="preload" as="image" href="${capaDe(meus[0], meus[0].versoes[l])}" fetchpriority="high">\n` : '';
  return pagina({ l, titulo: `${L.blogTitulo} | Nocodeia`, descricao: L.blogDescricao, canonico: urlBlog(l), alternativos, idiomas: alternativos, imagem: '/assets/og-image.png', tipoOg: 'website', ld, corpo, atual: 'blog', scriptExtra: SCRIPT_FILTRO, preload: primeira });
}

// ---------- sitemap e llms.txt ----------
// Páginas estáticas escritas à mão: [caminho, data da última alteração]. Atualize a data quando a página mudar.
const PAGINAS_ESTATICAS = [['/calculadora-whatsapp/', '2026-11-20']];

function sitemap(posts) {
  const hoje = new Date().toISOString().slice(0, 10);
  const urls = [['/', hoje], ['/en/', hoje], ['/es/', hoje], ['/privacidade/', '2026-10-10'], ['/en/privacy/', '2026-10-10'], ['/es/privacidad/', '2026-10-10']];
  // Páginas estáticas fora do blog e dos cases (ferramentas): escritas à mão em site/<pasta>/index.html.
  for (const [u, d] of PAGINAS_ESTATICAS) urls.push([u, d]);
  // Páginas de case (geradas por _casos/build.mjs) também entram no sitemap.
  const CASOS = join(SITE, '_casos'), PASTA_CASO = { pt: 'casos', en: 'en/cases', es: 'es/casos' };
  if (existsSync(CASOS)) {
    const metas = readdirSync(CASOS, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => JSON.parse(readFileSync(join(CASOS, d.name, 'meta.json'), 'utf8')));
    for (const l of Object.keys(PASTA_CASO)) {
      const doIdioma = metas.filter(m => m[l]?.slug);
      if (doIdioma.length) urls.push([urlCasos(l), doIdioma.map(m => m.updated || m.date).sort().pop()]);
      for (const m of doIdioma) urls.push([`/${PASTA_CASO[l]}/${m[l].slug}/`, m.updated || m.date]);
    }
  }
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
