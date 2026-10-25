# ChatGPT Work for Enterprise: What Uber Did Before Rollout

ChatGPT Work is an OpenAI agent, launched in July 2026, that carries out multi-step tasks inside ChatGPT: it pulls information from apps and files and delivers spreadsheets, slides and documents. Uber tested it with 1,000 employees before opening it to about 30,000. That path works as a roadmap for your company.

If you manage a department, you know the scene: the team asks for AI access, IT asks for time to evaluate and, meanwhile, everyone uses whatever personal account they like, with no oversight at all. Uber's decision, announced on October 22, shows a more organized way out.

## What is ChatGPT Work and how does it work?

ChatGPT Work is an agent: an assistant that carries out tasks instead of only answering. According to [TNW's coverage of the launch](https://thenextweb.com/news/openai-chatgpt-work-agent-launch), OpenAI describes it as an agent inside ChatGPT that can act across the user's apps and files.

The difference from regular chat is in what you ask for. In chat, you ask a question and get text back. In Work, you set a goal, and the agent breaks the job into steps, runs each one and hands you the finished file. In practice:

- **It gathers context from several sources.** It connects through plugins (connectors that link ChatGPT to another system) to Slack, Microsoft Teams, Google Drive, SharePoint, email, calendar and CRM (the system where a company tracks customers and sales).
- **It delivers the result, not just an answer.** Spreadsheets, slides, documents and even small web apps.
- **It stays on the project.** It can work for hours on the same task and repeat scheduled actions.

The product came out on July 9 with GPT-5.6, according to [Fox Business](https://www.foxbusiness.com/technology/openai-unveils-chatgpt-work-automate-workplace-tasks-ai-race-intensifies), in a story with contributions from Reuters. TNW adds that it uses technology from Codex, OpenAI's coding tool.

## What did Uber do before opening ChatGPT Work to about 30,000 people?

Uber started with a 1,000-employee pilot and only then opened it to the whole company. The details, published by [TechCrunch](https://techcrunch.com/2026/10/22/uber-puts-all-30000-employees-on-chatgpt-work/) on October 22, work as a roadmap:

1. **A small, mixed pilot.** 1,000 people from areas like finance, operations and product.
2. **Business teams first.** According to Sumanth Sukumar, Uber's vice president of engineering, about 80% of the first users were not engineers.
3. **Concrete uses.** Analyzing operations data to spot trends and build recommendations, adapting training material for other markets and languages, and creating interactive dashboards.
4. **Earlier experience.** Earlier the same year, Uber paired 30 AI engineers with teams from other areas and gave them two weeks to automate parts of those teams' work.
5. **Measurement after the rollout.** The company said it will track how employees use the tool and whether it helps them do their jobs.

What Uber didn't share: how much it is spending. TechCrunch notes that the cost was not disclosed.

For a manager, the lesson is the order of the steps. First a small group, with people from operations, testing real tasks. Then the company-wide rollout, with usage measurement already agreed on.

## How much does ChatGPT Work cost?

OpenAI has not published a separate price for ChatGPT Work in the sources we were able to access. What the launch coverage does report is how it's billed, and that changes the math.

- **It's on every plan.** TNW and Fox Business say Work is available on every ChatGPT plan, including the free one; according to Fox, through the ChatGPT desktop app.
- **Usage is metered, as with Codex.** According to TNW, a task doesn't count like a regular chat question: more complex tasks use up more of the allowance included in the plan.
- **There's a spending cap.** Admins on the Enterprise and Edu plans (Edu is for schools and universities) can set spending limits per group.

In practice, the cost depends on how many long tasks your team will run, and that only shows up in a pilot. Before opening it to everyone, ask IT for a usage estimate based on the real usage of a small group. The same logic applies to custom-built agents, as we show in our post on [how much an AI agent costs](/en/blog/how-much-does-an-ai-agent-cost/).

## Which controls should you set up before rolling out an agent company-wide?

Decide who gets access, what the agent can read, what it can do and when it has to ask for approval. According to [TNW's coverage of the launch](https://thenextweb.com/news/openai-chatgpt-work-agent-launch), these are the controls OpenAI describes:

| Control | What OpenAI describes | Question for IT |
|---|---|---|
| Access | Admins decide who uses Work | Which departments join the pilot? |
| Company context | Admins choose what information the agent uses | What customer personal data will it read? |
| Connected tools | Admins choose which connectors are allowed | Which systems stay out at first? |
| Allowed actions | Admins limit what the agent can carry out | Can it send email or only draft it? |
| Approval | The user decides when the agent needs approval before acting | Which actions always require approval? |
| Oversight | A Compliance API (a door another system uses to pull the records) tracks conversations and actions | Who reviews those records, and how often? |
| Spending | Per-group limits in the admin console | What's the cap for the pilot? |

The admin controls listed apply to the Enterprise and Edu plans. To decide how much autonomy to give each type of task, use the levels in our guide to [AI agent governance](/en/blog/ai-agent-governance/).

## Where should you start if your company isn't Uber?

Start with a task map, not with licenses. Uber had 30 AI engineers to lend to other teams; your company probably doesn't. The shortest path is to choose where the agent will work before granting access.

1. **Pick 1 or 2 departments** with repetitive office work: the weekly report, consolidating spreadsheets, material in other languages.
2. **List the tasks and estimate the hours** each one takes per week.
3. **Run a small pilot** with the controls from the table above turned on.
4. **Measure usage and hours** before expanding to other departments.

Steps 1 and 2 are what we do in the [Automation X-ray](/en/#servicos): a map of the tasks that can be automated, estimated hours saved per task and an action plan ranked by return, in about a week. With that map, the pilot starts with the tasks that give the team the most time back.

## When is ChatGPT Work not enough?

ChatGPT Work handles office tasks for one person or one team well: summaries, spreadsheets, slides, dashboards, scheduled tasks included. For a department's core process, the math changes.

In our assessment, a different path makes sense when the process always follows the same rule and can't vary from one run to the next, when the department's system is old and has no connector, or when the department needs its own tool, with role-based permissions and a record of who changed what. That's where process automation or an internal system comes in. The task map shows which case is which.

## FAQ

### Is ChatGPT Work free?

According to the launch coverage, ChatGPT Work is available on every plan, including the free one, through the desktop app. Usage draws on the plan's allowance, and long tasks use more. For company use, the admin controls are on the Enterprise plan.

### Is there a ChatGPT Work download?

Yes. According to TNW, there's a desktop app for Mac and Windows, available worldwide, in addition to the web and mobile versions.

### Is there a ChatGPT plan for businesses?

Yes. OpenAI has plans for companies, such as Business and Enterprise, and ChatGPT Work was made available on both at launch or in the days that followed. Check prices and terms on OpenAI's official page before you decide.

### How do you implement AI in a company?

Start with a map of the repetitive tasks and the hours they take. Run a small pilot with access and approval controls turned on. Measure usage and results before opening it to other departments.

## Where should your department start?

Before requesting licenses for everyone, find out which tasks in your department are worth a pilot. See [how the 45-minute consultation works](/en/#como) and [book your free consultation](/en/#vaga): you walk away with a fixed price and timeline for the Automation X-ray.
