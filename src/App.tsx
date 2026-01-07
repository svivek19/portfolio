import Navbar from "./components/Navbar";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="pt-24">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
    </div>
  );
};

export default App;
