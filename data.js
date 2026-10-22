const DATA = {
  hero: {
    title: "The fastest implementation in logistics, run from one console.",
    lede: "I read the Founding Development Strategist role. The job is customer outcomes: the slickest, fastest implementation of any logistics vendor, forward-deployed delivery with engineering, and every learning fed back into the core product. This concept is the console I would run that work from - implementations, the quote desk, agent ops, learnings and outcomes, in one place.",
    missionKicker: "THE MISSION METRIC",
    missionStat: "14 days",
    missionSub: "from signature to agents live in the customer's real inbox. Today (sample): 23 days median. Every view in this concept points at closing that gap.",
    stats: [
      { n: "23 days", s: "median signature-to-live today (sample)", c: "the number we cut", cls: "warn" },
      { n: "9 min", s: "from customer email to a draft quote on the desk (sample)", c: "the proof it works", cls: "ok" },
      { n: "31%", s: "of implementations stall waiting on customer data (sample)", c: "the blocker we design out", cls: "bad" }
    ]
  },
  steps: [
    { t: "Where implementations leak time.", b: "Discovery drags, workflow mapping lives in docs nobody reopens, and customer data arrives late and dirty. Every stalled week is a competitor's window and a champion losing internal faith." },
    { t: "How I have solved this before.", b: "At Corgi I ran product ops for a Series B startup and built the internal systems the whole team worked from. Before that I founded my own company and ran its operations on AI agents - intake, scheduling, follow-ups, no human chasing." },
    { t: "How I would run it for you.", b: "Every implementation on one board with days-in-stage and a named blocker. The quote desk shows agents working in the customer's real workflow. Learnings become roadmap items with evidence attached. Outcomes are measured, not asserted." }
  ],
  implementations: [
    { c: "Meridian Freight", stage: "Live", days: 19, sla: "14d", st: "warn", note: "Live 12 days. Quoting and supplier follow-ups running. Expansion to bookings this month.", cls: "ok" },
    { c: "Atlas Logistics", stage: "Pilot", days: 11, sla: "14d", st: "ok", note: "Two lanes piloting. Extraction accuracy 96% on their real emails; one customs edge case open.", cls: "ok" },
    { c: "Hales & Co", stage: "Build", days: 8, sla: "14d", st: "ok", note: "Rate sources connected. Waiting on their TMS sandbox credentials - chased today.", cls: "ok" },
    { c: "Seabridge", stage: "Mapping", days: 16, sla: "7d", st: "bad", note: "Breach. Their quoting rules turned out tribal; second workflow session booked with senior operator.", cls: "bad" },
    { c: "Orion Worldwide", stage: "Discovery", days: 3, sla: "5d", st: "ok", note: "Kickoff done. Data audit in progress; their rates live across four spreadsheets and a carrier portal.", cls: "ok" },
    { c: "Kestrel Freight", stage: "Live", days: 21, sla: "14d", st: "warn", note: "Live 30 days. Tenders agent in review after two pricing misses - guardrail tightened Tuesday.", cls: "warn" }
  ],
  quote: [
    { n: "1", t: "Request lands", d: "A customer email: 2 pallets HKG to LHR, air, 480 kg, ready Thursday, door delivery. Missing dims? The agent asks once, in the customer's thread, in their house style." },
    { n: "2", t: "Extraction", d: "Shipment details structured: mode, route, weight, ready date, incoterm, delivery point. Every field links back to the sentence it came from." },
    { n: "3", t: "Rates compared", d: "Carrier portal, the customer's own rate sheets, last-quarter's tender. Three options ranked on price, transit and the customer's usual preference - found in an old email." },
    { n: "4", t: "Draft prepared", d: "Quote drafted with margin rules applied. Surcharge flagged: fuel went up Monday and the spreadsheet had not caught it." },
    { n: "5", t: "Human approves", d: "The operator sees the whole trace and edits or approves in one click. The decision, and the reasoning, are on record. Nine minutes, email to desk." }
  ],
  agents: [
    { nm: "Request intake", vol: "1,240 emails today", g: "Classifies, routes, asks once when details are missing", esc: "4% to humans", cls: "ok" },
    { nm: "Quoting", vol: "310 drafts today", g: "Margin rules and customer preferences enforced on every draft", esc: "12% edited before send", cls: "ok" },
    { nm: "Supplier follow-up", vol: "480 chases today", g: "Polite, persistent, in the customer's tone; stops the moment a human replies", esc: "2% stuck threads", cls: "ok" },
    { nm: "Tender updates", vol: "36 tenders live", g: "Rates refreshed weekly; anomalies held for review", esc: "2 pricing misses this month", cls: "warn" },
    { nm: "Bookings", vol: "95 bookings this week", g: "Created only after human approval of the quote", esc: "0 unauthorised", cls: "ok" }
  ],
  learnings: {
    cols: [
      { h: "Heard in the field", items: [["Operators trust drafts, not autopilot", "Atlas pilot, week 1"], ["Tribal quoting rules stall mapping", "Seabridge, week 2"], ["Surcharge data is always stale", "3 of 5 customers"], ["Champions need an internal win story", "Meridian, week 3"]] },
      { h: "Scoped as product", items: [["Explain-the-draft panel", "Trace every quote line to its source"], ["Workflow interview template", "Captures tribal rules in one session"], ["Surcharge watch", "Carrier feeds checked daily"]] },
      { h: "Shipped to core", items: [["One-click approve with edits", "Now default for all pilots"], ["House-style reply tuning", "Cut edit rate from 22% to 12%"], ["Champion one-pager", "Auto-generated from live usage"]] },
      { h: "Accelerators", items: [["Email history mining", "Builds customer preference profiles on day 1"], ["Spreadsheet rate ingest", "Four spreadsheets to structured rates in an hour"], ["Data cleaning pass", "Pre-flight on every new inbox"]] }
    ]
  },
  outcomes: [
    { k: "Signature-to-live", v: "23 → 16 days", d: "median, last 90 days (sample)", cls: "ok" },
    { k: "Email to draft quote", v: "9 min", d: "was 2 days before agents (sample)", cls: "ok" },
    { k: "Win rate on quotes", v: "+6 pts", d: "faster answers win; margin rules hold the floor", cls: "ok" },
    { k: "Edit rate on drafts", v: "12%", d: "down from 22%; trust is compounding", cls: "ok" },
    { k: "Margin protected", v: "£310k", d: "surcharge catches this quarter (sample)", cls: "info" },
    { k: "Champion NPS", v: "71", d: "the people who bet on us would bet again", cls: "ok" }
  ]
};
