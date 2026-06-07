import { useState, useEffect, useCallback, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, LineChart, Line, PieChart, Pie, Cell } from "recharts";

/* ═══ DESIGN SYSTEM ═══ */
const C = {
  pri:"#1A3C2E",priL:"#2D6A4F",priA:"#40916C",mint:"#74C69D",
  pale:"#D8F3DC",cream:"#F0FFF4",w:"#FFFFFF",dark:"#0B1F17",
  g:"#6B7280",gL:"#E5E7EB",gD:"#374151",blue:"#2563EB",
  acc:"#F59E0B",red:"#EF4444",purple:"#7C3AED",
};
const F=`'Söhne','Helvetica Neue',system-ui,-apple-system,sans-serif`;

/* ═══ SVG ICONS ═══ */
const Icon=({name,size=24,color=C.priA})=>{
  const icons={
    transparent:<><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" fill="none" stroke={color} strokeWidth="1.5"/></>,
    plug:<><path d="M12 2v6m-4-2v4m8-4v4M8 10h8v4a4 4 0 01-8 0v-4z" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><path d="M12 18v4" stroke={color} strokeWidth="1.5"/></>,
    custom:<><rect x="3" y="3" width="7" height="7" rx="1" fill="none" stroke={color} strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1" fill="none" stroke={color} strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1" fill="none" stroke={color} strokeWidth="1.5"/><rect x="14" y="14" width="7" height="7" rx="1" fill="none" stroke={color} strokeWidth="1.5"/></>,
    chart:<><path d="M3 3v18h18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><path d="M7 17l4-6 4 4 5-8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>,
    bolt:<><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/></>,
    shield:<><path d="M12 2l8 4v5c0 5.25-3.5 9.75-8 11-4.5-1.25-8-5.75-8-11V6l8-4z" fill="none" stroke={color} strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>,
    doc:<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" fill="none" stroke={color} strokeWidth="1.5"/><path d="M14 2v6h6M8 13h8M8 17h5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    ai:<><circle cx="12" cy="12" r="3" fill="none" stroke={color} strokeWidth="1.5"/><path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83m-4.48 4.48l-2.83 2.83m0-10.14l2.83 2.83m4.48 4.48l2.83 2.83" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    play:<><polygon points="5,3 19,12 5,21" fill={color}/></>,
    arrow:<><path d="M5 12h14m-7-7l7 7-7 7" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    mail:<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" fill="none" stroke={color} strokeWidth="1.5"/></>,
    grid:<><rect x="3" y="3" width="7" height="7" fill="none" stroke={color} strokeWidth="1.5" rx="1"/><rect x="14" y="3" width="7" height="7" fill="none" stroke={color} strokeWidth="1.5" rx="1"/><rect x="3" y="14" width="7" height="7" fill="none" stroke={color} strokeWidth="1.5" rx="1"/><rect x="14" y="14" width="7" height="7" fill="none" stroke={color} strokeWidth="1.5" rx="1"/></>,
    users:<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" fill="none" stroke={color} strokeWidth="1.5"/><circle cx="9" cy="7" r="4" fill="none" stroke={color} strokeWidth="1.5"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" fill="none" stroke={color} strokeWidth="1.5"/></>,
    download:<><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>,
    check:<><path d="M20 6L9 17l-5-5" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
  };
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none">{icons[name]}</svg>;
};

/* ═══ ANIMATED COUNTER ═══ */
const Counter=({end,suffix="",duration=2000})=>{
  const [val,setVal]=useState(0);
  const ref=useRef(null);
  const [started,setStarted]=useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!started){setStarted(true)}},{threshold:0.3});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[started]);
  useEffect(()=>{
    if(!started)return;
    let start=0;const step=end/((duration/16));
    const timer=setInterval(()=>{start+=step;if(start>=end){setVal(end);clearInterval(timer)}else setVal(Math.round(start))},16);
    return()=>clearInterval(timer);
  },[started,end,duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

/* ═══ PRODUCT CAROUSEL ═══ */
const products=[
  {name:"Performance Report",desc:"Board-ready performance analysis from Xero data in minutes. Variance analysis, KPI tiles, and trend charts.",color:"#2D6A4F",tag:"GEN 2"},
  {name:"3-Way Financial Model",desc:"Fully integrated Income Statement, Balance Sheet, and Cash Flow Statement. Driver-based with LAMBDAs and Dynamic Arrays.",color:"#1A3C2E",tag:"FLAGSHIP"},
  {name:"Cash Flow Scenario Model",desc:"Scenario-driven cash flow forecasting with base, optimistic, and conservative cases. Decision-ready output.",color:"#40916C",tag:"GEN 2"},
  {name:"HTML Board Pack",desc:"Interactive single-file HTML board packs with Chart.js charts, sticky nav, KPI tiles — no Excel needed for the reader.",color:"#7C3AED",tag:"NEW"},
  {name:"Profit Performance Model",desc:"1-way profit performance with scenario comparison dashboards. Wired to Xero for live data refresh.",color:"#2563EB",tag:"GEN 2"},
];

const ProductCarousel=()=>{
  const [idx,setIdx]=useState(0);
  const p=products[idx];
  useEffect(()=>{const t=setInterval(()=>setIdx(i=>(i+1)%products.length),5000);return()=>clearInterval(t)},[]);
  // Mini chart data for the mockup
  const mockData=[{m:"Jan",v:42},{m:"Feb",v:55},{m:"Mar",v:48},{m:"Apr",v:67},{m:"May",v:73},{m:"Jun",v:85}];
  return(
    <div style={{position:"relative"}}>
      <div style={{display:"flex",gap:8,marginBottom:24,justifyContent:"center"}}>
        {products.map((_,i)=>(
          <button key={i} onClick={()=>setIdx(i)} style={{width:i===idx?32:10,height:10,borderRadius:5,border:"none",cursor:"pointer",background:i===idx?C.mint:"rgba(255,255,255,0.3)",transition:"all 0.4s"}}/>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}} className="prod-grid">
        <div>
          <span style={{display:"inline-block",padding:"4px 12px",borderRadius:4,background:"rgba(116,198,157,0.2)",color:C.mint,fontFamily:F,fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:16}}>{p.tag}</span>
          <h3 style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.w,margin:"0 0 12px",lineHeight:1.2}}>{p.name}</h3>
          <p style={{fontFamily:F,fontSize:16,color:"rgba(255,255,255,0.7)",lineHeight:1.6,margin:"0 0 24px"}}>{p.desc}</p>
          <div style={{display:"flex",gap:12}}>
            <button onClick={()=>setIdx(i=>(i-1+products.length)%products.length)} style={{width:40,height:40,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.2)",background:"transparent",color:C.w,cursor:"pointer",fontSize:18}}>←</button>
            <button onClick={()=>setIdx(i=>(i+1)%products.length)} style={{width:40,height:40,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.2)",background:"transparent",color:C.w,cursor:"pointer",fontSize:18}}>→</button>
          </div>
        </div>
        {/* Interactive Workbook Mockup */}
        <div style={{background:"rgba(255,255,255,0.06)",borderRadius:16,padding:24,border:"1px solid rgba(255,255,255,0.1)",backdropFilter:"blur(8px)",transform:"perspective(800px) rotateY(-3deg)",transition:"transform 0.6s",position:"relative"}}>
          <div style={{display:"flex",gap:6,marginBottom:16}}>
            <div style={{width:10,height:10,borderRadius:"50%",background:"#EF4444"}}/>
            <div style={{width:10,height:10,borderRadius:"50%",background:"#F59E0B"}}/>
            <div style={{width:10,height:10,borderRadius:"50%",background:"#22C55E"}}/>
            <span style={{fontFamily:F,fontSize:11,color:"rgba(255,255,255,0.5)",marginLeft:8}}>{p.name}.xlsx</span>
          </div>
          {/* Mini tabs */}
          <div style={{display:"flex",gap:2,marginBottom:12}}>
            {["Dashboard","Data","Scenarios"].map((t,i)=>(
              <div key={t} style={{padding:"4px 12px",borderRadius:"6px 6px 0 0",background:i===0?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.05)",fontFamily:F,fontSize:10,color:i===0?C.mint:"rgba(255,255,255,0.4)"}}>{t}</div>
            ))}
          </div>
          {/* Chart mockup */}
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={mockData.map((d,i)=>({...d,v:d.v*(1+idx*0.15+i*0.05)}))}>
              <XAxis dataKey="m" tick={{fontSize:9,fill:"rgba(255,255,255,0.4)"}} axisLine={false} tickLine={false}/>
              <Bar dataKey="v" fill={p.color} radius={[3,3,0,0]} animationDuration={800}/>
            </BarChart>
          </ResponsiveContainer>
          {/* KPI row */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:8}}>
            {[["Revenue","$1.2M","↑ 15%"],["GP Margin","65%","↑ 3pp"],["FCF","$340K","↑ 22%"]].map(([l,v,d])=>(
              <div key={l} style={{background:"rgba(255,255,255,0.06)",borderRadius:8,padding:"8px 10px",textAlign:"center"}}>
                <div style={{fontFamily:F,fontSize:8,color:"rgba(255,255,255,0.4)",letterSpacing:0.5}}>{l}</div>
                <div style={{fontFamily:F,fontSize:14,fontWeight:700,color:C.w}}>{v}</div>
                <div style={{fontFamily:F,fontSize:9,color:C.mint}}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══ BOARD PACK INTERACTIVE DEMO ═══ */
const BoardPackDemo=()=>{
  const [tab,setTab]=useState("overview");
  const revData=[{m:"Jul",r:180,e:140},{m:"Aug",r:195,e:148},{m:"Sep",r:210,e:152},{m:"Oct",r:230,e:158},{m:"Nov",r:250,e:162},{m:"Dec",r:275,e:168}];
  const pieData=[{name:"Subscriptions",value:62,color:C.priL},{name:"Advisory",value:24,color:C.mint},{name:"Training",value:14,color:C.acc}];
  return(
    <div style={{background:C.w,borderRadius:16,overflow:"hidden",border:`1px solid ${C.gL}`,boxShadow:"0 20px 60px rgba(0,0,0,0.08)"}}>
      {/* Browser chrome */}
      <div style={{background:"#F3F4F6",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,borderBottom:`1px solid ${C.gL}`}}>
        <div style={{display:"flex",gap:5}}><div style={{width:10,height:10,borderRadius:"50%",background:"#EF4444"}}/><div style={{width:10,height:10,borderRadius:"50%",background:"#F59E0B"}}/><div style={{width:10,height:10,borderRadius:"50%",background:"#22C55E"}}/></div>
        <div style={{flex:1,background:C.w,borderRadius:6,padding:"4px 12px",fontFamily:F,fontSize:11,color:C.g}}>board-pack-q4-2026.html</div>
      </div>
      {/* Header bar */}
      <div style={{background:C.pri,padding:"12px 16px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:8}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          <span style={{fontFamily:F,fontSize:14,fontWeight:700,color:C.w,whiteSpace:"nowrap"}}>Q4 2026 Board Pack</span>
          <span style={{fontFamily:F,fontSize:10,color:C.mint}}>EXL Cloud</span>
        </div>
        <div style={{display:"flex",gap:2}}>
          {["overview","revenue","expenses"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{padding:"4px 10px",borderRadius:4,border:"none",cursor:"pointer",fontFamily:F,fontSize:10,fontWeight:600,background:tab===t?"rgba(255,255,255,0.2)":"transparent",color:tab===t?C.w:"rgba(255,255,255,0.6)",textTransform:"capitalize"}}>{t}</button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div style={{padding:24}}>
        {tab==="overview"&&(
          <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:12,marginBottom:24}}>
              {[["Revenue","$1.34M","↑ 18%",C.priL],["EBITDA","$420K","↑ 24%",C.priA],["Net Profit","$285K","↑ 15%",C.blue],["Cash","$890K","↑ 32%",C.mint]].map(([l,v,d,c])=>(
                <div key={l} style={{background:`${c}10`,borderLeft:`3px solid ${c}`,borderRadius:8,padding:14}}>
                  <div style={{fontFamily:F,fontSize:10,color:C.g,fontWeight:600,letterSpacing:0.5}}>{l}</div>
                  <div style={{fontFamily:F,fontSize:20,fontWeight:800,color:C.dark}}>{v}</div>
                  <div style={{fontFamily:F,fontSize:11,color:c,fontWeight:600}}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:16}} className="bp-grid2">
              <div style={{background:"#FAFAFA",borderRadius:10,padding:16}}>
                <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.dark,marginBottom:12}}>Revenue vs Expenses ($K)</div>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={revData}><XAxis dataKey="m" tick={{fontSize:9}} axisLine={false}/><YAxis tick={{fontSize:9}} axisLine={false}/><Bar dataKey="r" name="Revenue" fill={C.priL} radius={[3,3,0,0]}/><Bar dataKey="e" name="Expenses" fill={C.gL} radius={[3,3,0,0]}/></BarChart>
                </ResponsiveContainer>
              </div>
              <div style={{background:"#FAFAFA",borderRadius:10,padding:16}}>
                <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.dark,marginBottom:12}}>Revenue Mix</div>
                <ResponsiveContainer width="100%" height={140}>
                  <PieChart><Pie data={pieData} cx="50%" cy="50%" innerRadius={35} outerRadius={55} dataKey="value">{pieData.map((d,i)=><Cell key={i} fill={d.color}/>)}</Pie></PieChart>
                </ResponsiveContainer>
                <div style={{display:"flex",gap:8,justifyContent:"center",marginTop:4}}>{pieData.map(d=>(<div key={d.name} style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:d.color}}/><span style={{fontFamily:F,fontSize:9,color:C.g}}>{d.name} {d.value}%</span></div>))}</div>
              </div>
            </div>
          </div>
        )}
        {tab==="revenue"&&(
          <div>
            <div style={{fontFamily:F,fontSize:14,fontWeight:700,color:C.dark,marginBottom:16}}>Monthly Revenue Trend ($K)</div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={revData}><CartesianGrid strokeDasharray="3 3" stroke="#eee"/><XAxis dataKey="m" tick={{fontSize:10}}/><YAxis tick={{fontSize:10}}/><Area type="monotone" dataKey="r" fill={C.pale} stroke={C.priL} strokeWidth={2}/></AreaChart>
            </ResponsiveContainer>
            <div style={{marginTop:16,padding:14,background:C.pale,borderRadius:8,borderLeft:`3px solid ${C.priL}`}}>
              <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.priL,marginBottom:4}}>Commentary</div>
              <div style={{fontFamily:F,fontSize:13,color:C.gD,lineHeight:1.6}}>Revenue grew 53% across H2, driven by 12 new Advanced Content subscriptions and the Weel partnership. December uptick reflects year-end advisory billings.</div>
            </div>
          </div>
        )}
        {tab==="expenses"&&(
          <div>
            <div style={{fontFamily:F,fontSize:14,fontWeight:700,color:C.dark,marginBottom:16}}>Expense Breakdown ($K)</div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[{c:"Payroll",v:280},{c:"Tech",v:95},{c:"Marketing",v:65},{c:"Overheads",v:45},{c:"Legal",v:20}]} layout="vertical">
                <XAxis type="number" tick={{fontSize:10}}/><YAxis type="category" dataKey="c" tick={{fontSize:11}} width={80}/>
                <Bar dataKey="v" fill={C.priA} radius={[0,4,4,0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══ VIDEO EMBED ═══ */
const Video=({id,title})=>{
  return (
    <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" style={{display:"block",borderRadius:12,overflow:"hidden",background:C.dark,position:"relative",aspectRatio:"16/9",textDecoration:"none"}}>
      <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(135deg,${C.dark},${C.pri})`,position:"relative"}}>
        <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={title} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:0.5}} onError={e=>{e.target.style.display="none"}}/>
        <div style={{width:64,height:64,borderRadius:"50%",background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(255,255,255,0.3)",zIndex:1}}>
          <Icon name="play" size={24} color={C.w}/>
        </div>
        <div style={{position:"absolute",bottom:12,left:14,right:14,zIndex:1}}>
          <div style={{fontFamily:F,fontSize:13,color:C.w,fontWeight:600}}>{title}</div>
          <div style={{fontFamily:F,fontSize:10,color:"rgba(255,255,255,0.5)",marginTop:2}}>Watch on YouTube ↗</div>
        </div>
      </div>
    </a>
  );
};

/* ═══ SHARED UI ═══ */
const Btn=({children,onClick,variant="primary",href,style:s={}})=>{
  const base={fontFamily:F,fontSize:14,fontWeight:600,border:"none",cursor:"pointer",borderRadius:8,padding:"13px 28px",letterSpacing:0.3,transition:"all 0.25s ease",textDecoration:"none",display:"inline-block",textAlign:"center",...s};
  const v={primary:{...base,background:C.mint,color:C.dark},outline:{...base,background:"transparent",color:C.w,border:"1.5px solid rgba(255,255,255,0.3)"},dark:{...base,background:C.pri,color:C.w},ghost:{...base,background:"transparent",color:C.priA,padding:"8px 0"}};
  if (href) return (<a href={href} target="_blank" rel="noopener noreferrer" style={v[variant]}>{children}</a>);
  return (<button onClick={onClick} style={v[variant]}>{children}</button>);
};

const Sec=({children,bg=C.w,style:s={}})=>(<section style={{background:bg,padding:"80px 24px",...s}}><div style={{maxWidth:1100,margin:"0 auto"}}>{children}</div></section>);

/* ═══ NAVIGATION ═══ */
const Nav=({page,go})=>{
  const [open,setOpen]=useState(false);
  const links=[["Home","home"],["About","about"],["Features","features"],["What's New","gen2"],["Pricing","pricing"],["Support","support"],["Future","future"],["Contact","contact"]];
  return(
    <nav style={{position:"sticky",top:0,zIndex:100,background:"rgba(11,31,23,0.95)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60}}>
        <button onClick={()=>go("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:30,height:30,borderRadius:8,background:`linear-gradient(135deg,${C.mint},${C.priL})`,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:C.w,fontWeight:800,fontSize:11,fontFamily:F}}>EXL</span></div>
          <span style={{color:C.w,fontFamily:F,fontWeight:700,fontSize:17}}>EXL Cloud</span>
        </button>
        <div style={{display:"flex",alignItems:"center",gap:20}} className="dnav">
          {links.map(([l,p])=>(<button key={p} onClick={()=>go(p)} style={{background:"none",border:"none",cursor:"pointer",fontFamily:F,fontSize:13,fontWeight:page===p?700:500,color:page===p?C.mint:"rgba(255,255,255,0.75)",borderBottom:page===p?`2px solid ${C.mint}`:"2px solid transparent",padding:"6px 0",transition:"all 0.2s"}}>{l}</button>))}
          <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1" style={{padding:"8px 18px",fontSize:12}}>Get Started</Btn>
        </div>
        <button onClick={()=>setOpen(!open)} className="mtog" style={{background:"none",border:"none",cursor:"pointer",color:C.w,fontSize:22,display:"none"}}>☰</button>
      </div>
      {open&&<div style={{background:C.dark,padding:"12px 24px",display:"flex",flexDirection:"column",gap:8}}>{links.map(([l,p])=>(<button key={p} onClick={()=>{go(p);setOpen(false)}} style={{background:"none",border:"none",cursor:"pointer",fontFamily:F,fontSize:14,color:"rgba(255,255,255,0.8)",textAlign:"left",padding:"8px 0"}}>{l}</button>))}</div>}
      <style>{`@media(max-width:900px){.dnav{display:none!important}.mtog{display:block!important}}`}</style>
    </nav>
  );
};

/* ═══ FOOTER ═══ */
const Footer=({go})=>(
  <footer style={{background:C.dark,padding:"64px 24px 28px",color:"rgba(255,255,255,0.6)"}}>
    <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:36}}>
      <div>
        <div style={{color:C.w,fontFamily:F,fontWeight:700,fontSize:18,marginBottom:14}}>EXL Cloud</div>
        <p style={{fontFamily:F,fontSize:12,lineHeight:1.8,margin:0}}>Keep Excel. Leverage the cloud.<br/>80 Market Street<br/>South Melbourne VIC 3205<br/>+61 405 329 098<br/>info@exlcloud.io</p>
      </div>
      <div>
        <div style={{color:C.w,fontFamily:F,fontWeight:600,fontSize:13,marginBottom:14}}>Navigate</div>
        {[["About","about"],["Features","features"],["What's New","gen2"],["Pricing","pricing"],["Future","future"],["Contact","contact"]].map(([l,p])=>(<div key={p}><button onClick={()=>go(p)} style={{background:"none",border:"none",color:"rgba(255,255,255,0.5)",fontFamily:F,fontSize:12,padding:"3px 0",cursor:"pointer"}}>{l}</button></div>))}
      </div>
      <div>
        <div style={{color:C.w,fontFamily:F,fontWeight:600,fontSize:13,marginBottom:14}}>Resources</div>
        {[["Knowledge Base","http://docs.xlconnect.net"],["Support Ticket","https://exlcloud.atlassian.net/servicedesk/customer/portal/1"],["Member Login","https://account.xlconnect.net"],["Maven Courses","https://maven.com/modelcitizn"],["Podcast","https://open.spotify.com/show/0WRSzeb3Z0UbHmXLz5qgpQ"],["Knowledge Hub","https://www.modelcitizn.com/knowledge-hub/"]].map(([l,u])=>(<div key={l}><a href={u} target="_blank" rel="noopener noreferrer" style={{color:"rgba(255,255,255,0.5)",fontFamily:F,fontSize:12,textDecoration:"none"}}>{l}</a></div>))}
      </div>
      <div>
        <div style={{color:C.w,fontFamily:F,fontWeight:600,fontSize:13,marginBottom:14}}>Connect</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{[["LinkedIn","https://www.linkedin.com/company/exl-cloud"],["Facebook","https://www.facebook.com/EXLCloud"],["X / Twitter","https://x.com/exl_cloud"]].map(([l,u])=>(<a key={l} href={u} target="_blank" rel="noopener noreferrer" style={{color:"rgba(255,255,255,0.4)",fontFamily:F,fontSize:11,textDecoration:"none",padding:"5px 10px",border:"1px solid rgba(255,255,255,0.12)",borderRadius:6}}>{l}</a>))}</div>
      </div>
    </div>
    <div style={{maxWidth:1100,margin:"36px auto 0",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:20,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
      <span style={{fontFamily:F,fontSize:11,color:"rgba(255,255,255,0.3)"}}>© 2026 EXL Cloud by XLC. All rights reserved.</span>
      <div style={{display:"flex",gap:16}}>
        <button onClick={()=>go("privacy")} style={{background:"none",border:"none",fontFamily:F,fontSize:11,color:"rgba(255,255,255,0.3)",cursor:"pointer"}}>Privacy Policy</button>
        <button onClick={()=>go("eula")} style={{background:"none",border:"none",fontFamily:F,fontSize:11,color:"rgba(255,255,255,0.3)",cursor:"pointer"}}>EULA</button>
      </div>
    </div>
  </footer>
);

/* ═══ HOME ═══ */
const Img=({src,alt,style:s={}})=>(<img src={src} alt={alt} loading="lazy" onError={e=>{e.target.style.display="none"}} style={{objectFit:"cover",display:"block",...s}}/>);

const Home=({go})=>(
  <>
    {/* Hero with photo */}
    <section style={{background:`radial-gradient(ellipse at 30% 0%,${C.priL}20,transparent 50%),linear-gradient(160deg,${C.dark},#0D2818 40%,${C.pri})`,padding:"80px 24px 60px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:`linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)`,backgroundSize:"60px 60px"}}/>
      <div style={{maxWidth:1100,margin:"0 auto",position:"relative",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}} className="prod-grid">
        <div>
          <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.mint,letterSpacing:3,marginBottom:20}}>XERO → EXCEL → POWER BI</div>
          <h1 style={{fontFamily:F,fontSize:48,fontWeight:800,color:C.w,lineHeight:1.08,margin:"0 0 20px"}}>Keep Excel.<br/><span style={{background:`linear-gradient(90deg,${C.mint},${C.acc})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Leverage the cloud.</span></h1>
          <p style={{fontFamily:F,fontSize:17,color:"rgba(255,255,255,0.7)",lineHeight:1.7,margin:"0 0 28px"}}>World-class reports, dashboards, and financial models — fully customisable in Microsoft Excel. From Xero data to board-ready output in 8 clicks.</p>
          <div style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:36}}>
            <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1">Start 7-Day Free Trial</Btn>
            <Btn onClick={()=>go("features")} variant="outline">Explore Features</Btn>
          </div>
          <div style={{display:"flex",gap:40,flexWrap:"wrap"}}>
            {[["20+","Years of Excel mastery"],["15","AI-powered skills"],["8","Clicks to action"]].map(([n,l])=>(
              <div key={l}><div style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.mint}}><Counter end={parseInt(n)} suffix={n.includes("+")?"+":""}/></div><div style={{fontFamily:F,fontSize:12,color:"rgba(255,255,255,0.5)"}}>{l}</div></div>
            ))}
          </div>
        </div>
        {/* Hero illustration — workspace scene */}
        <div style={{borderRadius:16,overflow:"hidden",position:"relative"}}>
          <svg viewBox="0 0 480 360" style={{width:"100%",height:"auto",display:"block"}}>
            {/* Background */}
            <defs>
              <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1A3C2E"/><stop offset="100%" stopColor="#2D6A4F"/></linearGradient>
              <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0D2818"/><stop offset="100%" stopColor="#1A3C2E"/></linearGradient>
              <linearGradient id="skin1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E8B88A"/><stop offset="100%" stopColor="#D4A574"/></linearGradient>
            </defs>
            <rect width="480" height="360" rx="16" fill="url(#bg1)"/>
            {/* Desk */}
            <rect x="40" y="240" width="400" height="12" rx="3" fill="#4A7C59" opacity="0.6"/>
            {/* Laptop */}
            <rect x="100" y="130" width="200" height="115" rx="6" fill="#111" stroke="#333" strokeWidth="1.5"/>
            <rect x="108" y="138" width="184" height="99" rx="3" fill="url(#screen)"/>
            {/* Screen content - chart bars */}
            <rect x="120" y="200" width="16" height="28" rx="2" fill="#74C69D" opacity="0.9"/>
            <rect x="142" y="185" width="16" height="43" rx="2" fill="#74C69D"/>
            <rect x="164" y="192" width="16" height="36" rx="2" fill="#74C69D" opacity="0.8"/>
            <rect x="186" y="175" width="16" height="53" rx="2" fill="#40916C"/>
            <rect x="208" y="168" width="16" height="60" rx="2" fill="#40916C"/>
            <rect x="230" y="155" width="16" height="73" rx="2" fill="#2D6A4F"/>
            <rect x="252" y="148" width="16" height="80" rx="2" fill="#2D6A4F"/>
            {/* Screen header */}
            <rect x="118" y="142" width="60" height="6" rx="2" fill="rgba(255,255,255,0.3)"/>
            <rect x="118" y="152" width="35" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
            {/* Screen KPI tiles */}
            <rect x="200" y="142" width="40" height="18" rx="3" fill="rgba(116,198,157,0.2)" stroke="rgba(116,198,157,0.3)" strokeWidth="0.5"/>
            <rect x="245" y="142" width="40" height="18" rx="3" fill="rgba(116,198,157,0.2)" stroke="rgba(116,198,157,0.3)" strokeWidth="0.5"/>
            {/* Laptop base */}
            <path d="M80 245 L100 245 L100 248 L300 248 L300 245 L320 245 L310 252 L90 252 Z" fill="#222"/>
            {/* Person - torso */}
            <ellipse cx="380" cy="260" rx="45" ry="55" fill="#2D6A4F"/>
            {/* Person - neck */}
            <rect x="370" y="175" width="20" height="25" rx="6" fill="url(#skin1)"/>
            {/* Person - head */}
            <ellipse cx="380" cy="165" rx="28" ry="32" fill="url(#skin1)"/>
            {/* Hair */}
            <ellipse cx="380" cy="148" rx="30" ry="22" fill="#4A3728"/>
            {/* Eyes */}
            <circle cx="372" cy="168" r="2" fill="#333"/><circle cx="388" cy="168" r="2" fill="#333"/>
            {/* Smile */}
            <path d="M374 178 Q380 184 386 178" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Glasses */}
            <circle cx="372" cy="168" r="7" fill="none" stroke="#555" strokeWidth="1"/><circle cx="388" cy="168" r="7" fill="none" stroke="#555" strokeWidth="1"/>
            <line x1="379" y1="168" x2="381" y2="168" stroke="#555" strokeWidth="1"/>
            {/* Arms */}
            <path d="M340 230 Q310 210 280 225" fill="none" stroke="url(#skin1)" strokeWidth="12" strokeLinecap="round"/>
            <path d="M420 230 Q430 225 435 240" fill="none" stroke="url(#skin1)" strokeWidth="12" strokeLinecap="round"/>
            {/* Coffee cup */}
            <rect x="340" y="225" width="18" height="20" rx="3" fill="#FFF" opacity="0.9"/>
            <rect x="340" y="225" width="18" height="7" rx="3" fill="#D4A574"/>
            <path d="M358 230 Q365 232 358 238" fill="none" stroke="#FFF" strokeWidth="1.5" opacity="0.7"/>
            {/* Steam */}
            <path d="M346 220 Q348 214 346 208" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/>
            <path d="M352 218 Q354 212 352 206" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/>
            {/* Plant */}
            <rect x="56" y="210" width="20" height="30" rx="4" fill="#8B6914" opacity="0.6"/>
            <circle cx="66" cy="200" r="18" fill="#40916C" opacity="0.7"/>
            <circle cx="58" cy="195" r="12" fill="#74C69D" opacity="0.6"/>
            {/* Floating elements */}
            <rect x="30" y="60" width="60" height="40" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            <rect x="38" y="68" width="30" height="3" rx="1" fill="rgba(116,198,157,0.4)"/>
            <rect x="38" y="75" width="44" height="3" rx="1" fill="rgba(255,255,255,0.15)"/>
            <rect x="38" y="82" width="20" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x="390" y="80" width="70" height="45" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            <circle cx="410" cy="96" r="8" fill="rgba(116,198,157,0.3)"/>
            <rect x="424" y="92" width="28" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
            <rect x="424" y="99" width="20" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
          </svg>
          {/* Video CTA overlay */}
          <div style={{position:"absolute",bottom:16,left:16,right:16}}>
            <a href="https://www.youtube.com/watch?v=qf1pEpPoYVg" target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",borderRadius:10,padding:"10px 14px"}}>
              <div style={{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",border:"1.5px solid rgba(255,255,255,0.3)",flexShrink:0}}>
                <Icon name="play" size={14} color={C.w}/>
              </div>
              <div><div style={{fontFamily:F,fontSize:12,fontWeight:600,color:C.w}}>Watch the 2-minute intro</div><div style={{fontFamily:F,fontSize:10,color:"rgba(255,255,255,0.6)"}}>See EXL Cloud in action →</div></div>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Product Carousel */}
    <section style={{background:`linear-gradient(180deg,${C.pri},${C.dark})`,padding:"60px 24px 80px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.mint,letterSpacing:2,marginBottom:8,textAlign:"center"}}>PRODUCT SUITE</div>
        <h2 style={{fontFamily:F,fontSize:30,fontWeight:800,color:C.w,textAlign:"center",margin:"0 0 40px"}}>Swipe through the library</h2>
        <ProductCarousel/>
      </div>
    </section>

    {/* Value Props */}
    <Sec bg={C.cream}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:24}}>
        {[["transparent","No Black Magic","See exactly where every calculation comes from. Full formula transparency in every Gen 2 workbook."],["bolt","8 Clicks to Action","Install — connect — pull. No training, no setup overhead. Start producing board-ready output immediately."],["custom","Unlimited Customisation","Your themes, fonts, logos. It's a spreadsheet — edit anything, extend everything."],["chart","Power BI Ready","Connect seamlessly with Power BI. Dynamic Arrays, LAMBDAs, Power Query — Modern Excel."]].map(([ic,t,d],i)=>(
          <div key={i} style={{background:C.w,borderRadius:14,padding:28,border:`1px solid ${C.gL}`}}>
            <div style={{width:48,height:48,borderRadius:12,background:`linear-gradient(135deg,${C.pale},${C.cream})`,border:`1px solid ${C.mint}40`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
              <Icon name={ic} size={22} color={C.priL}/>
            </div>
            <h3 style={{fontFamily:F,fontSize:17,fontWeight:700,color:C.dark,margin:"0 0 8px"}}>{t}</h3>
            <p style={{fontFamily:F,fontSize:14,color:C.g,margin:0,lineHeight:1.6}}>{d}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* Board Pack Demo */}
    <Sec>
      <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.priA,letterSpacing:2,marginBottom:8}}>INTERACTIVE DEMO</div>
      <h2 style={{fontFamily:F,fontSize:30,fontWeight:800,color:C.dark,margin:"0 0 8px"}}>HTML Board Packs</h2>
      <p style={{fontFamily:F,fontSize:16,color:C.g,margin:"0 0 32px",lineHeight:1.6,maxWidth:600}}>Single-file interactive reports with Chart.js charts, sticky navigation, and KPI tiles. Share a link instead of an attachment — no Excel needed for the reader.</p>
      <BoardPackDemo/>
    </Sec>

    {/* Video Section */}
    <Sec bg={C.cream}>
      <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.priA,letterSpacing:2,marginBottom:8}}>SEE IT IN ACTION</div>
      <h2 style={{fontFamily:F,fontSize:30,fontWeight:800,color:C.dark,margin:"0 0 32px"}}>Watch how it works</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>
        <Video id="qf1pEpPoYVg" title="3-Way Financial Model"/>
        <Video id="Apty2pmgtYk" title="Start Menu & Navigation"/>
        <Video id="fa22TR9MI-Y" title="Account Transactions Pull"/>
      </div>
    </Sec>

    {/* How It Works */}
    <Sec>
      <div style={{textAlign:"center",marginBottom:40}}>
        <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.priA,letterSpacing:2,marginBottom:8}}>HOW IT WORKS</div>
        <h2 style={{fontFamily:F,fontSize:30,fontWeight:800,color:C.dark,margin:"0 0 8px"}}>From Xero to insight in three steps</h2>
        <p style={{fontFamily:F,fontSize:16,color:C.g,maxWidth:500,margin:"0 auto"}}>No training. No setup meetings. Just install and start pulling data.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:28}}>
        {[
          {step:"1",title:"Install the add-in",desc:"Download the EXL Cloud Excel plugin from the Knowledge Base. One-click install, works on any Windows machine.",icon:"download"},
          {step:"2",title:"Connect your Xero orgs",desc:"Authenticate with Xero and link your client organisations. Takes about 30 seconds per org.",icon:"plug"},
          {step:"3",title:"Pull data & customise",desc:"Hit 'Pull' on any report, model, or dashboard. Edit formulas, add your branding, present to clients.",icon:"chart"},
        ].map(s=>(
          <div key={s.step} style={{textAlign:"center",padding:28,background:C.w,borderRadius:14,border:`1px solid ${C.gL}`}}>
            <div style={{width:64,height:64,borderRadius:16,background:`linear-gradient(135deg,${C.priL},${C.priA})`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",boxShadow:`0 8px 24px ${C.priL}30`}}>
              <Icon name={s.icon} size={28} color={C.w}/>
            </div>
            <div style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.priA,letterSpacing:1.5,marginBottom:6}}>STEP {s.step}</div>
            <h3 style={{fontFamily:F,fontSize:18,fontWeight:700,color:C.dark,margin:"0 0 8px"}}>{s.title}</h3>
            <p style={{fontFamily:F,fontSize:14,color:C.g,lineHeight:1.6,margin:0}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* Who It's For — with SVG avatars */}
    <Sec bg={C.cream}>
      <div style={{textAlign:"center",marginBottom:40}}>
        <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.priA,letterSpacing:2,marginBottom:8}}>BUILT FOR YOU</div>
        <h2 style={{fontFamily:F,fontSize:30,fontWeight:800,color:C.dark,margin:"0 0 8px"}}>Used by finance teams who love Excel</h2>
        <p style={{fontFamily:F,fontSize:16,color:C.g,maxWidth:520,margin:"0 auto"}}>From sole practitioners to mid-tier firms — EXL Cloud fits wherever Excel is already the daily workhorse.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20}}>
        {[
          {role:"Practice Partners",desc:"Advisory services powered by real-time Xero data. Deliver cash flow models and performance reports that win clients.",init:"PP",bg:`linear-gradient(135deg,#2D6A4F,#40916C)`},
          {role:"CFOs & Controllers",desc:"Board-ready reports in minutes, not days. Full transparency — every number is traceable to source.",init:"CF",bg:`linear-gradient(135deg,#1A3C2E,#2D6A4F)`},
          {role:"Bookkeepers",desc:"Clean data pulls, reconciliation workbooks, and journal push — all without leaving Excel.",init:"BK",bg:`linear-gradient(135deg,#40916C,#74C69D)`},
          {role:"Analysts & Modellers",desc:"3-way driver-based models with scenarios, Dynamic Arrays, and Power BI integration out of the box.",init:"AM",bg:`linear-gradient(135deg,#2563EB,#3B82F6)`},
        ].map(p=>(
          <div key={p.role} style={{background:C.w,borderRadius:14,padding:24,border:`1px solid ${C.gL}`,textAlign:"center"}}>
            <div style={{width:64,height:64,borderRadius:"50%",background:p.bg,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",boxShadow:`0 6px 20px rgba(0,0,0,0.15)`}}>
              <span style={{color:C.w,fontWeight:700,fontSize:20,fontFamily:F,letterSpacing:1}}>{p.init}</span>
            </div>
            <h4 style={{fontFamily:F,fontSize:15,fontWeight:700,color:C.dark,margin:"0 0 6px"}}>{p.role}</h4>
            <p style={{fontFamily:F,fontSize:13,color:C.g,lineHeight:1.5,margin:0}}>{p.desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* Testimonials */}
    <Sec>
      <div style={{textAlign:"center",marginBottom:40}}>
        <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.priA,letterSpacing:2,marginBottom:8}}>WHAT USERS SAY</div>
        <h2 style={{fontFamily:F,fontSize:30,fontWeight:800,color:C.dark,margin:0}}>Trusted by finance professionals</h2>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
        {[
          {q:"EXL Cloud is a game-changer! It delivers unparalleled efficiency gains, saving both time and money with insights across multiple entities that simply aren't available elsewhere.",name:"Advanced Content User",role:"Xero App Store Review",stars:5},
          {q:"The reports are exactly what I need for board meetings. Being able to customise everything in Excel means I'm not fighting the software — it works the way I already think.",name:"Practice Partner",role:"Melbourne, VIC",stars:5},
          {q:"We moved from a $2,000/month reporting tool to EXL Cloud. Better output, full formula transparency, and my team didn't need any training because it's just Excel.",name:"CFO, Mid-Market",role:"Sydney, NSW",stars:5},
        ].map((t,i)=>(
          <div key={i} style={{background:C.cream,borderRadius:14,padding:28,border:`1px solid ${C.gL}`,position:"relative"}}>
            <div style={{fontFamily:F,fontSize:28,color:C.mint,lineHeight:1,marginBottom:8}}>"</div>
            <p style={{fontFamily:F,fontSize:14,color:C.gD,lineHeight:1.7,margin:"0 0 20px",fontStyle:"italic"}}>{t.q}</p>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:36,height:36,borderRadius:"50%",background:`linear-gradient(135deg,${C.priL},${C.mint})`,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:C.w,fontWeight:700,fontSize:14,fontFamily:F}}>{t.name[0]}</span></div>
              <div><div style={{fontFamily:F,fontSize:13,fontWeight:600,color:C.dark}}>{t.name}</div><div style={{fontFamily:F,fontSize:11,color:C.g}}>{t.role}</div></div>
            </div>
            <div style={{marginTop:12}}>{Array(t.stars).fill(0).map((_,j)=>(<span key={j} style={{color:C.acc,fontSize:14}}>★</span>))}</div>
          </div>
        ))}
      </div>
    </Sec>

    {/* Trusted By */}
    <Sec bg={C.cream} style={{padding:"40px 24px"}}>
      <div style={{textAlign:"center"}}>
        <div style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.g,letterSpacing:2,marginBottom:20}}>INTEGRATIONS & PARTNERSHIPS</div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:32,flexWrap:"wrap",opacity:0.6}}>
          {["Xero","CPA Australia","FMI","Power BI","CA ANZ","Maven"].map(p=>(
            <div key={p} style={{fontFamily:F,fontSize:14,fontWeight:700,color:C.gD,padding:"8px 16px",border:`1px solid ${C.gL}`,borderRadius:8,background:C.w}}>{p}</div>
          ))}
        </div>
      </div>
    </Sec>

    {/* Gen 2 Banner */}
    <section style={{background:`linear-gradient(135deg,${C.pri},${C.priL})`,padding:"56px 24px"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:24}}>
        <div>
          <span style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.mint,letterSpacing:2}}>2026 RELEASE</span>
          <h3 style={{fontFamily:F,fontSize:26,fontWeight:800,color:C.w,margin:"8px 0 0"}}>Gen 2 + AI Skills Library + New Pricing</h3>
          <p style={{fontFamily:F,fontSize:14,color:"rgba(255,255,255,0.65)",margin:"6px 0 0"}}>Every workbook rebuilt. 15 Claude AI skills. Updated plans from 1 July 2026.</p>
        </div>
        <Btn onClick={()=>go("gen2")}>See What's New →</Btn>
      </div>
    </section>

    {/* CTA */}
    <Sec>
      <div style={{textAlign:"center"}}>
        <h2 style={{fontFamily:F,fontSize:30,fontWeight:800,color:C.dark,margin:"0 0 12px"}}>Ready to keep Excel and leverage the cloud?</h2>
        <p style={{fontFamily:F,fontSize:16,color:C.g,margin:"0 0 32px"}}>7-day free trial. No credit card. Cancel anytime.</p>
        <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1">Start Free Trial</Btn>
      </div>
    </Sec>
  </>
);

/* ═══ ABOUT ═══ */
const About=()=>(
  <>
    <section style={{background:`linear-gradient(160deg,${C.dark},${C.pri})`,padding:"80px 24px 60px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}><div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.mint,letterSpacing:2,marginBottom:8}}>OUR TEAM</div><h1 style={{fontFamily:F,fontSize:40,fontWeight:800,color:C.w,margin:"0 0 12px"}}>About EXL Cloud</h1><p style={{fontFamily:F,fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:560,lineHeight:1.6}}>World-class experts with decades of Excel and data mastery. We believe every finance professional deserves transparent, customisable tools.</p></div>
    </section>
    <Sec>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:28}}>
        {[{n:"Lance Rubin",r:"Chief Excel Officer",b:"Two decades across PwC, KPMG, Investec, NAB. FMI approved trainer. CA ANZ financial modelling study guide co-author. Founder of Model Citizn and the AI-Powered Accountant program.",c:C.priL},{n:"Marcus Small",r:"Chief Content Officer",b:"Founder of TheSmallman.com — one of the largest Excel resources on the web. Lead financial modelling trainer for CPA Australia. Design mastery behind every EXL Cloud workbook.",c:C.priA},{n:"David Boyar",r:"Director",b:"Co-founded the Virtual CFO Association. Built and ran his own practice. Hosted From the Trenches — accounting's biggest podcast. CEO of Xero award-winning Change GPS.",c:C.mint},{n:"Edwin Hartono Limbri",r:"Full-Stack Developer",b:"Data-driven solutions through statistics and coding. Lead developer of EXL Cloud's automation engine and the Excel Add-in powering the entire platform.",c:C.blue}].map(p=>(
          <div key={p.n} style={{background:C.w,borderRadius:14,padding:28,border:`1px solid ${C.gL}`,borderTop:`3px solid ${p.c}`}}>
            <div style={{width:52,height:52,borderRadius:12,background:`linear-gradient(135deg,${p.c},${p.c}80)`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}><span style={{color:C.w,fontWeight:800,fontSize:22,fontFamily:F}}>{p.n[0]}</span></div>
            <h3 style={{fontFamily:F,fontSize:18,fontWeight:700,color:C.dark,margin:"0 0 4px"}}>{p.n}</h3>
            <div style={{fontFamily:F,fontSize:11,fontWeight:700,color:p.c,letterSpacing:1,marginBottom:12,textTransform:"uppercase"}}>{p.r}</div>
            <p style={{fontFamily:F,fontSize:13,color:C.g,lineHeight:1.6,margin:0}}>{p.b}</p>
          </div>
        ))}
      </div>
    </Sec>
  </>
);

/* ═══ FEATURES ═══ */
const Features=({go})=>(
  <>
    <section style={{background:`linear-gradient(160deg,${C.dark},${C.pri})`,padding:"80px 24px 60px"}}><div style={{maxWidth:1100,margin:"0 auto"}}><div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.mint,letterSpacing:2,marginBottom:8}}>CAPABILITIES</div><h1 style={{fontFamily:F,fontSize:40,fontWeight:800,color:C.w,margin:"0 0 12px"}}>Features</h1><p style={{fontFamily:F,fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:560,lineHeight:1.6}}>Transparent, customisable, Power BI-ready. Everything in the app you already know — Microsoft Excel.</p></div></section>
    <Sec><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:20}}>
      {[["transparent","Transparent Logic","Full formula transparency. No black boxes."],["chart","Power BI Integration","Connect seamlessly with Power BI. No data warehouse."],["custom","Unlimited Customisation","Your brand, your layouts. Zero coding."],["bolt","8 Clicks to Action","Install, connect, pull. Instant value."],["shield","Gen 2 Standard","Instructions, validation checks, change logs in every workbook."],["ai","AI Skills Library","15 purpose-built Claude AI skills for EXL Cloud workbooks."]].map(([ic,t,d],i)=>(
        <div key={i} style={{background:C.cream,borderRadius:12,padding:24,border:`1px solid ${C.gL}`}}>
          <div style={{width:44,height:44,borderRadius:10,background:`linear-gradient(135deg,${C.pale},${C.cream})`,border:`1px solid ${C.mint}40`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
            <Icon name={ic} size={20} color={C.priL}/>
          </div>
          <h3 style={{fontFamily:F,fontSize:16,fontWeight:700,color:C.dark,margin:"0 0 6px"}}>{t}</h3>
          <p style={{fontFamily:F,fontSize:13,color:C.g,margin:0,lineHeight:1.6}}>{d}</p>
        </div>
      ))}
    </div></Sec>
    {/* Board Pack Demo */}
    <Sec bg={C.cream}>
      <div style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.priA,letterSpacing:2,marginBottom:8}}>INTERACTIVE</div>
      <h2 style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.dark,margin:"0 0 8px"}}>HTML Board Packs</h2>
      <p style={{fontFamily:F,fontSize:15,color:C.g,margin:"0 0 28px",maxWidth:560,lineHeight:1.6}}>Single-file interactive HTML reports. Chart.js charts, KPI tiles, commentary blocks. Share a link — no Excel needed for the reader.</p>
      <BoardPackDemo/>
    </Sec>
    <Sec>
      <h2 style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.dark,margin:"0 0 8px"}}>See it in action</h2>
      <p style={{fontFamily:F,fontSize:15,color:C.g,margin:"0 0 28px"}}>Watch how EXL Cloud workbooks are created and customised in minutes.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>
        <Video id="qf1pEpPoYVg" title="3-Way Driver-Based Financial Model"/>
        <Video id="Apty2pmgtYk" title="Start Menu & Navigation"/>
      </div>
    </Sec>
    <Sec bg={C.cream} style={{textAlign:"center",padding:"48px 24px"}}>
      <h2 style={{fontFamily:F,fontSize:26,fontWeight:800,color:C.dark,margin:"0 0 12px"}}>Want to explore the scenario model?</h2>
      <p style={{fontFamily:F,fontSize:15,color:C.g,margin:"0 0 24px"}}>See what driver-based modelling looks like with our interactive 3-way scenario demo.</p>
      <Btn onClick={()=>go("future")}>Try the Interactive Model →</Btn>
    </Sec>
  </>
);

/* ═══ GEN 2 — abbreviated, same structure as before ═══ */
const Gen2=()=>{
  const skills=[{t:"Foundation",items:[["01","EXL Cloud Foundations","Quality benchmarking for skills and auditing."],["02","Best Practice Modelling","Formatting, colour coding, formula standards."]]},{t:"Data Infrastructure",items:[["03","Clean & Validate Data","Automated cleanup before reporting."],["04","TB Mapper","Maps accounts to standardised categories."],["05","Period Table Builder","Drives all time-series workbooks."]]},{t:"Narrative",items:[["06","Monthly Commentary","Professional P&L and CF commentary."],["07","Board Paper Drafter","Board-ready report assembly."],["08","Cash Flow Narrative","Plain English cash explanations."]]},{t:"Augmentation",items:[["09","Assumption Register","Extracts hardcoded assumptions."],["10","Anomaly Detection","Automated PASS/FAIL checks."],["11","Model Docs Generator","Auto-generates Instructions sheet."],["12","Variance Analysis","Actuals vs budget structured comparison."],["13","KPI Dashboard","Executive dashboard with traffic lights."],["14","Change Log","Structured change tracking."],["15","Meeting Prep","Preparation pack from workbook data."]]}];
  return(<>
    <section style={{background:`radial-gradient(ellipse at 20% 0%,${C.priL}30,transparent),linear-gradient(160deg,${C.dark},${C.pri})`,padding:"80px 24px 60px"}}><div style={{maxWidth:1100,margin:"0 auto"}}><span style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.mint,letterSpacing:3}}>2026 RELEASE</span><h1 style={{fontFamily:F,fontSize:44,fontWeight:800,color:C.w,lineHeight:1.1,margin:"12px 0 16px"}}>Smarter workbooks,<br/><span style={{background:`linear-gradient(90deg,${C.mint},${C.acc})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>AI-powered skills,</span><br/>updated pricing.</h1><p style={{fontFamily:F,fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:560,lineHeight:1.6,margin:"0 0 28px"}}>Three major updates — Gen 2 workbook rebuild, 15 Claude AI skills, and new subscription pricing from 1 July 2026.</p><div style={{display:"flex",gap:14,flexWrap:"wrap"}}><Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1">Get EXL Cloud</Btn><Btn href="https://maven.com/modelcitizn#lightning-lessons" variant="outline">Free Training</Btn></div></div></section>
    {/* Gen 2 Workbook Upgrade */}
    <Sec><span style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.priA,letterSpacing:2}}>UPDATE 1 OF 3</span><h2 style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.dark,margin:"8px 0 24px"}}>Gen 2 Workbook Upgrade</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:20}}>
        {[["doc","Instructions Sheet","Dedicated guidance in every workbook."],["grid","Improved Navigation","Less time finding, more time analysing."],["shield","Consistent Formatting","Uniform layout across all files."],["transparent","Formula Transparency","Plain-English notes on every formula."]].map(([ic,t,d],i)=>(
          <div key={i} style={{background:C.cream,borderRadius:12,padding:24,border:`1px solid ${C.gL}`}}>
            <div style={{width:44,height:44,borderRadius:10,background:`linear-gradient(135deg,${C.pale},${C.cream})`,border:`1px solid ${C.mint}40`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
              <Icon name={ic} size={20} color={C.priL}/>
            </div>
            <h3 style={{fontFamily:F,fontSize:15,fontWeight:700,color:C.dark,margin:"0 0 6px"}}>{t}</h3>
            <p style={{fontFamily:F,fontSize:13,color:C.g,margin:0,lineHeight:1.5}}>{d}</p>
          </div>
        ))}
      </div>
    </Sec>
    {/* Coverage */}
    <Sec bg={C.cream}><h2 style={{fontFamily:F,fontSize:24,fontWeight:800,color:C.dark,margin:"0 0 20px"}}>Gen 2 Coverage</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>
        <div style={{background:C.w,borderRadius:12,padding:24,border:`1px solid ${C.gL}`}}><span style={{display:"inline-block",padding:"3px 10px",borderRadius:4,background:C.priL,color:C.w,fontFamily:F,fontSize:10,fontWeight:700,marginBottom:14}}>FULL UPGRADE</span>
          {["Performance Report","Positions & Returns","1-Way Cash Flow Scenario Model","1-Way Profit Performance Scenario Model","3-Way Driver-Based Financial Model","Profit & Loss Insights","Trial Balance Insights","Human Capital Model","R&D Template","Advanced Rolling Property Dev Model"].map(w=>(<div key={w} style={{fontFamily:F,fontSize:13,color:C.gD,padding:"5px 0",display:"flex",gap:6,alignItems:"center"}}><Icon name="check" size={14} color={C.priA}/>{w}</div>))}
        </div>
        <div style={{background:C.w,borderRadius:12,padding:24,border:`1px solid ${C.gL}`}}><span style={{display:"inline-block",padding:"3px 10px",borderRadius:4,background:C.gL,color:C.gD,fontFamily:F,fontSize:10,fontWeight:700,marginBottom:14}}>INSTRUCTIONS UPDATE</span>
          {["Manual Journal (Data Push)","Bank Transactions (Data Push)","Invoices & Bills (Data Push)","Chart of Accounts (Data Push)","P&L / BS / Budget (Data Pull)","Trial Balance (Data Pull)","Account Transactions (Data Pull)","Consolidated Workbook","Financial Control Master Toolkit"].map(w=>(<div key={w} style={{fontFamily:F,fontSize:13,color:C.gD,padding:"5px 0",display:"flex",gap:6,alignItems:"center"}}><span style={{width:14,height:14,borderRadius:"50%",border:`1.5px solid ${C.gL}`,display:"inline-block"}}/>{w}</div>))}
        </div>
      </div>
    </Sec>
    {/* Skills Library */}
    <Sec><span style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.priA,letterSpacing:2}}>UPDATE 2 OF 3</span><h2 style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.dark,margin:"8px 0 8px"}}>Skills Library — Claude AI for EXL Cloud</h2><p style={{fontFamily:F,fontSize:15,color:C.g,margin:"0 0 28px",maxWidth:560,lineHeight:1.6}}>15 purpose-built skills. Download from GitHub, load into Claude, instantly trained for that specific workbook.</p>
      {skills.map(tier=>(<div key={tier.t} style={{marginBottom:28}}><div style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.priL,letterSpacing:1.5,marginBottom:10,textTransform:"uppercase",borderBottom:`1px solid ${C.gL}`,paddingBottom:6}}>{tier.t}</div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>{tier.items.map(([n,t,d])=>(<div key={n} style={{background:C.cream,borderRadius:10,padding:16,border:`1px solid ${C.gL}`}}><span style={{fontFamily:F,fontSize:10,fontWeight:700,color:C.priA}}>SKILL {n}</span><h4 style={{fontFamily:F,fontSize:14,fontWeight:700,color:C.dark,margin:"4px 0"}}>{t}</h4><p style={{fontFamily:F,fontSize:12,color:C.g,margin:0,lineHeight:1.5}}>{d}</p></div>))}</div></div>))}
    </Sec>
    {/* Updated Pricing */}
    <Sec bg={C.cream}><span style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.priA,letterSpacing:2}}>UPDATE 3 OF 3</span><h2 style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.dark,margin:"8px 0 8px"}}>Updated Pricing from 1 July 2026</h2><p style={{fontFamily:F,fontSize:15,color:C.g,margin:"0 0 28px",maxWidth:560,lineHeight:1.6}}>Current pricing applies until 30 June 2026. New pricing takes effect 1 July.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:20}}>
        {[{p:"Data Pull",cur:"$50",next:"$70"},{p:"Advanced Content",cur:"$125",next:"$170"}].map(x=>(<div key={x.p} style={{background:C.w,borderRadius:14,padding:28,border:`1px solid ${C.gL}`,textAlign:"center"}}>
          <h3 style={{fontFamily:F,fontSize:18,fontWeight:700,color:C.dark,margin:"0 0 4px"}}>{x.p}</h3>
          <div style={{fontFamily:F,fontSize:13,color:C.g,marginBottom:12}}>5 connections included</div>
          <div style={{fontFamily:F,fontSize:11,fontWeight:600,color:C.priA,marginBottom:4}}>Current</div>
          <div style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.priL,marginBottom:12}}>{x.cur}<span style={{fontSize:14,fontWeight:500,color:C.g}}>/mo</span></div>
          <div style={{borderTop:`1px solid ${C.gL}`,paddingTop:12}}>
            <div style={{fontFamily:F,fontSize:11,fontWeight:600,color:C.acc}}>From 1 July 2026</div>
            <div style={{fontFamily:F,fontSize:20,fontWeight:700,color:C.gD}}>{x.next}<span style={{fontSize:12,fontWeight:500,color:C.g}}>/mo</span></div>
          </div>
        </div>))}
      </div>
    </Sec>
    {/* AIPA Bonus */}
    <Sec><div style={{background:`linear-gradient(135deg,${C.pri},${C.priL})`,borderRadius:16,padding:40,textAlign:"center"}}><span style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.mint,letterSpacing:2}}>BONUS</span><h3 style={{fontFamily:F,fontSize:24,fontWeight:700,color:C.w,margin:"8px 0 12px"}}>45% off AI-Powered Accountant Program</h3><p style={{fontFamily:F,fontSize:14,color:"rgba(255,255,255,0.7)",margin:"0 auto 24px",maxWidth:460,lineHeight:1.6}}>Included with every subscription. Hosted on Maven. Stays active as long as your subscription remains.</p><Btn href="https://maven.com/modelcitizn#courses">Join the Next Cohort →</Btn></div></Sec>
  </>);
};

/* ═══ PRICING ═══ */
const Pricing=()=>(<>
  <section style={{background:`linear-gradient(160deg,${C.dark},${C.pri})`,padding:"80px 24px 60px"}}><div style={{maxWidth:1100,margin:"0 auto"}}><h1 style={{fontFamily:F,fontSize:40,fontWeight:800,color:C.w,margin:0}}>Pricing & Sign Up</h1><p style={{fontFamily:F,fontSize:17,color:"rgba(255,255,255,0.7)",margin:"12px 0 0",maxWidth:500}}>Choose the plan that fits. 7-day free trial included. Benefit from lower marginal cost as you add connections.</p></div></section>
  <Sec>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:28}}>
      {/* Data Pull */}
      <div style={{background:C.w,borderRadius:16,padding:32,border:`1px solid ${C.gL}`}}>
        <h3 style={{fontFamily:F,fontSize:20,fontWeight:700,margin:"0 0 4px"}}>Data Pull Plan</h3>
        <p style={{fontFamily:F,fontSize:12,color:C.g,margin:"0 0 12px",lineHeight:1.5}}>Quick and easy way to pull and push data directly from Xero into Excel. Perfect if you've been impacted by deprecated data pull services.</p>
        <div style={{fontFamily:F,fontSize:34,fontWeight:800,color:C.priL,margin:"0 0 4px"}}>$50<span style={{fontSize:14,fontWeight:500,color:C.g}}>/month</span></div>
        <div style={{fontFamily:F,fontSize:13,color:C.g,marginBottom:4}}>Includes 5 connections</div>
        <div style={{fontFamily:F,fontSize:11,color:C.acc,fontWeight:600,marginBottom:20,padding:"4px 10px",background:"#FEF3C7",borderRadius:4,display:"inline-block"}}>From 1 July: $70/mo</div>
        <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Data-Pull-Promotion-Starter-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1" style={{width:"100%"}}>Sign Up</Btn>
        <div style={{marginTop:20}}>
          {["Xero data pull & push","Clean P&L, BS, TB data pulls","Account transactions","FX rates & named budgets","Gen 2 workbooks"].map(f=>(<div key={f} style={{fontFamily:F,fontSize:13,color:C.gD,padding:"7px 0",borderBottom:`1px solid ${C.gL}`,display:"flex",gap:8}}><Icon name="check" size={14} color={C.priA}/>{f}</div>))}
        </div>
        <div style={{marginTop:16,background:"#FAFAFA",borderRadius:8,padding:14}}>
          <div style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.gD,marginBottom:8}}>Additional connections/month:</div>
          <table style={{width:"100%",fontFamily:F,fontSize:12,borderCollapse:"collapse"}}>
            <tbody>
              {[["6–10 connections","$7.50/ea"],["11–20 connections","$6.80/ea"],["21+ connections","$6.00/ea"],["Enterprise","Price on application"]].map(([t,p])=>(
                <tr key={t}><td style={{padding:"4px 0",color:C.gD}}>{t}</td><td style={{padding:"4px 0",textAlign:"right",fontWeight:600,color:C.priL}}>{p}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Advanced Content */}
      <div style={{background:C.w,borderRadius:16,padding:32,border:`2px solid ${C.priA}`,position:"relative"}}>
        <div style={{position:"absolute",top:-10,right:20,background:C.priA,color:C.w,fontFamily:F,fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:4,letterSpacing:1}}>RECOMMENDED</div>
        <h3 style={{fontFamily:F,fontSize:20,fontWeight:700,margin:"0 0 4px"}}>Advanced Content Plan</h3>
        <p style={{fontFamily:F,fontSize:12,color:C.g,margin:"0 0 12px",lineHeight:1.5}}>World-class expert financial models, dashboards, analytics and reports directly in Excel. Includes all Data Pull content.</p>
        <div style={{fontFamily:F,fontSize:34,fontWeight:800,color:C.priL,margin:"0 0 4px"}}>$125<span style={{fontSize:14,fontWeight:500,color:C.g}}>/month</span></div>
        <div style={{fontFamily:F,fontSize:13,color:C.g,marginBottom:4}}>Includes 5 connections</div>
        <div style={{fontFamily:F,fontSize:11,color:C.acc,fontWeight:600,marginBottom:20,padding:"4px 10px",background:"#FEF3C7",borderRadius:4,display:"inline-block"}}>From 1 July: $170/mo</div>
        <Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1" style={{width:"100%"}}>Sign Up</Btn>
        <div style={{marginTop:20}}>
          {["Everything in Data Pull","Performance Reports","3-Way Driver-Based Financial Model","1-Way Cash Flow Scenario Model","1-Way Profit Performance Model","Positions & Returns","Power BI integration","15 AI skills included","45% off AIPA program","HTML Board Packs"].map(f=>(<div key={f} style={{fontFamily:F,fontSize:13,color:C.gD,padding:"7px 0",borderBottom:`1px solid ${C.gL}`,display:"flex",gap:8}}><Icon name="check" size={14} color={C.priA}/>{f}</div>))}
        </div>
        <div style={{marginTop:16,background:"#FAFAFA",borderRadius:8,padding:14}}>
          <div style={{fontFamily:F,fontSize:11,fontWeight:700,color:C.gD,marginBottom:8}}>Additional connections/month:</div>
          <table style={{width:"100%",fontFamily:F,fontSize:12,borderCollapse:"collapse"}}>
            <tbody>
              {[["6–20 connections","$16.25/ea"],["21+ connections","$12.70/ea"],["Enterprise","Price on application"]].map(([t,p])=>(
                <tr key={t}><td style={{padding:"4px 0",color:C.gD}}>{t}</td><td style={{padding:"4px 0",textAlign:"right",fontWeight:600,color:C.priL}}>{p}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Help + automation */}
    <div style={{marginTop:32,background:`linear-gradient(135deg,${C.pri},${C.priL})`,borderRadius:14,padding:32,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:20}}>
      <div>
        <h3 style={{fontFamily:F,fontSize:20,fontWeight:700,color:C.w,margin:"0 0 8px"}}>Need help automating reporting?</h3>
        <p style={{fontFamily:F,fontSize:14,color:"rgba(255,255,255,0.7)",margin:0,maxWidth:440}}>We've automated many bookkeeping and reporting processes. Reach out to find out how we can save you hours every month end.</p>
      </div>
      <Btn href="https://share.hsforms.com/1Ghuax7wHQg6Bg22sJfVVSAcw2qe">Get in Touch</Btn>
    </div>

    <div style={{textAlign:"center",marginTop:24}}>
      <p style={{fontFamily:F,fontSize:11,color:C.g}}>Mac users: Boot Camp or Parallels required to run EXL Cloud.</p>
    </div>
  </Sec>
</>);

/* ═══ SUPPORT ═══ */
const Support=()=>(<>
  <section style={{background:`linear-gradient(160deg,${C.dark},${C.pri})`,padding:"80px 24px 60px"}}><div style={{maxWidth:1100,margin:"0 auto"}}><h1 style={{fontFamily:F,fontSize:40,fontWeight:800,color:C.w,margin:0}}>Support & Training</h1><p style={{fontFamily:F,fontSize:17,color:"rgba(255,255,255,0.7)",margin:"12px 0 0"}}>Knowledge base, video library, support tickets, and masterclasses.</p></div></section>
  <Sec><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
    {[["doc","Knowledge Base","Tips, tricks, and developer docs.",["http://docs.xlconnect.net","Open"]],["mail","Support Ticket","Lodge a ticket with our team.",["https://exlcloud.atlassian.net/servicedesk/customer/portal/1","Lodge Ticket"]],["users","Boot Camp","Team training — streamlined and practical.",null]].map(([ic,t,d,link],i)=>(
      <div key={i} style={{background:C.cream,borderRadius:12,padding:24,border:`1px solid ${C.gL}`}}>
        <div style={{width:44,height:44,borderRadius:10,background:`linear-gradient(135deg,${C.pale},${C.cream})`,border:`1px solid ${C.mint}40`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
          <Icon name={ic} size={20} color={C.priL}/>
        </div>
        <h3 style={{fontFamily:F,fontSize:16,fontWeight:700,color:C.dark,margin:"0 0 6px"}}>{t}</h3>
        <p style={{fontFamily:F,fontSize:13,color:C.g,margin:"0 0 14px",lineHeight:1.5}}>{d}</p>
        {link&&<Btn href={link[0]} variant="dark" style={{padding:"8px 16px",fontSize:12}}>{link[1]}</Btn>}
      </div>
    ))}
  </div></Sec>
  <Sec bg={C.cream}><h2 style={{fontFamily:F,fontSize:28,fontWeight:800,color:C.dark,margin:"0 0 24px"}}>Video Library</h2>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:16}}>
      <Video id="qf1pEpPoYVg" title="3-Way Financial Model"/><Video id="Apty2pmgtYk" title="Start Menu & Navigation"/><Video id="fa22TR9MI-Y" title="Account Transactions Pull"/>
    </div>
  </Sec>
</>);

/* ═══ CONTACT ═══ */
const Contact=()=>{
  const [iframeLoaded,setIframeLoaded]=useState(false);
  const hsUrl="https://share.hsforms.com/1Ghuax7wHQg6Bg22sJfVVSAcw2qe";
  return (<>
    <section style={{background:`linear-gradient(160deg,${C.dark},${C.pri})`,padding:"80px 24px 60px"}}><div style={{maxWidth:1100,margin:"0 auto"}}><h1 style={{fontFamily:F,fontSize:40,fontWeight:800,color:C.w,margin:0}}>Get in Touch</h1><p style={{fontFamily:F,fontSize:17,color:"rgba(255,255,255,0.7)",margin:"12px 0 0"}}>Demos, enterprise pricing, or general enquiries.</p></div></section>
    <Sec><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:28}}>
      <div>
        <h3 style={{fontFamily:F,fontSize:20,fontWeight:700,margin:"0 0 20px"}}>Contact Details</h3>
        {[["📍","80 Market Street, South Melbourne VIC 3205"],["📞","+61 405 329 098"],["✉️","info@exlcloud.io"]].map(([i,t])=>(<div key={t} style={{display:"flex",gap:10,marginBottom:14}}><span>{i}</span><span style={{fontFamily:F,fontSize:14,color:C.gD}}>{t}</span></div>))}
        <div style={{marginTop:24}}>
          <a href="mailto:info@exlcloud.io?subject=EXL%20Cloud%20Enquiry" style={{display:"inline-flex",alignItems:"center",gap:8,fontFamily:F,fontSize:14,fontWeight:600,color:C.priL,textDecoration:"none",padding:"10px 20px",border:`1.5px solid ${C.priL}`,borderRadius:8,marginBottom:12}}>
            <Icon name="mail" size={16} color={C.priL}/> Email us directly
          </a>
        </div>
        <div style={{marginTop:12,display:"flex",gap:8,flexWrap:"wrap"}}>
          {[["LinkedIn","https://www.linkedin.com/company/exl-cloud"],["Facebook","https://www.facebook.com/EXLCloud"],["X","https://x.com/exl_cloud"]].map(([l,u])=>(<a key={l} href={u} target="_blank" rel="noopener noreferrer" style={{fontFamily:F,fontSize:12,color:C.priA,textDecoration:"none",padding:"6px 14px",border:`1px solid ${C.gL}`,borderRadius:6}}>{l}</a>))}
        </div>
      </div>
      <div style={{background:C.cream,borderRadius:14,overflow:"hidden",border:`1px solid ${C.gL}`}}>
        <div style={{padding:"16px 20px",borderBottom:`1px solid ${C.gL}`}}>
          <h3 style={{fontFamily:F,fontSize:18,fontWeight:700,margin:0}}>Send us a message</h3>
          <p style={{fontFamily:F,fontSize:12,color:C.g,margin:"4px 0 0"}}>We'll get back to you within 24 hours</p>
        </div>
        <div style={{padding:20}}>
          <a href={hsUrl} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:12,padding:16,background:C.w,borderRadius:10,border:`1px solid ${C.gL}`,textDecoration:"none",marginBottom:16}}>
            <div style={{width:44,height:44,borderRadius:10,background:`linear-gradient(135deg,${C.priL},${C.priA})`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <Icon name="doc" size={20} color={C.w}/>
            </div>
            <div>
              <div style={{fontFamily:F,fontSize:14,fontWeight:600,color:C.dark}}>Open enquiry form</div>
              <div style={{fontFamily:F,fontSize:11,color:C.g}}>Opens in a new tab — sends to our Slack</div>
            </div>
            <div style={{marginLeft:"auto",flexShrink:0}}><Icon name="arrow" size={16} color={C.priA}/></div>
          </a>
          <a href="mailto:info@exlcloud.io?subject=EXL%20Cloud%20Enquiry" style={{display:"flex",alignItems:"center",gap:12,padding:16,background:C.w,borderRadius:10,border:`1px solid ${C.gL}`,textDecoration:"none"}}>
            <div style={{width:44,height:44,borderRadius:10,background:`linear-gradient(135deg,${C.blue},#3B82F6)`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <Icon name="mail" size={20} color={C.w}/>
            </div>
            <div>
              <div style={{fontFamily:F,fontSize:14,fontWeight:600,color:C.dark}}>Email info@exlcloud.io</div>
              <div style={{fontFamily:F,fontSize:11,color:C.g}}>Opens your email client</div>
            </div>
            <div style={{marginLeft:"auto",flexShrink:0}}><Icon name="arrow" size={16} color={C.priA}/></div>
          </a>
        </div>
      </div>
    </div></Sec>
  </>);
};

/* ═══ FUTURE OF MODELLING — Interactive Scenario Model ═══ */
const Future=()=>{
  const [sc,setSc]=useState("base");
  const [rg,setRg]=useState(15);const [cp,setCp]=useState(35);const [og,setOg]=useState(8);const [tr,setTr]=useState(30);const [ir,setIr]=useState(5);
  const presets={base:{rg:15,cp:35,og:8,tr:30,ir:5},optimistic:{rg:25,cp:30,og:5,tr:25,ir:4},conservative:{rg:5,cp:40,og:12,tr:30,ir:7}};
  useEffect(()=>{const s=presets[sc];setRg(s.rg);setCp(s.cp);setOg(s.og);setTr(s.tr);setIr(s.ir)},[sc]);
  const bR=1000,bO=300,bD=500;const yrs=[];let cc=200;
  for(let y=0;y<6;y++){const r=bR*Math.pow(1+rg/100,y);const c=r*(cp/100);const gp=r-c;const o=bO*Math.pow(1+og/100,y);const eb=gp-o;const d=r*0.03;const ei=eb-d;const int=bD*(ir/100);const ebt=ei-int;const tx=Math.max(0,ebt*(tr/100));const np=ebt-tx;const ocf=np+d;const cx=r*0.05;const fcf=ocf-cx;cc+=fcf;yrs.push({yr:`FY${27+y}`,r:Math.round(r),c:Math.round(c),gp:Math.round(gp),o:Math.round(o),eb:Math.round(eb),np:Math.round(np),ocf:Math.round(ocf),fcf:Math.round(fcf),cash:Math.round(cc),gpm:((gp/r)*100).toFixed(1),npm:((np/r)*100).toFixed(1)})}
  const fy32=yrs[5];
  const Sl=({l,v,set,mn,mx})=>(<div style={{marginBottom:14}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}><span style={{fontFamily:F,fontSize:12,fontWeight:600,color:C.gD}}>{l}</span><span style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.priL}}>{v}%</span></div><input type="range" min={mn} max={mx} value={v} onChange={e=>set(+e.target.value)} style={{width:"100%",accentColor:C.priA}}/></div>);
  return(<>
    <section style={{background:`radial-gradient(ellipse at 30% 0%,${C.priL}20,transparent),linear-gradient(160deg,${C.dark},#0D2818,${C.pri})`,padding:"80px 24px 60px"}}><div style={{maxWidth:1100,margin:"0 auto"}}><span style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.mint,letterSpacing:3}}>INTERACTIVE MODEL</span><h1 style={{fontFamily:F,fontSize:40,fontWeight:800,color:C.w,lineHeight:1.1,margin:"12px 0 16px"}}>The Future of Financial Modelling</h1><p style={{fontFamily:F,fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:560,lineHeight:1.6}}>Adjust the drivers. Watch the 3-way model respond in real time. This is driver-based modelling — the EXL Cloud way.</p></div></section>
    <Sec bg={C.cream}>
      <div style={{display:"flex",gap:6,marginBottom:28,flexWrap:"wrap"}}>{[["base","Base Case"],["optimistic","Optimistic"],["conservative","Conservative"]].map(([k,l])=>(<button key={k} onClick={()=>setSc(k)} style={{fontFamily:F,fontSize:12,fontWeight:600,padding:"9px 22px",borderRadius:8,cursor:"pointer",border:"none",background:sc===k?C.priL:C.w,color:sc===k?C.w:C.gD,boxShadow:sc===k?"none":"0 1px 3px rgba(0,0,0,0.06)",transition:"all 0.2s"}}>{l}</button>))}</div>
      <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:28,alignItems:"start"}} className="model-grid">
        <div className="driver-panel" style={{background:C.w,borderRadius:14,padding:24,border:`1px solid ${C.gL}`}}>
          <h3 style={{fontFamily:F,fontSize:15,fontWeight:700,margin:"0 0 18px",display:"flex",alignItems:"center",gap:8}}><Icon name="chart" size={18}/>Drivers</h3>
          <Sl l="Revenue Growth" v={rg} set={setRg} mn={-10} mx={50}/>
          <Sl l="COGS %" v={cp} set={setCp} mn={10} mx={80}/>
          <Sl l="OpEx Growth" v={og} set={setOg} mn={-5} mx={30}/>
          <Sl l="Tax Rate" v={tr} set={setTr} mn={0} mx={50}/>
          <Sl l="Interest Rate" v={ir} set={setIr} mn={0} mx={15}/>
          <div style={{marginTop:16,padding:10,background:C.pale,borderRadius:8,fontFamily:F,fontSize:10,color:C.priL,lineHeight:1.5}}>All inputs → P&L → BS → CF. Zero hardcoding. EXL Cloud standard.</div>
        </div>
        <div>
          {/* KPI tiles */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(110px,1fr))",gap:10,marginBottom:24}}>
            {[["Revenue",`$${(fy32.r/1000).toFixed(1)}M`],["GP Margin",`${fy32.gpm}%`],["NPAT",`$${fy32.np}K`],["FCF",`$${fy32.fcf}K`],["Cash",`$${(fy32.cash/1000).toFixed(1)}M`]].map(([l,v])=>(
              <div key={l} style={{background:C.w,borderRadius:10,padding:14,border:`1px solid ${C.gL}`,textAlign:"center"}}><div style={{fontFamily:F,fontSize:9,color:C.g,fontWeight:600,letterSpacing:0.5}}>{l}</div><div style={{fontFamily:F,fontSize:20,fontWeight:800,color:C.priL}}>{v}</div></div>
            ))}
          </div>
          {/* Charts */}
          <div style={{background:C.w,borderRadius:14,padding:20,border:`1px solid ${C.gL}`,marginBottom:20}}>
            <h4 style={{fontFamily:F,fontSize:13,fontWeight:700,margin:"0 0 14px"}}>P&L Waterfall ($K)</h4>
            <ResponsiveContainer width="100%" height={240}><BarChart data={yrs}><CartesianGrid strokeDasharray="3 3" stroke="#eee"/><XAxis dataKey="yr" tick={{fontSize:11,fontFamily:F}}/><YAxis tick={{fontSize:10}}/><Tooltip contentStyle={{fontFamily:F,fontSize:11}}/><Legend wrapperStyle={{fontFamily:F,fontSize:11}}/><Bar dataKey="r" name="Revenue" fill={C.priL} radius={[3,3,0,0]}/><Bar dataKey="gp" name="GP" fill={C.priA} radius={[3,3,0,0]}/><Bar dataKey="eb" name="EBITDA" fill={C.mint} radius={[3,3,0,0]}/><Bar dataKey="np" name="NPAT" fill={C.blue} radius={[3,3,0,0]}/></BarChart></ResponsiveContainer>
          </div>
          <div style={{background:C.w,borderRadius:14,padding:20,border:`1px solid ${C.gL}`,marginBottom:20}}>
            <h4 style={{fontFamily:F,fontSize:13,fontWeight:700,margin:"0 0 14px"}}>Cash Flow ($K)</h4>
            <ResponsiveContainer width="100%" height={200}><AreaChart data={yrs}><CartesianGrid strokeDasharray="3 3" stroke="#eee"/><XAxis dataKey="yr" tick={{fontSize:11}}/><YAxis tick={{fontSize:10}}/><Tooltip contentStyle={{fontFamily:F,fontSize:11}}/><Legend wrapperStyle={{fontFamily:F,fontSize:11}}/><Area type="monotone" dataKey="cash" name="Cumulative" fill={C.pale} stroke={C.priL} strokeWidth={2}/><Area type="monotone" dataKey="ocf" name="Operating" fill="#DBEAFE" stroke={C.blue} strokeWidth={2}/><Area type="monotone" dataKey="fcf" name="Free CF" fill="#FEF3C7" stroke={C.acc} strokeWidth={2}/></AreaChart></ResponsiveContainer>
          </div>
          <div style={{background:C.w,borderRadius:14,padding:20,border:`1px solid ${C.gL}`,marginBottom:20}}>
            <h4 style={{fontFamily:F,fontSize:13,fontWeight:700,margin:"0 0 14px"}}>Margins (%)</h4>
            <ResponsiveContainer width="100%" height={180}><LineChart data={yrs}><CartesianGrid strokeDasharray="3 3" stroke="#eee"/><XAxis dataKey="yr" tick={{fontSize:11}}/><YAxis tick={{fontSize:10}} domain={[-20,80]}/><Tooltip contentStyle={{fontFamily:F,fontSize:11}}/><Legend wrapperStyle={{fontFamily:F,fontSize:11}}/><Line type="monotone" dataKey="gpm" name="GP %" stroke={C.priA} strokeWidth={2} dot={{r:3}}/><Line type="monotone" dataKey="npm" name="NPAT %" stroke={C.blue} strokeWidth={2} dot={{r:3}}/></LineChart></ResponsiveContainer>
          </div>
          {/* Table */}
          <div style={{background:C.w,borderRadius:14,padding:20,border:`1px solid ${C.gL}`,overflow:"auto"}}>
            <h4 style={{fontFamily:F,fontSize:13,fontWeight:700,margin:"0 0 14px"}}>P&L Summary ($K)</h4>
            <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F,fontSize:12}}><thead><tr style={{borderBottom:`2px solid ${C.priL}`}}>{["","FY27","FY28","FY29","FY30","FY31","FY32"].map(h=>(<th key={h} style={{textAlign:h?"right":"left",padding:"6px 4px",color:C.gD,fontWeight:700,fontSize:11}}>{h}</th>))}</tr></thead><tbody>{[["Revenue","r"],["COGS","c"],["Gross Profit","gp"],["OpEx","o"],["EBITDA","eb"],["NPAT","np"],["Operating CF","ocf"],["Free CF","fcf"]].map(([l,k])=>(<tr key={l} style={{borderBottom:`1px solid ${C.gL}`,background:["Gross Profit","EBITDA","NPAT"].includes(l)?C.pale:"transparent"}}><td style={{padding:"5px 4px",fontWeight:["Gross Profit","EBITDA","NPAT"].includes(l)?700:400,fontSize:12}}>{l}</td>{yrs.map(y=>(<td key={y.yr} style={{textAlign:"right",padding:"5px 4px",color:y[k]<0?C.red:C.gD,fontWeight:["Gross Profit","EBITDA","NPAT"].includes(l)?700:400}}>{y[k].toLocaleString()}</td>))}</tr>))}</tbody></table>
          </div>
        </div>
      </div>
    </Sec>
    <Sec style={{textAlign:"center"}}><h2 style={{fontFamily:F,fontSize:28,fontWeight:800,margin:"0 0 12px"}}>This is the EXL Cloud Standard</h2><p style={{fontFamily:F,fontSize:15,color:C.g,margin:"0 0 28px"}}>Driver-based. Formula-driven. Scenario-enabled. Fully transparent.</p><div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}><Btn href="https://exlcloud.chargebee.com/hosted_pages/checkout?subscription_items%5Bitem_price_id%5D%5B0%5D=Xero-Advanced-Content-Plan-AUD-Monthly&subscription_items%5Bquantity%5D%5B0%5D=1">Get EXL Cloud</Btn><Btn href="https://maven.com/modelcitizn#courses" variant="dark">AI-Powered Accountant</Btn></div></Sec>
  </>);
};

/* ═══ PRIVACY / EULA (inline) ═══ */
const Legal=({type})=>(<>
  <section style={{background:`linear-gradient(160deg,${C.dark},${C.pri})`,padding:"80px 24px 40px"}}><div style={{maxWidth:1100,margin:"0 auto"}}><h1 style={{fontFamily:F,fontSize:36,fontWeight:800,color:C.w}}>{type==="privacy"?"Privacy Policy":"End User Licence Agreement"}</h1></div></section>
  <Sec><div style={{fontFamily:F,fontSize:14,color:C.gD,lineHeight:1.8,maxWidth:700}}>
    {type==="privacy"?(<><p>EXL Cloud Holdings Pty Ltd ("we", "us", "our") collects personal information for the primary purpose of providing our services to you, providing information to our clients, and marketing.</p><p style={{marginTop:16}}>This information is obtained via interviews, correspondence, telephone, email, our website, cookies, and third parties. We do not guarantee website links or policies of authorised third parties.</p><p style={{marginTop:16}}>You may unsubscribe from our mailing lists at any time by contacting us in writing at info@exlcloud.io.</p><p style={{marginTop:16}}>For full privacy policy details, contact us at info@exlcloud.io or +61 405 329 098.</p><p style={{marginTop:16}}>80 Market Street, South Melbourne VIC 3205</p></>)
    :(<><p>The licence is granted by downloading the Application directly from EXL Cloud or from an approved Application Store under the Data Pull Plan or Advanced Content Plan.</p><p style={{marginTop:16}}>The Application and Content are protected by intellectual property laws and are licensed, not sold. You may only use the Application and Content on a Device that you own or control.</p><p style={{marginTop:16}}>The licence is solely for your commercial or business purposes. You may download, use, amend, extend, or adjust the Content provided within your Application subscription.</p><p style={{marginTop:16}}>You agree not to license, sell, rent, lease, assign, distribute, transmit, transfer, host, outsource, disclose, or otherwise commercially exploit the Application or Content.</p><p style={{marginTop:16}}>For the complete EULA, contact info@exlcloud.io.</p></>)}
  </div></Sec>
</>);

/* ═══ MAIN APP ═══ */
export default function App(){
  const [page,setPage]=useState("home");
  const go=useCallback(p=>{setPage(p);window.scrollTo({top:0,behavior:"smooth"})},[]);
  const pages={home:<Home go={go}/>,about:<About/>,features:<Features go={go}/>,gen2:<Gen2/>,pricing:<Pricing/>,support:<Support/>,contact:<Contact/>,future:<Future/>,privacy:<Legal type="privacy"/>,eula:<Legal type="eula"/>};
  return(
    <div style={{fontFamily:F,background:C.w,minHeight:"100vh"}}>
      <style>{`*{box-sizing:border-box;margin:0}body{margin:0;overflow-x:hidden}a:hover{opacity:.88}button:hover{opacity:.92}input[type=range]{-webkit-appearance:none;appearance:none;background:${C.gL};border-radius:4px;outline:none;height:5px}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:${C.priL};cursor:pointer;border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,.2)}.driver-panel{position:sticky;top:76px}@media(max-width:768px){h1{font-size:32px!important}h2{font-size:24px!important}.prod-grid,.model-grid,.bp-grid,.bp-grid2{grid-template-columns:1fr!important}.driver-panel{position:static!important}}`}</style>
      <Nav page={page} go={go}/>
      {pages[page]}
      <Footer go={go}/>
    </div>
  );
}
