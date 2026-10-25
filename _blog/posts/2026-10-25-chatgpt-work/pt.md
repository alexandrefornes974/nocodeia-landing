# ChatGPT Work na empresa: o que a Uber fez antes de liberar

ChatGPT Work é um agente da OpenAI, lançado em julho de 2026, que executa tarefas de várias etapas dentro do ChatGPT: junta informações de apps e arquivos e entrega planilhas, slides e documentos. A Uber testou com mil funcionários antes de liberar para cerca de 30 mil. Esse caminho serve de roteiro para a sua empresa.

Se você é gestor de área, a cena é conhecida: o time pede acesso à IA, a TI pede tempo para avaliar e, enquanto isso, cada um usa a conta pessoal que quiser, sem controle nenhum. A decisão da Uber, anunciada em 22 de outubro, mostra uma saída mais organizada.

## O que é o ChatGPT Work e como funciona?

O ChatGPT Work é um agente: um assistente que executa tarefas, não só responde. Segundo a cobertura do lançamento feita pela [TNW](https://thenextweb.com/news/openai-chatgpt-work-agent-launch), a OpenAI o descreve como um agente dentro do ChatGPT capaz de agir nos apps e arquivos do usuário.

A diferença para o chat comum está no pedido. No chat, você faz uma pergunta e recebe um texto. No Work, você dá um objetivo, e o agente quebra o trabalho em etapas, executa cada uma e entrega o arquivo pronto. Na prática:

- **Junta contexto de várias fontes.** Ele se conecta por plugins (conectores que ligam o ChatGPT a outro sistema) a Slack, Microsoft Teams, Google Drive, SharePoint, e-mail, calendário e CRM (o sistema onde a empresa registra clientes e vendas).
- **Entrega o resultado, não a resposta.** Planilhas, slides, documentos e até pequenos apps web.
- **Fica no projeto.** Pode trabalhar por horas na mesma tarefa e repetir ações agendadas.

O produto saiu em 9 de julho com o GPT-5.6, segundo a [Fox Business](https://www.foxbusiness.com/technology/openai-unveils-chatgpt-work-automate-workplace-tasks-ai-race-intensifies), em texto com contribuição da Reuters. A TNW acrescenta que ele usa tecnologia do Codex, a ferramenta de programação da OpenAI.

## O que a Uber fez antes de liberar o ChatGPT Work para cerca de 30 mil pessoas?

A Uber começou com um piloto de mil funcionários e só depois liberou para a empresa inteira. Os detalhes, publicados pelo [TechCrunch](https://techcrunch.com/2026/10/22/uber-puts-all-30000-employees-on-chatgpt-work/) em 22 de outubro, valem como roteiro:

1. **Piloto pequeno e misturado.** Mil pessoas de áreas como finanças, operações e produto.
2. **Áreas de negócio na frente.** Segundo Sumanth Sukumar, vice-presidente de engenharia da Uber, cerca de 80% dos primeiros usuários não eram engenheiros.
3. **Usos concretos.** Analisar dados da operação para achar tendências e montar recomendações, adaptar material de treinamento para outros mercados e idiomas e criar painéis interativos.
4. **Experiência anterior.** No mesmo ano, a Uber juntou 30 engenheiros de IA com equipes de outras áreas e deu duas semanas para automatizar partes do trabalho delas.
5. **Medição depois da liberação.** A empresa disse que vai acompanhar como os funcionários usam a ferramenta e se ela ajuda no trabalho.

O que a Uber não contou: quanto está gastando. O TechCrunch registra que o custo não foi divulgado.

Para um gestor, a lição é a ordem dos passos. Primeiro um grupo pequeno, com gente da operação, testando tarefas reais. Depois a liberação geral, com a medição do uso já combinada.

## Quanto custa o ChatGPT Work?

A OpenAI não divulgou um preço próprio para o ChatGPT Work nas fontes que conseguimos abrir. O que a cobertura do lançamento informa é a forma de cobrança, e ela muda a conta.

- **Está em todos os planos.** A TNW e a Fox Business dizem que o Work está disponível em todos os planos do ChatGPT, inclusive o gratuito; segundo a Fox, pelo app do ChatGPT para computador.
- **O uso é medido, como no Codex.** Segundo a TNW, cada tarefa não conta como uma pergunta comum de chat: tarefas mais complexas gastam mais da cota incluída no plano.
- **Há teto de gasto.** Administradores dos planos Enterprise e Edu (este, para instituições de ensino) podem definir limites de gasto por grupo.

Na prática, o custo depende de quantas tarefas longas o time vai rodar, e isso só aparece num piloto. Antes de liberar para todos, peça à TI uma estimativa de consumo baseada no uso real de um grupo pequeno. A mesma lógica vale para agentes feitos sob medida, como mostramos no post sobre [quanto custa um agente de IA](/blog/quanto-custa-um-agente-de-ia/).

## Que controles configurar antes de liberar um agente para a empresa inteira?

Defina quem acessa, o que o agente lê, o que ele pode fazer e quando precisa pedir aprovação. Segundo a [cobertura da TNW sobre o lançamento](https://thenextweb.com/news/openai-chatgpt-work-agent-launch), estes são os controles que a OpenAI descreve:

| Controle | O que a OpenAI descreve | Pergunta para a TI |
|---|---|---|
| Acesso | Admins definem quem usa o Work | Quais áreas entram no piloto? |
| Contexto da empresa | Admins escolhem que informação o agente usa | Que dados pessoais de clientes ele vai ler? |
| Ferramentas conectadas | Admins escolhem os conectores liberados | Quais sistemas ficam fora no começo? |
| Ações permitidas | Admins limitam o que o agente pode executar | Ele pode enviar e-mail ou só preparar o rascunho? |
| Aprovação | O usuário decide quando o agente precisa de aprovação antes de agir | Quais ações sempre pedem aprovação? |
| Supervisão | Uma API de Compliance (porta para outro sistema puxar os registros) acompanha conversas e ações | Quem olha esses registros e com que frequência? |
| Gasto | Limites por grupo no painel de administração | Qual é o teto do piloto? |

Os controles de administrador citados valem para os planos Enterprise e Edu. Para decidir quanta autonomia dar a cada tipo de tarefa, use os níveis do nosso guia de [governança de agentes de IA](/blog/governanca-de-agentes-de-ia/).

## Por onde começar se a sua empresa não é a Uber?

Comece por um mapa de tarefas, não pela licença. A Uber tinha 30 engenheiros de IA para emprestar às áreas; a sua empresa provavelmente não tem. O caminho mais curto é escolher onde o agente vai trabalhar antes de liberar o acesso.

1. **Escolha 1 ou 2 áreas** com tarefa repetitiva de escritório: relatório semanal, consolidação de planilhas, material para outros idiomas.
2. **Liste as tarefas e estime as horas** que cada uma consome por semana.
3. **Rode um piloto pequeno** com os controles da tabela acima ligados.
4. **Meça uso e horas** antes de ampliar para outras áreas.

Os passos 1 e 2 são o que fazemos no [Raio-X de automação](/#servicos): um mapa das tarefas que dá para automatizar, as horas economizadas estimadas por tarefa e um plano de ataque em ordem de retorno, em cerca de uma semana. Com esse mapa, o piloto começa pelas tarefas que mais devolvem tempo ao time.

## Quando o ChatGPT Work não basta?

O ChatGPT Work atende bem a tarefa de escritório de uma pessoa ou de uma equipe: resumo, planilha, slide, painel, inclusive com tarefas agendadas. Para o processo central da área, o cálculo muda.

Na nossa avaliação, vale outro caminho quando o processo segue sempre a mesma regra e não pode variar de uma execução para outra, quando o sistema da área é antigo e não tem conector, ou quando a área precisa de uma ferramenta própria, com permissão por perfil e histórico de quem alterou o quê. Aí entram a automação de processos ou um sistema interno. O mapa de tarefas mostra qual caso é qual.

## Perguntas frequentes

### ChatGPT Work é gratuito?

Segundo a cobertura do lançamento, o ChatGPT Work está disponível em todos os planos, inclusive o gratuito, pelo app de computador. O uso consome a cota do plano, e tarefas longas gastam mais. Para uso na empresa, os controles de administrador ficam no plano Enterprise.

### ChatGPT Work tem download?

Sim. Segundo a TNW, há app de computador para Mac e Windows, disponível no mundo todo, além da versão na web e no celular.

### Existe ChatGPT para empresas?

Sim. A OpenAI tem planos para empresas, como Business e Enterprise, e o ChatGPT Work foi liberado para os dois no lançamento ou nos dias seguintes. Confira preços e condições na página oficial da OpenAI antes de decidir.

### Como implementar IA na empresa?

Comece por um mapa das tarefas repetitivas e das horas que elas consomem. Rode um piloto pequeno, com controles de acesso e aprovação ligados. Meça o uso e os resultados antes de liberar para outras áreas.

## Por onde começar na sua área?

Antes de pedir licença para todo mundo, descubra quais tarefas da sua área valem um piloto. Veja [como funciona o diagnóstico de 45 minutos](/#como) e [marque seu diagnóstico grátis](/#vaga): você sai com preço e prazo fechados para o Raio-X.
