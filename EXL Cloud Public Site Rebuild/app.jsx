/* ═══ MAIN APP ═══ */
const App = () => {
  const [page, setPage] = React.useState("home");
  const go = React.useCallback(p => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  const pages = {
    home: <Home go={go} />, about: <About />, features: <Features go={go} />,
    gen2: <Gen2 />, pricing: <Pricing />, support: <Support />,
    contact: <Contact />, future: <Future />,
    privacy: <Legal type="privacy" />, eula: <Legal type="eula" />,
  };
  return (
    <div style={{ fontFamily: F, background: C.w, minHeight: "100vh" }}>
      <Nav page={page} go={go} />
      {pages[page]}
      <Footer go={go} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
