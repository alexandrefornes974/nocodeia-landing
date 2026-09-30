# Blog — gerador de páginas

Os posts ficam em `_blog/posts/<pasta>/` e viram páginas estáticas em `blog/`, `en/blog/` e `es/blog/`.
Esta pasta não vai para o ar (ver `.gitattributes`); só o resultado gerado vai.

## Estrutura de um post

```
_blog/posts/2026-10-02-automatizar-planilhas/
  meta.json   ficha do post (datas, imagem, serviço, título/descrição/slug por idioma)
  pt.md       texto em português (markdown)
  en.md       texto em inglês
  es.md       texto em espanhol
  capa.jpg    imagem destacada (1200x630 ideal)
```

`meta.json`:

```json
{
  "date": "2026-10-02",
  "updated": "2026-10-02",
  "draft": false,
  "image": "capa.jpg",
  "image_credit": "Foto: Nome do fotógrafo / Pexels",
  "service": "automacao",
  "pt": { "slug": "automatizar-planilhas", "title": "…", "description": "…", "image_alt": "…" },
  "en": { "slug": "automate-spreadsheets", "title": "…", "description": "…", "image_alt": "…" },
  "es": { "slug": "automatizar-hojas-de-calculo", "title": "…", "description": "…", "image_alt": "…" }
}
```

- `service`: `raio-x`, `automacao`, `agentes`, `site-seo-geo`, `mvp`, `sistema-interno` ou `continuo` — define a chamada no fim do post.
- Um idioma pode faltar: o post só é gerado nos idiomas que tiverem `.md` e bloco no `meta.json`.
- `"draft": true` impede a publicação.
- Perguntas frequentes: uma seção `## Perguntas frequentes` (`## FAQ`, `## Preguntas frecuentes`) com cada pergunta em `### ...` vira dados estruturados FAQPage automaticamente.

## Gerar

```bash
cd _blog && npm install   # só na primeira vez
node build.mjs            # gera blog/, en/blog/, es/blog/, sitemap.xml e a seção de posts do llms.txt
node build.mjs --check    # só valida, não grava
```
