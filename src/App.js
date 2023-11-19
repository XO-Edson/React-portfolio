import { useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navabar } from "./Navabar";
import { Skills } from "./Skills";

function App() {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="App">
      <Navabar />
      <HeroSection />
      <About />
      <Skills />
      <Contact data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
