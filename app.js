const app = document.getElementById('app');
const D = DATA;
const pill = (t, cls) => `<span class="pill ${cls}">${t}</span>`;

const views = {
  overview() {
    const h = D.hero;
    return `<section class="view">
      <div class="hero">
        <div class="card">
          <h1>${h.title}</h1>
          <p class="lede">${h.lede}</p>
          <div class="steps">
            ${D.steps.map((s, i) => `<div class="step"><div class="n">${i + 1}</div><div><strong>${s.t}</strong> ${s.b}</div></div>`).join('')}
          </div>
        </div>
        <div class="mission">
          <div class="kicker">${h.missionKicker}</div>
          <div class="stat">${h.missionStat}</div>
          <p>${h.missionSub}</p>
        </div>
      </div>
      <div class="grid c3">
        ${h.stats.map(s => `<div class="card"><div class="stat">${s.n}</div><div class="sub">${s.s}</div><div class="sub"><span class="pill ${s.cls}">${s.c}</span></div></div>`).join('')}
      </div>
    </section>`;
  },
  implementations() {
    return `<section class="view">
      <h1>Implementations</h1>
      <p class="lede">Every customer on one board: stage, days in stage against SLA, and the named blocker. Stalls are visible the day they happen, not at the QBR. Sample data.</p>
      <div class="card"><table>
        <tr><th>Customer</th><th>Stage</th><th>Days in stage</th><th>SLA</th><th>Health</th><th>Note</th></tr>
        ${D.implementations.map(i => `<tr><td><strong>${i.c}</strong></td><td>${i.stage}</td><td>${i.days}d</td><td>${i.sla}</td><td>${pill(i.st === 'ok' ? 'on track' : i.st === 'warn' ? 'watch' : 'breach', i.cls)}</td><td>${i.note}</td></tr>`).join('')}
      </table></div>
      <div class="card" style="margin-top:18px"><h3>Why one board matters</h3>
      <p class="lede" style="margin-bottom:0">Thirty one percent of implementations stall waiting on customer data (sample). On this board that is a named, dated blocker with an owner - Seabridge's tribal quoting rules got a second session with a senior operator the same week, not a politely slipping date.</p></div>
    </section>`;
  },
  quote() {
    return `<section class="view">
      <h1>Quote desk</h1>
      <p class="lede">A quote is rarely just a quote. This is the agent's full working on one real request, with the human in control at the decision point. Sample data.</p>
      <div class="card"><div class="flow">
        ${D.quote.map(q => `<div class="frow"><div class="fnum">${q.n}</div><div><strong>${q.t}.</strong> ${q.d}</div></div>`).join('')}
      </div></div>
    </section>`;
  },
  agents() {
    return `<section class="view">
      <h1>Agent ops</h1>
      <p class="lede">The agent fleet across one customer portfolio: volume, guardrails, and how often a human steps in. People stay in control of the decisions that matter. Sample data.</p>
      <div class="card"><table>
        <tr><th>Agent</th><th>Volume</th><th>Guardrails</th><th>Escalation</th><th>Health</th></tr>
        ${D.agents.map(a => `<tr><td><strong>${a.nm}</strong></td><td>${a.vol}</td><td>${a.g}</td><td>${a.esc}</td><td>${pill(a.cls === 'ok' ? 'healthy' : 'watch', a.cls)}</td></tr>`).join('')}
      </table></div>
    </section>`;
  },
  learnings() {
    return `<section class="view">
      <h1>Learnings to roadmap</h1>
      <p class="lede">Forward-deployed work only compounds if the field feeds the product. Every learning carries its evidence; every accelerator cuts the next implementation's time to value. Sample data.</p>
      <div class="board">
        ${D.learnings.cols.map(c => `<div class="col"><h4>${c.h}</h4><div class="cards">
          ${c.items.map(i => `<div class="mini"><div class="nm">${i[0]}</div><div class="mt">${i[1]}</div></div>`).join('')}
        </div></div>`).join('')}
      </div>
    </section>`;
  },
  outcomes() {
    return `<section class="view">
      <h1>Customer outcomes</h1>
      <p class="lede">The numbers the CEO puts in front of the board and the champion puts in front of theirs. Measured, not asserted. Sample data.</p>
      <div class="grid c3">
        ${D.outcomes.map(o => `<div class="card"><div class="sub">${o.k}</div><div class="stat" style="font-size:30px">${o.v}</div><div class="sub"><span class="pill ${o.cls}">${o.d}</span></div></div>`).join('')}
      </div>
      <div class="card" style="margin-top:18px"><h3>The one-slide summary</h3>
      <p class="lede" style="margin-bottom:0">Implementation speed is the sales motion: every day cut from signature-to-live shortens the champion's risk and the competitor's window. The 14-day target is not a stretch goal, it is the demo we give the next prospect.</p></div>
    </section>`;
  }
};

function show(v) {
  app.innerHTML = views[v]();
  document.querySelectorAll('#nav button').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  window.scrollTo(0, 0);
}
document.getElementById('nav').addEventListener('click', e => {
  const b = e.target.closest('button'); if (b) show(b.dataset.view);
});
show('overview');
