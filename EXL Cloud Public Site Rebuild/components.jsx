/* ═══ EXL CLOUD — DESIGN TOKENS ═══ */
const C = {
  pri: "#1A3C2E", priL: "#2D6A4F", priA: "#40916C", mint: "#74C69D",
  pale: "#D8F3DC", cream: "#F7FAF8", warmBg: "#FAFCFB", w: "#FFFFFF",
  dark: "#0B1F17", darkCard: "#132A1F",
  g: "#6B7280", gL: "#E8ECE9", gD: "#374151", blue: "#2563EB",
  acc: "#F59E0B", red: "#EF4444", purple: "#7C3AED",
};
const F = "'DM Sans', system-ui, -apple-system, sans-serif";
const R = { sm: 12, md: 20, lg: 28, xl: 36, full: 9999 };

/* ═══ SVG ICONS ═══ */
const Icon = ({ name, size = 24, color = C.priA }) => {
  const icons = {
    eye: <><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" fill="none" stroke={color} strokeWidth="1.5" /></>,
    plug: <><path d="M12 2v6m-4-2v4m8-4v4M8 10h8v4a4 4 0 01-8 0v-4z" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" /><path d="M12 18v4" stroke={color} strokeWidth="1.5" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" fill="none" stroke={color} strokeWidth="1.5" /></>,
    chart: <><path d="M3 3v18h18" stroke={color} strokeWidth="1.5" strokeLinecap="round" /><path d="M7 17l4-6 4 4 5-8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
    bolt: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" /></>,
    shield: <><path d="M12 2l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V6l8-4z" fill="none" stroke={color} strokeWidth="1.5" /><path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
    doc: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="none" stroke={color} strokeWidth="1.5" /><path d="M14 2v6h6M8 13h8M8 17h5" stroke={color} strokeWidth="1.5" strokeLinecap="round" /></>,
    ai: <><circle cx="12" cy="12" r="3" fill="none" stroke={color} strokeWidth="1.5" /><path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83m-4.48 4.48l-2.83 2.83m0-10.14l2.83 2.83m4.48 4.48l2.83 2.83" stroke={color} strokeWidth="1.5" strokeLinecap="round" /></>,
    play: <><polygon points="5,3 19,12 5,21" fill={color} /></>,
    arrow: <><path d="M5 12h14m-7-7l7 7-7 7" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="1.5" /><path d="M22 6l-10 7L2 6" fill="none" stroke={color} strokeWidth="1.5" /></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" fill="none" stroke={color} strokeWidth="1.5" /><circle cx="9" cy="7" r="4" fill="none" stroke={color} strokeWidth="1.5" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" fill="none" stroke={color} strokeWidth="1.5" /></>,
    download: <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
    check: <><path d="M20 6L9 17l-5-5" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    heart: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="none" stroke={color} strokeWidth="1.5" /></>,
    star: <><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" /></>,
  };
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none">{icons[name]}</svg>;
};

/* ═══ ANIMATED COUNTER ═══ */
const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const [started, setStarted] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);
  React.useEffect(() => {
    if (!started) return;
    let s = 0; const step = end / (duration / 16);
    const t = setInterval(() => { s += step; if (s >= end) { setVal(end); clearInterval(t); } else setVal(Math.round(s)); }, 16);
    return () => clearInterval(t);
  }, [started, end, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

/* ═══ SHARED BUTTON ═══ */
const Btn = ({ children, onClick, variant = "primary", href, style: s = {} }) => {
  const base = {
    fontFamily: F, fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer",
    borderRadius: R.xl, padding: "14px 32px", letterSpacing: 0.2, transition: "all 0.3s ease",
    textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, textAlign: "center", ...s
  };
  const v = {
    primary: { ...base, background: `linear-gradient(135deg, ${C.mint}, #52B788)`, color: C.dark, boxShadow: "0 4px 14px rgba(116,198,157,0.35)" },
    outline: { ...base, background: "rgba(255,255,255,0.08)", color: C.w, border: "1.5px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" },
    dark: { ...base, background: C.pri, color: C.w, boxShadow: "0 4px 14px rgba(26,60,46,0.25)" },
    ghost: { ...base, background: "transparent", color: C.priA, padding: "8px 0", boxShadow: "none" },
    soft: { ...base, background: C.pale, color: C.priL, boxShadow: "none" },
  };
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={v[variant]}>{children}</a>;
  return <button onClick={onClick} style={v[variant]}>{children}</button>;
};

/* ═══ SECTION WRAPPER ═══ */
const Sec = ({ children, bg = C.w, style: s = {} }) => (
  <section style={{ background: bg, padding: "100px 24px", ...s }}>
    <div style={{ maxWidth: 1120, margin: "0 auto" }}>{children}</div>
  </section>
);

/* ═══ SECTION HEADER ═══ */
const SectionHead = ({ tag, title, desc, center = false, light = false }) => (
  <div style={{ textAlign: center ? "center" : "left", marginBottom: 48, maxWidth: center ? 640 : "none", margin: center ? "0 auto 48px" : "0 0 48px" }}>
    {tag && <div style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: light ? C.mint : C.priA, letterSpacing: 3, marginBottom: 12, textTransform: "uppercase" }}>{tag}</div>}
    <h2 style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: light ? C.w : C.dark, lineHeight: 1.15, margin: "0 0 12px", textWrap: "pretty" }}>{title}</h2>
    {desc && <p style={{ fontFamily: F, fontSize: 17, color: light ? "rgba(255,255,255,0.65)" : C.g, lineHeight: 1.65, margin: 0, textWrap: "pretty" }}>{desc}</p>}
  </div>
);

/* ═══ VIDEO EMBED ═══ */
const Video = ({ id, title }) => (
  <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer"
    style={{ display: "block", borderRadius: R.lg, overflow: "hidden", background: C.dark, position: "relative", aspectRatio: "16/9", textDecoration: "none", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg,${C.dark},${C.pri})`, position: "relative" }}>
      <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={title}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }}
        onError={e => { e.target.style.display = "none"; }} />
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,0.3)", zIndex: 1, transition: "transform 0.3s" }}>
        <Icon name="play" size={24} color={C.w} />
      </div>
      <div style={{ position: "absolute", bottom: 16, left: 18, right: 18, zIndex: 1 }}>
        <div style={{ fontFamily: F, fontSize: 14, color: C.w, fontWeight: 600 }}>{title}</div>
        <div style={{ fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 3 }}>Watch on YouTube ↗</div>
      </div>
    </div>
  </a>
);

/* ═══ PERSON PLACEHOLDER ═══ */
const PersonPlaceholder = ({ initials, name, size = 72, gradient }) => (
  <div style={{
    width: size, height: size, borderRadius: "50%", overflow: "hidden",
    background: gradient || `linear-gradient(135deg, ${C.priL}, ${C.mint})`,
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)", flexShrink: 0,
  }}>
    {/* Warm silhouette placeholder */}
    <svg viewBox="0 0 80 80" width={size * 0.75} height={size * 0.75}>
      <circle cx="40" cy="28" r="14" fill="rgba(255,255,255,0.85)" />
      <ellipse cx="40" cy="62" rx="22" ry="16" fill="rgba(255,255,255,0.85)" />
    </svg>
  </div>
);

/* ═══ NAVIGATION ═══ */
const Nav = ({ page, go }) => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [["Home", "home"], ["About", "about"], ["Features", "features"], ["What's New", "gen2"], ["Pricing", "pricing"], ["Support", "support"], ["Future", "future"], ["Contact", "contact"]];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(11,31,23,0.97)" : "rgba(11,31,23,0.85)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: R.md, background: `linear-gradient(135deg, ${C.mint}, ${C.priL})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(116,198,157,0.3)" }}>
            <span style={{ color: C.w, fontWeight: 800, fontSize: 12, fontFamily: F, letterSpacing: 0.5 }}>EXL</span>
          </div>
          <span style={{ color: C.w, fontFamily: F, fontWeight: 700, fontSize: 18, letterSpacing: -0.3 }}>EXL Cloud</span>
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="dnav">
          {links.map(([l, p]) => (
            <button key={p} onClick={() => go(p)} style={{
              background: page === p ? "rgba(116,198,157,0.12)" : "none",
              border: "none", cursor: "pointer", fontFamily: F, fontSize: 13.5, fontWeight: 500,
              color: page === p ? C.mint : "rgba(255,255,255,0.7)",
              padding: "7px 14px", borderRadius: R.full, transition: "all 0.2s",
            }}>{l}</button>
          ))}
          <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1"
            style={{ padding: "9px 22px", fontSize: 13, marginLeft: 8 }}>Get Started</Btn>
        </div>
        <button onClick={() => setOpen(!open)} className="mtog"
          style={{ background: "none", border: "none", cursor: "pointer", color: C.w, fontSize: 24, display: "none", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: R.md }}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div style={{ background: C.dark, padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {links.map(([l, p]) => (
            <button key={p} onClick={() => { go(p); setOpen(false); }}
              style={{ background: page === p ? "rgba(116,198,157,0.1)" : "none", border: "none", cursor: "pointer", fontFamily: F, fontSize: 15, color: page === p ? C.mint : "rgba(255,255,255,0.8)", textAlign: "left", padding: "12px 16px", borderRadius: R.md }}>
              {l}
            </button>
          ))}
          <div style={{ marginTop: 8 }}>
            <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1"
              style={{ width: "100%", padding: "14px 24px" }}>Get Started</Btn>
          </div>
        </div>
      )}
    </nav>
  );
};

/* ═══ FOOTER ═══ */
const Footer = ({ go }) => (
  <footer style={{ background: C.dark, padding: "80px 24px 36px", color: "rgba(255,255,255,0.6)" }}>
    <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <div style={{ width: 32, height: 32, borderRadius: R.sm, background: `linear-gradient(135deg, ${C.mint}, ${C.priL})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: C.w, fontWeight: 800, fontSize: 10, fontFamily: F }}>EXL</span>
          </div>
          <span style={{ color: C.w, fontFamily: F, fontWeight: 700, fontSize: 17 }}>EXL Cloud</span>
        </div>
        <p style={{ fontFamily: F, fontSize: 13, lineHeight: 1.9, margin: 0, color: "rgba(255,255,255,0.45)" }}>
          Keep Excel. Leverage the cloud.<br />80 Market Street<br />South Melbourne VIC 3205<br />+61 405 329 098<br />info@exlcloud.io
        </p>
      </div>
      <div>
        <div style={{ color: C.w, fontFamily: F, fontWeight: 600, fontSize: 13, marginBottom: 18, letterSpacing: 0.3 }}>Navigate</div>
        {[["About", "about"], ["Features", "features"], ["What's New", "gen2"], ["Pricing", "pricing"], ["Future", "future"], ["Contact", "contact"]].map(([l, p]) => (
          <div key={p}><button onClick={() => go(p)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.45)", fontFamily: F, fontSize: 13, padding: "5px 0", cursor: "pointer", transition: "color 0.2s" }}>{l}</button></div>
        ))}
      </div>
      <div>
        <div style={{ color: C.w, fontFamily: F, fontWeight: 600, fontSize: 13, marginBottom: 18, letterSpacing: 0.3 }}>Resources</div>
        {[["Knowledge Base", "http://docs.xlconnect.net"], ["Support Ticket", "https://exlcloud.atlassian.net/servicedesk/customer/portal/1"], ["Member Login", "https://account.xlconnect.net"], ["Maven Courses", "https://maven.com/modelcitizn"], ["Podcast", "https://open.spotify.com/show/0WRSzeb3Z0UbHmXLz5qgpQ"], ["Knowledge Hub", "https://www.modelcitizn.com/knowledge-hub/"]].map(([l, u]) => (
          <div key={l}><a href={u} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", fontFamily: F, fontSize: 13, textDecoration: "none", display: "block", padding: "5px 0" }}>{l}</a></div>
        ))}
      </div>
      <div>
        <div style={{ color: C.w, fontFamily: F, fontWeight: 600, fontSize: 13, marginBottom: 18, letterSpacing: 0.3 }}>Connect</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[["LinkedIn", "https://www.linkedin.com/company/exl-cloud"], ["Facebook", "https://www.facebook.com/EXLCloud"], ["X / Twitter", "https://x.com/exl_cloud"]].map(([l, u]) => (
            <a key={l} href={u} target="_blank" rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: F, fontSize: 12, textDecoration: "none", padding: "7px 14px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: R.full, transition: "all 0.2s" }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
    <div style={{ maxWidth: 1120, margin: "48px auto 0", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
      <span style={{ fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2026 EXL Cloud by XLC. All rights reserved.</span>
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={() => go("privacy")} style={{ background: "none", border: "none", fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.25)", cursor: "pointer" }}>Privacy Policy</button>
        <button onClick={() => go("eula")} style={{ background: "none", border: "none", fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.25)", cursor: "pointer" }}>EULA</button>
      </div>
    </div>
  </footer>
);

/* ═══ BOARD PACK INTERACTIVE DEMO ═══ */
const BoardPackDemo = () => {
  const { useState: us } = React;
  const [tab, setTab] = us("overview");
  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } = Recharts;
  const revData = [{ m: "Jul", r: 180, e: 140 }, { m: "Aug", r: 195, e: 148 }, { m: "Sep", r: 210, e: 152 }, { m: "Oct", r: 230, e: 158 }, { m: "Nov", r: 250, e: 162 }, { m: "Dec", r: 275, e: 168 }];
  const pieData = [{ name: "Subscriptions", value: 62, color: C.priL }, { name: "Advisory", value: 24, color: C.mint }, { name: "Training", value: 14, color: C.acc }];
  return (
    <div style={{ background: C.w, borderRadius: R.xl, overflow: "hidden", border: `1px solid ${C.gL}`, boxShadow: "0 24px 80px rgba(0,0,0,0.06)" }}>
      {/* Browser chrome */}
      <div style={{ background: "#F5F6F7", padding: "12px 18px", display: "flex", alignItems: "center", gap: 10, borderBottom: `1px solid ${C.gL}` }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#EF4444" }}></div>
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#F59E0B" }}></div>
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#22C55E" }}></div>
        </div>
        <div style={{ flex: 1, background: C.w, borderRadius: R.full, padding: "5px 14px", fontFamily: F, fontSize: 12, color: C.g }}>board-pack-q4-2026.html</div>
      </div>
      {/* Header */}
      <div style={{ background: C.pri, padding: "14px 20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <span style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.w, whiteSpace: "nowrap" }}>Q4 2026 Board Pack</span>
          <span style={{ fontFamily: F, fontSize: 11, color: C.mint, fontWeight: 500 }}>EXL Cloud</span>
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {["overview", "revenue", "expenses"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "5px 14px", borderRadius: R.full, border: "none", cursor: "pointer", fontFamily: F, fontSize: 11, fontWeight: 600,
              background: tab === t ? "rgba(255,255,255,0.18)" : "transparent",
              color: tab === t ? C.w : "rgba(255,255,255,0.55)", textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: 28 }}>
        {tab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14, marginBottom: 28 }}>
              {[["Revenue", "$1.34M", "↑ 18%", C.priL], ["EBITDA", "$420K", "↑ 24%", C.priA], ["Net Profit", "$285K", "↑ 15%", C.blue], ["Cash", "$890K", "↑ 32%", C.mint]].map(([l, v, d, c]) => (
                <div key={l} style={{ background: `${c}08`, borderLeft: `3px solid ${c}`, borderRadius: R.md, padding: 16 }}>
                  <div style={{ fontFamily: F, fontSize: 11, color: C.g, fontWeight: 600, letterSpacing: 0.5 }}>{l}</div>
                  <div style={{ fontFamily: F, fontSize: 22, fontWeight: 800, color: C.dark, marginTop: 2 }}>{v}</div>
                  <div style={{ fontFamily: F, fontSize: 12, color: c, fontWeight: 600, marginTop: 2 }}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18 }} className="bp-grid2">
              <div style={{ background: C.warmBg, borderRadius: R.md, padding: 20 }}>
                <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 14 }}>Revenue vs Expenses ($K)</div>
                <ResponsiveContainer width="100%" height={170}>
                  <BarChart data={revData}><XAxis dataKey="m" tick={{ fontSize: 10 }} axisLine={false} /><YAxis tick={{ fontSize: 10 }} axisLine={false} /><Bar dataKey="r" name="Revenue" fill={C.priL} radius={[4, 4, 0, 0]} /><Bar dataKey="e" name="Expenses" fill={C.gL} radius={[4, 4, 0, 0]} /></BarChart>
                </ResponsiveContainer>
              </div>
              <div style={{ background: C.warmBg, borderRadius: R.md, padding: 20 }}>
                <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: 14 }}>Revenue Mix</div>
                <ResponsiveContainer width="100%" height={150}>
                  <PieChart><Pie data={pieData} cx="50%" cy="50%" innerRadius={38} outerRadius={58} dataKey="value">{pieData.map((d, i) => <Cell key={i} fill={d.color} />)}</Pie></PieChart>
                </ResponsiveContainer>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 6 }}>
                  {pieData.map(d => (
                    <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 3, background: d.color }}></div>
                      <span style={{ fontFamily: F, fontSize: 10, color: C.g }}>{d.name} {d.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === "revenue" && (
          <div>
            <div style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 18 }}>Monthly Revenue Trend ($K)</div>
            <ResponsiveContainer width="100%" height={210}>
              <AreaChart data={revData}><CartesianGrid strokeDasharray="3 3" stroke="#eee" /><XAxis dataKey="m" tick={{ fontSize: 11 }} /><YAxis tick={{ fontSize: 11 }} /><Area type="monotone" dataKey="r" fill={C.pale} stroke={C.priL} strokeWidth={2} /></AreaChart>
            </ResponsiveContainer>
            <div style={{ marginTop: 18, padding: 18, background: C.pale, borderRadius: R.md, borderLeft: `3px solid ${C.priL}` }}>
              <div style={{ fontFamily: F, fontSize: 13, fontWeight: 700, color: C.priL, marginBottom: 6 }}>Commentary</div>
              <div style={{ fontFamily: F, fontSize: 14, color: C.gD, lineHeight: 1.65 }}>Revenue grew 53% across H2, driven by 12 new Advanced Content subscriptions and the Weel partnership. December uptick reflects year-end advisory billings.</div>
            </div>
          </div>
        )}
        {tab === "expenses" && (
          <div>
            <div style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 18 }}>Expense Breakdown ($K)</div>
            <ResponsiveContainer width="100%" height={210}>
              <BarChart data={[{ c: "Payroll", v: 280 }, { c: "Tech", v: 95 }, { c: "Marketing", v: 65 }, { c: "Overheads", v: 45 }, { c: "Legal", v: 20 }]} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 11 }} /><YAxis type="category" dataKey="c" tick={{ fontSize: 12 }} width={85} />
                <Bar dataKey="v" fill={C.priA} radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

// Export to window
Object.assign(window, { C, F, R, Icon, Counter, Btn, Sec, SectionHead, Video, PersonPlaceholder, Nav, Footer, BoardPackDemo });
