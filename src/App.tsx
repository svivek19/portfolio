import { Layout } from "./components/Layout";
import Snackbar from "./components/Snackbar";
import { SnackbarProvider } from "./context/SnackbarContext";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <SnackbarProvider>
      <Layout>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </Layout>
      <Snackbar />
    </SnackbarProvider>
  );
};

export default App;
