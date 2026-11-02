# Comércio agêntico: o que a IA lê no catálogo da sua loja

Comércio agêntico é a compra feita com ajuda de um agente de IA, que pesquisa, compara e, em alguns casos, fecha o pedido pelo cliente. Para escolher, o agente consulta os dados da loja: produto, preço, estoque, frete e condições de venda. Se ele não entende a oferta, dificilmente a escolhe.

Agente de IA é um assistente que executa tarefas, não só responde. Preparar a Black Friday (27 de novembro) só com banner e cupom deixa uma parte de fora. Quem pede ao ChatGPT "um vestido midi azul até R$ 200" recebe uma comparação montada com dados, e título vago ou estoque desatualizado atrapalham.

## O que é comércio agêntico e o que já funciona no Brasil?

Comércio agêntico é o cliente entregar a compra, ou parte dela, a um programa que age por ele. Segundo uma [reportagem do O Tempo](https://www.otempo.com.br/economia/2026/10/29/agentes-de-ia-vao-fazer-compras-por-voce-o-que-ja-funciona-no-brasil), de 29/10/2026, o agente de compra opera em quatro etapas:

1. O cliente descreve o que quer, com orçamento, marca preferida e prazo.
2. O sistema vasculha catálogos, verifica o estoque, compara preços e acha cupons.
3. Ele filtra as opções e apresenta a melhor.
4. Preenche a entrega, aplica o pagamento autorizado e conclui o pedido.

A autonomia muda com a compra: em itens recorrentes, como ração, o agente pode agir com mais independência; em compras caras ou de gosto, como roupas, a maioria dos sistemas pede confirmação antes de pagar.

No Brasil, segundo o O Tempo, a Visa e o Banco do Brasil concluíram em março de 2026 uma compra em nome do consumidor, descrita como a primeira desse tipo no país em ambiente de produção controlado. Em setembro, a Amazon anunciou a Alexa para Compras em beta. ChatGPT e Gemini ajudam a pesquisar e comparar, mas não têm acesso ao checkout (a etapa de pagamento) das lojas nem pagam pelo usuário.

O [relatório da PYMNTS Intelligence com a Visa Acceptance Solutions](https://www.visaacceptance.com/content/dam/documents/campaign/shopping-index/2026-global-digital-shopping-index-agentic-edition.pdf), de julho de 2026, ouviu 5.241 consumidores de Estados Unidos, Brasil e Emirados Árabes Unidos, somados. Entre os compradores online, 48% usaram IA para pesquisar a compra mais recente: 30% o ChatGPT ou outra ferramenta da OpenAI, 19% o Gemini.

Na prática, hoje o agente mais pesquisa e compara do que paga. Na nossa avaliação, quem fica fora da comparação perde o cliente antes do clique.

## O que o agente de IA lê no catálogo da sua loja?

O agente lê os dados de cada produto, do nome à política de troca. A [especificação de catálogo da OpenAI](https://developers.openai.com/commerce/specs/file-upload/products), formato em que lojas parceiras enviam produtos ao ChatGPT, dá o retrato: nove campos obrigatórios, como título, descrição, marca, imagem, disponibilidade e preço; frete, devolução, código de barras e avaliações são opcionais.

| Dado | Exemplo bom (ilustrativo) |
|---|---|
| Nome com a variação | "Vestido midi azul-marinho, M" |
| Descrição factual | "Viscose, 110 cm, com forro" |
| Preço e promoção | "De R$ 229,90 por R$ 189,90" |
| Estoque | "P, M e G; GG esgotado" |
| Frete e prazo | "3 dias úteis para SP" |
| Troca e devolução | Link para a página de trocas |
| Marca e código de barras | GTIN em cada variação |

GTIN é o número embaixo do código de barras. SKU é o código interno de cada variação. O [artigo do E-Commerce Brasil sobre comércio agêntico](https://www.ecommercebrasil.com.br/artigos/comercio-agentico-como-se-adaptar-quando-o-cliente-e-a-ia) resume: o varejo precisa "estruturar catálogos, SKUs, preços, estoque, fretes e condições comerciais".

Ressalva: a OpenAI avisa que esse envio "currently targets the US" (hoje mira os Estados Unidos). A lista mostra o que um agente pede; não quer dizer que a loja brasileira já pode mandar o catálogo.

## Por que um catálogo bagunçado pode deixar sua loja para trás?

Porque o agente compara dados, não vitrine. No E-Commerce Brasil, Marcella Calfi, gerente de marketing da Zoop, escreve que "descrições ambíguas, informações incompletas e catálogos desatualizados" podem reduzir a visibilidade da loja nas compras feitas por agentes.

No relatório da PYMNTS, entre 1.185 lojistas dos três países ouvidos em março de 2026, só 15% tinham dados estruturados prontos para agentes de IA, e 23% conseguiam separar o tráfego vindo de IA do humano.

Dados estruturados são etiquetas no código da página que dizem ao robô "isto é o preço, isto é o estoque".

Exemplo ilustrativo (loja fictícia):

- **Antes:** "Vestido azul lindo, confira!"
- **Depois:** "Vestido midi azul-marinho, viscose, tamanhos P a GG, busto 88 a 104 cm, R$ 189,90, entrega em 3 dias úteis para SP."

Na nossa avaliação, aí está a chance da pequena loja, já que a maioria dos lojistas ouvidos ainda não tinha esses dados prontos. O relatório fala em "clear opportunity" (oportunidade clara) para quem sair na frente.

## Como conferir o que o agente enxerga na página do produto?

Olhe a página do produto como um robô olharia:

1. **Código-fonte.** Abra no Chrome um produto que vende bem, aperte Ctrl+U e, no código, Ctrl+F para procurar o preço, um tamanho e "em estoque". É o [teste do código-fonte do post sobre criar site com IA](/blog/criar-site-com-ia/), que fazemos no site da Nocodeia. Não achou? O dado pode estar montado no navegador ou só na imagem.
2. **Teste de pesquisa aprimorada.** Cole o endereço nessa ferramenta grátis do Google e veja se ela reconhece o preço e a disponibilidade. A [documentação do Google sobre dados estruturados de produto](https://developers.google.com/search/docs/appearance/structured-data/product?hl=pt-br) separa snippets de produto (página sem compra) e produtos do comerciante (página de compra).
3. **Merchant Center.** Confira se preço e estoque batem com os do Google Merchant Center, o painel onde a loja cadastra os produtos para o Google Shopping. Segundo o Google, ter dados estruturados na página e um feed (o arquivo com a lista de produtos) no Merchant Center "maximiza sua qualificação".
4. **Pergunta à IA.** Peça ao ChatGPT "vestido midi azul até R$ 200 com entrega em Campinas" e veja se a sua loja aparece. É uma fotografia, não uma medição: a resposta muda de pessoa para pessoa.

## O que arrumar no catálogo antes da Black Friday?

Comece pelos mais vendidos, nesta ordem:

1. **Título com a variação:** cor, tamanho ou modelo.
2. **Descrição factual:** medida, material e para quem serve.
3. **Preço igual na página, no feed e no checkout.** Na especificação da OpenAI, preço promocional maior ou igual ao cheio, ou em outra moeda, não é usado.
4. **Estoque atualizado,** com esgotado marcado como esgotado. Como referência, o [guia de início da OpenAI](https://developers.openai.com/commerce/guides/get-started) recomenda às parceiras enviar o catálogo completo pelo menos uma vez por dia.
5. **Frete e prazo visíveis na página,** não só no carrinho.
6. **Política de troca numa página própria,** com link no produto. O E-Commerce Brasil recomenda simplificar "cancelamentos, trocas, devoluções e estornos".
7. **Marca e código de barras** em cada variação.
8. **Dados estruturados de produto** na página.

Essas mesmas correções ajudam o Google e o cliente que compra pelo celular. Se não quiser fazer sozinho, é o trabalho do nosso serviço [Site que o Google e a IA recomendam](/#servicos), que para loja virtual inclui dados estruturados de produto e a configuração do Google Merchant Center.

## Como é um agente que consulta o catálogo por dentro?

É um agente que só responde bem o que está cadastrado. A Amora, que a Nocodeia montou para a Amore Totale, loja online de lingerie e produtos sensuais, busca produtos no catálogo, detalha tamanhos, cores e descrição, calcula o frete para o CEP e chama uma pessoa quando precisa.

Ela leva o cliente até o produto no site, onde a compra acontece. Nos primeiros meses, resolveu 80% das conversas sem humano, segundo a medição da Nocodeia. Veja [como a Amora atende a Amore Totale](/casos/amore-totale/).

Na montagem, foi preciso conferir e completar os dados do catálogo, como tamanhos, cores e frete, para a Amora responder certo. Na nossa avaliação, vale o mesmo para o agente de uma plataforma de compras.

## Vale a pena correr para vender dentro do ChatGPT agora?

Na nossa avaliação, ainda não é a prioridade da loja brasileira. O [guia de início da OpenAI](https://developers.openai.com/commerce/guides/get-started) diz que o envio de catálogos está "currently available to approved partners" (só para parceiros aprovados). A especificação acrescenta que "Eligibility does not guarantee display": estar habilitado para a busca não garante aparecer.

A prioridade é o catálogo legível no site e no Google, que já serve ao cliente de hoje. Desconfie de quem promete pôr a sua loja dentro do ChatGPT; se dá para pagar para aparecer, respondemos no guia sobre [como fazer a sua empresa aparecer no ChatGPT](/blog/como-fazer-minha-empresa-aparecer-no-chatgpt/).

## Perguntas frequentes

### O que significa comércio agêntico?

É a compra feita com ajuda de um agente de IA, que pesquisa, compara e pode fechar o pedido. Segundo o O Tempo, a diferença para o chatbot comum é a autonomia: o agente decide dentro dos limites que o cliente definiu.

### O que é o comércio agêntico da Visa?

É a plataforma Visa Intelligent Commerce, usada com o Banco do Brasil em março de 2026 numa compra em nome do consumidor, descrita pelo O Tempo como a primeira desse tipo no país, em ambiente controlado. Em outubro de 2025, diz a reportagem, a Visa lançou o Trusted Agent Protocol, que ajuda a loja a separar agentes legítimos de robôs maliciosos.

### Dá para comprar pelo ChatGPT?

Segundo o O Tempo, no Brasil o ChatGPT ajuda a pesquisar e comparar modelos, mas não tem acesso ao checkout das lojas nem paga pelo usuário. Na prática, o cliente fecha o pedido na loja.

### Como funciona a pesquisa de compras do ChatGPT?

Segundo o O Tempo, quem usa o ChatGPT para pesquisar uma compra descreve o que quer, define uma faixa de preço e pede comparações entre modelos. A loja entra na comparação com os dados que publica.

### Google Merchant Center: para que serve?

É o painel do Google onde a loja cadastra o catálogo por um feed, inclusive para as listagens sem custo. Segundo o Google, feed e dados estruturados na página, juntos, maximizam a qualificação dos produtos na busca.

## Por onde começar?

Faça hoje os quatro passos de conferência nos produtos mais vendidos. Se quiser ajuda, [marque seu diagnóstico grátis](/#vaga) de 45 minutos: olhamos uma página de produto da sua loja junto com você, e você sai com preço e prazo fechados.
