import { About } from "./About";
import { Contact } from "./Contact";
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
    </div>
  );
}

export default App;
