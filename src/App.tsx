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
          {/* ── Outer background — cold black with a single cyan glow ── */}
          <div
            className="min-h-screen antialiased overflow-x-hidden relative"
            style={{ background: 'var(--bg)', fontFamily: 'var(--body)' }}
          >
            {/* Ambient background — one restrained cyan bloom + faint grid */}
            <div className="fixed inset-0 pointer-events-none z-0 blueprint" style={{ opacity: 0.35 }} />
            <div className="fixed inset-0 pointer-events-none z-0">
              <div
                className="absolute -top-20 left-1/3 w-[620px] h-[620px] rounded-full opacity-[0.12]"
                style={{ background: 'radial-gradient(circle, rgba(53,224,240,0.55) 0%, transparent 70%)' }}
              />
              <div
                className="absolute bottom-1/4 right-0 w-[440px] h-[440px] rounded-full opacity-[0.07]"
                style={{ background: 'radial-gradient(circle, rgba(53,224,240,0.4) 0%, transparent 70%)' }}
              />
            </div>

            {/* ── Main card container ── */}
            <div className="relative z-10 min-h-screen flex flex-col items-center px-3 sm:px-5 py-4 sm:py-6">
              <div
                className="w-full max-w-[1380px] rounded-[20px] sm:rounded-[26px] overflow-hidden flex-1"
                style={{
                  background: 'var(--bg2)',
                  boxShadow: '0 0 0 1px rgba(53,224,240,0.1), 0 0 90px rgba(53,224,240,0.06), 0 32px 64px rgba(0,0,0,0.65)',
                  border: '1px solid var(--line)',
                }}
              >
                <CursorGlow />
                <Navbar />
                <Hero />
                <main className="mx-auto max-w-5xl px-6 pb-24">
                  <About />
                  <Stack />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
              </div>
            </div>

            <ScrollToTop />
            <MusicPlayer />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
