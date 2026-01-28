
import React from 'react';
import { Certification } from '../types';

const certifications: Certification[] = [
  { name: 'Digital Marketing', impact: 'Comprehensive mastery of acquisition and retention strategies.' },
  { name: 'AI Tools / Generative AI', impact: 'Leveraging AI workflows for content and process efficiency.' },
  { name: 'Google Analytics', impact: 'Data interpretation and attribution modeling for growth.' }
];

const Certifications: React.FC = () => {
  return (
    <div>
      <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold mb-12">Verified Credentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.name} className="p-8 glass rounded-2xl border-zinc-800/50 hover:border-neonPurple/40 transition-all duration-500 group">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mb-6 text-neonPurple group-hover:shadow-[0_0_20px_rgba(188,19,254,0.3)] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold mb-3 text-white group-hover:text-neonPurple transition-colors">{cert.name}</h4>
            <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">{cert.impact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
