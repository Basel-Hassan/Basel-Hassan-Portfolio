import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors">
      <Navbar theme={theme} language={language} onThemeToggle={toggleTheme} onLanguageToggle={toggleLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Education language={language} />
        <Contact language={language} />
      </main>
      <Footer />
    </div>
  );
}

export default App;