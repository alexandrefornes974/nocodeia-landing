# Quanto custa um agente de IA? O custo real por conversa

O custo de um agente de IA é a soma de quatro partes: modelo de IA, cobrado por token (pedaço de texto); canal, como o WhatsApp; servidor ou plataforma; e montagem. Na Zendesk, plataforma pronta, a resolução acima da franquia custa a partir de R$ 9,50, além da licença. No agente próprio, dá para estimar o custo por conversa.

Você quer colocar um agente de IA no atendimento do seu produto, e o sócio ou o investidor faz sempre a mesma pergunta: quanto isso vai custar quando o volume crescer? A resposta não cabe mais numa linha de licença. Este guia mostra como montar essa conta antes de o agente ir ao ar, sem chute.

## Por que o custo do atendimento com IA deixou de ser só uma licença fixa?

Porque a cobrança passou a seguir o uso ou o resultado, e não o número de atendentes. Antes, você pagava uma licença por atendente (o "assento") ou um chatbot de menu com mensalidade quase fixa. Com agentes de IA, cada conversa consome processamento do modelo, e os fornecedores repassam esse consumo.

O fundo de investimento Bessemer Venture Partners registrou a mudança em fevereiro de 2026: em geral, as empresas nativas de IA estão "abandonando a cobrança por assento em favor de modelos por uso, por entrega e por resultado", em tradução livre do [guia de preços e monetização de IA da Bessemer](https://www.bvp.com/atlas/the-ai-pricing-and-monetization-playbook).

Na prática, isso muda duas coisas para a sua startup. O custo sobe junto com o volume de conversas. E ele pode ser estimado por conversa. Um termo vai aparecer o tempo todo daqui em diante: token é o pedaço de texto, mais ou menos uma parte de palavra, que o modelo lê e escreve. É a unidade em que as APIs de IA cobram (API é a porta pela qual o seu sistema pede uma resposta ao modelo).

## Quais são as partes do custo de um agente de IA de atendimento?

São cinco: modelo de IA, canal, servidor ou plataforma, montagem e o tempo do humano de retaguarda nos casos que o agente passa adiante. As quatro primeiras são as da resposta acima.

| Parte | Como é cobrada | Referência |
|---|---|---|
| Modelo de IA | Por token de entrada (o que o modelo lê) e de saída (o que ele escreve) | Claude Sonnet 5.5: US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída, na [página de preços da Claude](https://claude.com/pricing), consultada em outubro de 2026 |
| Canal | No WhatsApp, a Meta cobra por mensagem de modelo entregue | Mensagens comuns dentro da janela de 24 horas aberta pelo cliente são grátis, segundo a [documentação de preços do WhatsApp](https://developers.facebook.com/docs/whatsapp/pricing) |
| Servidor ou plataforma | Hospedagem, banco de dados ou mensalidade de ferramenta | Depende de como o agente é construído |
| Montagem e ajustes | Projeto com escopo definido | Preço fechado depois do diagnóstico |
| Humano de retaguarda | Tempo da equipe nos casos que o agente passa adiante | Depende da regra de passagem |

Mensagem de modelo é o texto pré-aprovado que a empresa usa para puxar conversa ou avisar o cliente fora da janela. O detalhe de [quanto custam as mensagens do WhatsApp para um agente](/blog/agente-de-ia-para-whatsapp/) está no nosso guia sobre o tema.

Repare que só a primeira linha cresce a cada mensagem trocada. Na nossa avaliação, é nela que mora a maior parte das surpresas na fatura.

## Como estimar o custo por conversa antes de colocar o agente no ar?

Multiplique os tokens de uma conversa típica pelo preço do modelo. Em quatro passos:

1. **Conte as trocas.** Pegue conversas reais do seu suporte e veja quantas mensagens o cliente manda até resolver.
2. **Estime os tokens de cada troca.** A entrada inclui as instruções do agente, o trecho da base de conhecimento consultado e o histórico da conversa. A saída é a resposta.
3. **Multiplique pelo preço** da página oficial do modelo que você vai usar.
4. **Multiplique pelo volume** de conversas do mês.

Agora um exemplo hipotético, com números que você deve trocar pelos seus. Uma conversa de 8 trocas, com 3.000 tokens de entrada e 150 de saída por troca, soma 24.000 tokens de entrada e 1.200 de saída.

No Claude Sonnet 5.5, isso dá US$ 0,048 de entrada mais US$ 0,012 de saída: cerca de US$ 0,06 por conversa, ou US$ 60 a cada mil conversas. No Claude Haiku 5.5, modelo menor que custa US$ 0,10 e US$ 0,50 por milhão de tokens para pedidos de até 100 mil tokens, a mesma conversa sai por cerca de US$ 0,003.

Essa conta cobre só o modelo. Canal, servidor e montagem entram por fora.

## Pagar por resolução ou ter um agente próprio: qual compensa para a startup?

Depende do seu volume e do tamanho das conversas. Compare o custo por conversa que você calculou com o preço por resolução das plataformas prontas.

| Opção | Como cobra | O que observar |
|---|---|---|
| Intercom Fin | A partir de US$ 0,99 por resultado ("outcome"), cobrado uma vez por conversa, sem licença de atendente obrigatória, nos [preços da Intercom](https://www.intercom.com/pricing) | Com helpdesk (sistema de chamados do suporte) de outra empresa, há compromisso mínimo, por exemplo de 50 resultados por mês |
| Zendesk | Os planos incluem 5 ou 10 resoluções automatizadas por atendente com licença, por mês. A adicional custa R$ 9,50 no compromisso ou R$ 12 avulsa, nos [preços da Zendesk](https://www.zendesk.com.br/pricing/) | A franquia cresce com o número de licenças de atendentes |
| Agente próprio | Tokens + canal + servidor + montagem | Exige montagem; o custo por conversa segue a conta da seção anterior |

A cobrança por resolução é previsível por unidade e dispensa montagem. O outro lado: o preço é o mesmo para conversa curta ou longa. A própria Bessemer usa o Fin como exemplo: "se o Fin resolve um chamado em três mensagens ou em trinta, o cliente paga o mesmo". E cada fornecedor define o que conta como resolução. Na Intercom, a definição inclui, por exemplo, a conversa em que o cliente para de pedir ajuda.

O agente próprio pede investimento de montagem. Na nossa avaliação, ele faz mais sentido quando o volume é alto e o agente precisa conversar com os sistemas da sua startup, como CRM (sistema de gestão de clientes), banco de dados e cobrança. A regra prática: faça a conta e compare no seu volume real, não no volume do slide.

## O que faz o custo de um agente de IA explodir?

Contexto inflado, modelo caro para pergunta simples e conversa sem fim. Os vilões mais comuns, cada um com o seu controle:

- **Instruções e base de conhecimento enormes enviadas em toda troca.** Controle: cache, que reaproveita a parte fixa do texto. Na página da Claude, ler do cache no Sonnet 5.5 custa US$ 0,10 por milhão de tokens, contra US$ 2 da entrada normal.
- **Modelo caro respondendo "qual o horário de vocês?".** Controle: um modelo menor faz a triagem e só chama o maior quando precisa.
- **Conversa andando em círculo.** Controle: limite de trocas. Depois dele, um humano assume.
- **Mensagens de modelo do WhatsApp fora da janela de 24 horas.** Controle: concentrar o atendimento dentro da janela aberta pelo cliente.
- **Ninguém olhando a fatura.** Controle: alerta de gasto quando o mês passa de um valor combinado.

Um aviso contra a conta otimista: a Claude dá 50% de desconto no processamento em lote, mas o lote não serve para atendimento ao vivo, porque a resposta não sai na hora.

## Como a Nocodeia mantém o custo dos agentes sob controle?

Colocando os controles no projeto desde o começo, e não depois da primeira fatura. Nós construímos agentes programados sob medida, como o agente de prospecção do Proacta CRM e os agentes de conteúdo da Amore Totale. O caminho é sempre o mesmo:

1. **Diagnóstico grátis de 45 minutos** para entender o atendimento e o volume de conversas.
2. **Escopo com preço e prazo fechados**, já considerando o volume de conversas do diagnóstico.
3. **Entrega, em geral, em 2 a 4 semanas**, já com quatro controles: modelo menor na triagem, cache das instruções, limite de trocas com passagem para humano e alerta de gasto.

Eles se somam às [regras de controle para cada agente](/blog/governanca-de-agentes-de-ia/) que já descrevemos, como aprovação humana nas ações de risco e trilha de auditoria.

## Quando um agente de IA não compensa para a sua startup?

Quando o volume de conversas é baixo ou as perguntas são raras e muito diferentes entre si. Outros sinais: não existe uma base de informação organizada para o agente consultar, ou uma boa página de perguntas frequentes já resolve.

Para nós, nesses casos a montagem não se paga, e um humano bem treinado resolve melhor. A lógica é a mesma [da conta do custo por uso de uma plataforma no-code](/blog/no-code-vale-a-pena/): faça a conta antes de decidir.

## Perguntas frequentes

### Quanto custa criar um agente de IA?

A criação, ou montagem, é um custo separado da operação e depende do escopo: canais, integrações e regras. Por isso fechamos o preço depois do diagnóstico, e não com um número genérico.

### Quanto custa um chatbot com IA?

Depende do modelo de cobrança. Plataformas prontas, como Intercom e Zendesk, cobram por resolução; um chatbot próprio paga por token do modelo usado. O chatbot de menu, sem IA, não consome tokens.

### Quanto custa um token de IA?

Cada modelo tem o seu preço, cobrado por milhão de tokens. No Claude Sonnet 5.5, são US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída, segundo a página oficial em outubro de 2026.

### Quanto custa a API do WhatsApp?

A Meta cobra por mensagem de modelo entregue, com preço que varia por país e categoria. Mensagens comuns dentro da janela de 24 horas aberta pelo cliente são grátis.

### Existe agente de IA grátis?

Há ferramentas com planos gratuitos limitados, bons para testar. Um agente em produção paga pelo modelo e pelo canal conforme o uso.

## Quer saber quanto vai custar o agente da sua startup?

No diagnóstico gratuito de 45 minutos, a gente olha o seu atendimento e o volume de conversas e diz com franqueza se vale ter um agente. Você sai com preço e prazo fechados para [agentes de IA sob medida](/#servicos). [Marque seu diagnóstico grátis de 45 minutos](/#vaga).
