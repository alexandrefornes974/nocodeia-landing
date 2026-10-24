# Build a Website With AI: Will Google and ChatGPT Read It?

Building a website with AI means using a builder, like Wix, Hostinger or Lovable, that creates the pages from a description. The site can look great and still be invisible: if the text only shows up after JavaScript runs in the browser, Google needs an extra step and AI crawlers may not read it.

You described your business, the builder created the pages and the site looks professional. But customers search on Google, ask ChatGPT, and your business doesn't show up. Often the reason is what the crawler gets when it visits the page: text that is only put together later, in the browser, or text written inside an image.

## Can you build your business website with AI and show up on Google?

Yes, as long as the text arrives ready in the code the server sends. The builder takes care of the look, fast. The question almost nobody asks is whether the crawler can read what's written.

A crawler, here, is the program Google and AI companies use to visit websites and read their content, like an automatic reader. The page's code is the file the server sends when someone opens the website's address.

If the names of your services, your city and your phone number are written in that file, the crawler reads them on the first visit. If they aren't, reading depends on extra steps, and some crawlers don't take those steps.

## Why can a good-looking website be invisible to Google and ChatGPT?

For two reasons: the text is put together in the browser by JavaScript, or the text only exists inside an image.

- **Text put together by JavaScript.** JavaScript is the language that makes parts of a page appear and change in the browser. On some sites, the server sends an almost empty page plus a program that writes the text later, on the visitor's computer or phone. This is common in apps built with React, a popular tool for building apps.
- **Text inside an image.** A banner with your services, prices or address "drawn" into the artwork. To a crawler, that's a photo.

Google handles JavaScript, but in more steps. [Google's documentation on JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=en) explains that it processes JavaScript pages in 3 phases: crawling, rendering and indexing (storing the page in Google's catalog). Reading the text straight from the code "works well for classical websites or server-side rendered pages"; when a program builds the text, "Google needs to execute JavaScript". Rendering means running the program to build the page.

With AI crawlers, it gets worse. A [study by Vercel and MERJ](https://vercel.com/blog/the-rise-of-the-ai-crawler), published in December 2024, found that the major AI crawlers didn't render JavaScript, including those from ChatGPT, Claude and Perplexity. The ChatGPT and Claude crawlers downloaded JavaScript files but didn't execute them.

The exceptions mentioned were Gemini, which uses Google's crawler infrastructure, and Apple's crawler (AppleBot). Crawlers change, so treat this as a snapshot of that date.

| How the text arrives | Google | AI crawlers (Dec 2024 study) | What to do |
|---|---|---|---|
| Ready in the code (static or server-rendered site) | Finds the text in the code the server sends | Can read it: the text is already in the code | Keep it that way |
| Put together in the browser by JavaScript | Only sees the text after running JavaScript during rendering | The major ones didn't execute JavaScript | Start delivering the page ready |
| Inside an image | Asks for important content in text form | No source confirms they read it | Rewrite it as text |

## Is a static website worse for Google?

No, it's the opposite: a static website is the easiest to read. Static means the server delivers the page already built, with the text written in the code, the same for every visitor. The crawler opens it and reads it, with no extra step.

The confusion comes from the name, which sounds like "frozen" or "old". What gets in the way is a site that only writes its text in the browser. Google itself says, in the same documentation, that "server-side or pre-rendering is still a great idea", because "not all bots can run JavaScript". The Nocodeia website, for example, uses static pages, with the text already in the code.

## How do Wix, Hostinger and Lovable deliver your website's pages?

All three say new sites come with pages built on the server, but the date your site was created matters. Here's what each company states:

| Builder | What the company states | Caveat |
|---|---|---|
| Wix | On the [Wix blog](https://www.wix.com/blog/is-wix-seo-friendly), sites use server-side rendering and AI crawlers get the full content on the first visit | It's Wix's own marketing copy (published September 21, 2026, updated October 18, 2026); we didn't find this in its help center |
| Hostinger (AI Builder) | In the [product update from September 28, 2026](https://www.hostinger.com/blog/product-updates-week-39-2026/), sites created from September 21, 2026 use server-side rendering | The update doesn't mention sites created before that date |
| Lovable | In [Lovable's official FAQ](https://docs.lovable.dev/introduction/faq), apps created since May 13, 2026 (June 22, 2026 on the Enterprise plan) render on the server; older ones render in the browser, and Lovable serves ready-made copies of published pages to verified search engines, social media preview bots and AI crawlers | In an older project, the source code you see may come back almost empty, even though crawlers get the ready-made copy |

What about other tools, like Canva or HostGator? We didn't check them. Each one changes fast, so instead of trusting the marketing, run the test below. It works for any builder.

## How can you test in 5 minutes whether Google and AI can read your site?

Open the page's code and look for a sentence that appears on screen. Step by step, on a computer:

1. Open a page of your site in Chrome, right-click an empty area and choose "View page source" (or press Ctrl+U).
2. Press Ctrl+F and search for a sentence that appears on screen, like the name of a service. Found it? The text goes out ready in the code. Didn't find it, or you only see lines of program and almost no text? The text is put together in the browser.
3. Repeat with your address, phone number and prices. If they don't show up, go back to the page and try to select that text with your mouse. If you can't select it, it's inside an image.
4. To see what Google sees, use the URL Inspection tool in Google Search Console, Google's free tool for website owners. Click "Test live URL" and then "View tested page". It shows the code Google received and a screenshot of the built page.

How to read the result: step 2 shows what a crawler that doesn't run JavaScript gets, which was the case for AI crawlers in the study mentioned above. Step 4 shows what Google sees after building the page. If Google sees the text and the source code doesn't have it, Google may still index the page, but AI crawlers may miss the content. It's the same test we run on the Nocodeia website.

One exception: in an older Lovable project, the source code may come back almost empty and, even so, Lovable says it serves a ready-made copy to crawlers; in that case, use step 4 and Lovable's own SEO tab.

## What should you do if your site fails the test?

Fix the cause the test pointed to first. By situation:

- **Lovable, older project (React + Vite):** check whether the project can be updated to the new structure, which renders on the server, as Lovable's FAQ describes, and run the test again. Today Lovable says it serves ready-made copies to crawlers; with the page built on the server, the text goes out in the code for any visitor, without depending on that. The same FAQ mentions the "SEO & AI search" tab, free on all plans, which checks titles, indexing, sitemap and robots.txt.
- **Hostinger site created before September 21, 2026:** ask support whether your site already uses server-side rendering.
- **Text in an image:** rewrite your services, address, phone number, hours and prices as real text. The image stays as support.
- **Blocked crawlers or a site that isn't on Google:** the step-by-step for robots.txt and Search Console is in the guide on [how to get your business on ChatGPT](/en/blog/how-to-get-my-business-on-chatgpt/).
- **A builder that won't let you deliver the text ready:** rebuild the main pages (home, services and contact) with the text ready in the code. That's the kind of work our [A website Google and AI recommend](/en/#servicos) service does.

## When is an AI builder enough, and when should you call someone?

The builder is enough to get started if the site passed the test, has text that answers customers' questions and is in Search Console. It's worth getting help when the site fails the test, when your business depends on being found (local services or B2B sales) or when you want a blog and tracking.

For tracking, see how to [measure where the customers who reach your website come from](/en/blog/digital-marketing-metrics/). In our view, the most expensive mistake is finding out months later that the site was never read. A good-looking website nobody finds doesn't bring in revenue.

## FAQ

### Can you build a website with AI for free?

Some builders have a free plan. Check the official page for what the plan includes before deciding. The source code test works on any plan.

### Why isn't my website showing up on Google?

Three common causes: the site hasn't been indexed yet, the text is put together in the browser or sits in an image, or robots.txt (the file that says which crawlers may enter the site) blocks the crawler. Start with the URL Inspection tool in Search Console, which shows whether the page is on Google.

### My Wix website isn't showing up on Google: what should I do?

Add the site to Google Search Console and use the URL Inspection tool on the page that doesn't show up. Also check that your services, address and phone number are written as text, not inside an image. According to Wix, its sites already come with pages built on the server, so start with indexing and the text.

### Is Lovable good for building websites?

It's a fast tool for building websites and apps. According to Lovable's FAQ, new projects render on the server and, for older ones, it serves ready-made copies of the pages to verified search engines and AI crawlers. If your project is older, check whether you can update it to the new structure.

### How do I get my website on Google for free?

Add the site to Google Search Console, which is free, submit the sitemap (the list of the site's pages) and make sure the text is in the page's code. Even so, Google itself warns, on its page about AI features in Search: "Indexing and serving isn't guaranteed."

## Where should you start?

Run the 5-minute test today, on your home page and your services page. If the text doesn't show up in the code, or if you'd rather not handle it yourself, see [how the 45-minute consultation works](/en/#como) and [book your free consultation](/en/#vaga): we look at your website with you and you walk away with a fixed price and timeline to fix it.
