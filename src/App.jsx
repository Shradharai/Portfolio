import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Journey from "./components/Journey/Journey";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Research from "./components/Research/Research";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WelcomeIntro from "./components/WelcomeIntro/WelcomeIntro";
import ScrollProgress from "./hooks/useScrollProgress";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <WelcomeIntro />

      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;