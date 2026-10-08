# Governança de agentes de IA: por que uma regra só falha

Governança de agentes de IA é o conjunto de regras que define o que cada agente pode ver, sugerir ou fazer sozinho, quem aprova suas ações e como tudo fica registrado. O Gartner recomenda governança proporcional: classificar os agentes por nível de autonomia e aplicar a cada nível os controles correspondentes, em vez de uma regra única.

Se você lidera uma área numa empresa grande, provavelmente já tem agentes de IA rodando: um que resume contratos, outro que sugere respostas para clientes, talvez um que já dispara e-mails. Agente de IA é um assistente que, além de responder, executa tarefas. A pergunta que chega à sua mesa é sempre a mesma: quanto controle cada um precisa?

## Por que uma regra única de governança faz os agentes de IA fracassarem?

Porque ela trata agentes muito diferentes como se fossem iguais. Segundo comunicado do [Gartner de 5 de junho de 2026](https://www.prnewswire.com/br/comunicados-para-a-imprensa/gartner-aponta-que-a-aplicacao-de-governanca-uniforme-aos-agentes-de-inteligencia-artificial-levara-ao-fracasso-desses-agentes-nas-empresas-302792743.html), "até 2027, 40% das empresas irão rebaixar ou desativar agentes de IA autônomos devido a lacunas de governança" identificadas somente após incidentes em produção.

Shiva Varma, diretor analista sênior do Gartner, descreve dois modos de falha. No primeiro, a empresa restringe demais os agentes simples, o que "retarda a entrega e estimula o desenvolvimento paralelo". No segundo, restringe de menos os agentes mais autônomos, o que aumenta os riscos operacionais, de segurança e de conformidade. Para ele, o erro é tratar a governança "como binária, ou totalmente restrita ou totalmente confiável".

Na nossa leitura, "desenvolvimento paralelo" é o que todo gestor já viu acontecer: a área monta o próprio agente por fora da TI porque o caminho oficial trava. O agente sai do controle exatamente porque a regra era pesada demais para o que ele fazia.

Grandes bancos já falam disso em público. Em tradução livre de reportagem da [Funds Society](https://www.fundssociety.com/en/?p=310186), Jane Fraser, CEO do Citi, disse no Sibos 2026, conferência anual do setor financeiro, que no banco nenhum agente é criado sem passar pela camada interna de controle (ARC), e previu que um mesmo agente poderá ficar sujeito a vários mecanismos de supervisão.

## Quais são os 4 níveis de autonomia de um agente de IA?

O Gartner classifica os agentes em quatro níveis, do que só lê ao que age sozinho, e associa a cada nível os seus controles:

| Nível | O que o agente pode fazer | Controles que o Gartner pede |
|---|---|---|
| 1. Observação | Só lê fontes definidas; o resultado aparece só para quem pediu. Ex.: resumo de documentos, busca de dados | Acesso a dados com escopo definido, autenticação, registro de uso, testes básicos de funcionalidade e segurança |
| 2. Aconselhamento | Gera recomendações e ações propostas; um humano revisa tudo e executa à mão | Tudo do nível 1, mais testes de precisão e de alucinação, avaliação de qualidade específica do domínio e treinamento de usuários |
| 3. Agir com aprovação | Grava dados, envia comunicações ou muda configurações só após aprovação humana explícita de cada ação | Testes de segurança aprofundados, fluxos de aprovação claros com trilha de auditoria e resposta a incidentes específica por agente |
| 4. Agir de forma autônoma | Age sozinho dentro de controles definidos; humanos revisam exceções, registros de auditoria e resultados agregados | A governança mais rigorosa: monitoramento contínuo, controles aplicados, reversão rápida, um mecanismo que interrompe o agente se ele violar limites e definição clara de responsabilidade pelo comportamento do agente |

Dois termos da tabela pedem explicação. Alucinação é quando a IA inventa uma resposta com cara de verdade. Trilha de auditoria é o registro de quem fez o quê e quando. Sobre o nível 3, Shiva Varma faz um alerta que vale para todo gestor: "A revisão humana só é eficaz se continuar sendo um controle significativo". Ele fala em fadiga de aprovação: aprovar no automático, sem ler, é o mesmo que não ter aprovação.

## Como classificar os agentes que a sua empresa já tem ou planeja?

Comece pelo inventário e use quatro perguntas simples. O Gartner define os níveis; o roteiro abaixo é a forma como, na nossa avaliação, uma área consegue aplicá-los na prática:

1. **Faça o inventário.** Liste os agentes em uso e em projeto, área por área, incluindo os que foram montados fora da TI.
2. **Responda quatro perguntas para cada agente.** Ele só lê? Ele sugere? Ele grava ou envia algo? Ele faz isso sem ninguém aprovar? As respostas dão o nível.
3. **Veja quais dados ele toca.** Se mexe com dados pessoais de clientes ou funcionários, o cuidado sobe.
4. **Meça o estrago de um erro.** Pergunte o que acontece se ele errar e se dá para desfazer.
5. **Defina um dono.** Todo agente precisa de uma pessoa na área que responda por ele.

Um agente que só resume relatórios internos fica no nível 1 e pode andar rápido. Um que responde cliente e altera cadastro está no nível 3 ou 4 e precisa de outra régua.

## Que controles cada nível pede no dia a dia da operação?

Na prática, os controles da tabela viram cinco coisas que um gestor consegue cobrar da equipe ou do fornecedor:

- **Acesso por perfil:** cada agente e cada pessoa veem só o que precisam.
- **Registro de uso e trilha de auditoria:** dá para saber o que o agente fez, quando e com quais dados.
- **Fila de aprovação humana** para ações de risco, como gravar, enviar ou alterar.
- **Testes antes de ir ao ar**, inclusive de respostas erradas.
- **Botão de parar e de desfazer**, para interromper o agente e reverter o que ele fez.

Um exemplo simples de controle é o [agente que passa a conversa para um humano](/blog/agente-de-ia-para-whatsapp/) quando o caso foge do que ele sabe resolver.

Se a sua empresa quer uma referência pública, o [NIST AI RMF](https://www.nist.gov/news-events/news/2023/01/nist-risk-management-framework-aims-improve-trustworthiness-artificial), o framework de gestão de riscos de IA do instituto de padrões dos Estados Unidos, foi lançado em 26 de janeiro de 2023, é de uso voluntário e se organiza em quatro funções: Govern, Map, Measure e Manage (governar, mapear, medir e gerenciar).

## Onde a LGPD entra na governança dos agentes de IA?

Entra sempre que o agente trata dados pessoais. Três artigos da [Lei Geral de Proteção de Dados](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) conversam diretamente com os controles acima:

- **Artigo 20:** o titular pode pedir a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses, inclusive as que definem perfil profissional, de consumo e de crédito. Agente que decide sozinho sobre uma pessoa precisa de um caminho de revisão.
- **Artigo 37:** o controlador e o operador devem manter registro das operações de tratamento. É onde a trilha de auditoria ajuda.
- **Artigo 46:** a lei pede medidas de segurança técnicas e administrativas contra acessos não autorizados. É onde o acesso por perfil ajuda.

Um cuidado de vocabulário: na LGPD, "agentes de tratamento" são o controlador e o operador, ou seja, empresas e pessoas, e não agentes de IA. Este texto não é parecer jurídico; envolva o encarregado de dados (o DPO) e o jurídico da empresa.

## Como a Nocodeia constrói agentes com controle desde o primeiro dia?

Construímos [sistemas internos e agentes sob medida](/#servicos), programados em código, com a governança desenhada junto e não depois. Na prática, cada agente nasce com:

1. **Nível de autonomia definido no escopo:** o que ele lê, o que ele sugere e o que ele executa.
2. **Regras de negócio explícitas** do que pode e do que não pode fazer.
3. **Aprovação humana nas ações de risco**, como gravar, enviar ou alterar.
4. **Trilha de auditoria** de cada ação.
5. **Acesso por perfil.**
6. **LGPD considerada desde o desenho.**

O caminho começa com um [diagnóstico grátis de 45 minutos](/#como), segue com um escopo de preço e prazo fechados e chega ao sistema interno em 1 a 3 meses.

Já construímos o Proacta CRM, um CRM (sistema de gestão de clientes) de vendas com agente de prospecção no LinkedIn, e uma plataforma de gestão de metas (OKR) para estrutura corporativa. Veja os [projetos que já entregamos](/#projetos). O fundador tem mais de 25 anos em tecnologia, em empresas como IBM, Xerox, DHL e Bosch, e você fala direto com ele do começo ao fim.

## Quando não dar autonomia total a um agente de IA?

Na nossa avaliação, não dê autonomia total quando a ação não pode ser desfeita, quando mexe com dinheiro, dado pessoal ou comunicação com cliente sem revisão, quando não há registro do que o agente fez ou quando ninguém na área é dono dele. Nesses casos, comece num nível mais baixo e suba o agente de nível conforme ele acumula histórico de acertos. Essa progressão é posição nossa; o comunicado do Gartner não trata de promoção de nível.

## Perguntas frequentes

### O que é governança de IA?

É o conjunto de regras, responsáveis e controles que define como a empresa usa inteligência artificial com segurança. Para agentes de IA, inclui o que cada um pode fazer sozinho, quem aprova e como tudo fica registrado.

### O que são agentes de IA autônomos?

São agentes que agem sozinhos dentro de controles definidos, o nível 4 da classificação do Gartner. Os humanos revisam exceções, registros de auditoria e resultados, em vez de aprovar cada ação.

### Existe um framework de governança de IA?

Existe. O NIST AI RMF, do instituto de padrões dos Estados Unidos, é uma referência pública de uso voluntário, organizada em quatro funções: governar, mapear, medir e gerenciar.

### O que é human in the loop?

É ter um humano que revisa ou aprova a ação do agente antes que ela aconteça. Na nossa leitura, isso corresponde aos níveis 2 e 3 da classificação do Gartner.

## Sua empresa já tem agentes de IA sem regra clara?

No diagnóstico gratuito de 45 minutos, a gente olha os agentes que a sua área usa ou planeja, ajuda a classificar cada um e mostra como construir com controle desde o início. Você sai com preço e prazo fechados. [Marque seu diagnóstico grátis](/#vaga).
