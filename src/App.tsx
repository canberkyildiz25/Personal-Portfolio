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
            className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased selection:bg-indigo-100 dark:selection:bg-zinc-800 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <CursorGlow />
            <Navbar />
            <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
              <Hero />
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
