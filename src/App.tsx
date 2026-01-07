import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="pt-24">
        <Home />
        <Skills />
      </main>
    </div>
  );
};

export default App;
