# How Much Does an AI Agent Cost? Real Cost per Conversation

An AI agent's cost is the sum of four parts: the AI model, billed per token (a chunk of text); the channel, like WhatsApp; a server or platform; and the build. On Zendesk, a ready-made platform, resolutions above the allowance cost from R$9.50 in Brazil, plus the license. With your own agent, you can estimate cost per conversation.

You want to put an AI agent on your product's support, and your cofounder or investor keeps asking the same question: how much will this cost when volume grows? The answer no longer fits on a single license line. This guide shows how to run the numbers before the agent goes live, without guessing.

## Why is AI customer support no longer just a fixed license fee?

Because billing now follows usage or results, not the number of agents. You used to pay a license per support agent (the "seat") or a near-fixed monthly fee for a menu-based chatbot. With AI agents, every conversation consumes model processing, and vendors pass that consumption on to you.

The venture capital firm Bessemer Venture Partners documented the shift in February 2026: "By and large, AI-native companies are abandoning seat-based SaaS pricing in favor of usage-, output-, and outcome-based models," according to [Bessemer's AI pricing and monetization playbook](https://www.bvp.com/atlas/the-ai-pricing-and-monetization-playbook).

In practice, this changes two things for your startup. Cost rises with the number of conversations. And it can be estimated per conversation. One term will come up constantly from here on: a token is a chunk of text, roughly part of a word, that the model reads and writes. It's the unit AI APIs bill by (an API is the door your system uses to ask the model for an answer).

## What are the cost components of an AI customer support agent?

There are five: the AI model, the channel, the server or platform, the build and the time of the backup human on the cases the agent hands off. The first four are the ones from the answer above.

| Component | How it's billed | Reference |
|---|---|---|
| AI model | Per input token (what the model reads) and output token (what it writes) | Claude Sonnet 5.5: $2 per million input tokens and $10 per million output tokens, on the [Claude pricing page](https://claude.com/pricing), checked in October 2026 |
| Channel | On WhatsApp, Meta charges per delivered template message | Regular messages within the 24-hour window opened by the customer are free, according to the [WhatsApp pricing documentation](https://developers.facebook.com/docs/whatsapp/pricing) |
| Server or platform | Hosting, database or a tool subscription | Depends on how the agent is built |
| Build and adjustments | A project with a defined scope | Fixed price after the consultation |
| Backup human | Team time on the cases the agent hands off | Depends on the handoff rule |

A template message is the pre-approved text a business uses to start a conversation or notify the customer outside the window. The details of [what WhatsApp messages cost for an agent](/en/blog/ai-agent-for-whatsapp/) are in our guide on the topic.

Notice that only the first row grows with every message exchanged. In our assessment, that's where most billing surprises come from.

## How do you estimate the cost per conversation before the agent goes live?

Multiply the tokens in a typical conversation by the model's price. In four steps:

1. **Count the exchanges.** Pull real conversations from your support and see how many messages the customer sends before the issue is solved.
2. **Estimate the tokens in each exchange.** Input includes the agent's instructions, the knowledge base excerpt it looked up and the conversation history. Output is the reply.
3. **Multiply by the price** on the official page of the model you'll use.
4. **Multiply by your monthly** conversation volume.

Now a hypothetical example, with numbers you should replace with your own. A conversation with 8 exchanges, at 3,000 input tokens and 150 output tokens per exchange, adds up to 24,000 input tokens and 1,200 output tokens.

On Claude Sonnet 5.5, that comes to $0.048 for input plus $0.012 for output: about $0.06 per conversation, or $60 per thousand conversations. On Claude Haiku 5.5, a smaller model that costs $0.10 and $0.50 per million tokens for requests of up to 100,000 tokens, the same conversation costs about $0.003.

This math covers the model only. Channel, server and build come on top.

## Pay per resolution or build your own agent: which makes sense for a startup?

It depends on your volume and on how long your conversations run. Compare the cost per conversation you calculated with the per-resolution price of ready-made platforms.

| Option | How it bills | What to watch |
|---|---|---|
| Intercom Fin | From $0.99 per outcome, charged once per conversation, with no required agent seat, per [Intercom's pricing](https://www.intercom.com/pricing) | With a helpdesk (support ticketing system) from another company, there's a minimum commitment, for example 50 outcomes per month |
| Zendesk | In Brazil, plans include 5 or 10 automated resolutions per licensed agent per month. Each extra one costs R$9.50 with a commitment or R$12 pay as you go, per [Zendesk's Brazilian pricing page](https://www.zendesk.com.br/pricing/) (in Portuguese) | The allowance grows with the number of agent licenses |
| Your own agent | Tokens + channel + server + build | Requires a build; the cost per conversation follows the math in the previous section |

Per-resolution billing is predictable per unit and skips the build. The flip side: the price is the same for a short or a long conversation. Bessemer itself uses Fin as an example: "If Fin resolves a ticket in three messages or thirty, the customer pays the same." And each vendor defines what counts as a resolution. At Intercom, the definition includes, for example, a conversation in which the customer stops asking for help.

Your own agent requires an upfront investment in the build. In our assessment, it makes more sense when volume is high and the agent needs to talk to your startup's systems, such as your CRM (customer management system), database and billing. The rule of thumb: run the numbers and compare at your real volume, not the volume on the pitch deck slide.

## What makes the cost of an AI agent spike?

Bloated context, an expensive model answering simple questions and conversations that never end. The usual suspects, each with its own control:

- **Huge instructions and knowledge base sent with every exchange.** Control: caching, which reuses the fixed part of the text. On the Claude pricing page, reading from cache on Sonnet 5.5 costs $0.10 per million tokens, versus $2 for regular input.
- **An expensive model answering "what are your hours?"** Control: a smaller model handles triage and only calls the bigger one when needed.
- **Conversations going in circles.** Control: a cap on exchanges. After it, a human takes over.
- **WhatsApp template messages outside the 24-hour window.** Control: keep support inside the window opened by the customer.
- **Nobody watching the bill.** Control: a spending alert when the month goes past an agreed amount.

A warning against optimistic math: Claude offers a 50% discount on batch processing, but batch doesn't work for live support, because the reply doesn't come back right away.

## How does Nocodeia keep agent costs under control?

By building the controls into the project from the start, not after the first bill. We build custom-coded agents, like the prospecting agent for Proacta CRM and [Amora, Amore Totale's customer service agent](/en/cases/amore-totale/). The path is always the same:

1. **A free 45-minute consultation** to understand your support and your conversation volume.
2. **A scope with fixed price and timeline**, already taking into account the conversation volume from the consultation.
3. **Delivery, usually in 2 to 4 weeks**, with four controls built in: a smaller model for triage, cached instructions, a cap on exchanges with handoff to a human and a spending alert.

They add to the [control rules for each agent](/en/blog/ai-agent-governance/) we've already described, such as human approval for risky actions and an audit trail.

## When is an AI agent not worth it for your startup?

When conversation volume is low or questions are rare and very different from one another. Other signs: there's no organized knowledge base for the agent to look up, or a good FAQ page already does the job.

For us, in those cases the build doesn't pay for itself, and a well-trained human does better. It's the same logic as [the usage-based cost math for a no-code platform](/en/blog/is-no-code-worth-it/): run the numbers before you decide.

## FAQ

### How much does it cost to build an AI agent?

The build is a cost separate from operation, and it depends on the scope: channels, integrations and rules. That's why we set the price after the consultation, not with a generic number.

### How much does an AI chatbot cost?

It depends on the billing model. Ready-made platforms like Intercom and Zendesk charge per resolution; your own chatbot pays per token for the model it uses. A menu-based chatbot, without AI, doesn't consume tokens.

### How much does an AI token cost?

Each model has its own price, billed per million tokens. On Claude Sonnet 5.5, it's $2 per million input tokens and $10 per million output tokens, according to the official page in October 2026.

### How much does the WhatsApp API cost?

Meta charges per delivered template message, with prices that vary by country and category. Regular messages within the 24-hour window opened by the customer are free.

### Is there a free AI agent?

There are tools with limited free plans, good for testing. An agent in production pays for the model and the channel based on usage.

## Want to know what your startup's agent will cost?

In the free 45-minute consultation, we look at your support and your conversation volume and tell you honestly whether an agent is worth it. You walk away with a fixed price and timeline for [custom AI agents](/en/#servicos). [Book your free 45-minute consultation](/en/#vaga).
