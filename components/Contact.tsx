
import React from 'react';

const Contact: React.FC = () => {
  const socialLinks = [
    { 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/shuchita-rana-/',
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    },
    { 
      label: 'X (Twitter)', 
      url: 'https://x.com/shuchita_rana',
      path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"
    },
    { 
      label: 'GitHub', 
      url: 'https://github.com/Shuchitarana',
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    }
  ];

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Let's Connect</h2>
            <div className="h-px grow bg-zinc-900"></div>
          </div>
          
          <h3 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9] text-white">
             READY TO SCALE <br />
             <span className="serif italic font-normal text-zinc-500 block mt-2">YOUR ENGINE?</span>
          </h3>
          
          <p className="text-xl text-zinc-300 font-light mb-16 max-w-xl leading-relaxed">
            Open to select full-time growth roles and strategic B2B collaborations. Let’s build a focused system for <span className="text-neonPurple neon-text-purple">acquisition, content and retention</span>.
          </p>
          
          <div className="flex flex-col gap-12 items-start">
            <a 
              href="mailto:shuchitarana1@gmail.com"
              className="px-14 py-6 bg-gradient-to-r from-neonPurple to-[#d433ff] text-white font-bold text-xs tracking-widest hover:shadow-[0_0_40px_rgba(188,19,254,0.8)] transition-all duration-500 uppercase rounded-full"
            >
              Let’s Discuss Growth
            </a>
            
            <div className="flex items-center gap-8 pl-4">
               {socialLinks.map((social) => (
                 <a 
                   key={social.label} 
                   href={social.url} 
                   target="_blank"
                   rel="noreferrer"
                   className="group relative flex items-center justify-center"
                   aria-label={social.label}
                 >
                   <div className="absolute inset-0 bg-neonPurple/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <svg 
                     className="w-5 h-5 fill-zinc-500 group-hover:fill-neonPurple transition-all duration-300 relative z-10" 
                     viewBox="0 0 24 24"
                   >
                     <path d={social.path} />
                   </svg>
                   <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[8px] uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-zinc-800">
                     {social.label}
                   </span>
                 </a>
               ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative">
           <div className="bg-zinc-950 border border-zinc-900 p-12 lg:p-16 rounded-[40px] shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden group">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neonPurple/10 blur-[60px] rounded-full group-hover:bg-neonPurple/30 transition-all duration-700"></div>
              
              <div className="relative z-10 space-y-12">
                 <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-mono block mb-6">PROFILE_SUMMARY</span>
                    <p className="text-sm text-zinc-300 leading-relaxed font-light">
                       B2B Growth Marketer focused on building content systems, demand generation flows, and performance-led execution across multi-client portfolios.
                    </p>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-zinc-900 pb-6">
                       <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">GEOGRAPHY</span>
                       <span className="text-[10px] font-mono text-zinc-200 uppercase">REMOTE</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-900 pb-6">
                       <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">STATUS</span>
                       <span className="text-[10px] text-neonPurple font-bold flex items-center gap-3 tracking-widest font-mono">
                          <span className="w-2.5 h-2.5 bg-neonPurple rounded-full animate-pulse shadow-[0_0_15px_rgba(188,19,254,1)]"></span>
                          ACTIVE
                       </span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
