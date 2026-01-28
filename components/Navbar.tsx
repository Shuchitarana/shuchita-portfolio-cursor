
import React, { useEffect, useState, useRef } from 'react';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'Manifesto' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Connect' }
  ];

  // Update sliding indicator position when activeSection changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeBtn = navRef.current?.querySelector(`[data-id="${activeSection}"]`) as HTMLElement;
      if (activeBtn) {
        setIndicatorStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          opacity: 1
        });
      }
    };

    // Small delay to ensure DOM is ready or fonts loaded if needed
    const timeoutId = setTimeout(updateIndicator, 50);
    window.addEventListener('resize', updateIndicator);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Slightly larger offset for better visual breathing room
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="pointer-events-auto cursor-pointer flex items-center gap-2 group" onClick={() => scrollTo('home')}>
          <div className="w-6 h-6 border border-neonPurple flex items-center justify-center text-[10px] text-neonPurple font-mono group-hover:bg-neonPurple group-hover:text-white transition-all group-hover:shadow-[0_0_15px_rgba(188,19,254,1)]">S</div>
          <span className="text-lg font-bold tracking-tighter uppercase text-white hidden sm:block">Shuchita.</span>
        </div>
        
        <div className="pointer-events-auto flex items-center glass rounded-full p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/10 relative overflow-hidden">
          {/* Shared Sliding Indicator */}
          <div 
            className="absolute h-[calc(100%-12px)] bg-neonPurple rounded-full shadow-[0_0_20px_rgba(188,19,254,0.6)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"
            style={{ 
              left: `${indicatorStyle.left}px`, 
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
              top: '6px'
            }}
          />
          
          <div className="flex items-center relative z-10" ref={navRef}>
            {navItems.map((item) => (
              <button
                key={item.id}
                data-id={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-colors duration-500 relative whitespace-nowrap ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 pointer-events-auto">
           <a href="https://www.linkedin.com/in/shuchita-rana-/" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-zinc-500 hover:text-neonPurple transition-all hover:neon-text-purple">LINKEDIN // HUB</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
