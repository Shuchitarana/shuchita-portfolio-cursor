
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import SelectedWork from './components/SelectedWork';
import ExperienceTimeline from './components/ExperienceTimeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Background from './components/Background';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollObserverRef = useRef<IntersectionObserver | null>(null);
  const revealObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll progress calculation
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    // Observer for Scroll Spy (Active Section)
    // Using a more centered rootMargin for precise active section tracking
    scrollObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    });

    // Observer for Reveal Animations
    revealObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' 
    });

    const sectionIds = ['home', 'about', 'expertise', 'work', 'experience', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        scrollObserverRef.current?.observe(el);
        if (el.classList.contains('section-reveal')) {
          revealObserverRef.current?.observe(el);
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add('visible');
          }
        }
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollObserverRef.current?.disconnect();
      revealObserverRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-neonPurple selection:text-white bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      <Background />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-neonCyan via-neonPurple to-neonPurple shadow-[0_0_15px_rgba(188,19,254,0.6)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar activeSection={activeSection} isDarkMode={true} toggleTheme={() => {}} />
      
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <section id="home" className="min-h-[75vh] flex items-center pt-24 lg:pt-0">
          <Hero />
        </section>

        <section id="about" className="py-14 lg:py-20 section-reveal">
          <About />
        </section>

        <section id="expertise" className="py-14 lg:py-20 section-reveal border-t border-zinc-900/50">
          <Expertise />
        </section>

        <section id="work" className="py-14 lg:py-20 section-reveal border-t border-zinc-900/50">
          <SelectedWork />
        </section>

        <section id="experience" className="py-14 lg:py-20 section-reveal border-t border-zinc-900/50">
          <ExperienceTimeline />
          <div className="mt-16">
            <Certifications />
          </div>
        </section>

        <section id="contact" className="py-14 lg:py-20 section-reveal border-t border-zinc-900/50">
          <Contact />
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900/50 bg-black/80 backdrop-blur-md relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-10">
            <div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-neonPurple text-white font-mono flex items-center justify-center text-sm font-bold shadow-[0_0_20px_rgba(188,19,254,0.6)] rounded-sm">SR</div>
                  <div>
                     <span className="text-base font-bold tracking-tight uppercase block text-white">SHUCHITA RANA</span>
                     <p className="text-[10px] text-zinc-500 tracking-[0.25em] uppercase font-mono mt-1">B2B GROWTH MARKETING</p>
                  </div>
               </div>
            </div>
            <div className="flex gap-12 items-center">
              <a href="https://github.com/Shuchitarana" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-neonPurple transition-colors font-mono">GITHUB</a>
              <a href="https://x.com/shuchita_rana" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-neonPurple transition-colors font-mono">X</a>
              <a href="https://www.linkedin.com/in/shuchita-rana-/" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-neonPurple transition-colors font-mono">LINKEDIN</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-zinc-900/30">
            <div className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
              © 2026 // BUILT FOR B2B GROWTH
            </div>
            <div className="text-[9px] text-zinc-700 font-mono tracking-[0.4em] uppercase">
               GROWTH BY DESIGN // 0101
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
