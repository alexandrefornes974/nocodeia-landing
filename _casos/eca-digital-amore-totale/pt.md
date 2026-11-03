<div class="alerta" role="note">
<span class="rotulo">Lei 15.211/2025 · em vigor desde 17/03/2026</span>
<strong class="valor">Até <em>R$ 50 milhões</em> em multa.</strong>
<p>Por infração, ou até 10% do faturamento no Brasil. É o que o ECA Digital prevê para quem oferece produto ou conteúdo impróprio para menores de 18 anos sem verificação de idade confiável. O “tenho 18 anos” não vale mais.</p>
</div>

Desde 02/11/2026, quem toca em **Comprar** na Amore Totale confirma a idade com uma selfie com prova de vida, no próprio celular, em vez de clicar em “tenho 18 anos”. A Nocodeia colocou a verificação no ar em 15 dias de trabalho. A selfie, o CPF e a data de nascimento não ficam guardados com a Nocodeia, e nenhum pedido sai da loja sem a idade conferida.

O **Nocodeia EtariCheck** é a verificação de idade da Nocodeia para lojas virtuais +18: o comprador confirma que é maior de idade com uma selfie com prova de vida no momento da compra, e a loja fica com o registro de cada verificação, sem guardar a foto nem o CPF.

<div class="numeros">
<div><strong>15 dias</strong><span>de trabalho para a selfie funcionar na compra</span></div>
<div><strong>1 selfie</strong><span>com prova de vida e estimativa de idade, sem cadastro e sem baixar app</span></div>
<div><strong>Zero</strong><span>selfies, CPFs ou datas de nascimento guardados pela Nocodeia</span></div>
<div><strong>Todo pedido</strong><span>conferido antes do envio: sem idade verificada, o pedido fica retido</span></div>
</div>

## O que o ECA Digital exige de uma loja +18?

Uma loja que vende produto ou mostra conteúdo impróprio para menores precisa trocar a autodeclaração, o “tenho 18 anos”, por um mecanismo confiável de verificação de idade, como uma selfie com estimativa de idade e prova de vida ou a conferência de um documento. O ECA Digital (Lei 15.211/2025) está em vigor desde 17/03/2026. O art. 9º obriga quem oferece produto ou conteúdo impróprio para menores de 18 anos a usar mecanismo confiável de verificação de idade, e proíbe a autodeclaração. Ou seja: o pop-up “tenho 18 anos”, usado pela maioria das lojas +18, não serve mais como verificação.

O art. 35 prevê quatro sanções, e a ANPD é a autoridade que fiscaliza:

1. **Advertência**, com prazo para corrigir.
2. **Multa** de até 10% do faturamento do grupo no Brasil, limitada a R$ 50 milhões por infração.
3. **Suspensão temporária** das atividades.
4. **Proibição** das atividades.

O Decreto 12.880/2026 detalha quem precisa verificar. O art. 15 cita pelo nome, entre outros, bebida alcoólica, tabaco e vape, apostas e conteúdo pornográfico, o que inclui fotos, prévias e legendas. Lingerie e produtos eróticos não aparecem na lista pelo nome: para essas lojas, a obrigação depende do que a loja mostra e vende, e vale a orientação jurídica. A ANPD define o cronograma de cada setor conforme o risco.

Veja o [texto da Lei 15.211/2025](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm) e o [Decreto 12.880/2026](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/decreto/d12880.htm) no Planalto.

## Qual era o problema da Amore Totale?

A Amore Totale é uma loja online de lingerie e produtos sensuais, e roda na Tray. Em 12/10/2026, a Tray confirmou que não tinha recurso nativo nem aplicativo de verificação de idade, e os termos da plataforma deixam a responsabilidade com o lojista.

Três medos travavam a decisão:

- perder venda com um passo a mais na compra;
- deixar o site lento;
- virar notícia de vazamento de dado sensível de cliente.

## Como funciona a verificação de idade por selfie?

A Nocodeia criou o **Nocodeia EtariCheck**, que entra no tema da loja com um trecho de código, sem trocar de plataforma e sem mexer no checkout da plataforma. A verificação acontece só onde importa, no botão Comprar. Quem está só olhando a vitrine não é interrompido.

<div class="fluxo" aria-label="Como funciona para o comprador">
<span>Entra na loja e vê o aviso de idade</span><b aria-hidden="true">→</b>
<span>Toca em Comprar</span><b aria-hidden="true">→</b>
<span class="destaque">Selfie com prova de vida, no celular</span><b aria-hidden="true">→</b>
<span>Idade confirmada: a compra segue</span>
</div>

Nem todo comprador passa só pela selfie. Há três saídas:

- **Idade perto do limite:** o fluxo pede um documento junto com a selfie, na mesma tela.
- **Sem câmera ou sem selfie:** o comprador conclui a compra e confirma a idade numa chamada de vídeo com a equipe, sem gravação.
- **Pedido sem verificação:** fica retido. A loja pede a selfie pelo link do pedido ou cancela com estorno integral.

## Como a verificação protege os dados do comprador?

Verificação de idade lida com rosto, documento e CPF. Por isso o sistema foi desenhado para guardar o mínimo:

- a selfie vai direto do celular para o fornecedor de biometria, a Didit, sem passar pelo servidor da Nocodeia;
- a sessão da selfie é apagada no fornecedor depois do resultado;
- a Nocodeia não guarda selfie, documento, data de nascimento nem idade estimada;
- o CPF vira um código embaralhado, usado só para ligar o pedido à verificação, e é apagado em 7 dias;
- o banco de dados fica em São Paulo, separado por loja.

## Dá para burlar a verificação?

O sistema foi feito para não deixar brecha:

- **Trava no botão, conferência no pedido.** Quem tenta pular a tela pelo link direto do carrinho é pego na conferência do pedido.
- **Se cair, trava.** Se o serviço sair do ar, a compra de produto +18 continua bloqueada, nunca liberada.
- **Prova guardada.** Cada verificação gera um registro que não pode ser apagado nem alterado: data, método e resultado, sem selfie, CPF ou data de nascimento.
- **Com limite de gasto.** Tetos de uso por dia e por mês e bloqueio de robôs.

Por trás, rodam a Didit (selfie com prova de vida e estimativa de idade), o Cloudflare Workers e o Turnstile (servidor e proteção contra robôs), o Supabase Postgres em São Paulo (registro das verificações) e o Better Stack (alertas).

## Quanto tempo levou?

Foram 15 dias de trabalho entre o início do projeto e a selfie funcionando em todos os produtos:

- **12/10:** a Tray confirma que não tem solução, e o projeto começa.
- **23/10:** a selfie com prova de vida é escolhida como primeira camada.
- **01/11:** servidor e script em produção, com a loja configurada.
- **02/11:** selfie ligada no Comprar de todos os produtos.
- **06/11 a 03/12:** 4 semanas de medição com compradores reais.

## Quais são os resultados?

Estão em medição. A taxa de aprovação na primeira selfie, o tempo da verificação, o efeito na conversão e os pedidos conferidos são medidos de 06/11 a 03/12/2026. A meta do piloto é uma queda de no máximo 10% na conversão dos produtos +18. Vamos atualizar esta página com os números em dezembro.

A Amore Totale também atende os clientes com a Amora, uma agente de IA no site: veja o [case do atendimento com IA sem WhatsApp](/casos/amore-totale/).

## Perguntas frequentes

### O pop-up “tenho 18 anos” atende o ECA Digital?

Não. O art. 9º da Lei 15.211/2025 exige mecanismo confiável de verificação de idade e proíbe a autodeclaração, que é exatamente o que o pop-up faz. Ele pode continuar como aviso de entrada, mas não como verificação.

### A verificação por selfie faz a loja perder vendas?

É o principal risco, e por isso a selfie aparece só no botão Comprar, sem cadastro e sem baixar aplicativo. O efeito na conversão da Amore Totale está sendo medido de 06/11 a 03/12/2026, com a meta de queda de no máximo 10% nos produtos +18.

### Funciona em qualquer plataforma de loja virtual?

A verificação entra no tema da loja por um trecho de código, sem depender de aplicativo da plataforma, e o servidor que confere a idade não é ligado a nenhuma plataforma específica. Na Amore Totale, ela roda na Tray. Para a sua loja, a implantação é avaliada no diagnóstico gratuito.

## Sua loja +18 ainda usa o “tenho 18 anos”?

No diagnóstico gratuito de 45 minutos, a gente olha a sua loja e a sua plataforma e você sai com preço e prazo fechados para implantar a verificação de idade. A verificação não substitui a orientação jurídica da loja sobre o ECA Digital. Conheça a nossa [automação sob medida](/#servicos) e [marque seu diagnóstico grátis](/#vaga).
