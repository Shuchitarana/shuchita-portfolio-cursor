
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full relative py-20 lg:py-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <span className="px-2 py-0.5 border border-neonPurple text-[10px] uppercase tracking-widest text-neonPurple font-mono shadow-[0_0_10px_rgba(188,19,254,0.2)]">Status: Active Signal</span>
            <span className="w-8 h-[1px] bg-zinc-700"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">B2B Growth Strategist</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8 animate-fade-up text-white">
            SHUCHITA <br />
            <span className="serif italic font-normal text-zinc-500">RANA.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-zinc-300 max-w-xl leading-relaxed mb-12 animate-fade-up [animation-delay:200ms]">
            Building data-led multi-channel growth systems for <span className="text-neonPurple font-medium neon-text-purple">B2B brands</span>.
          </p>

          <div className="flex flex-wrap gap-6 items-center animate-fade-up [animation-delay:400ms]">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-gradient-to-r from-neonPurple to-[#d433ff] text-white font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_35px_rgba(188,19,254,0.8)] transition-all duration-500 rounded-full active:scale-95"
            >
              View Cases
            </button>
            <div className="flex gap-4">
               {['01. Performance', '02. Content', '03. GTM'].map(tag => (
                 <span key={tag} className="text-[10px] font-mono text-zinc-500 tracking-tighter uppercase border-b border-zinc-800 pb-1">{tag}</span>
               ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="w-full aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-10 border border-zinc-900 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-20 border border-neonPurple/20 rounded-full shadow-[0_0_30px_rgba(188,19,254,0.1)]"></div>
            
            <div className="relative z-10 text-center">
               <div className="text-[10px] font-mono text-neonPurple mb-2 tracking-[0.5em] animate-pulse uppercase neon-text-purple">Growth Online</div>
               <div className="flex items-end justify-center gap-1 h-32">
                 {[40, 70, 45, 90, 65, 85, 30].map((h, i) => (
                   <div 
                    key={i} 
                    className="w-4 bg-gradient-to-t from-neonPurple/10 to-neonPurple rounded-t-sm animate-bounce shadow-[0_0_15px_rgba(188,19,254,0.5)]" 
                    style={{ height: `${h}%`, animationDelay: `${i * 100}ms`, animationDuration: '1.5s' }}
                   ></div>
                 ))}
               </div>
               <div className="mt-8 text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Optimizing pipeline signals...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
