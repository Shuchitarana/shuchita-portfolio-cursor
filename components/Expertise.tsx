
import React from 'react';

const Expertise: React.FC = () => {
  const cards = [
    {
      idx: '01',
      title: 'Growth Pipeline',
      accent: 'neonPurple',
      items: [
        'LinkedIn Ads Targeting (B2B)',
        'Audience & ICP Research',
        'Budget Structuring & Testing',
        '1:1 Lead Generation Pitches'
      ],
      tools: ['LINKEDIN ADS', 'HUBSPOT', 'META'],
      color: '#bc13fe'
    },
    {
      idx: '02',
      title: 'Content Systems',
      accent: 'neonPurple',
      items: [
        'Content Calendars & Planning',
        'EDM Campaign Systems',
        'Blog Copy + WordPress Publishing',
        'Brand-Led Visual Assets'
      ],
      tools: ['CANVA', 'MAILCHIMP', 'WORDPRESS'],
      color: '#bc13fe'
    },
    {
      idx: '03',
      title: 'Strategy & Insights',
      accent: 'neonPurple',
      items: [
        'Competitor & Market Audits',
        'GTM Messaging Frameworks',
        'Reporting & Growth Insights (GA4)',
        'Marketing Automation Support'
      ],
      tools: ['GA4', 'EXCEL', 'AI TOOLS'],
      color: '#bc13fe'
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Specializations</h2>
        <div className="h-px grow bg-zinc-900"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div 
            key={card.idx} 
            className="group relative bg-zinc-950 border border-zinc-900 rounded-2xl p-10 hover:border-neonPurple/40 transition-all duration-700 overflow-hidden"
          >
            {/* Hover Glow Line Effect */}
            <div 
              className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }}
            ></div>
            
            <div className="flex justify-between items-start mb-12">
               <span className="text-[10px] font-mono text-zinc-600">MOD_{card.idx}</span>
               <div 
                 className={`w-2.5 h-2.5 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(188,19,254,0.3)] group-hover:shadow-[0_0_20px_rgba(188,19,254,0.8)]`}
                 style={{ 
                    backgroundColor: card.color
                 }}
               ></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-8 tracking-tight text-zinc-100 group-hover:text-white transition-colors">{card.title}</h3>
            
            <ul className="space-y-4 mb-12">
              {card.items.map(item => (
                <li key={item} className="text-xs text-zinc-400 flex items-center gap-3 group-hover:text-zinc-200 transition-colors">
                  <span className="font-mono text-neonPurple">/</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {card.tools.map(tool => (
                <span 
                  key={tool} 
                  className="text-[9px] px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono rounded uppercase tracking-widest group-hover:border-neonPurple/20 group-hover:text-neonPurple transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
