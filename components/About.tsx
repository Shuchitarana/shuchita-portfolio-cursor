
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="inline-block px-4 py-1 border border-neonPurple/40 bg-neonPurple/10 text-neonPurple text-[10px] font-mono tracking-widest uppercase mb-8 w-fit rounded-full shadow-[0_0_10px_rgba(188,19,254,0.2)]">
          The Manifesto
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
          Strategy built for <span className="serif italic text-zinc-500">focus</span> not noise.
        </h2>
        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
          I started in aviation — where communication must be precise and calm under pressure. Today, I bring that same discipline to B2B growth. I build structured content and lead generation systems that move from strategy to execution consistently, and with intent.
        </p>
        
        <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-900">
           <div>
              <span className="text-[10px] font-mono text-neonPurple uppercase block mb-3 font-bold">Academic</span>
              <p className="text-sm text-zinc-300 font-medium">B.Com Graduate</p>
              <p className="text-xs text-zinc-600">PG in Marketing Management (MIT) — Pursuing</p>
           </div>
           <div>
              <span className="text-[10px] font-mono text-neonPurple uppercase block mb-3 font-bold">Operating Hub</span>
              <p className="text-sm text-zinc-300 font-medium">Remote</p>
              <p className="text-xs text-zinc-600">Multi-client execution</p>
           </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="glass p-10 lg:p-16 rounded-3xl relative overflow-hidden group border-neonPurple/10">
          <div className="absolute top-0 right-0 p-8">
            <svg className="w-12 h-12 text-neonPurple opacity-10 group-hover:opacity-20 transition-all" fill="currentColor" viewBox="0 0 24 24">
               <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.9124 14 15.017 13.1046 15.017 12V9C15.017 7.89543 15.9124 7 17.017 7H20.017V10H18.017V12H20.017C21.1216 12 22.017 12.8954 22.017 14V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017V14H6.017C4.91243 14 4.017 13.1046 4.017 12V9C4.017 7.89543 4.91243 7 6.017 7H9.017V10H7.017V12H9.017C10.1216 12 11.017 12.8954 11.017 14V21H3.017Z" />
            </svg>
          </div>
          <h3 className="serif text-3xl md:text-5xl text-zinc-100 leading-tight mb-12">
            "We build systems that <span className="text-neonPurple neon-text-purple">scale</span>, not campaigns that fade."
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { label: 'CONTENT SYSTEMS', detail: 'Social, EDM, Blogs' },
              { label: 'DEMAND GEN', detail: 'Lead Gen + 1:1 Outreach' },
              { label: 'PAID SUPPORT', detail: 'LinkedIn & Meta Campaign Structuring' },
              { label: 'INSIGHTS & OPS', detail: 'Reporting, Research, Automation' }
            ].map((item, i) => (
              <li key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-zinc-200 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neonPurple shadow-[0_0_8px_rgba(188,19,254,0.8)]"></span>
                  {item.label}
                </span>
                <span className="text-xs text-zinc-500 font-mono pl-3.5">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
