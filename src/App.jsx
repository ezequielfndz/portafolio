
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>© 2026 Ezequiel · Designed & developed with React.</p>
        <a
          href="https://github.com/ezequielfndz"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </footer>
    </>
  );
}

export default App;
