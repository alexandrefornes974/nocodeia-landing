# How to Create an AI Agent for WhatsApp: Start on Your Site

Creating an AI agent for WhatsApp means building an assistant that talks to customers and carries out tasks. The safest path is to start with a chat on your website and connect the official API later. In Brazil, Meta charges R$ 0.035 (US$ 0.0068) per service message, starting from the 1,001st of the month.

If you want an agent answering on WhatsApp but you do not know yet how many conversations you will get or which questions will arrive, this guide is for you. We show Meta's official prices (the Brazil rate card), a worked example and the order we follow in Nocodeia projects.

## How do you create an AI agent for WhatsApp in 5 steps?

To create an AI agent for WhatsApp, follow this order. Each step has its own section below.

1. **Define the scope:** list the 10 questions that reach your support most often.
2. **Build the agent in your website chat:** gather the information, the actions and the rule for handing off to a person.
3. **Train it with real conversations:** test, log the mistakes and fix them until the agent meets your definition of "ready".
4. **Connect the official WhatsApp API:** with a number, approved message templates and the handoff to a person.
5. **Track the cost of the messages:** compare the month's volume with Meta's rate table, using the calculator linked in the cost section.

## Why start with a website chat instead of going straight to the WhatsApp API?

Because a website chat lets the agent make mistakes, learn and be adjusted before you open WhatsApp to real customers. This chat, which developers call a widget (the name for a small chat box embedded in a page), sits in the corner of the page. It talks to the visitor the same way the agent would talk on WhatsApp, only without going through Meta's API.

The API is the next step after the website chat, not an alternative to it. The agent is the same; only the channel changes. At Nocodeia we follow this order: first the website chat, then training, and finally the WhatsApp API to serve customers there.

| | Website chat | Official WhatsApp API |
|---|---|---|
| Where it runs | On your website | On WhatsApp, through Meta's platform |
| What you pay | AI model and hosting; no WhatsApp message fee | Meta's fee per delivered message, plus the provider (varies, ask) |
| What it is for | Training, seeing real questions and adjusting | Serving customers where they already are |

## How much does each message cost on the WhatsApp API?

Meta charges per delivered message, and the price depends on the type. It does not charge for messages the customer sends to the company. The prices below are for Brazil, from the official rate table in force since October 1, 2026, checked on November 20, 2026 in the "Rate cards and volume tiers" section of [Meta's pricing documentation](https://developers.facebook.com/docs/whatsapp/pricing). The [official WhatsApp calculator](https://whatsappbusiness.com/pt-br/products/platform-pricing/#rates) (in Portuguese) also shows rates by country.

| Message type | When it is charged | Price per message (Brazil) |
|---|---|---|
| Marketing | Each marketing template delivered (promotion, news, re-engagement) | R$ 0.3217 (US$ 0.0625) |
| Utility | Each utility template delivered (order confirmation, delivery notice) | R$ 0.035 (US$ 0.0068) |
| Authentication | Each verification code delivered | R$ 0.035 (US$ 0.0068) |
| Service | Each free-form reply inside the 24-hour window, from the 1,001st of the month, per number | R$ 0.035 (US$ 0.0068) |

A service message is the free-form reply the agent sends inside the 24-hour window, which opens when the customer writes. This is where the AI agent works. Meta does not charge for the first 1,000 service messages of each month, per number. A marketing message costs about 9 times more than a service message.

Here is a worked example. It is hypothetical, so swap in your own numbers. Say 3,000 conversations a month, with 6 agent messages in each, plus 2,000 marketing messages.

- Service: 3,000 × 6 = 18,000 messages. Taking out the 1,000 free per number leaves 17,000 × R$ 0.035 = R$ 595.00.
- Marketing: 2,000 × R$ 0.3217 = R$ 643.40.
- Total for WhatsApp messages: R$ 595.00 + R$ 643.40 = R$ 1,238.40 per month.

This total does not include the AI model, hosting, the build or the provider's monthly fee, which varies from one provider to another. The 6 messages per conversation are an assumption of the example, not a market average. The math also assumes that no conversation came from an ad with a free window.

What the math shows: the service message is cheap, and what weighs on the bill is volume and marketing. That is why it pays to find out your real volume before you sign up with a provider and a number.

Want to run your own numbers? Use our [WhatsApp cost calculator](/calculadora-whatsapp/) (in Portuguese; it works in Brazilian reais, not dollars). It uses the same Brazil rates, in force since October 1, 2026 and checked on November 20, 2026. Meta can only adjust prices on the first day of a quarter, so check the official table before you decide.

## How do you build the agent in your website chat?

Build the agent with a small, clear scope. An AI agent, here, is an assistant that answers and also carries out tasks, like checking the catalog or alerting a person. Five steps cover the first version:

1. **Scope:** list the 10 questions that reach your support most often.
2. **Information base:** write prices, deadlines, return policy and opening hours in plain language, in one place.
3. **Actions:** define what the agent does besides answering, like checking stock, booking an appointment or logging an order.
4. **Handoff to a person:** decide when the agent calls your team and how it passes along a summary of the conversation.
5. **Chat position:** put the chat where the question comes up, like the product page or the pricing page.

If you would rather not build it yourself, Nocodeia builds [custom AI agents](/en/#servicos), programmed for your case. The costs of a project like this split into build, AI model, hosting and maintenance. At Nocodeia, price and deadline come out fixed from the free 45-minute diagnosis.

## How do you train the agent in the website chat before opening WhatsApp?

Train in short cycles, with real conversations. Each round has five moves:

1. **Run real conversations:** use visitors' questions and those from your old support conversations.
2. **Test the difficult customer:** ask something out of scope, write in anger, change the subject halfway.
3. **Log every mistake:** note the question, the answer given and the right answer.
4. **Fix the base and the rules:** adjust the information and the agent's limits, not just the sentence that failed.
5. **Define your "ready":** for example, answering the 10 most common questions correctly and handing off to a person when it does not know. Without promising an accuracy percentage.

Training directly on WhatsApp would cost little in fees. With 500 test conversations and 6 replies in each, that is 3,000 messages: (3,000 − 1,000) × R$ 0.035 = R$ 70.00, not counting the free allowance already used by real customers that month.

The gain of the website chat is different: you learn before opening the channel and you do not expose the customer to a still-raw agent. The AI model bill, which exists in the website chat and on WhatsApp, is a separate cost item and is not part of these fees.

## When and how do you connect the WhatsApp API?

Connect the API when the agent already answers well by your standard and there is enough volume to justify the channel. Not much changes: the agent is the same, and you swap the channel. These pieces usually come in:

1. **Number and account** on Meta's platform, directly or through an authorized provider (a company that connects your agent to the API).
2. **Approved message templates**, which are ready-made texts, approved by Meta, for talking to the customer outside the 24-hour window.
3. **The handoff to a person**, now inside WhatsApp.
4. **Volume control**, watching the month's bill against the price table.

To compare the options before choosing, see [the 3 paths to having an agent on WhatsApp](/en/blog/ai-agent-for-whatsapp/).

## What if your niche cannot use the official WhatsApp API?

In that case, the website chat stops being a stage and becomes the main channel. The WhatsApp Business policy (Section 4, accessed on November 20, 2026) lists "adult products and services" among the items that cannot be bought, sold or promoted through WhatsApp Business. The list also includes firearms, alcohol and tobacco, among others. See the [full WhatsApp Business policy](https://whatsappbusiness.com/pt-br/policy/) (in Portuguese).

Nocodeia has already applied this path with clients in niches that WhatsApp does not accept on the official API. One example is Amore Totale, an online store where WhatsApp stayed out of sales because of the WhatsApp Business policy. Amora, the store's support agent, serves customers on the website 24 hours a day and on Instagram and Facebook, in a single inbox (Chatwoot).

When the conversation calls for a person, the team gets an alert on Telegram with a summary of the conversation.

In the first months, 80% of conversations were resolved by Amora without a human. This is a Nocodeia measurement, with a number authorized by the client. See the full [Amore Totale case](/en/cases/amore-totale/).

## When is it not worth starting with the website chat?

When your site gets almost no visits. Without real conversations, training has no material. In that case, use the old questions from your WhatsApp support as a base and test the agent in a test environment, with a few people.

The same goes if your business lives only on WhatsApp. You can train with a small group of customers who have been warned, before opening to everyone. The point is the same: make mistakes with a few before getting it right with many.

## FAQ

### How do you create an AI agent for WhatsApp for free?

You can start without paying WhatsApp message fees by training the agent in your website chat. The AI model and hosting have a cost, and the official API charges per service message from the 1,001st of the month. So treat "free" as "no WhatsApp message fee during training".

### How much does each message cost on the WhatsApp API?

In Brazil, Meta's official table, in force since October 1, 2026, charges R$ 0.035 (US$ 0.0068) per service, utility and authentication message, and R$ 0.3217 (US$ 0.0625) per marketing message. The first 1,000 service messages of each month, per number, are not charged. Meta can only adjust prices on the first day of a quarter, so check the current table before deciding.

### Is an AI agent on WhatsApp Business paid?

It depends on the path. On the official API, Meta charges per message, with 1,000 service messages a month free, per number. Besides Meta, there are the AI model, the provider and the build of the agent.

### How do you train an AI agent?

Run real conversations, test hard questions and log every mistake. Fix the information base and the agent's rules, not just the sentence that failed. Repeat until it meets the definition of "ready" you set.

## Next step

If you want help designing this path, the [free 45-minute diagnosis](/en/#vaga) looks at your support with you and tells you honestly whether an agent is worth it. Book your diagnosis.
