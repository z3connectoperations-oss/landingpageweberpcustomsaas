# Z3Connect — US Landing Page PRD
**Goal:** Book qualified discovery calls on Calendly from US founders & SMBs who need custom SaaS, ERP, or web apps.
**Stack:** React + Tailwind CSS + Framer Motion + Calendly embed
**Version:** v1.0 — Ready to build

---

## 0. STRATEGIC CALLS (non-negotiable — read before building)

1. **One lead service, not three.** The hero sells **Custom SaaS / Custom Software**. ERP and Web Apps live below the fold as "Also build." Trying to sell three things in the hero = selling zero.
2. **No prices on page.** Pricing depends on scope → pricing goes in the Calendly call. Page CTA = "Get a fixed-price proposal in 48 hours."
3. **Positioning angle = cost/speed arbitrage, not cheap labor.** We say "senior engineering at 1/3 the US cost, shipping weekly." Never "outsourcing" or "offshore."
4. **Proof problem solved honestly.** Existing testimonials are TN MSMEs. We reframe them as **"30+ businesses shipped, 50+ production systems live"** — volume > geography. Real quotes used verbatim, names you can swap later.
5. **CTA is Calendly, everywhere.** No contact forms. No "Contact us." Every CTA = "Book a 20-min scoping call."

---

## 1. POSITIONING

### Core Offer Statement
> **We build custom SaaS, web apps, and ERP systems for US founders and SMBs — engineered by a senior team in India, shipped on your time zone, for 1/3 the cost of a US agency and 3x the speed of a freelancer.**

### Unique Mechanism: The Z3 Sprint System™
- **Week 1** → Scoping, wireframes, architecture signed off
- **Week 2** → First working preview deployed to staging
- **Weeks 3–4** → Production build with weekly demos
- **Week 5+** → Launch, iterate, support
> *No 6-month death marches. No "we'll send an update next week." Every Friday you see working software.*

### Target Customer Profile (ICP)
- **Who:** US-based founders, operators, agencies, SMB owners
- **Revenue:** $100K–$5M ARR (bootstrapped or early-funded)
- **Pain:** Quoted $50K–$200K by US agency, ghosted by Upwork freelancers, stuck in no-code that won't scale
- **Budget comfort zone:** $5K–$50K per project
- **Trigger event:** Launching a new product, rebuilding legacy tool, automating manual ops

### Pain → Solution Mapping

| Their Pain | Our Solution |
|---|---|
| "US agency quoted $80K and 6 months" | $15–30K, 4–6 weeks, fixed scope |
| "My last freelancer disappeared mid-project" | Senior team of 6, contracts, weekly demos |
| "Zapier and no-code broke at scale" | Custom code you own, built to scale to 10K users |
| "I don't have a CTO to manage devs" | You don't need one. Founder-led delivery. |
| "Timezone is a nightmare with offshore teams" | Daily standups on your time. Slack/Loom replies < 4 hrs. |

---

## 2. LANDING PAGE STRUCTURE (Hormozi Direct-Response Stack)

### Section 1 — HERO
**Goal:** In 5 seconds: state outcome, stake claim, force decision.

**Layout:** 2-column desktop (60/40), stacked mobile
**Left (60%):** Eyebrow tag → Headline → Subheadline → 3 proof bullets → Primary CTA + Secondary CTA
**Right (40%):** Single product mockup/dashboard screenshot with subtle motion (Framer Motion fade + 5px lift on load)
**Background:** Pure black (#0A0A0A) with subtle 1px grid pattern at 8% opacity
**UI notes:** 80vh min-height. CTA button = neon green, 48px height, 18px bold text. No carousel, no video, no hero slider. Static, fast, decisive.

**Copy — Hero (Variation A — recommended):**
> **Eyebrow:** For US founders & operators who are done waiting
> **Headline:** Custom Software, Shipped in Weeks — Not Quarters.
> **Subheadline:** We build SaaS, ERPs, and web apps for US companies at 1/3 the cost of a US agency, and ship working software every Friday. 30+ businesses live. 50+ systems in production.
> **Proof row (3 inline badges):** ✓ 50+ shipped · ✓ First demo in 7 days · ✓ Fixed-price, fixed-scope
> **Primary CTA:** Book a 20-min Scoping Call →
> **Secondary CTA:** See what we've shipped ↓ *(smooth-scrolls to proof)*

---

### Section 2 — PROBLEM AGITATION
**Goal:** Make them nod 4 times. Say what they're feeling before they can hide it.

**Layout:** Full-width, centered, single column, max-width 720px
**UI notes:** Headline 48px bold. Each pain bullet = 20px, 16px vertical gap, red-orange (#FF4D2E) icon (X mark or broken chain).

**Copy:**
> **Headline (Variation A):** You didn't start this company to chase developers.
>
> You've probably been here already:
>
> ✗ **The $80K quote** from a US agency that comes with a 6-month Gantt chart and an account manager you'll never speak to.
> ✗ **The Upwork spiral** — 4 freelancers, 3 rebuilds, and an app that still breaks on login.
> ✗ **The no-code wall** — Bubble was great until you hit 500 users and the whole thing froze.
> ✗ **The "I'll just hire someone"** — 9 weeks of interviews, 2 bad hires, and your product still isn't shipped.
>
> Meanwhile your competitor launched.

---

### Section 3 — SOLUTION (the Z3 Sprint System)
**Goal:** Position our method as the obvious answer. Name it. Own it.

**Layout:** 4-column grid desktop, stacked mobile. Numbered cards (01, 02, 03, 04).
**UI notes:** Each card = dark charcoal (#141414) on black bg. 1px border (#1F1F1F). Hover: border goes neon green. Numbers in big outlined font (72px, 0.5 opacity).

**Copy:**
> **Headline:** Introducing the Z3 Sprint System™
> **Subheadline:** Fixed scope. Weekly demos. Production code in 30 days.
>
> **01 — Scope Lock (Days 1–5)**
> We map your workflow, wireframe every screen, agree a fixed price. No "discovery phase that costs $10K."
>
> **02 — First Live Build (Days 6–10)**
> You see a working preview on staging by Day 10. Not mockups. Working software.
>
> **03 — Weekly Shipping (Days 11–28)**
> Every Friday: live demo + deployed build. You test it on real devices, with real data.
>
> **04 — Launch & Scale (Day 30+)**
> Production deploy, handover, docs, 30-day support included. Code is yours.

---

### Section 4 — OFFER STACK (what you actually get)
**Goal:** Stack value so perceived price > real price.

**Layout:** Single centered column, max-width 640px. Line items with checkmarks.
**UI notes:** White text on black. Green checkmarks. Each line 22px. Value-right tags ($X,XXX value) in muted grey.

**Copy:**
> **Headline:** Here's exactly what you get when we build your product:
>
> ✓ **Full product scoping + wireframes** — locked before we write a line of code *($3,500 value)*
> ✓ **Custom codebase** — React, Next.js, Node, Python — you own 100% of it *($20,000+ value)*
> ✓ **Weekly Friday demos** — working software, every week, no exceptions *(priceless)*
> ✓ **Production deploy + domain setup + SSL + hosting config** *($1,500 value)*
> ✓ **Full technical documentation** — README, API docs, deployment guide *($2,000 value)*
> ✓ **30 days post-launch support** — bugs fixed free, no tickets, just Slack *($3,000 value)*
> ✓ **Founder-level access** — you talk to the people building it, not a PM layer *(the real unlock)*
>
> **Total real value: $30,000+**
> **Your fixed price: Starts at $5,000. Custom-quoted in 48 hours.**
>
> **[ Book Your Scoping Call → ]**

---

### Section 5 — PROOF
**Goal:** Kill skepticism with volume and specificity.

**Layout:**
- Top strip: Stat bar (3 stats, equal columns)
- Middle: 3-up testimonial cards with photo placeholder, name, business, role
- Bottom: Logo wall / project thumbnail grid (6 items)

**UI notes:** Testimonial cards = dark charcoal, 24px padding, 1px border. Quote in 18px italic. Name + role in 14px. Photo circle = 48px.

**Copy — Stat Bar:**
> **30+** Businesses shipped &nbsp;·&nbsp; **50+** Production systems live &nbsp;·&nbsp; **100%** Projects delivered on scope

**Copy — Testimonials (REAL quotes from z3connect.com — update names later):**

> **"At the end of the day, I didn't know my sales or if everyone paid. Now it's easy and perfect."**
> — [Client Name Placeholder], Owner, Cafe (Tamil Nadu)

> **"Complete ERP with payroll, project tracking, client management — everything in one system. Our productivity doubled."**
> — [Client Name Placeholder], CEO, [Company Placeholder]

> **"Managing 2 stores from one app is amazing. Unified billing, real-time stock updates — exactly what I needed for my fashion business."**
> — [Client Name Placeholder], Founder, [Fashion Retail]

> **"The photo selection tool changed my workflow completely. Clients now pick photos from mobile — no more endless WhatsApp messages."**
> — [Client Name Placeholder], Photographer

> **"From paper registers to digital tokens — now I track every sale, every expense. Modern farming made easy."**
> — [Client Name Placeholder], Farm Owner

> **"ZAssist AI revolutionized our customer service. Response time dropped from hours to seconds."**
> — [Client Name Placeholder], [Business Type]

**Copy — Project Grid (6 thumbnails):**
- Custom ERP — Multi-branch payroll + inventory system
- Construction SaaS — 360° AR project viewer + quote generator
- Mobile POS — Cafe/F&B billing, 2-store support
- Photography Platform — Client album selection tool
- Fashion Retail POS — Unified billing, real-time stock
- AI Customer Support — 24/7 chatbot, appointment booking

---

### Section 6 — PROCESS (how it works, day by day)
**Goal:** Remove "what happens after I book?" friction.

**Layout:** Vertical timeline (single column), alternating L/R labels on desktop, stacked mobile
**UI notes:** Green vertical line connecting dots. Each step = dot + bold label + 2-line description.

**Copy:**
> **Headline:** From "book a call" to "live in production" in 4 weeks.
>
> **Day 0** — You book a 20-min call on Calendly
> **Day 1** — We send scoping questionnaire + NDA if needed
> **Day 2** — 60-min deep-dive call: we map your workflow
> **Day 3** — You get a fixed-price proposal + project timeline
> **Day 5** — Contract signed, kickoff call, Slack channel live
> **Day 10** — First working preview deployed to staging
> **Day 17** — Demo #2 — core features working
> **Day 24** — Demo #3 — full feature set live
> **Day 30** — Production launch + handover

---

### Section 7 — OBJECTION HANDLING (FAQ done right)
**Goal:** Answer every unspoken "yeah but…"

**Layout:** 2-column grid desktop, stacked mobile. Accordion style — first 2 open by default.
**UI notes:** Question in 18px bold. Answer in 16px, muted white (#A3A3A3). Green "+" / "−" icons.

**Copy:**

> **"I'm in the US — how do timezones work?"**
> We run standups on your time. Slack + Loom replies within 4 hours, usually within 1. You'll never wait overnight for an answer.

> **"Isn't offshore dev cheap = bad?"**
> "Offshore" in 2026 means senior engineers with 8+ years of experience who'd cost $180K in SF. We charge $40/hr equivalents because our cost of living is different, not our skill level. 50+ production systems speak for themselves.

> **"What if I don't know exactly what I want built?"**
> That's Week 1. We do the thinking with you — wireframes, user flows, tech stack — before you pay for a single line of code.

> **"What tech stack do you build on?"**
> React, Next.js, Node, Python, Firebase, Supabase, Postgres, React Native. We pick what's right for your scale, not what's trendy.

> **"What happens if I want to leave?"**
> You own 100% of the code from Day 1. Repo on your GitHub. Leave anytime, hand it to any dev.

> **"What's the smallest project you'll take?"**
> Starts at $5K (usually a focused MVP or internal tool). No projects over $100K — we keep scope tight so we can ship fast.

> **"Do you sign NDAs?"**
> Standard mutual NDA sent before the scoping call if you want.

> **"Who actually builds my product?"**
> A senior lead + 2–3 engineers. You meet them on the kickoff call. No account manager layer between you and the people writing code.

---

### Section 8 — CTA CLOSE (final push)
**Goal:** Collapse the decision. Make "not booking" feel stupid.

**Layout:** Full-width section, green gradient background (#00FF88 → #00CC6A), centered copy, max-width 640px.
**UI notes:** Black text on green. Massive headline (56px). CTA button inverts — black bg, green border, white text. 60vh section height.

**Copy (Variation A):**
> **Headline:** Your competitor shipped last month.
> **Subheadline:** You can have a working preview in 7 days.
> Book a 20-min scoping call. No sales pitch — we'll map your product, quote a fixed price, and tell you if we're the wrong fit. Zero friction.
>
> **[ Book Your Scoping Call → ]**
>
> *Typical response time: under 2 hours. We reply to every booking personally.*

**Footer (minimal):**
Z3Connect · Building software that ships · [hello@z3connect.com] · © 2026

---

## 3. COPY — FULL VARIATIONS (for testing)

### Hero Headlines (pick one to launch, A/B test rest)
1. **Custom Software, Shipped in Weeks — Not Quarters.** *(recommended baseline)*
2. **Your Product. Built by Senior Engineers. Live in 30 Days.**
3. **Stop Paying US Agency Prices for Software That Doesn't Ship.**
4. **We Build SaaS for US Founders. Fixed Price. Fixed Timeline. Fixed.**
5. **The Dev Team You'd Hire If You Had a CTO.**

### Hero Subheadlines
1. *(baseline)* We build SaaS, ERPs, and web apps for US companies at 1/3 the cost of a US agency, and ship working software every Friday.
2. Senior engineers, fixed-price contracts, working demos every 7 days. 30+ businesses live. 50+ systems in production.
3. From "book a call" to "live in production" in 30 days. Own 100% of the code. Pay a fraction of what US agencies charge.

### CTA Button Variations
1. **Book a 20-min Scoping Call →** *(baseline — low commitment + specific time)*
2. **Get a Fixed-Price Quote in 48 Hours →**
3. **See If We're a Fit (20 min) →**

### Microcopy (under CTA)
- "No sales pitch. No hard close."
- "Typical response: under 2 hours."
- "We book 4 calls per week. First come, first scoped."

---

## 4. VISUAL & UI SYSTEM

### Color Palette
```
--bg-primary:   #0A0A0A   /* Near-black — main background */
--bg-elevated:  #141414   /* Cards, sections */
--border:       #1F1F1F   /* Subtle dividers */
--text-primary: #FFFFFF   /* Headlines */
--text-body:    #E5E5E5   /* Paragraphs */
--text-muted:   #A3A3A3   /* Secondary info */
--accent:       #00FF88   /* CTAs, highlights, success */
--accent-hover: #00CC6A   /* Button hover */
--danger:       #FF4D2E   /* Problem section icons only */
```

### Typography
- **Headline font:** Inter (700/800) — 72/56/48/36/24/18
- **Body font:** Inter (400/500) — 18/16/14
- **Mono accent:** JetBrains Mono — 14 (for stat numbers, code references)
- **Line height:** Headlines 1.1, body 1.6
- **Letter spacing:** Headlines −0.02em, body 0

### Layout Grid
- **Max content width:** 1200px
- **Section padding:** 120px top/bottom desktop, 80px mobile
- **Column gap:** 48px desktop, 24px mobile
- **12-column grid** with 24px gutters

### Spacing System (8px base)
```
xs: 8px   sm: 16px   md: 24px   lg: 48px
xl: 80px  2xl: 120px  3xl: 160px
```

### Button Styles
**Primary (CTA):**
- Background `#00FF88`, text `#0A0A0A`
- Padding `16px 32px`, height `56px`
- Font weight 700, size 18px
- Border-radius `8px`
- Hover: bg `#00CC6A`, translate-y `-2px`, shadow `0 12px 32px rgba(0,255,136,0.25)`
- Transition: all 200ms ease-out

**Secondary:**
- Transparent bg, white text, 1px white border
- Same dimensions as primary
- Hover: bg `rgba(255,255,255,0.05)`

### Section Design Rules
1. **No gradients except final CTA.** Flat colors elsewhere.
2. **No shadows except on buttons.** Use borders for depth.
3. **One accent color only.** Green. Never add a secondary accent.
4. **All images must have 8px rounded corners.** No perfect circles except avatars.
5. **All motion = subtle fade + 8px lift on scroll-in.** No parallax, no hero video.
6. **Maximum 1 illustration/image per section.** If you want 2, split the section.

---

## 5. ANTIGRAVITY BUILD SPEC (section-by-section build order)

> Build in this exact order. Don't skip ahead. Each section must be pixel-locked and responsive before moving to the next.

### BLOCK 1 — Hero
- **Block type:** `HeroSplit`
- **Layout:** 2-column grid (60/40), `lg:grid-cols-[6fr_4fr]`
- **Left column contents (vertical stack, gap-6):**
  1. `<span>` — eyebrow badge (pill-shaped, green outline, 12px uppercase text)
  2. `<h1>` — headline (72px desktop / 40px mobile, font-black)
  3. `<p>` — subheadline (20px, text-muted, max-w-xl)
  4. `<div>` — 3 inline proof pills (flex-wrap gap-3)
  5. `<div>` — 2 CTA buttons side-by-side (primary + secondary), gap-4
- **Right column contents:** Single dashboard/product screenshot in rounded container, 1px border, subtle green glow on hover
- **Mobile:** Stack vertically. Image moves below text. Reduce h1 to 40px. Reduce section padding to 64px/32px.
- **Motion:** Fade in on load (staggered 100ms between elements)

### BLOCK 2 — Problem Agitation
- **Block type:** `CenteredContent`
- **Layout:** 1 column, centered, max-w-2xl
- **Contents:**
  1. `<h2>` — headline (48px)
  2. `<p>` — 1-line intro (18px, muted)
  3. `<ul>` — 4 pain bullets (no bullet markers, custom X icon in red)
  4. `<p>` — punchline: "Meanwhile your competitor launched." (24px, white, font-bold)
- **Mobile:** Reduce h2 to 32px. Bullets stack with full width.

### BLOCK 3 — Solution (Z3 Sprint System)
- **Block type:** `FeatureGrid`
- **Layout:** Section header (centered) + 4-column grid below, `lg:grid-cols-4 md:grid-cols-2`
- **Each card contents:**
  1. Big outlined number (72px, stroke-only, opacity-50)
  2. `<h3>` — step label (20px, font-bold)
  3. `<p>` — 2-line description (14px, muted)
- **Cards:** bg-elevated, 1px border, padding-8, rounded-lg
- **Hover:** border-accent (green)
- **Mobile:** 1 column stack, full width

### BLOCK 4 — Offer Stack
- **Block type:** `CenteredList`
- **Layout:** 1 column, centered, max-w-xl
- **Contents:**
  1. Headline (40px)
  2. `<ul>` — 7 items, each `flex items-start gap-3`
     - Green checkmark icon (20px)
     - Main text + italicized value tag at end in text-muted
  3. Total value row (dashed top border, padding-top-6, 20px)
  4. Price line (24px, font-bold, white)
  5. Primary CTA button (centered, margin-top-8)
- **Mobile:** Same layout, smaller text (18px → 16px)

### BLOCK 5 — Proof
- **Block type:** `ProofStack`
- **Layout:** 3 sub-sections stacked
  - **5a:** Stat bar — 3-column grid, `lg:grid-cols-3`, each column centered
    - Big number (56px, green, mono font)
    - Label below (14px, muted, uppercase)
  - **5b:** Testimonial grid — 3-column grid, `lg:grid-cols-3 md:grid-cols-2`, 6 cards
    - Card: bg-elevated, p-6, 1px border, rounded-lg
    - Quote (16px italic) → Avatar (48px circle) + Name + Role (14px)
  - **5c:** Project thumbnail grid — 6-item grid, `lg:grid-cols-3 md:grid-cols-2`
    - Each: 4:3 image + overlay title on hover
- **Mobile:** Testimonials → 1 column. Projects → 2 columns.

### BLOCK 6 — Process Timeline
- **Block type:** `VerticalTimeline`
- **Layout:** 1 column, centered, max-w-2xl, left-aligned content with vertical green line
- **Contents:** 9 steps, each row:
  - Green dot (12px) on vertical line
  - Bold day label (16px) + description (14px muted)
- **Mobile:** Same, reduce padding-left to 24px

### BLOCK 7 — FAQ / Objection Handling
- **Block type:** `AccordionGrid`
- **Layout:** 2-column grid, `lg:grid-cols-2 gap-6`, 8 items
- **Each item:**
  - Clickable header: question (18px bold) + "+" icon (right)
  - Expanded content: answer (16px, muted), max-height transition
- **First 2 items open by default**
- **Mobile:** 1 column stack

### BLOCK 8 — Final CTA Close
- **Block type:** `FullBleedCTA`
- **Layout:** Full-width section, green gradient bg, centered content, max-w-2xl
- **Contents:**
  1. Massive headline (56px, black text)
  2. Subheadline (20px, black text, 80% opacity)
  3. 2-line supporting paragraph (16px)
  4. CTA button — inverted (black bg, green border, white text, 64px height)
  5. Microcopy below (14px, black, 70% opacity)
- **Height:** min-h-[60vh], padded vertically
- **Mobile:** Headline → 36px. Reduce padding.

### FOOTER
- Single row, `flex justify-between items-center`
- Left: Z3Connect logo + tagline
- Right: Email + © year
- 16px, muted text, 48px vertical padding

---

## 6. CONVERSION SYSTEM

### CTA Strategy (where + frequency)
- **CTA #1:** Hero (primary + secondary)
- **CTA #2:** After Offer Stack
- **CTA #3:** After Process Timeline
- **CTA #4:** Final CTA Close section
- **CTA #5:** Sticky mobile bottom bar ("Book a Call" always visible on scroll)
- **Rule:** Every CTA = Calendly link. Identical text. No variant CTAs.

### Lead Capture Method
- **Primary:** Embedded Calendly inline modal (triggers on any CTA click)
- **Calendly config:**
  - 20-minute meeting type
  - 3 required intake questions:
    1. Company name + website
    2. What are you building? (textarea, 2 sentences)
    3. Target launch date
  - Auto-confirm + reminder emails
  - Send Calendly webhook → Slack #new-calls channel

- **No contact form.** If user refuses Calendly, secondary email `hello@z3connect.com` in footer only.

### Friction Reduction Elements
1. **No email-gated content.** No lead magnets, no PDFs.
2. **Calendar shows availability 24–72 hrs out** (not 2 weeks) — signals responsiveness.
3. **"No sales pitch" in microcopy** under every CTA.
4. **Single decision at every step** — no "learn more" links that distract from book-a-call.
5. **Page load < 2s** — critical for US users on mobile. Preload hero image, lazy-load everything below fold.

### Trust Elements
- "30+ businesses shipped, 50+ systems live" — stated 3x on page
- Real client testimonials (even with placeholder names, quotes are real)
- Process transparency (Day 0 → Day 30 timeline)
- "You own 100% of the code" — stated twice
- Named tech stack (React, Next.js, Node) — signals credibility
- "Founder-level access" — anti-agency signal

### Urgency Mechanisms (subtle, honest — no fake countdowns)
- "We book 4 calls per week. First come, first scoped."
- "Typical response: under 2 hours."
- Calendly showing limited weekly slots → organic scarcity
- "Your competitor shipped last month." — in final CTA (loss aversion)

---

## 7. SKILLS REQUIRED

### Copywriting
- **Needed:** Direct-response frameworks (PAS, AIDA, 4Us), benefit-over-feature translation
- **If you lack this:** Copy sections 2 (Copy) and 3 (Variations) verbatim. They're production-ready. Don't rewrite to "sound more professional" — that kills conversion.

### UI/UX Basics
- **Needed:** Understanding of visual hierarchy, spacing consistency, accessible contrast (WCAG AA)
- **If you lack this:** Use a prebuilt Tailwind UI kit (Tailwind UI, shadcn/ui). Copy component patterns. Don't freelance the design.

### Funnel Thinking
- **Needed:** Understanding that every section has ONE goal, every CTA leads to Calendly, no distractions
- **If you lack this:** Don't add things. If someone on your team says "let's also add a pricing section" or "let's have a contact form as backup" — say no. The spec is the spec.

### Technical Setup
- **Needed:**
  - React + Next.js 14 (App Router recommended)
  - Tailwind CSS 3.x
  - Framer Motion (for fade-ins only — nothing fancy)
  - Calendly embed widget
  - Vercel or Netlify deploy
  - Google Analytics 4 + Meta Pixel
  - Event tracking on every CTA click
- **If you lack this:** Use v0.dev or Claude Code to scaffold. The stack is boring on purpose — any competent React dev builds this in 2 days.

### Analytics / Tracking Setup
- Install GA4 → track page views, CTA clicks, Calendly booking completion
- Install Meta Pixel → track same events for potential retargeting
- Set up custom conversion event: `calendly_booking_completed`
- Minimum to track: Bounce rate, scroll depth (25/50/75/100%), CTA click-through, booking completion

---

## 8. A/B TEST PLAN

> Don't A/B test until you have 500+ unique visitors. Until then, launch the baseline.

### Test 1 — Hero Headline (5 variations)
- **Control:** "Custom Software, Shipped in Weeks — Not Quarters."
- **V2:** "Your Product. Built by Senior Engineers. Live in 30 Days."
- **V3:** "Stop Paying US Agency Prices for Software That Doesn't Ship."
- **V4:** "We Build SaaS for US Founders. Fixed Price. Fixed Timeline. Fixed."
- **V5:** "The Dev Team You'd Hire If You Had a CTO."
- **Metric:** CTA click-through rate in hero
- **Sample:** 500 visitors per variant minimum

### Test 2 — Primary CTA Button (3 variations)
- **Control:** "Book a 20-min Scoping Call →"
- **V2:** "Get a Fixed-Price Quote in 48 Hours →"
- **V3:** "See If We're a Fit (20 min) →"
- **Metric:** Click-through to Calendly + booking completion
- **Sample:** 1000 visitors per variant

### Test 3 — Layout Experiments (2 structural changes)
- **Experiment A:** Move Proof section ABOVE Solution section. Some audiences need social proof before methodology.
- **Experiment B:** Replace Process Timeline (Section 6) with a short founder video (60-second Loom from Shafeek).
- **Metric:** Overall page → booking conversion rate
- **Sample:** 2000+ visitors per variant (structural tests need more volume)

---

## 9. PRE-LAUNCH CHECKLIST

### Copy
- [ ] All placeholder names in testimonials replaced with real client names (or left as [Name] with internal note)
- [ ] Tech stack in FAQ matches what you actually build with
- [ ] Founder email in footer is monitored (hello@z3connect.com)
- [ ] No typos (run through Grammarly + read aloud once)
- [ ] All prices/numbers match internal reality (30+, 50+, $5K start, 48hr turnaround)
- [ ] "Your competitor shipped last month" line in final CTA — confirm you're OK with aggressive copy

### UI
- [ ] All sections pixel-match the spacing system (8px base)
- [ ] Buttons use `#00FF88` primary + `#00CC6A` hover — no other greens
- [ ] All images have alt text
- [ ] Contrast ratio passes WCAG AA on all text (test white on `#0A0A0A` and black on `#00FF88`)
- [ ] Favicon + OG image set (OG image: dark bg, Z3Connect logo, "Ship custom software in weeks" tagline)
- [ ] No placeholder lorem ipsum anywhere

### Mobile
- [ ] Test on real iPhone (Safari) + real Android (Chrome) — not just DevTools
- [ ] Hero fits above fold on 375px width (iPhone SE)
- [ ] Sticky CTA bar visible on scroll, non-intrusive
- [ ] All tap targets minimum 44x44px
- [ ] Text readable without zoom on 375px
- [ ] Accordions open/close smoothly
- [ ] Calendly embed works on mobile (test actual booking end-to-end)

### Speed
- [ ] Lighthouse score ≥ 90 on Performance
- [ ] Largest Contentful Paint < 2.5s
- [ ] Total page size < 1MB
- [ ] Images optimized (WebP, lazy-loaded below fold)
- [ ] Hero image preloaded
- [ ] No render-blocking JS (Calendly loads async)
- [ ] Tested on simulated 3G — page functional within 5s

### CTA Tracking
- [ ] GA4 installed, `pageview` firing
- [ ] Meta Pixel installed, firing
- [ ] Custom event `cta_click` firing on every button (test all 5 CTA locations)
- [ ] Calendly webhook → Slack channel → tested with real booking
- [ ] Thank-you page / post-booking confirmation exists
- [ ] Email auto-reply from hello@z3connect.com set up
- [ ] UTM parameters survive through Calendly (so you know which source booked the call)

### Legal / Misc
- [ ] Privacy policy link in footer (if collecting any data)
- [ ] Cookie banner if targeting EU traffic (not required for US-only)
- [ ] 404 page that redirects to home
- [ ] SSL certificate active (https://)
- [ ] www and non-www both redirect correctly
- [ ] robots.txt + sitemap.xml present

---

## FINAL NOTES (read before building)

1. **Ship ugly over pretty.** If you have to choose between "make the animation perfect" and "launch on Friday," launch on Friday. You cannot optimize a page that isn't live.

2. **The baseline converts.** Don't rewrite copy to "sound more professional." The copy above is written to convert, not to sound good at a corporate meeting.

3. **Single CTA discipline.** Someone on your team will suggest adding a pricing calculator, a live chat, a newsletter signup, a blog link. Say no. Every element that isn't "book a call" is stealing conversion.

4. **Real proof > fake scale.** The moment you have US client testimonials, replace the TN ones. Until then, keep them — they're real quotes about real outcomes.

5. **Track everything from Day 1.** If you launch without GA4 + Meta Pixel + Calendly webhook, you're flying blind. No analytics = no optimization = no learning.

---

**END OF PRD — v1.0**
*Hand this to your developer, or hand it to Claude Code. Both will build it cleanly.*
