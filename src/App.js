import {About} from "./Components/About";
import {Contact} from "./Components/Contact";
import {Home} from "./Components/Home";
import {Navbar} from "./Components/Navbar";
import {Projects} from "./Components/Projects";
import {Skills} from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
