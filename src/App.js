import { useEffect, useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navabar } from "./Navabar";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

function App() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [active]);

  return (
    <div className="App">
      <Navabar active={active} setActive={setActive} />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
