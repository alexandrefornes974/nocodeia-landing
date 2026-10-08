# AI Agent Governance: Why One Rule for Every Agent Fails

AI agent governance is the set of rules that defines what each agent can see, suggest or do on its own, who approves its actions and how everything gets logged. Gartner recommends proportional governance: classify agents by autonomy level and apply to each level its matching controls, instead of a single rule.

If you lead a department at a large company, you probably already have AI agents running: one that summarizes contracts, another that suggests replies to customers, maybe one that already sends emails. An AI agent is an assistant that, besides answering, carries out tasks. The question that lands on your desk is always the same: how much control does each one need?

## Why does a single governance rule make AI agents fail?

Because it treats very different agents as if they were the same. A [Gartner press release from May 26, 2026](https://www.gartner.com/en/newsroom/press-releases/2026-05-26-gartner-says-applying-uniform-governance-across-ai-agents-will-lead-to-enterprise-ai-agent-failure) predicts that "by 2027, 40% of enterprises will demote or decommission autonomous AI agents due to governance gaps identified only after production incidents occur."

Shiva Varma, Senior Director Analyst at Gartner, describes two failure modes. In the first, the company over-restricts simple agents, which "slows delivery and drives shadow development." In the second, it under-restricts more autonomous agents, which increases operational, security and compliance risk. In his view, the mistake is treating governance "as binary, either locked down or fully trusted."

In our reading, "shadow development" is something every manager has seen happen: the department builds its own agent outside IT because the official path is stuck. The agent slips out of control precisely because the rule was too heavy for what it did.

Big banks already talk about this in public. According to a [Funds Society](https://www.fundssociety.com/en/?p=310186) report, Citi CEO Jane Fraser said at Sibos 2026, the financial industry's annual conference, that no agent is created at the bank without going through its internal control layer (ARC), and predicted that a single agent may end up subject to several oversight mechanisms.

## What are the 4 autonomy levels of an AI agent?

Gartner classifies agents into four levels, from the one that only reads to the one that acts on its own, and ties each level to its own controls:

| Level | What the agent can do | Controls Gartner calls for |
|---|---|---|
| 1. Observe | Only reads defined sources; output is visible only to the person who asked. E.g.: document summaries, data retrieval | Scoped data access, authentication, usage logging, basic functional and security testing |
| 2. Advise | Generates recommendations and proposed actions; a human reviews everything and carries it out manually | Everything in level 1, plus accuracy and hallucination testing, domain-specific quality evaluation and user training |
| 3. Act with approval | Writes data, sends communications or changes settings only after explicit human approval of each action | Strong security testing, clear approval workflows with audit trails and agent-specific incident response |
| 4. Act autonomously | Acts on its own within defined guardrails; humans review exceptions, audit logs and aggregated outcomes | The most rigorous governance: continuous monitoring, enforced guardrails, rapid rollback, a mechanism that halts the agent if it crosses its limits and clear ownership of the agent's behavior |

Two terms in the table need explaining. A hallucination is when the AI makes up an answer that sounds true. An audit trail is the record of who did what and when. On level 3, Shiva Varma gives a warning every manager should hear: "human review is effective only if it remains a meaningful control." He talks about approval fatigue: approving on autopilot, without reading, is the same as having no approval at all.

## How do you classify the agents your company already has or is planning?

Start with an inventory and use four simple questions. Gartner defines the levels; the steps below are how, in our assessment, a department can apply them in practice:

1. **Take inventory.** List the agents in use and in the works, department by department, including the ones built outside IT.
2. **Answer four questions for each agent.** Does it only read? Does it suggest? Does it write or send something? Does it do that without anyone approving? The answers give you the level.
3. **Check what data it touches.** If it handles personal data of customers or employees, the level of care goes up.
4. **Size the damage of a mistake.** Ask what happens if it gets something wrong and whether it can be undone.
5. **Name an owner.** Every agent needs someone in the department who answers for it.

An agent that only summarizes internal reports sits at level 1 and can move fast. One that answers customers and changes records is at level 3 or 4 and needs a different yardstick.

## What controls does each level need in day-to-day operations?

In practice, the controls in the table become five things a manager can ask of the team or the vendor:

- **Role-based access:** each agent and each person sees only what they need.
- **Usage logs and audit trail:** you can tell what the agent did, when and with which data.
- **Human approval queue** for risky actions, like writing, sending or changing something.
- **Testing before going live**, including for wrong answers.
- **Stop and undo button**, to halt the agent and roll back what it did.

A simple example of a control is the [agent that hands the conversation to a human](/en/blog/ai-agent-for-whatsapp/) when the case goes beyond what it knows how to solve.

If your company wants a public reference, the [NIST AI RMF](https://www.nist.gov/news-events/news/2023/01/nist-risk-management-framework-aims-improve-trustworthiness-artificial), the AI risk management framework from the US National Institute of Standards and Technology, was released on January 26, 2023, is voluntary and is organized into four functions: Govern, Map, Measure and Manage.

## Where does data protection law (Brazil's LGPD) fit into AI agent governance?

It comes in whenever the agent handles personal data. In Brazil, that law is the LGPD, the General Data Protection Law, and three of its articles ([full text](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), in Portuguese) line up directly with the controls above:

- **Article 20:** the data subject can request a review of decisions made solely on the basis of automated processing of personal data that affect their interests, including those that define their professional, consumer and credit profile. An agent that decides on its own about a person needs a review path.
- **Article 37:** the controller and the processor must keep records of their data processing operations. This is where the audit trail helps.
- **Article 46:** the law calls for technical and administrative security measures against unauthorized access. This is where role-based access helps.

A word of caution on vocabulary: in the LGPD, "processing agents" (agentes de tratamento) are the controller and the processor, meaning companies and people, not AI agents. This post is not legal advice; involve your data protection officer (DPO) and your company's legal team.

## How does Nocodeia build agents with controls from day one?

We build [custom internal systems and agents](/en/#servicos), written in code, with governance designed alongside them rather than added later. In practice, every agent comes with:

1. **Autonomy level defined in the scope:** what it reads, what it suggests and what it carries out.
2. **Explicit business rules** for what it can and cannot do.
3. **Human approval for risky actions**, like writing, sending or changing something.
4. **Audit trail** of every action.
5. **Role-based access.**
6. **LGPD considered from the design stage.**

The path starts with a [free 45-minute consultation](/en/#como), moves to a scope with a fixed price and timeline, and gets to the internal system in 1 to 3 months.

We've built Proacta CRM, a sales CRM (customer management system) with a LinkedIn prospecting agent, and a goal management (OKR) platform for corporate structures. See the [projects we've delivered](/en/#projetos). The founder has more than 25 years in tech, at companies like IBM, Xerox, DHL and Bosch, and you talk directly with him from start to finish.

## When should you not give an AI agent full autonomy?

In our assessment, don't give full autonomy when the action can't be undone, when it involves money, personal data or customer communication without review, when there's no record of what the agent did or when nobody in the department owns it. In those cases, start at a lower level and move the agent up as it builds a track record of getting things right. That progression is our position; the Gartner press release does not cover moving agents up a level.

## FAQ

### What is AI governance?

It's the set of rules, owners and controls that defines how a company uses artificial intelligence safely. For AI agents, it covers what each one can do on its own, who approves and how everything gets logged.

### What are autonomous AI agents?

They're agents that act on their own within defined guardrails, level 4 in Gartner's classification. Humans review exceptions, audit logs and outcomes instead of approving each action.

### Is there an AI governance framework?

Yes. The NIST AI RMF, from the US National Institute of Standards and Technology, is a voluntary public reference organized into four functions: govern, map, measure and manage.

### What is human in the loop?

It means having a human who reviews or approves the agent's action before it happens. In our reading, that corresponds to levels 2 and 3 of Gartner's classification.

## Does your company already have AI agents without clear rules?

In the free 45-minute consultation, we look at the agents your department uses or is planning, help you classify each one and show you how to build with controls from the start. You walk away with a fixed price and timeline. [Book your free consultation](/en/#vaga).
