# No-code vale a pena? Quando trocar por código sob medida

No-code vale a pena quando a startup precisa validar uma ideia rápido e gastando pouco: dá para ter um MVP (a primeira versão enxuta do produto) no ar em semanas. O código sob medida entra quando as regras ficam complexas, as integrações se multiplicam, o custo por uso cresce ou os dados precisam ser seus.

Se você é fundador, provavelmente já viveu as duas pontas dessa história. No começo, a ferramenta no-code foi a melhor decisão possível naquele momento: o produto saiu do papel sem contratar ninguém. Meses depois, cada funcionalidade nova vira uma gambiarra e a conta da plataforma não para de subir. Este texto é para ajudar você a decidir em qual das duas pontas está.

## Quando o no-code vale a pena para uma startup?

Vale na fase de validação, quando a pergunta principal ainda é "alguém paga por isso?". No-code é construir sem escrever código, montando blocos prontos numa ferramenta visual. O MVP serve para testar se a ideia vende antes de gastar o caixa em desenvolvimento.

Nessa fase, velocidade vale mais que perfeição. Alguns cenários em que o no-code costuma ser a escolha certa:

- **Uma página com cadastro de interessados** para medir se o problema existe.
- **Um app simples de agendamento ou pedidos** para os primeiros clientes usarem de verdade.
- **Um painel interno** para o time acompanhar operação e vendas.

Ideia no papel não fatura. Com no-code, você coloca o produto na mão do cliente e aprende com o uso real, em vez de passar meses especificando.

## Quais limites do no-code aparecem quando o produto cresce?

Os limites aparecem em cinco lugares: regras de negócio, integrações, custo por uso, desempenho e propriedade do código e dos dados. Nenhum deles é defeito da ferramenta; é o preço de usar blocos prontos.

| Limite | Como aparece no dia a dia | O que dizem as fontes |
|---|---|---|
| Regras complexas | Cada exceção vira um fluxo novo, difícil de entender e manter | Avaliação nossa, sem número |
| Integrações | Você depende dos conectores que a ferramenta oferece | Avaliação nossa, sem número |
| Custo por uso | A conta sobe junto com o número de clientes | O [n8n](https://n8n.io/pricing/), ferramenta de automação de fluxos, cobra os planos de nuvem por execuções de fluxo por mês; o [Bubble](https://bubble.io/pricing), plataforma para criar apps sem código, inclui uma cota de "workload units" (unidades de uso do servidor) por plano |
| Desempenho | Telas lentas quando muitos usuários entram ao mesmo tempo | Avaliação nossa, sem número |
| Dono do código | Você não consegue levar o produto para outro lugar | O [Bubble](https://bubble.io/support/en/articles/8525080-can-i-export-my-bubble-application) informa que hoje não permite exportar o código nem hospedar o app fora dele |

O último item merece atenção. Segundo o [suporte do Bubble](https://bubble.io/support/en/articles/8525080-can-i-export-my-bubble-application), dá para exportar o app em JSON (um arquivo de dados estruturados), que o próprio Bubble descreve como feito para importar em outro app Bubble, e os dados em CSV (planilha).

Já o [Lovable](https://docs.lovable.dev/integrations/github), que cria apps a partir de instruções em texto com IA, permite exportar e sincronizar o código com o GitHub, que funciona como um cofre onde o código fica guardado, e levar o projeto para outro lugar. A ferramenta que você escolhe hoje decide o quanto vai custar sair dela amanhã.

O mesmo raciocínio vale para agentes de IA: mostramos esse limite na prática no post sobre [o limite do no-code num agente de WhatsApp](/blog/agente-de-ia-para-whatsapp/).

## Como saber que chegou a hora de sair do no-code?

Responda às seis perguntas abaixo sobre o seu produto. Na nossa avaliação, são os sinais que mais pesam quando analisamos uma startup no diagnóstico:

1. **Você recusa funcionalidade porque a ferramenta não deixa?**
2. **Cada nova regra vira uma gambiarra que só uma pessoa do time entende?**
3. **Você precisa ligar sistemas que a ferramenta não conecta?**
4. **A conta da plataforma cresce mais rápido que a receita?**
5. **Os usuários reclamam de lentidão?**
6. **Um investidor ou um cliente grande perguntou de quem é o código e onde ficam os dados?**

Como ler o resultado: um sinal isolado pede atenção e acompanhamento. Dois ou mais sinais que se repetem todo mês indicam que é hora de planejar a passagem para código sob medida.

## Como fazer a conta do custo por uso antes de decidir?

Faça a conta com os seus números antes de decidir por impressão. Um exemplo hipotético, para mostrar o raciocínio: imagine um fluxo no n8n que roda a cada pedido de cliente. Com 100 pedidos por dia, são 100 vezes 30 dias, ou 3.000 execuções por mês.

Na [página de preços do n8n](https://n8n.io/pricing/), na data desta publicação, o plano Starter cobre 2,5 mil execuções por mês, a 20 euros mensais com cobrança anual. Uma execução é uma rodada inteira do fluxo, não importa quantos passos ele tenha. No exemplo, você já passou do Starter, e o próximo é o Pro, com 10 mil execuções a 50 euros mensais.

Para repetir a conta no seu produto:

1. **Quanto uso cada cliente gera por mês** (execuções, no n8n; unidades de uso, no Bubble).
2. **Quantos clientes você prevê em 12 meses.**
3. **Qual plano comporta esse volume** e quanto ele custa.

Compare o resultado com o custo de manter código próprio: servidor, manutenção e o desenvolvimento em si. Se a plataforma ainda sai mais barata no horizonte de um ano, fique nela.

## Como a Nocodeia faz a passagem do no-code para o código sob medida?

Começamos rápido com no-code para validar e partimos para código sob medida quando o negócio pede. É assim que trabalhamos com startups:

1. **Diagnóstico grátis de 45 minutos.** Entendemos o produto, o momento da startup e onde dói. Veja [como funciona o diagnóstico](/#como).
2. **Escopo com preço e prazo fechados.** Você sabe quanto vai pagar e quando recebe, antes de começar.
3. **MVP no ar em 2 a 6 semanas.** No-code, código ou a combinação dos dois, conforme o que o produto precisa. É o nosso [MVP de produto no ar em semanas](/#servicos).
4. **Migração por partes.** Quando os sinais da seção anterior aparecem, reescrevemos em código primeiro a parte que mais dói, mantendo no ar o que já funciona.

Construímos sistemas sob medida, como o Proacta CRM, um CRM (sistema de gestão de clientes) de vendas com agente de prospecção no LinkedIn, e uma plataforma de gestão de metas (OKR). Veja os [projetos sob medida que já entregamos](/#projetos).

## Reescrever tudo do zero ou migrar por partes?

Na maioria dos casos, por partes. Reescrever tudo de uma vez significa meses sem entregar nada novo ao cliente, e a startup não tem esse tempo. A ordem que costuma funcionar:

1. **Os dados primeiro.** Confirme que você consegue tirá-los da ferramenta. No Bubble, os dados saem em CSV; no Lovable, o código vai para o GitHub.
2. **A parte com a regra mais complexa ou o custo mais alto.** É onde o código sob medida devolve o investimento mais rápido.
3. **As telas por último.** O cliente percebe pouco a troca se o resto já funciona bem.

Uma dica para quem ainda vai escolher a ferramenta: antes de começar, confira se ela deixa você levar o código e os dados embora. Essa resposta pesa mais do que a lista de recursos.

## Quando ficar no no-code é a melhor decisão?

Fique no no-code enquanto você ainda não tem clientes pagantes, as regras são simples, o número de usuários é pequeno ou a ferramenta é de uso interno de um time pequeno. Fique também quando a conta do custo por uso mostra que a plataforma sai mais barata que manter código. Migrar cedo demais queima o caixa que deveria ir para validar o produto.

## Perguntas frequentes

### Dá para fazer um MVP no-code?

Dá, e para muitas startups é o melhor jeito de começar. Com ferramentas no-code, você coloca a primeira versão no ar em semanas e testa com clientes reais antes de investir em desenvolvimento.

### O Lovable é escalável?

A documentação não fala em escala; o que ela garante é que o código pode ser exportado e sincronizado com o GitHub e levado para outro lugar. Isso permite que programadores continuem o produto fora da ferramenta quando ele crescer.

### Qual a diferença entre no-code e low-code?

No-code é construir sem escrever código, só com blocos visuais. Low-code combina blocos visuais com trechos de código para o que os blocos não resolvem.

### Bubble ou Lovable: qual escolher?

Depende do quanto você quer poder levar o produto embora. Segundo as fontes oficiais, o Bubble hoje não permite exportar o código nem hospedar o app fora dele, e o Lovable permite exportar o código para o GitHub.

### Quais as limitações do n8n?

Nos planos de nuvem, o n8n cobra por execuções de fluxo por mês, então o custo acompanha o volume de uso. A [edição Community](https://docs.n8n.io/hosting/), instalada no seu próprio servidor, é gratuita, mas aí a manutenção do servidor fica com você.

## Sua startup chegou ao limite do no-code?

No diagnóstico gratuito de 45 minutos, a gente olha o seu produto, aponta quais sinais já apareceram e diz se é hora de migrar ou de continuar no no-code. Você sai com preço e prazo fechados. [Marque seu diagnóstico grátis](/#vaga).
