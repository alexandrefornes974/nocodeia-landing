# Criar site com IA: o Google e o ChatGPT vão ler o seu site?

Criar site com IA é usar um construtor, como Wix, Hostinger ou Lovable, que monta as páginas a partir de uma descrição. O site pode ficar bonito e invisível: se o texto só aparece depois que o JavaScript roda no navegador, o Google precisa de uma etapa extra e robôs de IA podem não ler.

Você descreveu a empresa, o construtor montou as páginas e o site ficou com cara de profissional. Só que o cliente procura no Google, pergunta ao ChatGPT, e a sua empresa não aparece. Muitas vezes o motivo está no que o robô recebe quando visita a página: um texto que só é montado depois, no navegador, ou um texto escrito dentro de uma imagem.

## Dá para criar o site da empresa com IA e aparecer no Google?

Dá, desde que o texto chegue pronto no código que o servidor envia. O construtor resolve o visual rápido. A pergunta que quase ninguém faz é se o robô consegue ler o que está escrito.

Robô, aqui, é o programa que o Google e as empresas de IA usam para visitar sites e ler o conteúdo, como um leitor automático. Código da página é o arquivo que o servidor manda quando alguém abre o endereço do site.

Se o nome dos seus serviços, a cidade e o telefone estão escritos nesse arquivo, o robô lê na primeira visita. Se não estão, a leitura depende de etapas extras, e alguns robôs não fazem essas etapas.

## Por que um site bonito pode ficar invisível para o Google e para o ChatGPT?

Por dois motivos: o texto é montado no navegador pelo JavaScript, ou o texto só existe dentro de imagem.

- **Texto montado pelo JavaScript.** JavaScript é a linguagem que faz partes da página aparecerem e mudarem no navegador. Em alguns sites, o servidor manda uma página quase vazia e um programa que escreve o texto depois, no computador ou celular do visitante. Isso é comum em apps feitos com React, uma ferramenta popular para montar apps.
- **Texto dentro de imagem.** Banner com os serviços, o preço ou o endereço "desenhados" na arte. Para o robô, aquilo é uma foto.

O Google lida com JavaScript, mas em mais passos. A [documentação do Google sobre JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=pt-br) explica que ele processa as páginas com JavaScript em 3 fases: rastreamento, renderização e indexação (guardar a página no catálogo do Google). Ler o texto direto do código "funciona bem para sites clássicos ou páginas renderizadas do lado do servidor"; quando o texto é montado pelo programa, "o Google precisa executar JavaScript". Renderizar é rodar o programa para montar a página.

Com os robôs de IA, a situação é pior. Um [levantamento da Vercel com a MERJ](https://vercel.com/blog/the-rise-of-the-ai-crawler), publicado em dezembro de 2024, concluiu que os principais robôs de IA não renderizavam JavaScript, entre eles os do ChatGPT, do Claude e do Perplexity. Os do ChatGPT e do Claude baixavam os arquivos de JavaScript, mas não executavam.

As exceções citadas foram o Gemini, que usa a estrutura do robô do Google, e o robô da Apple (AppleBot). Robôs mudam, então trate isso como o retrato daquela data.

| Como o texto chega | Google | Robôs de IA (levantamento de dez/2024) | O que fazer |
|---|---|---|---|
| Pronto no código (site estático ou montado no servidor) | Acha o texto no código que o servidor envia | Conseguem ler: o texto já está no código | Manter assim |
| Montado no navegador pelo JavaScript | Só vê o texto depois de executar o JavaScript na renderização | Os principais não executavam o JavaScript | Passar a entregar a página pronta |
| Dentro de imagem | Pede o conteúdo importante em forma de texto | Sem fonte que confirme a leitura | Reescrever como texto |

## Site estático é pior para o Google?

Não, é o contrário: o site estático é o mais fácil de ler. Estático quer dizer que o servidor entrega a página já pronta, com o texto escrito no código, igual para todo visitante. O robô abre e lê, sem etapa extra.

A confusão vem do nome, que soa como "parado" ou "antigo". O que atrapalha é o site que só escreve o texto no navegador. O próprio Google diz, na mesma documentação, que "A renderização prévia ou no servidor ainda é uma ótima ideia", porque "nem todos os bots executam JavaScript". O site da Nocodeia, por exemplo, usa páginas estáticas, com o texto já no código.

## Como Wix, Hostinger e Lovable entregam as páginas do seu site?

Os três dizem que os sites novos saem com a página montada no servidor, mas a data em que o seu site foi criado importa. Veja o que cada empresa afirma:

| Construtor | O que a empresa afirma | Ressalva |
|---|---|---|
| Wix | No [blog da Wix](https://www.wix.com/blog/is-wix-seo-friendly), os sites usam renderização no servidor e o robô de IA recebe o conteúdo completo na primeira visita | É texto de marketing da própria Wix (publicado em 21/09/2026, atualizado em 18/10/2026); não achamos isso na central de ajuda |
| Hostinger (AI Builder) | Na [nota de produto de 28/09/2026](https://www.hostinger.com/blog/product-updates-week-39-2026/), sites criados a partir de 21/09/2026 usam renderização no servidor | A nota não fala dos sites criados antes dessa data |
| Lovable | Na [FAQ oficial da Lovable](https://docs.lovable.dev/introduction/faq), apps criados desde 13/05/2026 (22/06/2026 no plano Enterprise) renderizam no servidor; os antigos renderizam no navegador, e a Lovable entrega cópias prontas das páginas publicadas a buscadores verificados, robôs de prévia de redes sociais e robôs de IA | No projeto antigo, o código-fonte que você vê pode vir quase vazio, mesmo com os robôs recebendo a cópia pronta |

E as outras ferramentas, como Canva ou HostGator? Não conferimos. Cada uma muda rápido, então, em vez de confiar na propaganda, faça o teste abaixo. Ele vale para qualquer construtor.

## Como testar em 5 minutos se o Google e a IA conseguem ler o seu site?

Abra o código da página e procure uma frase que aparece na tela. Passo a passo, no computador:

1. Abra uma página do seu site no Chrome, clique com o botão direito num espaço vazio e escolha "Exibir código fonte da página" (ou aperte Ctrl+U).
2. Aperte Ctrl+F e procure uma frase que aparece na tela, como o nome de um serviço. Achou? O texto vai pronto no código. Não achou, ou só vê linhas de programa e quase nenhum texto? O texto é montado no navegador.
3. Repita com o endereço, o telefone e os preços. Se não aparecem, volte à página e tente selecionar esse texto com o mouse. Se não dá para selecionar, ele está dentro de uma imagem.
4. Para ver o que o Google enxerga, use a Inspeção de URL do Google Search Console, a ferramenta gratuita do Google para donos de site. Clique em "Testar o URL publicado" e depois em "Ver a página testada". Ela mostra o código que o Google recebeu e uma captura da página montada.

Como ler o resultado: o passo 2 mostra o que recebe um robô que não roda JavaScript, que era o caso dos robôs de IA no levantamento citado acima. O passo 4 mostra o que o Google vê depois de montar a página. Se o Google vê o texto e o código-fonte não tem, o Google pode até indexar a página, mas os robôs de IA podem ficar sem o conteúdo. É o mesmo teste que fazemos no site da Nocodeia.

Uma exceção: em projeto antigo da Lovable, o código-fonte pode vir quase vazio e, mesmo assim, a Lovable diz entregar uma cópia pronta aos robôs; nesse caso, use o passo 4 e a aba de SEO da própria Lovable.

## O que fazer se o seu site não passar no teste?

Resolva primeiro a causa que o teste apontou. Por situação:

- **Lovable em projeto antigo (React + Vite):** veja se o projeto pode ser atualizado para a estrutura nova, que renderiza no servidor, como a FAQ da Lovable descreve, e refaça o teste. Hoje a Lovable diz entregar cópias prontas aos robôs; com a página montada no servidor, o texto passa a ir no código para qualquer visitante, sem depender disso. A mesma FAQ cita a aba "SEO & AI search", gratuita em todos os planos, que confere títulos, indexação, sitemap e robots.txt.
- **Hostinger com site criado antes de 21/09/2026:** pergunte ao suporte se o seu site já usa renderização no servidor.
- **Texto em imagem:** reescreva como texto de verdade os serviços, o endereço, o telefone, o horário e os preços. A imagem fica de apoio.
- **Robôs bloqueados ou site fora do Google:** o passo a passo de robots.txt e Search Console está no guia sobre [como fazer a sua empresa aparecer no ChatGPT](/blog/como-fazer-minha-empresa-aparecer-no-chatgpt/).
- **Construtor que não deixa entregar o texto pronto:** refaça as páginas principais (início, serviços e contato) com o texto pronto no código. É o tipo de trabalho do nosso serviço [Site que o Google e a IA recomendam](/#servicos).

## Quando o construtor de IA basta e quando vale chamar alguém?

O construtor basta para começar se o site passou no teste, tem texto que responde às dúvidas do cliente e está no Search Console. Vale chamar ajuda quando o site não passa no teste, quando a empresa depende de ser encontrada (serviço local ou venda para outras empresas) ou quando você quer blog e medição.

Para a parte da medição, veja como [medir de onde vêm os clientes que chegam pelo site](/blog/metricas-de-marketing-digital/). Na nossa avaliação, o erro mais caro é descobrir meses depois que o site nunca foi lido. Site bonito que ninguém encontra não fatura.

## Perguntas frequentes

### Dá para criar site com IA de graça?

Há construtores com plano gratuito. Confira na página oficial o que o plano inclui antes de decidir. O teste do código-fonte vale para qualquer plano.

### Por que meu site não aparece no Google?

Três causas comuns: o site ainda não foi indexado, o texto é montado no navegador ou está em imagem, ou o robots.txt (o arquivo que diz quais robôs podem entrar no site) bloqueia o robô. Comece pela Inspeção de URL do Search Console, que mostra se a página está no Google.

### Meu site do Wix não aparece no Google: o que fazer?

Cadastre o site no Google Search Console e use a Inspeção de URL na página que não aparece. Confira também se serviços, endereço e telefone estão escritos como texto, fora de imagem. Segundo a Wix, os sites dela já saem com a página montada no servidor, então vale começar pela indexação e pelo texto.

### Lovable é bom para criar sites?

É uma ferramenta rápida para montar sites e apps. Segundo a FAQ da Lovable, os projetos novos renderizam no servidor e, nos antigos, ela entrega cópias prontas das páginas aos buscadores verificados e aos robôs de IA. Se o seu projeto for antigo, veja se dá para atualizá-lo para a estrutura nova.

### Como fazer meu site aparecer no Google grátis?

Cadastre o site no Google Search Console, que é gratuito, envie o sitemap (a lista de páginas do site) e confira que o texto está no código da página. Mesmo assim, o próprio Google avisa, na página sobre recursos de IA na busca: "A indexação e a veiculação não são garantidas".

## Por onde começar?

Faça o teste de 5 minutos hoje, na página inicial e na de serviços. Se o texto não aparecer no código, ou se você não quiser mexer nisso sozinho, veja [como funciona o diagnóstico de 45 minutos](/#como) e [marque seu diagnóstico grátis](/#vaga): olhamos o seu site junto com você e você sai com preço e prazo fechados para resolver.
