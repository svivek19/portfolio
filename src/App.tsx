import Navbar from "./components/Navbar";
import Home from "./sections/Home";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="pt-24">
        <Home />
      </main>
    </div>
  );
};

export default App;
