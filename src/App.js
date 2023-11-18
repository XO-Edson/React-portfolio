import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navabar } from "./Navabar";
import { Skills } from "./Skills";

function App() {
  return (
    <div className="App">
      <Navabar />
      <HeroSection />
      <About />
      <Skills />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
