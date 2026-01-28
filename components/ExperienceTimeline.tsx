
import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    company: 'Nexuses (B2B Growth Agency)',
    role: 'Growth Marketer',
    period: 'Current',
    type: 'Full-time',
    bullets: [
      'Orchestrating multi-channel content systems for diverse enterprise portfolios.',
      'Developing personalized 1:1 outreach strategies for lead generation.',
      'Audience structuring and budget tiering for LinkedIn & Meta Ads.',
      'WordPress publishing and competitor analytics audits.'
    ]
  },
  {
    company: 'Dash & Hash',
    role: 'Social Media Specialist',
    period: 'Previous',
    type: 'Internship',
    bullets: ['Strategized social creatives and platform growth for high-impact brand visibility.']
  },
  {
    company: 'IndiGo Airlines',
    role: 'Cabin Crew',
    period: '2+ Years',
    type: 'Full-time',
    bullets: [
      'Maintained peak operational safety and premium service in dynamic environments.',
      'Refined professional communication and crisis management skills under pressure.'
    ]
  }
];

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Professional History</h2>
        <div className="h-px grow bg-zinc-900"></div>
      </div>
      
      <div className="space-y-20">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <div className="md:col-span-4">
                <span className="text-[10px] font-mono text-neonPurple mb-2 block tracking-widest font-bold">/ {exp.period}</span>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1 group-hover:text-neonPurple transition-colors duration-500 uppercase tracking-widest">{exp.company}</h3>
                <div className="flex items-center gap-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{exp.role}</p>
                  {exp.type && (
                    <>
                      <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tighter">{exp.type}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="md:col-span-8">
                 <ul className="space-y-4">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex items-start gap-4 leading-relaxed group-hover:text-zinc-200 transition-colors">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-neonPurple transition-colors shadow-[0_0_5px_rgba(188,19,254,0)] group-hover:shadow-[0_0_10px_rgba(188,19,254,0.8)]"></span>
                        {b}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            {idx !== experiences.length - 1 && (
              <div className="absolute -bottom-10 left-0 w-full h-px bg-zinc-900/50"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;