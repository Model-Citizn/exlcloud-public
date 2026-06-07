/* ═══ ABOUT ═══ */
const About = () => (
  <>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHead tag="Our Team" title="About EXL Cloud" desc="World-class experts with decades of Excel and data mastery. We believe every finance professional deserves transparent, customisable tools." light />
      </div>
    </section>
    <Sec>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
        {[
          { n: "Lance Rubin", r: "Chief Excel Officer", b: "Two decades across PwC, KPMG, Investec, NAB. FMI approved trainer. CA ANZ financial modelling study guide co-author. Founder of Model Citizn and the AI-Powered Accountant program.", c: C.priL },
          { n: "Marcus Small", r: "Chief Content Officer", b: "Founder of TheSmallman.com — one of the largest Excel resources on the web. Lead financial modelling trainer for CPA Australia. Design mastery behind every EXL Cloud workbook.", c: C.priA },
          { n: "David Boyar", r: "Director", b: "Co-founded the Virtual CFO Association. Built and ran his own practice. Hosted From the Trenches — accounting's biggest podcast. CEO of Xero award-winning Change GPS.", c: C.mint },
          { n: "Edwin Hartono Limbri", r: "Full-Stack Developer", b: "Data-driven solutions through statistics and coding. Lead developer of EXL Cloud's automation engine and the Excel Add-in powering the entire platform.", c: C.blue },
        ].map(p => (
          <div key={p.n} style={{ background: C.w, borderRadius: R.xl, padding: 32, border: `1px solid ${C.gL}`, borderTop: `4px solid ${p.c}` }}>
            <PersonPlaceholder size={64} gradient={`linear-gradient(135deg, ${p.c}, ${p.c}80)`} />
            <h3 style={{ fontFamily: F, fontSize: 19, fontWeight: 700, color: C.dark, margin: "18px 0 4px" }}>{p.n}</h3>
            <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: p.c, letterSpacing: 1.5, marginBottom: 14, textTransform: "uppercase" }}>{p.r}</div>
            <p style={{ fontFamily: F, fontSize: 14, color: C.g, lineHeight: 1.65, margin: 0 }}>{p.b}</p>
          </div>
        ))}
      </div>
    </Sec>
  </>
);

/* ═══ FEATURES ═══ */
const Features = ({ go }) => (
  <>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHead tag="Capabilities" title="Features" desc="Transparent, customisable, Power BI-ready. Everything in the app you already know — Microsoft Excel." light />
      </div>
    </section>
    <Sec>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {[
          ["eye", "Transparent Logic", "Full formula transparency. No black boxes."],
          ["chart", "Power BI Integration", "Connect seamlessly with Power BI. No data warehouse."],
          ["grid", "Unlimited Customisation", "Your brand, your layouts. Zero coding."],
          ["bolt", "8 Clicks to Action", "Install, connect, pull. Instant value."],
          ["shield", "Gen 2 Standard", "Instructions, validation checks, change logs in every workbook."],
          ["ai", "AI Skills Library", "15 purpose-built Claude AI skills for EXL Cloud workbooks."],
        ].map(([ic, t, d], i) => (
          <div key={i} style={{ background: C.warmBg, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
            <div style={{ width: 48, height: 48, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.pale}, ${C.warmBg})`, border: `1px solid ${C.mint}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Icon name={ic} size={22} color={C.priL} />
            </div>
            <h3 style={{ fontFamily: F, fontSize: 17, fontWeight: 700, color: C.dark, margin: "0 0 8px" }}>{t}</h3>
            <p style={{ fontFamily: F, fontSize: 14, color: C.g, margin: 0, lineHeight: 1.65 }}>{d}</p>
          </div>
        ))}
      </div>
    </Sec>
    <Sec bg={C.warmBg}>
      <SectionHead tag="Interactive" title="HTML Board Packs" desc="Single-file interactive HTML reports. Chart.js charts, KPI tiles, commentary blocks. Share a link — no Excel needed for the reader." />
      <BoardPackDemo />
    </Sec>
    <Sec>
      <SectionHead title="See it in action" desc="Watch how EXL Cloud workbooks are created and customised in minutes." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        <Video id="qf1pEpPoYVg" title="3-Way Driver-Based Financial Model" />
        <Video id="Apty2pmgtYk" title="Start Menu & Navigation" />
      </div>
    </Sec>
    <Sec bg={C.warmBg} style={{ textAlign: "center", padding: "64px 24px" }}>
      <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.dark, margin: "0 0 14px" }}>Want to explore the scenario model?</h2>
      <p style={{ fontFamily: F, fontSize: 16, color: C.g, margin: "0 0 28px" }}>See what driver-based modelling looks like with our interactive 3-way scenario demo.</p>
      <Btn onClick={() => go("future")}>Try the Interactive Model →</Btn>
    </Sec>
  </>
);

/* ═══ GEN 2 ═══ */
const Gen2 = () => {
  const skills = [
    { t: "Foundation", items: [["01", "EXL Cloud Foundations", "Quality benchmarking for skills and auditing."], ["02", "Best Practice Modelling", "Formatting, colour coding, formula standards."]] },
    { t: "Data Infrastructure", items: [["03", "Clean & Validate Data", "Automated cleanup before reporting."], ["04", "TB Mapper", "Maps accounts to standardised categories."], ["05", "Period Table Builder", "Drives all time-series workbooks."]] },
    { t: "Narrative", items: [["06", "Monthly Commentary", "Professional P&L and CF commentary."], ["07", "Board Paper Drafter", "Board-ready report assembly."], ["08", "Cash Flow Narrative", "Plain English cash explanations."]] },
    { t: "Augmentation", items: [["09", "Assumption Register", "Extracts hardcoded assumptions."], ["10", "Anomaly Detection", "Automated PASS/FAIL checks."], ["11", "Model Docs Generator", "Auto-generates Instructions sheet."], ["12", "Variance Analysis", "Actuals vs budget structured comparison."], ["13", "KPI Dashboard", "Executive dashboard with traffic lights."], ["14", "Change Log", "Structured change tracking."], ["15", "Meeting Prep", "Preparation pack from workbook data."]] },
  ];
  return (
    <>
      <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}30, transparent), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.mint, letterSpacing: 3, marginBottom: 16 }}>2026 RELEASE</div>
          <h1 style={{ fontFamily: F, fontSize: 48, fontWeight: 800, color: C.w, lineHeight: 1.08, margin: "0 0 20px", letterSpacing: -0.5 }}>
            Smarter workbooks,<br />
            <span style={{ background: `linear-gradient(90deg, ${C.mint}, #95D5B2)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI-powered skills,</span><br />
            updated pricing.
          </h1>
          <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560, lineHeight: 1.65, margin: "0 0 32px" }}>Three major updates — Gen 2 workbook rebuild, 15 Claude AI skills, and new subscription pricing from 1 July 2026.</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1">Get EXL Cloud</Btn>
            <Btn href="https://maven.com/modelcitizn#lightning-lessons" variant="outline">Free Training</Btn>
          </div>
        </div>
      </section>

      {/* Gen 2 Workbook Upgrade */}
      <Sec>
        <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 6 }}>UPDATE 1 OF 3</div>
        <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: C.dark, margin: "0 0 32px" }}>Gen 2 Workbook Upgrade</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {[["doc", "Instructions Sheet", "Dedicated guidance in every workbook."], ["grid", "Improved Navigation", "Less time finding, more time analysing."], ["shield", "Consistent Formatting", "Uniform layout across all files."], ["eye", "Formula Transparency", "Plain-English notes on every formula."]].map(([ic, t, d], i) => (
            <div key={i} style={{ background: C.warmBg, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
              <div style={{ width: 48, height: 48, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.pale}, ${C.warmBg})`, border: `1px solid ${C.mint}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon name={ic} size={22} color={C.priL} />
              </div>
              <h3 style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: C.dark, margin: "0 0 8px" }}>{t}</h3>
              <p style={{ fontFamily: F, fontSize: 14, color: C.g, margin: 0, lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* Coverage */}
      <Sec bg={C.warmBg}>
        <h2 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: C.dark, margin: "0 0 28px" }}>Gen 2 Coverage</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          <div style={{ background: C.w, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: R.full, background: C.priL, color: C.w, fontFamily: F, fontSize: 11, fontWeight: 700, marginBottom: 18 }}>FULL UPGRADE</span>
            {["Performance Report", "Positions & Returns", "1-Way Cash Flow Scenario Model", "1-Way Profit Performance Scenario Model", "3-Way Driver-Based Financial Model", "Profit & Loss Insights", "Trial Balance Insights", "Human Capital Model", "R&D Template", "Advanced Rolling Property Dev Model"].map(w => (
              <div key={w} style={{ fontFamily: F, fontSize: 14, color: C.gD, padding: "7px 0", display: "flex", gap: 8, alignItems: "center" }}><Icon name="check" size={16} color={C.priA} />{w}</div>
            ))}
          </div>
          <div style={{ background: C.w, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: R.full, background: C.gL, color: C.gD, fontFamily: F, fontSize: 11, fontWeight: 700, marginBottom: 18 }}>INSTRUCTIONS UPDATE</span>
            {["Manual Journal (Data Push)", "Bank Transactions (Data Push)", "Invoices & Bills (Data Push)", "Chart of Accounts (Data Push)", "P&L / BS / Budget (Data Pull)", "Trial Balance (Data Pull)", "Account Transactions (Data Pull)", "Consolidated Workbook", "Financial Control Master Toolkit"].map(w => (
              <div key={w} style={{ fontFamily: F, fontSize: 14, color: C.gD, padding: "7px 0", display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 16, height: 16, borderRadius: "50%", border: `1.5px solid ${C.gL}`, display: "inline-flex", flexShrink: 0 }}></span>{w}</div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Skills Library */}
      <Sec>
        <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 6 }}>UPDATE 2 OF 3</div>
        <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: C.dark, margin: "0 0 10px" }}>Skills Library — Claude AI for EXL Cloud</h2>
        <p style={{ fontFamily: F, fontSize: 16, color: C.g, margin: "0 0 36px", maxWidth: 560, lineHeight: 1.65 }}>15 purpose-built skills. Download from GitHub, load into Claude, instantly trained for that specific workbook.</p>
        {skills.map(tier => (
          <div key={tier.t} style={{ marginBottom: 32 }}>
            <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priL, letterSpacing: 2, marginBottom: 14, textTransform: "uppercase", borderBottom: `1px solid ${C.gL}`, paddingBottom: 8 }}>{tier.t}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
              {tier.items.map(([n, t, d]) => (
                <div key={n} style={{ background: C.warmBg, borderRadius: R.lg, padding: 20, border: `1px solid ${C.gL}` }}>
                  <span style={{ fontFamily: F, fontSize: 11, fontWeight: 700, color: C.priA }}>SKILL {n}</span>
                  <h4 style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.dark, margin: "6px 0" }}>{t}</h4>
                  <p style={{ fontFamily: F, fontSize: 13, color: C.g, margin: 0, lineHeight: 1.55 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Sec>

      {/* Updated Pricing */}
      <Sec bg={C.warmBg}>
        <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.priA, letterSpacing: 3, marginBottom: 6 }}>UPDATE 3 OF 3</div>
        <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: C.dark, margin: "0 0 10px" }}>Updated Pricing from 1 July 2026</h2>
        <p style={{ fontFamily: F, fontSize: 16, color: C.g, margin: "0 0 36px", maxWidth: 560, lineHeight: 1.65 }}>Current pricing applies until 30 June 2026. New pricing takes effect 1 July.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[{ p: "Data Pull", cur: "$50", next: "$70" }, { p: "Advanced Content", cur: "$125", next: "$170" }].map(x => (
            <div key={x.p} style={{ background: C.w, borderRadius: R.xl, padding: 36, border: `1px solid ${C.gL}`, textAlign: "center" }}>
              <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, margin: "0 0 6px" }}>{x.p}</h3>
              <div style={{ fontFamily: F, fontSize: 14, color: C.g, marginBottom: 16 }}>5 connections included</div>
              <div style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: C.priA, marginBottom: 6 }}>Current</div>
              <div style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: C.priL, marginBottom: 16 }}>{x.cur}<span style={{ fontSize: 15, fontWeight: 500, color: C.g }}>/mo</span></div>
              <div style={{ borderTop: `1px solid ${C.gL}`, paddingTop: 16 }}>
                <div style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: C.acc }}>From 1 July 2026</div>
                <div style={{ fontFamily: F, fontSize: 22, fontWeight: 700, color: C.gD, marginTop: 4 }}>{x.next}<span style={{ fontSize: 13, fontWeight: 500, color: C.g }}>/mo</span></div>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* AIPA Bonus */}
      <Sec>
        <div style={{ background: `linear-gradient(135deg, ${C.pri}, ${C.priL})`, borderRadius: R.xl, padding: 48, textAlign: "center" }}>
          <span style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.mint, letterSpacing: 3 }}>BONUS</span>
          <h3 style={{ fontFamily: F, fontSize: 28, fontWeight: 700, color: C.w, margin: "12px 0 14px" }}>45% off AI-Powered Accountant Program</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: "rgba(255,255,255,0.65)", margin: "0 auto 28px", maxWidth: 480, lineHeight: 1.65 }}>Included with every subscription. Hosted on Maven. Stays active as long as your subscription remains.</p>
          <Btn href="https://maven.com/modelcitizn#courses">Join the Next Cohort →</Btn>
        </div>
      </Sec>
    </>
  );
};

/* ═══ PRICING ═══ */
const Pricing = () => (
  <>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.w, margin: 0, letterSpacing: -0.5 }}>Pricing & Sign Up</h1>
        <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "14px 0 0", maxWidth: 520, lineHeight: 1.6 }}>Choose the plan that fits. 7-day free trial included. Benefit from lower marginal cost as you add connections.</p>
      </div>
    </section>
    <Sec>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
        {/* Data Pull */}
        <div style={{ background: C.w, borderRadius: R.xl, padding: 36, border: `1px solid ${C.gL}` }}>
          <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>Data Pull Plan</h3>
          <p style={{ fontFamily: F, fontSize: 13, color: C.g, margin: "0 0 16px", lineHeight: 1.6 }}>Quick and easy way to pull and push data directly from Xero into Excel. Perfect if you've been impacted by deprecated data pull services.</p>
          <div style={{ fontFamily: F, fontSize: 40, fontWeight: 800, color: C.priL, margin: "0 0 6px" }}>$50<span style={{ fontSize: 15, fontWeight: 500, color: C.g }}>/month</span></div>
          <div style={{ fontFamily: F, fontSize: 14, color: C.g, marginBottom: 6 }}>Includes 5 connections</div>
          <div style={{ fontFamily: F, fontSize: 12, color: C.acc, fontWeight: 600, marginBottom: 24, padding: "5px 14px", background: "#FEF3C7", borderRadius: R.full, display: "inline-block" }}>From 1 July: $70/mo</div>
          <div><Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Data-Pull-Promotion-Starter-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1" style={{ width: "100%" }}>Sign Up</Btn></div>
          <div style={{ marginTop: 24 }}>
            {["Xero data pull & push", "Clean P&L, BS, TB data pulls", "Account transactions", "FX rates & named budgets", "Gen 2 workbooks"].map(f => (
              <div key={f} style={{ fontFamily: F, fontSize: 14, color: C.gD, padding: "9px 0", borderBottom: `1px solid ${C.gL}`, display: "flex", gap: 10, alignItems: "center" }}><Icon name="check" size={16} color={C.priA} />{f}</div>
            ))}
          </div>
          <div style={{ marginTop: 20, background: C.warmBg, borderRadius: R.lg, padding: 18 }}>
            <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.gD, marginBottom: 10 }}>Additional connections/month:</div>
            <table style={{ width: "100%", fontFamily: F, fontSize: 13, borderCollapse: "collapse" }}>
              <tbody>
                {[["6–10 connections", "$7.50/ea"], ["11–20 connections", "$6.80/ea"], ["21+ connections", "$6.00/ea"], ["Enterprise", "Price on application"]].map(([t, p]) => (
                  <tr key={t}><td style={{ padding: "5px 0", color: C.gD }}>{t}</td><td style={{ padding: "5px 0", textAlign: "right", fontWeight: 600, color: C.priL }}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Advanced Content */}
        <div style={{ background: C.w, borderRadius: R.xl, padding: 36, border: `2px solid ${C.priA}`, position: "relative" }}>
          <div style={{ position: "absolute", top: -12, right: 24, background: `linear-gradient(135deg, ${C.priA}, ${C.mint})`, color: C.w, fontFamily: F, fontSize: 11, fontWeight: 700, padding: "5px 16px", borderRadius: R.full, letterSpacing: 1 }}>RECOMMENDED</div>
          <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 700, margin: "0 0 6px" }}>Advanced Content Plan</h3>
          <p style={{ fontFamily: F, fontSize: 13, color: C.g, margin: "0 0 16px", lineHeight: 1.6 }}>World-class expert financial models, dashboards, analytics and reports directly in Excel. Includes all Data Pull content.</p>
          <div style={{ fontFamily: F, fontSize: 40, fontWeight: 800, color: C.priL, margin: "0 0 6px" }}>$125<span style={{ fontSize: 15, fontWeight: 500, color: C.g }}>/month</span></div>
          <div style={{ fontFamily: F, fontSize: 14, color: C.g, marginBottom: 6 }}>Includes 5 connections</div>
          <div style={{ fontFamily: F, fontSize: 12, color: C.acc, fontWeight: 600, marginBottom: 24, padding: "5px 14px", background: "#FEF3C7", borderRadius: R.full, display: "inline-block" }}>From 1 July: $170/mo</div>
          <div><Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1" style={{ width: "100%" }}>Sign Up</Btn></div>
          <div style={{ marginTop: 24 }}>
            {["Everything in Data Pull", "Performance Reports", "3-Way Driver-Based Financial Model", "1-Way Cash Flow Scenario Model", "1-Way Profit Performance Model", "Positions & Returns", "Power BI integration", "15 AI skills included", "45% off AIPA program", "HTML Board Packs"].map(f => (
              <div key={f} style={{ fontFamily: F, fontSize: 14, color: C.gD, padding: "9px 0", borderBottom: `1px solid ${C.gL}`, display: "flex", gap: 10, alignItems: "center" }}><Icon name="check" size={16} color={C.priA} />{f}</div>
            ))}
          </div>
          <div style={{ marginTop: 20, background: C.warmBg, borderRadius: R.lg, padding: 18 }}>
            <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.gD, marginBottom: 10 }}>Additional connections/month:</div>
            <table style={{ width: "100%", fontFamily: F, fontSize: 13, borderCollapse: "collapse" }}>
              <tbody>
                {[["6–20 connections", "$16.25/ea"], ["21+ connections", "$12.70/ea"], ["Enterprise", "Price on application"]].map(([t, p]) => (
                  <tr key={t}><td style={{ padding: "5px 0", color: C.gD }}>{t}</td><td style={{ padding: "5px 0", textAlign: "right", fontWeight: 600, color: C.priL }}>{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Help CTA */}
      <div style={{ marginTop: 36, background: `linear-gradient(135deg, ${C.pri}, ${C.priL})`, borderRadius: R.xl, padding: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 700, color: C.w, margin: "0 0 10px" }}>Need help automating reporting?</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: "rgba(255,255,255,0.65)", margin: 0, maxWidth: 460, lineHeight: 1.6 }}>We've automated many bookkeeping and reporting processes. Reach out to find out how we can save you hours every month end.</p>
        </div>
        <Btn href="https://share.hsforms.com/1Ghuax7wHQg6Bg22sJfVVSAcw2qe">Get in Touch</Btn>
      </div>
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <p style={{ fontFamily: F, fontSize: 12, color: C.g }}>Mac users: Boot Camp or Parallels required to run EXL Cloud.</p>
      </div>
    </Sec>
  </>
);

/* ═══ SUPPORT ═══ */
const Support = () => (
  <>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.w, margin: 0 }}>Support & Training</h1>
        <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "14px 0 0" }}>Knowledge base, video library, support tickets, and masterclasses.</p>
      </div>
    </section>
    <Sec>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {[
          ["doc", "Knowledge Base", "Tips, tricks, and developer docs.", ["http://docs.xlconnect.net", "Open"]],
          ["mail", "Support Ticket", "Lodge a ticket with our team.", ["https://exlcloud.atlassian.net/servicedesk/customer/portal/1", "Lodge Ticket"]],
          ["users", "Boot Camp", "Team training — streamlined and practical.", null],
        ].map(([ic, t, d, link], i) => (
          <div key={i} style={{ background: C.warmBg, borderRadius: R.xl, padding: 32, border: `1px solid ${C.gL}` }}>
            <div style={{ width: 52, height: 52, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.pale}, ${C.warmBg})`, border: `1px solid ${C.mint}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
              <Icon name={ic} size={24} color={C.priL} />
            </div>
            <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: 700, color: C.dark, margin: "0 0 8px" }}>{t}</h3>
            <p style={{ fontFamily: F, fontSize: 14, color: C.g, margin: "0 0 18px", lineHeight: 1.6 }}>{d}</p>
            {link && <Btn href={link[0]} variant="dark" style={{ padding: "10px 20px", fontSize: 13 }}>{link[1]}</Btn>}
          </div>
        ))}
      </div>
    </Sec>
    <Sec bg={C.warmBg}>
      <SectionHead title="Video Library" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        <Video id="qf1pEpPoYVg" title="3-Way Financial Model" />
        <Video id="Apty2pmgtYk" title="Start Menu & Navigation" />
        <Video id="fa22TR9MI-Y" title="Account Transactions Pull" />
      </div>
    </Sec>
  </>
);

/* ═══ CONTACT ═══ */
const Contact = () => {
  const hsUrl = "https://share.hsforms.com/1Ghuax7wHQg6Bg22sJfVVSAcw2qe";
  return (
    <>
      <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 70px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h1 style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.w, margin: 0 }}>Get in Touch</h1>
          <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "14px 0 0" }}>Demos, enterprise pricing, or general enquiries.</p>
        </div>
      </section>
      <Sec>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          <div>
            <h3 style={{ fontFamily: F, fontSize: 22, fontWeight: 700, margin: "0 0 24px" }}>Contact Details</h3>
            {[["📍", "80 Market Street, South Melbourne VIC 3205"], ["📞", "+61 405 329 098"], ["✉️", "info@exlcloud.io"]].map(([i, t]) => (
              <div key={t} style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}><span style={{ fontSize: 18 }}>{i}</span><span style={{ fontFamily: F, fontSize: 15, color: C.gD }}>{t}</span></div>
            ))}
            <div style={{ marginTop: 28 }}>
              <a href="mailto:info@exlcloud.io?subject=EXL%20Cloud%20Enquiry" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: F, fontSize: 15, fontWeight: 600, color: C.priL, textDecoration: "none", padding: "12px 24px", border: `1.5px solid ${C.priL}`, borderRadius: R.xl }}>
                <Icon name="mail" size={18} color={C.priL} /> Email us directly
              </a>
            </div>
            <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[["LinkedIn", "https://www.linkedin.com/company/exl-cloud"], ["Facebook", "https://www.facebook.com/EXLCloud"], ["X", "https://x.com/exl_cloud"]].map(([l, u]) => (
                <a key={l} href={u} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F, fontSize: 13, color: C.priA, textDecoration: "none", padding: "8px 18px", border: `1px solid ${C.gL}`, borderRadius: R.full }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ background: C.warmBg, borderRadius: R.xl, overflow: "hidden", border: `1px solid ${C.gL}` }}>
            <div style={{ padding: "20px 24px", borderBottom: `1px solid ${C.gL}` }}>
              <h3 style={{ fontFamily: F, fontSize: 19, fontWeight: 700, margin: 0 }}>Send us a message</h3>
              <p style={{ fontFamily: F, fontSize: 13, color: C.g, margin: "6px 0 0" }}>We'll get back to you within 24 hours</p>
            </div>
            <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <a href={hsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, padding: 20, background: C.w, borderRadius: R.lg, border: `1px solid ${C.gL}`, textDecoration: "none" }}>
                <div style={{ width: 48, height: 48, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.priL}, ${C.priA})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="doc" size={22} color={C.w} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: C.dark }}>Open enquiry form</div>
                  <div style={{ fontFamily: F, fontSize: 12, color: C.g }}>Opens in a new tab — sends to our Slack</div>
                </div>
                <Icon name="arrow" size={18} color={C.priA} />
              </a>
              <a href="mailto:info@exlcloud.io?subject=EXL%20Cloud%20Enquiry" style={{ display: "flex", alignItems: "center", gap: 14, padding: 20, background: C.w, borderRadius: R.lg, border: `1px solid ${C.gL}`, textDecoration: "none" }}>
                <div style={{ width: 48, height: 48, borderRadius: R.lg, background: `linear-gradient(135deg, ${C.blue}, #3B82F6)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="mail" size={22} color={C.w} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: C.dark }}>Email info@exlcloud.io</div>
                  <div style={{ fontFamily: F, fontSize: 12, color: C.g }}>Opens your email client</div>
                </div>
                <Icon name="arrow" size={18} color={C.priA} />
              </a>
            </div>
          </div>
        </div>
      </Sec>
    </>
  );
};

/* ═══ FUTURE — Interactive Scenario Model ═══ */
const Future = () => {
  const [sc, setSc] = React.useState("base");
  const [rg, setRg] = React.useState(15); const [cp, setCp] = React.useState(35);
  const [og, setOg] = React.useState(8); const [tr, setTr] = React.useState(30); const [ir, setIr] = React.useState(5);
  const presets = { base: { rg: 15, cp: 35, og: 8, tr: 30, ir: 5 }, optimistic: { rg: 25, cp: 30, og: 5, tr: 25, ir: 4 }, conservative: { rg: 5, cp: 40, og: 12, tr: 30, ir: 7 } };
  React.useEffect(() => { const s = presets[sc]; setRg(s.rg); setCp(s.cp); setOg(s.og); setTr(s.tr); setIr(s.ir); }, [sc]);
  const bR = 1000, bO = 300, bD = 500; const yrs = []; let cc = 200;
  for (let y = 0; y < 6; y++) { const r = bR * Math.pow(1 + rg / 100, y); const c = r * (cp / 100); const gp = r - c; const o = bO * Math.pow(1 + og / 100, y); const eb = gp - o; const d = r * 0.03; const ei = eb - d; const int = bD * (ir / 100); const ebt = ei - int; const tx = Math.max(0, ebt * (tr / 100)); const np = ebt - tx; const ocf = np + d; const cx = r * 0.05; const fcf = ocf - cx; cc += fcf; yrs.push({ yr: `FY${27 + y}`, r: Math.round(r), c: Math.round(c), gp: Math.round(gp), o: Math.round(o), eb: Math.round(eb), np: Math.round(np), ocf: Math.round(ocf), fcf: Math.round(fcf), cash: Math.round(cc), gpm: ((gp / r) * 100).toFixed(1), npm: ((np / r) * 100).toFixed(1) }); }
  const fy32 = yrs[5];
  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, LineChart, Line } = Recharts;
  const Sl = ({ l, v, set, mn, mx }) => (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: C.gD }}>{l}</span>
        <span style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: C.priL }}>{v}%</span>
      </div>
      <input type="range" min={mn} max={mx} value={v} onChange={e => set(+e.target.value)} style={{ width: "100%", accentColor: C.priA }} />
    </div>
  );
  return (
    <>
      <section style={{ background: `radial-gradient(ellipse at 30% 0%, ${C.priL}25, transparent), linear-gradient(170deg, ${C.dark}, #0D2818, ${C.pri})`, padding: "100px 24px 70px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: C.mint, letterSpacing: 3, marginBottom: 16 }}>INTERACTIVE MODEL</div>
          <h1 style={{ fontFamily: F, fontSize: 44, fontWeight: 800, color: C.w, lineHeight: 1.1, margin: "0 0 18px", letterSpacing: -0.5 }}>The Future of Financial Modelling</h1>
          <p style={{ fontFamily: F, fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 560, lineHeight: 1.65 }}>Adjust the drivers. Watch the 3-way model respond in real time. This is driver-based modelling — the EXL Cloud way.</p>
        </div>
      </section>
      <Sec bg={C.warmBg}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {[["base", "Base Case"], ["optimistic", "Optimistic"], ["conservative", "Conservative"]].map(([k, l]) => (
            <button key={k} onClick={() => setSc(k)} style={{ fontFamily: F, fontSize: 13, fontWeight: 600, padding: "10px 26px", borderRadius: R.full, cursor: "pointer", border: "none", background: sc === k ? C.priL : C.w, color: sc === k ? C.w : C.gD, boxShadow: sc === k ? `0 4px 12px ${C.priL}30` : "0 1px 3px rgba(0,0,0,0.05)", transition: "all 0.2s" }}>{l}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 32, alignItems: "start" }} className="model-grid">
          <div className="driver-panel" style={{ background: C.w, borderRadius: R.xl, padding: 28, border: `1px solid ${C.gL}` }}>
            <h3 style={{ fontFamily: F, fontSize: 16, fontWeight: 700, margin: "0 0 22px", display: "flex", alignItems: "center", gap: 10 }}><Icon name="chart" size={20} />Drivers</h3>
            <Sl l="Revenue Growth" v={rg} set={setRg} mn={-10} mx={50} />
            <Sl l="COGS %" v={cp} set={setCp} mn={10} mx={80} />
            <Sl l="OpEx Growth" v={og} set={setOg} mn={-5} mx={30} />
            <Sl l="Tax Rate" v={tr} set={setTr} mn={0} mx={50} />
            <Sl l="Interest Rate" v={ir} set={setIr} mn={0} mx={15} />
            <div style={{ marginTop: 20, padding: 14, background: C.pale, borderRadius: R.lg, fontFamily: F, fontSize: 11, color: C.priL, lineHeight: 1.6 }}>All inputs → P&L → BS → CF. Zero hardcoding. EXL Cloud standard.</div>
          </div>
          <div>
            {/* KPI tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, marginBottom: 28 }}>
              {[["Revenue", `$${(fy32.r / 1000).toFixed(1)}M`], ["GP Margin", `${fy32.gpm}%`], ["NPAT", `$${fy32.np}K`], ["FCF", `$${fy32.fcf}K`], ["Cash", `$${(fy32.cash / 1000).toFixed(1)}M`]].map(([l, v]) => (
                <div key={l} style={{ background: C.w, borderRadius: R.lg, padding: 18, border: `1px solid ${C.gL}`, textAlign: "center" }}>
                  <div style={{ fontFamily: F, fontSize: 10, color: C.g, fontWeight: 600, letterSpacing: 0.5 }}>{l}</div>
                  <div style={{ fontFamily: F, fontSize: 22, fontWeight: 800, color: C.priL, marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>
            {/* Charts */}
            <div style={{ background: C.w, borderRadius: R.xl, padding: 24, border: `1px solid ${C.gL}`, marginBottom: 24 }}>
              <h4 style={{ fontFamily: F, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>P&L Waterfall ($K)</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={yrs}><CartesianGrid strokeDasharray="3 3" stroke="#eee" /><XAxis dataKey="yr" tick={{ fontSize: 12, fontFamily: F }} /><YAxis tick={{ fontSize: 11 }} /><Tooltip contentStyle={{ fontFamily: F, fontSize: 12, borderRadius: 8 }} /><Legend wrapperStyle={{ fontFamily: F, fontSize: 12 }} /><Bar dataKey="r" name="Revenue" fill={C.priL} radius={[4, 4, 0, 0]} /><Bar dataKey="gp" name="GP" fill={C.priA} radius={[4, 4, 0, 0]} /><Bar dataKey="eb" name="EBITDA" fill={C.mint} radius={[4, 4, 0, 0]} /><Bar dataKey="np" name="NPAT" fill={C.blue} radius={[4, 4, 0, 0]} /></BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ background: C.w, borderRadius: R.xl, padding: 24, border: `1px solid ${C.gL}`, marginBottom: 24 }}>
              <h4 style={{ fontFamily: F, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>Cash Flow ($K)</h4>
              <ResponsiveContainer width="100%" height={210}>
                <AreaChart data={yrs}><CartesianGrid strokeDasharray="3 3" stroke="#eee" /><XAxis dataKey="yr" tick={{ fontSize: 12 }} /><YAxis tick={{ fontSize: 11 }} /><Tooltip contentStyle={{ fontFamily: F, fontSize: 12, borderRadius: 8 }} /><Legend wrapperStyle={{ fontFamily: F, fontSize: 12 }} /><Area type="monotone" dataKey="cash" name="Cumulative" fill={C.pale} stroke={C.priL} strokeWidth={2} /><Area type="monotone" dataKey="ocf" name="Operating" fill="#DBEAFE" stroke={C.blue} strokeWidth={2} /><Area type="monotone" dataKey="fcf" name="Free CF" fill="#FEF3C7" stroke={C.acc} strokeWidth={2} /></AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={{ background: C.w, borderRadius: R.xl, padding: 24, border: `1px solid ${C.gL}`, marginBottom: 24 }}>
              <h4 style={{ fontFamily: F, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>Margins (%)</h4>
              <ResponsiveContainer width="100%" height={190}>
                <LineChart data={yrs}><CartesianGrid strokeDasharray="3 3" stroke="#eee" /><XAxis dataKey="yr" tick={{ fontSize: 12 }} /><YAxis tick={{ fontSize: 11 }} domain={[-20, 80]} /><Tooltip contentStyle={{ fontFamily: F, fontSize: 12, borderRadius: 8 }} /><Legend wrapperStyle={{ fontFamily: F, fontSize: 12 }} /><Line type="monotone" dataKey="gpm" name="GP %" stroke={C.priA} strokeWidth={2} dot={{ r: 4 }} /><Line type="monotone" dataKey="npm" name="NPAT %" stroke={C.blue} strokeWidth={2} dot={{ r: 4 }} /></LineChart>
              </ResponsiveContainer>
            </div>
            {/* Table */}
            <div style={{ background: C.w, borderRadius: R.xl, padding: 24, border: `1px solid ${C.gL}`, overflow: "auto" }}>
              <h4 style={{ fontFamily: F, fontSize: 14, fontWeight: 700, margin: "0 0 16px" }}>P&L Summary ($K)</h4>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: F, fontSize: 13 }}>
                <thead><tr style={{ borderBottom: `2px solid ${C.priL}` }}>
                  {["", "FY27", "FY28", "FY29", "FY30", "FY31", "FY32"].map(h => (
                    <th key={h} style={{ textAlign: h ? "right" : "left", padding: "8px 6px", color: C.gD, fontWeight: 700, fontSize: 12 }}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[["Revenue", "r"], ["COGS", "c"], ["Gross Profit", "gp"], ["OpEx", "o"], ["EBITDA", "eb"], ["NPAT", "np"], ["Operating CF", "ocf"], ["Free CF", "fcf"]].map(([l, k]) => (
                    <tr key={l} style={{ borderBottom: `1px solid ${C.gL}`, background: ["Gross Profit", "EBITDA", "NPAT"].includes(l) ? C.pale : "transparent" }}>
                      <td style={{ padding: "7px 6px", fontWeight: ["Gross Profit", "EBITDA", "NPAT"].includes(l) ? 700 : 400, fontSize: 13 }}>{l}</td>
                      {yrs.map(y => (
                        <td key={y.yr} style={{ textAlign: "right", padding: "7px 6px", color: y[k] < 0 ? C.red : C.gD, fontWeight: ["Gross Profit", "EBITDA", "NPAT"].includes(l) ? 700 : 400 }}>{y[k].toLocaleString()}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Sec>
      <Sec style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, margin: "0 0 14px" }}>This is the EXL Cloud Standard</h2>
        <p style={{ fontFamily: F, fontSize: 16, color: C.g, margin: "0 0 32px" }}>Driver-based. Formula-driven. Scenario-enabled. Fully transparent.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1">Get EXL Cloud</Btn>
          <Btn href="https://maven.com/modelcitizn#courses" variant="dark">AI-Powered Accountant</Btn>
        </div>
      </Sec>
    </>
  );
};

/* ═══ PRIVACY / EULA ═══ */
const Legal = ({ type }) => (
  <>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 50px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontFamily: F, fontSize: 40, fontWeight: 800, color: C.w }}>{type === "privacy" ? "Privacy Policy" : "End User Licence Agreement"}</h1>
      </div>
    </section>
    <Sec>
      <div style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.85, maxWidth: 720 }}>
        {type === "privacy" ? (
          <>
            <p>EXL Cloud Holdings Pty Ltd ("we", "us", "our") collects personal information for the primary purpose of providing our services to you, providing information to our clients, and marketing.</p>
            <p style={{ marginTop: 18 }}>This information is obtained via interviews, correspondence, telephone, email, our website, cookies, and third parties. We do not guarantee website links or policies of authorised third parties.</p>
            <p style={{ marginTop: 18 }}>You may unsubscribe from our mailing lists at any time by contacting us in writing at info@exlcloud.io.</p>
            <p style={{ marginTop: 18 }}>For full privacy policy details, contact us at info@exlcloud.io or +61 405 329 098.</p>
            <p style={{ marginTop: 18 }}>80 Market Street, South Melbourne VIC 3205</p>
          </>
        ) : (
          <>
            <p>The licence is granted by downloading the Application directly from EXL Cloud or from an approved Application Store under the Data Pull Plan or Advanced Content Plan.</p>
            <p style={{ marginTop: 18 }}>The Application and Content are protected by intellectual property laws and are licensed, not sold. You may only use the Application and Content on a Device that you own or control.</p>
            <p style={{ marginTop: 18 }}>The licence is solely for your commercial or business purposes. You may download, use, amend, extend, or adjust the Content provided within your Application subscription.</p>
            <p style={{ marginTop: 18 }}>You agree not to license, sell, rent, lease, assign, distribute, transmit, transfer, host, outsource, disclose, or otherwise commercially exploit the Application or Content.</p>
            <p style={{ marginTop: 18 }}>For the complete EULA, contact info@exlcloud.io.</p>
          </>
        )}
      </div>
    </Sec>
  </>
);

Object.assign(window, { About, Features, Gen2, Pricing, Support, Contact, Future, Legal });
