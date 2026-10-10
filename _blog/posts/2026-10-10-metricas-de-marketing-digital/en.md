# Does Your Company Use Digital Marketing Metrics?

Digital marketing metrics are the numbers that show whether the money spent on your website, social media and ads comes back as customers. Many businesses want a return but don't measure it. For a small business, a few numbers are enough: how many people saw the brand on Google, how many visited, how many got in touch and from where.

You pay for the website, boost posts on Instagram, maybe run Google ads. At the end of the month, someone asks: "how many customers did this bring in?" If the answer is "a few, I think," this guide is for you. It shows which numbers to watch, how Google's free tool figures out where each customer came from and, just as honestly, what stays out of the count.

## Why do businesses want a return but not measure what comes back?

Because asking for a return is easy; setting up the measurement takes work and gets pushed back. The 2025 trends report from [LocaliQ](https://localiq.com/blog/small-business-marketing-trends-report/), a marketing company, surveyed over 730 small business owners and marketers, 74% of them in the US or Canada. It's a mostly North American sample, but it shows the contradiction clearly.

In the report's words: "Return on investment was the top metric, with 60% indicating it is 'very important.'" At the same time, "Nearly half (47%) are using website analytics like Google Analytics." In our reading, return is the most valued metric, and fewer than half use the tool that helps measure it on the website.

In Brazil, where Nocodeia is based, a different survey points the same way. The [Digital Maturity Indicator 2025, from Sebrae and ABDI](https://sebraepr.com.br/impulsiona/pequenos-negocios-avancam-em-maturidade-digital-em-2025/) (in Portuguese), two Brazilian organizations that support small businesses and industry, assessed over 7,000 Brazilian micro and small businesses between May and June 2025. The indicator, on a scale of 0 to 80 points, rose from 35 to 37. According to Sebrae, "collaborative innovation and the use of data are still the main challenges" (our translation).

In our assessment, a business that doesn't measure can't tell which channel pays off. It ends up cutting what worked or sticking with what brings in no one.

## Why should everything point to your company's website?

Because the website is where you can follow the customer's path from start to finish. The rule we use at Nocodeia is this: everything converges on the website, because that's where we can measure the customer's full path. What happens on social media and in AI tools we measure on each platform and bring together in a single dashboard.

In practice, the Instagram post, the LinkedIn profile and the Facebook page take people to the website. There they read, compare and click the WhatsApp button or send the form. Almost every step of that path can be counted.

Many businesses do the opposite. According to the [ICT Enterprises 2024 survey from Cetic.br](https://cetic.br/media/docs/publicacoes/2/20250512121759/tic_empresas_2024_resumo_executivo.pdf) (in Portuguese), a Brazilian research center on internet use, 53% of Brazilian companies with more than ten people employed had a website in 2024, down from 54% in 2019. For these companies, social media is the main form of online presence. The data was collected between March and November 2024.

In our assessment, a social media profile is rented land: the platform decides what you see of your own numbers. The website is land you own.

## Which digital marketing metrics should a small business track?

Five numbers a month cover most of a small business's decisions. It's the report we use in the Nocodeia method, with five lines at most:

| Number | What it answers | Where to see it |
|---|---|---|
| Google impressions | How many times the site showed up in search | Google Search Console |
| Visits | How many people came to the site | GA4 |
| Leads or sales | How many clicked WhatsApp, sent the form or bought | GA4 (key events) |
| Where they came from | Google, Instagram, AI, direct link | GA4 (channels) |
| One recommendation | What to do next month | Whoever analyzes the numbers |

Two terms from the table. Google Search Console is a free Google dashboard that shows, among other things, how many times your site appeared in search results. GA4 (Google Analytics 4) is Google's free tool that counts website visits and what people do on the site.

Notice what was left out: likes and followers. These are the so-called vanity metrics, numbers that feel good but don't pay the bills. They only make it into the report when they lead someone to get in touch.

## How does GA4 figure out where each customer came from?

With three pieces: the tag on the link, the record of actions and the split by channel. GA4 does the split on its own, based on the address the person came from; the tag and the record of actions make that count more precise and show who became a lead.

1. **Tag on the link (UTM).** A UTM is a bit of text added to the end of a link that says where the visit came from. According to the Google Analytics help page on campaign URLs, when someone clicks a tagged link, "the URL parameters are sent to Analytics, and the parameter values are visible in the Traffic acquisition report." Google says you should always use three tags: source (utm_source), medium (utm_medium) and campaign (utm_campaign).

   In practice, the link in your Instagram bio becomes something like `yoursite.com/?utm_source=instagram&utm_medium=social&utm_campaign=bio`.
2. **Record of actions (events).** An event is each action GA4 records, like clicking the WhatsApp button or sending the form. The action that's worth money to you is marked as a key event, what many people call a conversion. That number answers "how many customers did the website bring in."
3. **Split by channel.** GA4 groups visits into channels, such as organic search, social media and direct. According to the [Google Analytics help page on channel groups](https://support.google.com/analytics/answer/9756891?hl=en), there is a channel called "AI Assistant," for people who arrive from sources like ChatGPT, Gemini, Deepseek, Copilot or Grok. People who arrive through Google's AI Overviews and AI Mode (the AI-generated answers inside Google Search) fall under "Organic Search."

## What usually goes wrong when a business sets it up alone?

You can start on your own: Search Console and Google Analytics are free. Installing is the easy part; setting things up so the numbers can be trusted is another story.

If the tool is installed without the consent setup, it stores cookies before the visitor answers the cookie notice. In Brazil, in our assessment, that may conflict with the LGPD, the country's data protection law. The same tool installed twice can count visits double. And, as Google itself warns, a link tagged "Meta" and another tagged "meta" become two different sources in the report.

None of this shows an error on screen: the dashboard keeps showing numbers, just wrong ones. We ran into several of these issues while setting up Nocodeia's own website: even the team's computer was blocking Google Analytics, and tests run from it showed zero visits. In our assessment, deciding with wrong data is worse than having no data.

## What is Nocodeia's MTAM method?

MTAM is Nocodeia's method for measuring a small business's marketing in four steps that repeat every month. Each letter is a step:

| Step | What we do | Question it answers |
|---|---|---|
| **M**easure the starting point | We set the "month zero": how many people see, visit and contact you today | Where are we? |
| **T**ag the links | We add UTMs to social media links, turn WhatsApp and the form into events and check the AI channel in GA4 | Where does each lead come from? |
| **A**im every channel at the site | We make social media, Google and AI tools point to the website, with SEO (adjustments to show up on Google) and GEO (adjustments to be read and cited by AI tools) | How can more people get here? |
| **M**onitor and decide | We deliver the monthly five-number report and one recommendation: what kind of post to make, what to adjust in SEO or GEO | What do we do next month? |

After the last step, the cycle goes back to the start: the month's result becomes the new starting point. For the part about being cited by AI tools, see the guide [how to get my business on ChatGPT](/en/blog/how-to-get-my-business-on-chatgpt/).

Two practical rules go with the method. We follow an analytics checklist on every website, so no tag is forgotten. And the GA4 and Search Console accounts stay in the client's Google account, not ours: if you ever switch providers, the history is still yours. The monthly recommendation comes from analyzing the numbers; the tool that will speed up that part is still being built.

## How does Nocodeia measure its own website?

With the same pieces we recommend. On October 9, 2026, Nocodeia's website started measuring visits and form leads with GA4, a cookie notice and a lead event (the record of each person who asks to be contacted). Google Search Console and Bing Webmaster Tools, the equivalent dashboard for Microsoft's search engine, have been set up since October 3, 2026.

It's still too early to show results, and we'd rather not make any up. In tests on October 9, 2026, when the visitor accepted cookies, the form submission showed up in GA4 along with the channel the visitor came from.

## What can no tool measure?

The numbers show a trend, not the exact count of every customer. The blind spots:

- **People who decline cookies.** A cookie is a small file the website stores in the browser to recognize the visit. According to the [Google Analytics help page on consent mode](https://support.google.com/analytics/answer/9976101?hl=en), it depends on how the cookie notice was installed. In one setup, the site sends Google only a minimal signal, with no cookie, and GA4 fills the gaps with estimates. In the other, the tool stays blocked and "no data is collected."
- **Links forwarded on WhatsApp.** For Google, "Direct" is anyone who arrives "via a saved link or by entering your URL." In our assessment, a link copied and sent in a chat usually lands there, because it arrives without a tag.
- **People who see the brand in an AI answer and don't click.** No click, no visit, and nothing shows up on the website.
- **Reach on social media.** How many people saw the post stays in the Instagram, Facebook and LinkedIn dashboards, not in GA4.
- **Sales closed on WhatsApp.** The website records the click on the button; the sale happens in the chat, outside the site.
- **Blockers.** Ad blockers can prevent part of the count, as happened on our team's computer.

That's why we bring each platform's numbers together in a single dashboard and look at the direction of the curve, month by month.

## FAQ

### Is Google Analytics free?

Yes. Google says, on the Analytics page, that it offers the tools free of charge to understand the customer journey. There's a paid version, Analytics 360, aimed at large enterprises.

### How do I know how many people visit my website?

Install GA4 on the website and check the visits report. To know how many became leads, mark the WhatsApp click and the form submission as key events.

### What are vanity metrics?

They're numbers that feel good but don't show sales, like likes and followers. They only count when you can tie them to leads or sales.

### What is a UTM?

It's a tag added to the end of a link that tells GA4 where the visit came from, like "instagram" or "email." Google recommends always using source, medium and campaign.

## Where should you start?

Start with month zero: knowing how many people see, visit and contact your business today. If you want reliable numbers from the first month, without finding the mistakes later, Nocodeia can help. In the [45-minute consultation](/en/#como), we look at this with you and show what's missing for your website to tell where each lead comes from. That's the work of our [A website Google and AI recommend](/en/#servicos) service, with a monthly report. [Book your free consultation](/en/#vaga).
