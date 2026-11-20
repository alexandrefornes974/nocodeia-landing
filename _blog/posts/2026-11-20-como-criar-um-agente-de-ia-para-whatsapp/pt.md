# Como criar um agente de IA para WhatsApp: comece pelo site

Criar um agente de IA para WhatsApp é montar um assistente que conversa com o cliente e executa tarefas. O caminho mais seguro é começar por um chat no seu site e só depois ligar a API oficial. No Brasil, a Meta cobra R$ 0,035 por mensagem de atendimento, a partir da 1.001ª do mês.

Se você quer colocar um agente para atender no WhatsApp, mas ainda não sabe quantas conversas vai ter nem quais perguntas chegam, este guia é para você. Mostramos os valores oficiais da Meta, uma conta de exemplo e a ordem que seguimos nos projetos da Nocodeia.

## Como criar um agente de IA para WhatsApp em 5 passos?

Para criar um agente de IA para WhatsApp, siga esta ordem. Cada passo tem uma seção própria mais abaixo.

1. **Defina o escopo:** liste as 10 perguntas que mais chegam ao seu atendimento.
2. **Monte o agente no chat do site:** reúna as informações, as ações e a regra de passagem para uma pessoa.
3. **Treine com conversas reais:** teste, registre os erros e corrija até o agente atingir o seu critério de "pronto".
4. **Ligue a API oficial do WhatsApp:** com número, modelos de mensagem aprovados e a passagem para uma pessoa.
5. **Acompanhe o custo das mensagens:** compare o volume do mês com a tabela da Meta, na calculadora abaixo.

## Por que começar pelo chat do site e não direto pela API do WhatsApp?

Porque o chat do site deixa o agente errar, aprender e ser ajustado antes de você abrir o WhatsApp para clientes de verdade. Esse chat, que os técnicos chamam de widget, fica no canto da página. Ele conversa com o visitante do mesmo jeito que o agente conversaria no WhatsApp, só que sem passar pela API da Meta.

A API é o passo seguinte do chat do site, e não uma alternativa a ele. O agente é o mesmo; muda só o canal. Na Nocodeia seguimos essa ordem: primeiro o chat do site, depois o treino, e por fim a API do WhatsApp para atender o cliente por lá.

| | Chat no site | API oficial do WhatsApp |
|---|---|---|
| Onde roda | No seu site | No WhatsApp, pela plataforma da Meta |
| O que você paga | Modelo de IA e hospedagem; nenhuma tarifa de mensagem do WhatsApp | Tarifa da Meta por mensagem entregue, mais o provedor (varia, consulte) |
| Para que serve | Treinar, ver as perguntas reais e ajustar | Atender o cliente onde ele já está |

## Quanto custa cada mensagem na API do WhatsApp?

A Meta cobra por mensagem entregue, e o valor depende do tipo. Ela não cobra pela mensagem que o cliente manda para a empresa. Os valores abaixo são do Brasil, na tabela oficial em vigor desde 1º de outubro de 2026, consultada em 20 de novembro de 2026 na seção "Rate cards and volume tiers" da [documentação de preços da Meta](https://developers.facebook.com/docs/whatsapp/pricing). A [calculadora oficial do WhatsApp](https://whatsappbusiness.com/pt-br/products/platform-pricing/#rates) também mostra as tarifas por país.

| Tipo de mensagem | Quando é cobrada | Valor por mensagem |
|---|---|---|
| Marketing | Cada modelo de marketing entregue (promoção, novidade, reativação) | R$ 0,3217 (US$ 0,0625) |
| Utilidade | Cada modelo de utilidade entregue (confirmação de pedido, aviso de entrega) | R$ 0,035 (US$ 0,0068) |
| Autenticação | Cada código de verificação entregue | R$ 0,035 (US$ 0,0068) |
| Atendimento | Cada resposta livre dentro da janela de 24 horas, a partir da 1.001ª do mês, por número | R$ 0,035 (US$ 0,0068) |

Mensagem de atendimento é a resposta livre que o agente envia dentro da janela de 24 horas, que abre quando o cliente escreve. É onde o agente de IA trabalha. A Meta não cobra as primeiras 1.000 mensagens de atendimento de cada mês, por número. A de marketing custa cerca de 9 vezes mais que a de atendimento.

Veja uma conta de exemplo. Ela é hipotética: troque pelos seus números. São 3.000 conversas por mês, com 6 mensagens do agente em cada uma, e mais 2.000 mensagens de marketing.

- Atendimento: 3.000 × 6 = 18.000 mensagens. Tirando as 1.000 sem cobrança por número, ficam 17.000 × R$ 0,035 = R$ 595,00.
- Marketing: 2.000 × R$ 0,3217 = R$ 643,40.
- Total das mensagens do WhatsApp: R$ 595,00 + R$ 643,40 = R$ 1.238,40 por mês.

Esse total não inclui o modelo de IA, a hospedagem, a montagem nem a mensalidade do provedor, que varia de um para outro. As 6 mensagens por conversa são suposição do exemplo, e não média de mercado. A conta também pressupõe que nenhuma conversa veio de anúncio com janela gratuita.

O que a conta mostra: a mensagem de atendimento é barata, e o que pesa é o volume e o marketing. Por isso vale descobrir o seu volume real antes de assinar provedor e número.

<div class="nc-calc" data-nc-calc>
<link rel="stylesheet" href="/calculadora-whatsapp/calculadora.css">
<p class="nc-calc__titulo">Calcule com os seus números</p>
<div class="nc-calc__form" role="group" aria-label="Os seus números de mensagens do WhatsApp">
<div class="nc-calc__campo"><label for="nc-calc-conversas">Conversas por mês</label><span class="nc-calc__dica" id="nc-calc-d-conversas">Conversas em que o cliente escreve primeiro e o agente responde.</span><input id="nc-calc-conversas" data-campo="conversas" type="text" inputmode="numeric" autocomplete="off" value="3000" aria-describedby="nc-calc-d-conversas nc-calc-e-conversas"><p class="nc-calc__erro" id="nc-calc-e-conversas" data-erro="conversas"></p></div>
<div class="nc-calc__campo"><label for="nc-calc-mensagens">Mensagens do agente por conversa</label><span class="nc-calc__dica" id="nc-calc-d-mensagens">Respostas livres dentro da janela de 24 horas (atendimento). O 6 do exemplo é suposição, não média de mercado.</span><input id="nc-calc-mensagens" data-campo="mensagens" type="text" inputmode="numeric" autocomplete="off" value="6" aria-describedby="nc-calc-d-mensagens nc-calc-e-mensagens"><p class="nc-calc__erro" id="nc-calc-e-mensagens" data-erro="mensagens"></p></div>
<div class="nc-calc__campo"><label for="nc-calc-marketing">Mensagens de marketing por mês</label><span class="nc-calc__dica" id="nc-calc-d-marketing">Promoção, novidade, reativação.</span><input id="nc-calc-marketing" data-campo="marketing" type="text" inputmode="numeric" autocomplete="off" value="2000" aria-describedby="nc-calc-d-marketing nc-calc-e-marketing"><p class="nc-calc__erro" id="nc-calc-e-marketing" data-erro="marketing"></p></div>
<div class="nc-calc__campo"><label for="nc-calc-utilidade">Mensagens de utilidade por mês</label><span class="nc-calc__dica" id="nc-calc-d-utilidade">Confirmação de pedido, aviso de entrega.</span><input id="nc-calc-utilidade" data-campo="utilidade" type="text" inputmode="numeric" autocomplete="off" value="0" aria-describedby="nc-calc-d-utilidade nc-calc-e-utilidade"><p class="nc-calc__erro" id="nc-calc-e-utilidade" data-erro="utilidade"></p></div>
<div class="nc-calc__campo"><label for="nc-calc-autenticacao">Mensagens de autenticação por mês <span class="nc-calc__opc">(opcional)</span></label><span class="nc-calc__dica" id="nc-calc-d-autenticacao">Códigos de verificação. Pode deixar em 0.</span><input id="nc-calc-autenticacao" data-campo="autenticacao" type="text" inputmode="numeric" autocomplete="off" value="0" aria-describedby="nc-calc-d-autenticacao nc-calc-e-autenticacao"><p class="nc-calc__erro" id="nc-calc-e-autenticacao" data-erro="autenticacao"></p></div>
<div class="nc-calc__campo"><label for="nc-calc-numeros">Telefones comerciais (números)</label><span class="nc-calc__dica" id="nc-calc-d-numeros">As 1.000 primeiras mensagens de atendimento do mês não são cobradas, para cada número.</span><input id="nc-calc-numeros" data-campo="numeros" type="text" inputmode="numeric" autocomplete="off" value="1" aria-describedby="nc-calc-d-numeros nc-calc-e-numeros"><p class="nc-calc__erro" id="nc-calc-e-numeros" data-erro="numeros"></p></div>
</div>
<noscript><p class="nc-calc__sem-js">O JavaScript está desligado, então a conta não recalcula. O resultado abaixo é o do exemplo (3.000 conversas, 6 mensagens por conversa e 2.000 de marketing).</p></noscript>
<div class="nc-calc__saida">
<p class="nc-calc__titulo">Quanto a Meta cobra por mês</p>
<div class="nc-calc__resultado" data-resultado><!--nc-pre--><dl class="nc-calc__linhas"><div class="nc-calc__linha"><dt>Mensagens de atendimento no mês<small>3.000 conversas × 6 mensagens</small></dt><dd>18.000</dd></div><div class="nc-calc__linha"><dt>Dentro da franquia (não cobradas)<small>1.000 por número × 1 número</small></dt><dd>1.000</dd></div><div class="nc-calc__linha"><dt>Mensagens de atendimento cobradas</dt><dd>17.000</dd></div><div class="nc-calc__linha"><dt>Custo de atendimento<small>17.000 × R$ 0,035</small></dt><dd>R$ 595,00</dd></div><div class="nc-calc__linha"><dt>Marketing<small>2.000 × R$ 0,3217</small></dt><dd>R$ 643,40</dd></div><div class="nc-calc__linha"><dt>Utilidade<small>0 × R$ 0,035</small></dt><dd>R$ 0,00</dd></div><div class="nc-calc__linha"><dt>Autenticação<small>0 × R$ 0,035</small></dt><dd>R$ 0,00</dd></div></dl><div class="nc-calc__total"><p class="nc-calc__total-rot">Total por mês na API oficial</p><p class="nc-calc__total-valor">R$ 1.238,40</p><p class="nc-calc__total-ano">Total por ano (× 12): <span>R$ 14.860,80</span></p></div><p class="nc-calc__chat">No chat do site, a tarifa de mensagem do WhatsApp é <strong>R$ 0,00</strong> (o modelo de IA e a hospedagem existem nos dois canais).</p><!--/nc-pre--></div>
<p class="nc-calc__so-leitor" data-resumo aria-live="polite" aria-atomic="true"></p>
</div>
<div class="nc-calc__avisos">
<p><strong>Estimativa.</strong> Não inclui modelo de IA, hospedagem, montagem do agente nem a mensalidade do provedor (varia por provedor, consulte). Acima de 250 mil mensagens de utilidade ou de 500 mil de autenticação por mês, a Meta aplica desconto por volume, que esta calculadora não considera.</p>
<p>Tarifas do Brasil em reais, vigentes desde 1º de outubro de 2026, consultadas em 20 de novembro de 2026. A Meta só pode reajustar no primeiro dia de um trimestre: confira a tabela oficial antes de decidir. Fontes: <a href="https://developers.facebook.com/docs/whatsapp/pricing" target="_blank" rel="noopener">documentação oficial de preços da Meta</a> e <a href="https://whatsappbusiness.com/pt-br/products/platform-pricing/#rates" target="_blank" rel="noopener">calculadora oficial do WhatsApp Business</a>.</p>
<p>Pressupõe que nenhuma conversa veio de anúncio com janela gratuita e que todas as mensagens são entregues.</p>
</div>
<script src="/calculadora-whatsapp/calculadora.js" defer></script>
</div>

Prefere tela cheia? Abra a [calculadora completa](/calculadora-whatsapp/).

## Como montar o agente no chat do seu site?

Monte o agente com um escopo pequeno e claro. Agente de IA, aqui, é um assistente que responde e também executa tarefas, como consultar o catálogo ou avisar uma pessoa. Cinco passos resolvem a primeira versão:

1. **Escopo:** liste as 10 perguntas que mais chegam ao seu atendimento.
2. **Base de informações:** escreva preços, prazos, política de troca e horários em linguagem simples, num só lugar.
3. **Ações:** defina o que o agente faz além de responder, como consultar estoque, agendar ou registrar um pedido.
4. **Passagem para uma pessoa:** decida quando o agente chama a equipe e como ele entrega o resumo da conversa.
5. **Posição do chat:** coloque o chat onde a dúvida aparece, como a página de produto ou de preços.

Se preferir não montar sozinho, a Nocodeia constrói [agentes de IA sob medida](/#servicos), programados para o seu caso. Os custos de um projeto assim se dividem em montagem, modelo de IA, hospedagem e manutenção. Na Nocodeia, o preço e o prazo saem fechados do diagnóstico grátis de 45 minutos.

## Como treinar o agente no chat do site antes de abrir o WhatsApp?

Treine em ciclos curtos, com conversas de verdade. Cada rodada tem cinco movimentos:

1. **Rode conversas reais:** use as perguntas dos visitantes e as de conversas antigas do seu atendimento.
2. **Teste o cliente difícil:** pergunte fora do escopo, escreva com raiva, mude de assunto no meio.
3. **Registre cada erro:** anote a pergunta, a resposta dada e a resposta certa.
4. **Corrija a base e as regras:** ajuste a informação e o limite do agente, e não só a frase que errou.
5. **Defina o seu "pronto":** por exemplo, responder certo as 10 perguntas mais comuns e passar para uma pessoa quando não souber. Sem prometer porcentagem de acerto.

Treinar direto no WhatsApp custaria pouco em tarifa. Com 500 conversas de teste e 6 respostas em cada, são 3.000 mensagens: (3.000 − 1.000) × R$ 0,035 = R$ 70,00, sem contar a franquia já usada por clientes reais no mês.

O ganho do chat do site é outro: você aprende antes de abrir o canal e não expõe o cliente a um agente ainda cru. A conta do modelo de IA, que existe no chat do site e no WhatsApp, é outro item do custo e não entra nessas tarifas.

## Quando e como ligar a API do WhatsApp?

Ligue a API quando o agente já responder bem pelo seu critério e houver volume que justifique o canal. O que muda é pouco: o agente é o mesmo, e você troca o canal. Em geral entram estas peças:

1. **Número e conta** na plataforma da Meta, direto ou por um provedor autorizado (empresa que conecta o seu agente à API).
2. **Modelos de mensagem aprovados**, que são textos prontos, aprovados pela Meta, para falar com o cliente fora da janela de 24 horas.
3. **A passagem para uma pessoa**, agora dentro do WhatsApp.
4. **O controle de volume**, olhando a conta do mês contra a tabela de valores.

Para comparar as opções de agente antes de escolher, veja [os 3 caminhos para ter um agente no WhatsApp](/blog/agente-de-ia-para-whatsapp/).

## E se o seu nicho não puder usar a API oficial do WhatsApp?

Nesse caso, o chat do site deixa de ser uma etapa e vira o canal principal. A política de mensagens do WhatsApp Business (Seção 4, acessada em 20 de novembro de 2026) lista "produtos e serviços para adultos" entre os itens que não podem ser comprados, vendidos ou promovidos pelo WhatsApp Business. A lista inclui também armas de fogo, álcool e tabaco, entre outros. Veja a [política completa do WhatsApp Business](https://whatsappbusiness.com/pt-br/policy/).

A Nocodeia já aplicou esse caminho em clientes de nichos que o WhatsApp não aceita na API oficial. Um exemplo é a Amore Totale, loja virtual em que o WhatsApp ficou fora das vendas por causa da política do WhatsApp Business. A Amora, agente de atendimento da loja, atende no site 24 horas e no Instagram e no Facebook, numa central de conversas (Chatwoot).

Quando a conversa pede uma pessoa, a equipe recebe um alerta no Telegram com um resumo da conversa.

Nos primeiros meses, 80% das conversas foram resolvidas pela Amora sem humano. É uma medição da Nocodeia, com número autorizado pelo cliente. Veja [o caso da Amore Totale](/casos/amore-totale/) completo.

## Quando não vale a pena começar pelo chat do site?

Quando o seu site quase não recebe visitas. Sem conversas reais, o treino fica sem material. Nesse caso, use as perguntas antigas do seu atendimento no WhatsApp como base e teste o agente num ambiente de teste, com poucas pessoas.

O mesmo vale se o seu negócio vive só no WhatsApp. Dá para treinar com um grupo pequeno de clientes avisados, antes de abrir para todos. O ponto é o mesmo: errar com poucos antes de acertar com muitos.

## Perguntas frequentes

### Como criar um agente de IA para WhatsApp grátis?

Dá para começar sem pagar mensagem do WhatsApp, treinando o agente no chat do seu site. O modelo de IA e a hospedagem têm custo, e a API oficial cobra por mensagem de atendimento a partir da 1.001ª do mês. Por isso, trate "grátis" como "sem tarifa de mensagem do WhatsApp durante o treino".

### Quanto custa cada mensagem na API do WhatsApp?

No Brasil, a tabela oficial da Meta, em vigor desde 1º de outubro de 2026, cobra R$ 0,035 por mensagem de atendimento, utilidade e autenticação, e R$ 0,3217 por mensagem de marketing. As primeiras 1.000 mensagens de atendimento de cada mês, por número, não são cobradas. A Meta só pode reajustar os valores no primeiro dia de um trimestre, então confira a tabela atual antes de decidir.

### Agente de IA no WhatsApp Business é pago?

Depende do caminho. Na API oficial, a Meta cobra por mensagem, com 1.000 mensagens de atendimento por mês sem cobrança, por número. Além da Meta, entram o modelo de IA, o provedor e a montagem do agente.

### Como treinar um agente de IA?

Rode conversas reais, teste perguntas difíceis e anote cada erro. Corrija a base de informações e as regras do agente, e não só a frase que errou. Repita até ele atingir o critério de "pronto" que você definiu.

## Próximo passo

Se quiser desenhar esse caminho com apoio, o [diagnóstico grátis de 45 minutos](/#vaga) olha o seu atendimento junto com você e diz com franqueza se vale ter um agente. Marque seu diagnóstico.
