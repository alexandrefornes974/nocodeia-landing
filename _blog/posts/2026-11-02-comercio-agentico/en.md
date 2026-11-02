# Agentic Commerce: What AI Reads in Your Store's Catalog

Agentic commerce is shopping done with the help of an AI agent that researches, compares and, in some cases, places the order for the customer. To choose, the agent checks the store's data: product, price, stock, shipping and terms of sale. If it doesn't understand the offer, it's unlikely to pick it.

An AI agent is an assistant that carries out tasks, not just answers questions. Getting ready for Black Friday (November 27) with only a banner and a coupon leaves something out. Someone who asks ChatGPT for "a blue midi dress under $200" gets a comparison built from data, and a vague title or outdated stock gets in the way.

## What is agentic commerce, and what already works in Brazil?

Agentic commerce is the customer handing the purchase, or part of it, to a program that acts on their behalf. According to a [report by the Brazilian newspaper O Tempo](https://www.otempo.com.br/economia/2026/10/29/agentes-de-ia-vao-fazer-compras-por-voce-o-que-ja-funciona-no-brasil) (in Portuguese), from October 29, 2026, a shopping agent works in four steps:

1. The customer describes what they want, with a budget, a preferred brand and a deadline.
2. The system searches catalogs, checks stock, compares prices and finds coupons.
3. It filters the options and presents the best one.
4. It fills in the delivery details, applies the authorized payment and completes the order.

Autonomy depends on the purchase: for recurring items, like pet food, the agent can act more independently; for expensive or taste-driven purchases, like clothes, most systems ask for confirmation before paying.

In Brazil, according to O Tempo, Visa and the Brazilian bank Banco do Brasil completed a purchase on a consumer's behalf in March 2026, described as the first of its kind in the country in a controlled production environment. In September, Amazon announced Alexa para Compras (Alexa for Shopping) in beta. ChatGPT and Gemini help with research and comparison, but they have no access to stores' checkout and don't pay for the user.

The [PYMNTS Intelligence report with Visa Acceptance Solutions](https://www.visaacceptance.com/content/dam/documents/campaign/shopping-index/2026-global-digital-shopping-index-agentic-edition.pdf), from July 2026, surveyed 5,241 consumers in the United States, Brazil and the United Arab Emirates, combined. Among online shoppers, 48% used AI to research their most recent purchase: 30% used ChatGPT or another OpenAI tool, 19% used Gemini.

In practice, today the agent researches and compares more than it pays. In our view, a store left out of the comparison loses the customer before the click.

## What does an AI agent read in your store's catalog?

The agent reads each product's data, from the name to the return policy. [OpenAI's product catalog spec](https://developers.openai.com/commerce/specs/file-upload/products), the format partner stores use to send products to ChatGPT, gives the picture: nine required fields, such as title, description, brand, image, availability and price; shipping, returns, barcode and reviews are optional.

| Data | Good example (illustrative) |
|---|---|
| Name with the variant | "Navy blue midi dress, M" |
| Factual description | "Viscose, 43 in long, lined" |
| Price and sale | "Was $229.90, now $189.90" |
| Stock | "S, M and L; XL sold out" |
| Shipping and delivery time | "3 business days to Chicago" |
| Exchanges and returns | Link to the returns page |
| Brand and barcode | GTIN on each variant |

GTIN is the number under the barcode. SKU is the internal code for each variant. The [E-Commerce Brasil article on agentic commerce](https://www.ecommercebrasil.com.br/artigos/comercio-agentico-como-se-adaptar-quando-o-cliente-e-a-ia) (in Portuguese) sums it up: retailers need to "structure catalogs, SKUs, prices, stock, shipping and terms of sale".

A caveat: OpenAI notes that this upload "currently targets the US". The list shows what an agent asks for; it doesn't mean a store outside the US can already send its catalog.

## Why can a messy catalog leave your store behind?

Because the agent compares data, not storefronts. In E-Commerce Brasil, Marcella Calfi, marketing manager at Zoop, writes that "ambiguous descriptions, incomplete information and outdated catalogs" can reduce a store's visibility in purchases made by agents.

In the PYMNTS report, among 1,185 merchants in the three countries surveyed in March 2026, only 15% had structured data ready for AI agents, and 23% could separate traffic coming from AI from human traffic.

Structured data is a set of labels in the page's code that tell the crawler "this is the price, this is the stock".

Illustrative example (fictional store):

- **Before:** "Gorgeous blue dress, check it out!"
- **After:** "Navy blue midi dress, viscose, sizes S to XL, bust 35 to 41 in, $189.90, delivery in 3 business days to Chicago."

In our view, that's where the small store has a chance, since most of the merchants surveyed didn't have this data ready yet. The report talks about "a clear opportunity" for early movers.

## How can you check what the agent sees on your product page?

Look at the product page the way a crawler would:

1. **Source code.** Open a best-selling product in Chrome, press Ctrl+U and, in the code, press Ctrl+F to search for the price, a size and "in stock". It's the [source code test from our post on building a website with AI](/en/blog/build-a-website-with-ai/), which we run on the Nocodeia website. Can't find it? The data may be put together in the browser or exist only in the image.
2. **Rich Results Test.** Paste the address into this free Google tool and see whether it recognizes the price and availability. [Google's documentation on product structured data](https://developers.google.com/search/docs/appearance/structured-data/product?hl=en) separates product snippets (pages where you can't buy) and merchant listings (pages where you can buy).
3. **Merchant Center.** Check that price and stock match the ones in Google Merchant Center, the dashboard where the store lists its products for Google Shopping. According to Google, having structured data on the page and a feed (the file with the product list) in Merchant Center "maximizes your eligibility".
4. **Ask the AI.** Ask ChatGPT for "a blue midi dress under $200 delivered to Chicago" and see whether your store shows up. It's a snapshot, not a measurement: the answer changes from person to person.

## What should you fix in your catalog before Black Friday?

Start with your best sellers, in this order:

1. **Title with the variant:** color, size or model.
2. **Factual description:** measurements, material and who it's for.
3. **The same price on the page, in the feed and at checkout.** In OpenAI's spec, a sale price that is higher than or equal to the regular price, or in a different currency, is not used.
4. **Up-to-date stock,** with sold-out items marked as sold out. As a reference, [OpenAI's getting started guide](https://developers.openai.com/commerce/guides/get-started) recommends that partners upload the full catalog at least once a day.
5. **Shipping and delivery time visible on the page,** not just in the cart.
6. **Return policy on its own page,** linked from the product. E-Commerce Brasil recommends simplifying "cancellations, exchanges, returns and refunds".
7. **Brand and barcode** on each variant.
8. **Product structured data** on the page.

These same fixes help Google and the customer who shops on a phone. If you'd rather not do it yourself, that's the work of our [A website Google and AI recommend](/en/#servicos) service, which for online stores includes product structured data and Google Merchant Center setup.

## What does an agent that checks the catalog from the inside look like?

It's an agent that can only answer well what's in the catalog. Amora, which Nocodeia built for Amore Totale, an online store selling lingerie and sensual products, searches the catalog, shows sizes, colors and descriptions, calculates shipping to the customer's ZIP code and calls in a person when needed.

She takes the customer to the product on the website, where the purchase happens. In the first months, she resolved 80% of conversations without a human, according to Nocodeia's measurement. See [how Amora serves Amore Totale's customers](/en/cases/amore-totale/).

During setup, the catalog data had to be checked and completed, like sizes, colors and shipping, so Amora would answer correctly. In our view, the same goes for a shopping platform's agent.

## Is it worth rushing to sell inside ChatGPT now?

In our view, for a small store outside the US, it isn't the priority yet. [OpenAI's getting started guide](https://developers.openai.com/commerce/guides/get-started) says catalog onboarding is "currently available to approved partners". The spec adds that "Eligibility does not guarantee display": being enabled for search doesn't guarantee showing up.

The priority is a catalog that can be read on your website and on Google, which already serves today's customer. Be wary of anyone who promises to put your store inside ChatGPT; whether you can pay to show up is answered in our guide on [how to get your business on ChatGPT](/en/blog/how-to-get-my-business-on-chatgpt/).

## FAQ

### What does agentic commerce mean?

It's shopping done with the help of an AI agent that researches, compares and can place the order. According to O Tempo, the difference from a regular chatbot is autonomy: the agent decides within the limits the customer has set.

### What is Visa agentic commerce?

It's the Visa Intelligent Commerce platform, used with Banco do Brasil in March 2026 for a purchase on a consumer's behalf, which O Tempo describes as the first of its kind in the country, in a controlled environment. In October 2025, the report says, Visa launched the Trusted Agent Protocol, which helps stores tell legitimate agents apart from malicious bots.

### Can you buy things on ChatGPT?

According to O Tempo, in Brazil ChatGPT helps research and compare models, but it has no access to stores' checkout and doesn't pay for the user. In practice, the customer completes the order at the store.

### How does ChatGPT shopping research work?

According to O Tempo, people who use ChatGPT to research a purchase describe what they want, set a price range and ask for comparisons between models. The store enters the comparison with the data it publishes.

### What is Google Merchant Center used for?

It's the Google dashboard where a store uploads its catalog through a feed, including for free listings. According to Google, a feed and structured data on the page, together, maximize the products' eligibility in Search.

## Where should you start?

Run the four checks today on your best-selling products. If you'd like help, [book your free 45-minute consultation](/en/#vaga): we look at one of your store's product pages with you, and you walk away with a fixed price and timeline.
