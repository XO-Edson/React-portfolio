import { useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navabar } from "./Navabar";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

function App() {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="App">
      <Navabar />
      <HeroSection />
      <About />
      <Skills />
<<<<<<< HEAD
      <Projects />
=======
>>>>>>> 518f247626ee9d63c85c5789b50c6982c3446a58
      <Contact data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
