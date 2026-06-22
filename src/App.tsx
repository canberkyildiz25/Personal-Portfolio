import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ScrollToTop from './components/ScrollToTop';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider>
          <div
            className="bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-50 antialiased selection:bg-rose-100 dark:selection:bg-rose-900/40 transition-colors overflow-x-hidden"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <CursorGlow />
            <Navbar />
            {/* Hero is full-width — no max-w container */}
            <Hero />
            <main className="mx-auto max-w-5xl px-6 pb-24">
              <About />
              <Stack />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
            <MusicPlayer />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
