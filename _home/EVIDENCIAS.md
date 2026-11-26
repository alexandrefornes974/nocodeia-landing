# Evidências dos requisitos do novo site (briefing de 24/11/2026)

Medição: Lighthouse 12.8.2, modo celular (form factor mobile, limitação simulada), rodado do computador
do Alexandre. O PageSpeed Insights estava sem cota no dia; repetir por lá antes de publicar.
Valores = mediana de 6 medições (as notas variam com a carga da máquina).

## Antes e depois da home (24/11/2026)

| Métrica (celular) | Site atual nocodeiaww.com (3 medições) | Prévia novo-site.nocodeia.pages.dev (6 medições) |
|---|---|---|
| Desempenho | 48 a 56 | 97,5 (85 a 99) |
| LCP | 5,3 a 6,7 s | 1,85 s (1,8 a 1,9) |
| TBT | 530 a 1.470 ms | 150 ms (90 a 580) |
| CLS | 0 a 0,049 | 0 |
| Acessibilidade / Boas práticas | 100 / 96 | 100 / 100 |
| HTML da home | 263 KB publicado | 41 KB |

O SEO da prévia aparece como 69 só porque a prévia vem com `x-robots-tag: noindex` (correto para prévia).

## Situação de cada requisito

| # | Requisito | Situação | Evidência |
|---|---|---|---|
| R1 | HTML final sem runtime; GTM sem travar | Feito na home PT | Sem support.js; GTM na 1ª interação ou 5 s após carregar. Desempenho 97,5; TBT 150 ms (mediana) |
| R2 | LCP < 2,5 s | Feito na home PT | LCP 1,85 s (mediana), elemento H1 |
| R3 | 1 H1; home < 120 KB | Feito na home PT | 1 `<h1>` no HTML cru; 41 KB. O build falha se houver mais de 1 H1 ou passar de 120 KB |
| R4 | E-mail em texto | Feito | `contato@nocodeiaww.com` no HTML cru (rodapé com `email_off`) e no schema |
| R5 | CNPJ e razão social | Adiado (decisão do Alexandre em 26/11/2026) | O rodapé sai sem eles por enquanto. Campos em `_home/conteudo/empresa.yml`; ao preencher, entram no rodapé e no `taxID` |
| R6 | Perfil da Empresa no Google | Com o Alexandre | Schema já declara área de atendimento: Campinas e Região Metropolitana |
| R7 | HSTS e cabeçalhos | Feito | `_headers`: Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy (conferidos na prévia) |
| R8 | /favicon.ico | Feito | 200, image/vnd.microsoft.icon (prévia) |
| R9 | hreflang da calculadora | Feito (25/11/2026) | Calculadora em PT, EN e ES (`/calculadora-whatsapp/`, `/en/whatsapp-cost-calculator/`, `/es/calculadora-whatsapp/`) com hreflang entre as três e no sitemap |
| R10 | 3 cases e 3 depoimentos | Em andamento | 3 cases com número na home; 2 depoimentos (Luiz Almeida, Proacta CRM; Tais Vieira, Amore Totale, em 26/11/2026). Falta 1 |
| R11 | Resposta direta + FAQ | Home feita; matriz pronta | FAQ com 5 perguntas e FAQPage igual ao texto. Matriz mensal de 20 perguntas × 5 IAs (ChatGPT, Gemini, Perplexity, Google Modo IA, Copilot) na planilha "Nocodeia nas IAs" (https://claude.ai/artifact/KMtyifp7mXY4evdGuLeRiw), criada em 26/11/2026; primeira medição a fazer |

## Achado durante a medição

O kit de cookies (`kit/aviso-cookies/v1/silktide-consent-manager.js`) focava o botão de fechar da
janela de preferências na montagem. Quando o CSS do kit chegava depois, a página rolava ~690 px
sozinha no celular e o Chrome descartava o LCP. Corrigido em 24/11/2026 (foco só com a janela aberta
e sempre com `preventScroll`). A versão oficial do kit, fora deste repositório, precisa da mesma correção.
