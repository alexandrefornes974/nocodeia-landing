The Operations area of a multinational technology consultancy, part of a group with more than 20,000 employees, tracked its OKRs in a spreadsheet rebuilt from scratch every month, and anyone could see and edit everything. Nocodeia built a custom OKR platform: the goal structure is set up once per cycle, each person records progress on what they own, and leadership sees where to act. The client's name is withheld at their request.

<div class="numeros">
<div><strong>210+</strong><span>employees with clear, written goals</span></div>
<div><strong>Zero</strong><span>spreadsheets rebuilt every month: the structure is saved</span></div>
<div><strong>4 views</strong><span>employee, manager, area lead and leadership, each seeing only their own</span></div>
<div><strong>1 version</strong><span>of the official numbers, instead of parallel spreadsheets</span></div>
</div>

## What was the problem?

The area had grown, but goal management still worked the way it did when it was small:

- **Rework every month.** The OKR spreadsheet was rebuilt from scratch each month, even when objectives and key results had not changed. There was no progress history.
- **Everyone saw and edited everything.** There was no control by area, team or person, and no way to know who changed what.
- **Several versions of the truth.** Copies of the spreadsheet circulated, and each lead came to meetings with their own numbers.
- **Diluted accountability.** There was no record that a person knew and agreed with their own goal. When something slipped, nobody could say where it had failed.
- **New hires were a hassle.** Placing an employee in the structure depended on the memory of whoever maintained the spreadsheet.
- **Time lost on reporting.** Leads spent hours asking for status by email and putting reports together.

The market rule of thumb is that OKR spreadsheets start to break above about 20 people. This area had more than 200.

## Why not use an off-the-shelf tool?

Restructuring the company's SharePoint required admin rights and a ticket in the IT queue. A subscription OKR tool required a budget that had not been approved. The area wanted to start without depending on another team, so Nocodeia built a custom application with a database and login, ready to move later to the company's own cloud without rebuilding the screens.

## How does the platform work?

The objective structure is set up once per cycle. After that, the only monthly work is the check-in.

<div class="fluxo" aria-label="How the OKR cycle works">
<span>Leadership sets the cycle's objectives</span><b aria-hidden="true">→</b>
<span>Manager creates the team's goals</span><b aria-hidden="true">→</b>
<span>Owner accepts or proposes a change</span><b aria-hidden="true">→</b>
<span class="destaque">Monthly check-in</span><b aria-hidden="true">→</b>
<span>Dashboard shows where to act</span>
</div>

1. **Cascading objectives:** company, area and team, with the parent objective visible at each level.
2. **Monthly check-in** in a few clicks: current value and a comment. Nothing is overwritten, and every month stays in the history.
3. **Automatic status:** the system compares progress with the time elapsed in the cycle and marks each goal as on track, at risk, behind or done.
4. **Goal sign-off:** the owner confirms "I have read and agree with this goal for the cycle". The record keeps the exact version accepted and cannot be deleted, not even by an admin.
5. **Two-way goals:** employees can propose a change or an extra goal, and the manager approves or rejects it with a reason. Nobody approves their own proposal.
6. **New cycle in one click,** copying the previous structure.

<figure class="tela"><img src="/assets/okr-dashboard.webp" alt="Company dashboard with overdue and at-risk goals, pending check-ins and process discipline" width="1600" height="760" loading="lazy"><figcaption>Dashboard: leadership opens it and immediately sees where to act, with overdue goals, goals at risk, goals with no owner and check-in discipline.</figcaption></figure>

## Who sees what?

Each role has its own view, and the database enforces it, not just the screen: every query returns only what the person is allowed to see.

- **Employee:** their own goals, what is left to accept and this month's check-in.
- **Manager:** the whole team, with owner, progress, status and how many days each sign-off has been pending.
- **Area lead:** the area's teams and managers, side by side.
- **Leadership:** the whole company, drilling down from area to team, manager and person.

<figure class="tela"><img src="/assets/okr-painel.webp" alt="Personal OKR dashboard with goals, status and this month's to-dos" width="1600" height="760" loading="lazy"><figcaption>My dashboard: each person sees their own goals, their status and what is left to do this month.</figcaption></figure>

Automated tests check, role by role, that one team cannot read or change another team's data. The database has a daily backup, with a tested restore.

## What were the results?

- **No more rework:** the structure is set up once per cycle; the following month, it is just the check-in.
- **One version of the truth** in leadership meetings, instead of competing spreadsheets.
- **Clear accountability:** every goal has an owner, a recorded sign-off and a month-by-month history.
- **Status without email chasing:** the dashboard shows progress and delays without anyone building a report.
- **New hires in minutes:** register the person and link them to a team, and permissions apply automatically.
- **Offboarding without losing history:** goals close on the exit date, and everything is kept under "archived".

<figure class="tela"><img src="/assets/okr-ciclos.webp" alt="Quarterly cycles screen with drafts and structure copy" width="1600" height="760" loading="lazy"><figcaption>Cycles: the new quarter starts as a draft and copies the previous structure.</figcaption></figure>

The platform is built with React and TypeScript, Supabase (PostgreSQL, login and row-level access rules), Vercel and GitHub Actions, which runs the tests and the daily backup. It also works on mobile.

## FAQ

### Is it worth replacing an OKR spreadsheet with a system?

Once a team grows past about 20 people, yes: the spreadsheet starts producing parallel copies, rework and no access control. In this case, the area had more than 200 people and rebuilt the spreadsheet every month.

### Custom OKR system or off-the-shelf tool?

An off-the-shelf tool is fast when there is budget and the process fits it. A custom system is worth it when the company needs its own rules, such as formal goal sign-off, role-based views and data inside its own infrastructure.

### How long does it take to build an OKR platform?

It depends on the number of roles, the approval rules and the integrations. You get a fixed timeline and price after the free consultation. Internal systems like this one usually take 1 to 3 months.

## Do your goals still live in a spreadsheet?

In the free 45-minute consultation, we look at how your company tracks goals today and tell you honestly whether a system of your own is worth it. Explore our [custom internal systems](/en/#servicos) and [book your free consultation](/en/#vaga).
