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
          {/* ── Outer background — deep dark with ambient glows ── */}
          <div
            className="min-h-screen bg-[#07000f] dark:bg-[#07000f] antialiased overflow-x-hidden relative"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Ambient background glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
              <div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)' }}
              />
              <div
                className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-15"
                style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.35) 0%, transparent 70%)' }}
              />
              <div
                className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }}
              />
            </div>

            {/* ── Main card container (Mr.Bande + CodeCrafted style) ── */}
            <div className="relative z-10 min-h-screen flex flex-col items-center px-3 sm:px-5 py-4 sm:py-6">
              <div
                className="w-full max-w-[1380px] bg-[#0a0a0f] dark:bg-[#0a0a0f] rounded-[24px] sm:rounded-[32px] overflow-hidden flex-1"
                style={{
                  boxShadow: '0 0 0 1px rgba(124,58,237,0.15), 0 0 80px rgba(124,58,237,0.1), 0 32px 64px rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
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
