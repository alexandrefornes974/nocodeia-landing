A área de Operações de uma consultoria multinacional de tecnologia, com mais de 20 mil funcionários no grupo, acompanhava os OKRs numa planilha refeita do zero todo mês, e qualquer pessoa via e editava tudo. A Nocodeia criou uma plataforma própria de OKR: a estrutura de metas é montada uma vez por ciclo, cada pessoa registra o progresso do que é seu, e a liderança enxerga onde agir. O nome do cliente fica preservado a pedido dele.

<div class="numeros">
<div><strong>210+</strong><span>colaboradores com metas claras e escritas</span></div>
<div><strong>Zero</strong><span>planilhas refeitas por mês: a estrutura fica salva</span></div>
<div><strong>4 visões</strong><span>colaborador, gestor, líder de área e diretoria, cada um vendo só o seu</span></div>
<div><strong>1 versão</strong><span>oficial dos números, no lugar de planilhas paralelas</span></div>
</div>

## Qual era o problema?

A área tinha crescido, mas a gestão de metas continuava do jeito de quando era pequena:

- **Retrabalho todo mês.** A planilha de OKRs era recriada do zero a cada mês, mesmo quando objetivos e metas não mudavam. Não havia histórico de progresso.
- **Todo mundo via e editava tudo.** Não havia controle por área, time ou pessoa, nem como saber quem mudou o quê.
- **Várias versões da verdade.** Cópias da planilha circulavam, e cada líder chegava à reunião com os seus números.
- **Responsabilidade diluída.** Não havia registro de que a pessoa conhecia e concordava com a própria meta. Quando algo atrasava, ninguém sabia dizer onde tinha falhado.
- **Gente nova dava trabalho.** Encaixar um funcionário na estrutura dependia da memória de quem cuidava da planilha.
- **Tempo perdido com reporte.** Líderes gastavam horas pedindo status por e-mail e montando relatório.

A regra prática do mercado é que planilha de OKR começa a falhar acima de umas 20 pessoas. Essa área tinha mais de 200.

## Por que não usar uma ferramenta pronta?

Reestruturar o SharePoint da empresa dependia de permissão de administrador e da fila do time de TI. Uma ferramenta de OKR por assinatura dependia de orçamento ainda não aprovado. A área queria começar sem depender de outro time, então a Nocodeia fez uma aplicação própria, com banco de dados e login, preparada para migrar depois para a nuvem da própria empresa sem refazer as telas.

## Como a plataforma funciona?

A estrutura de objetivos é montada uma vez por ciclo. Depois disso, o trabalho de cada mês é só o check-in.

<div class="fluxo" aria-label="Como funciona o ciclo de OKR">
<span>Diretoria define os objetivos do ciclo</span><b aria-hidden="true">→</b>
<span>Gestor cria as metas do time</span><b aria-hidden="true">→</b>
<span>Pessoa aceita ou propõe mudança</span><b aria-hidden="true">→</b>
<span class="destaque">Check-in mensal</span><b aria-hidden="true">→</b>
<span>Dashboard mostra onde agir</span>
</div>

1. **Objetivos em cascata:** empresa, área e time, com o objetivo de cima visível em cada um.
2. **Check-in mensal** em poucos cliques: valor atual e comentário. Nada é sobrescrito, e todo mês fica no histórico.
3. **Status automático:** o sistema compara o progresso com o tempo decorrido do ciclo e marca a meta como no rumo, em risco, atrasada ou concluída.
4. **Aceite da meta:** a pessoa confirma "li e concordo com esta meta para o ciclo". O registro guarda a versão exata aceita e não pode ser apagado, nem por um administrador.
5. **Metas em mão dupla:** o colaborador pode propor uma mudança ou uma meta a mais, e o gestor aprova ou recusa com justificativa. Ninguém aprova a própria proposta.
6. **Ciclo novo em um clique,** copiando a estrutura do anterior.

<figure class="tela"><img src="/assets/okr-dashboard.webp" alt="Dashboard da empresa com metas atrasadas, em risco, check-ins pendentes e disciplina do processo" width="1600" height="760" loading="lazy"><figcaption>Dashboard: a diretoria abre e já vê onde agir, com metas atrasadas, em risco, sem dono e a disciplina de check-in.</figcaption></figure>

## Quem vê o quê?

Cada papel tem a sua visão, e quem garante isso é o banco de dados, não só a tela: cada consulta devolve apenas o que a pessoa tem permissão de ver.

- **Colaborador:** as próprias metas, o que falta aceitar e o check-in do mês.
- **Gestor:** o time inteiro, com dono, progresso, status e há quantos dias cada aceite está pendente.
- **Líder de área:** os times e gestores da área, lado a lado.
- **Diretoria:** a empresa toda, descendo de área para time, gestor e pessoa.

<figure class="tela"><img src="/assets/okr-painel.webp" alt="Painel pessoal da plataforma de OKR com metas, status e pendências do mês" width="1600" height="760" loading="lazy"><figcaption>Meu painel: cada pessoa vê as próprias metas, o status e o que falta fazer no mês.</figcaption></figure>

Testes automáticos conferem, papel por papel, que um time não lê nem altera dados de outro. O banco tem backup diário, com restauração testada.

## Quais foram os resultados?

- **Fim do retrabalho:** a estrutura é montada uma vez por ciclo; no mês seguinte, só o check-in.
- **Uma única versão da verdade** nas reuniões de diretoria, no lugar de planilhas concorrentes.
- **Responsabilidade clara:** cada meta tem dono, aceite registrado e histórico mês a mês.
- **Status sem pedir por e-mail:** o dashboard mostra andamento e atrasos sem ninguém montar relatório.
- **Gente nova em minutos:** cadastro e vínculo ao time, com as permissões aplicadas sozinhas.
- **Desligamento sem perder histórico:** as metas se encerram na data, e tudo fica guardado em "arquivadas".

<figure class="tela"><img src="/assets/okr-ciclos.webp" alt="Tela de ciclos trimestrais com rascunhos e cópia de estrutura" width="1600" height="760" loading="lazy"><figcaption>Ciclos: o trimestre novo nasce como rascunho e copia a estrutura do anterior.</figcaption></figure>

A plataforma foi feita com React e TypeScript, Supabase (PostgreSQL, login e regras de acesso por linha), Vercel e GitHub Actions, que roda os testes e o backup diário. Funciona também no celular.

## Perguntas frequentes

### Vale a pena trocar a planilha de OKR por um sistema?

Quando a área passa de umas 20 pessoas, sim: a planilha começa a gerar cópias paralelas, retrabalho e falta de controle de acesso. Neste case, a área tinha mais de 200 pessoas e refazia a planilha todo mês.

### Sistema de OKR sob medida ou ferramenta pronta?

A ferramenta pronta resolve rápido quando há orçamento e o processo cabe nela. O sistema sob medida vale quando a empresa precisa de regras próprias, como aceite formal de metas, visões por papel e dados dentro da própria infraestrutura.

### Quanto tempo leva para montar uma plataforma de OKR?

Depende do número de papéis, das regras de aprovação e das integrações. O prazo e o preço saem fechados depois do diagnóstico gratuito. Sistemas internos como este costumam levar de 1 a 3 meses.

## Sua gestão de metas ainda vive em planilha?

No diagnóstico gratuito de 45 minutos, a gente olha como a sua empresa acompanha metas hoje e diz com franqueza se vale ter um sistema próprio. Conheça os nossos [sistemas internos sob medida](/#servicos) e [marque seu diagnóstico grátis](/#vaga).
