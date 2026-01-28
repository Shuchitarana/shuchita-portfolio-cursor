
import React, { useState } from 'react';
import { Project, CaseStudy } from '../types';

const highlights: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'RSM Arabia',
    context: 'Architected LinkedIn Ads audience strategy for GRI/CEH certification products.',
    role: ['Strategy', 'Budgeting'],
    deliverables: ['Budget Frameworks ($500-1k)', 'Audience Mapping'],
    outcome: 'Established scalable B2B acquisition tiers adopted for Kuwait and Saudi markets.'
  },
  {
    id: 'cs2',
    title: 'CAN',
    context: 'Executed a precision 1:1 lead generation campaign for high-value B2B outreach.',
    role: ['Outreach', 'Reporting'],
    deliverables: ['Lead Setup', 'Campaign Ops'],
    outcome: 'Optimized high-intent engagement funnels with comprehensive attribution.'
  },
  {
    id: 'cs3',
    title: 'GMBF',
    context: 'Full-cycle performance support: EDMs, Meta Ads, and multi-channel reporting.',
    role: ['Execution', 'Creative'],
    deliverables: ['EDM visual systems', 'Meta Ads Setup'],
    outcome: 'Consolidated fractured channel data into a unified growth dashboard.'
  }
];

const archive: Project[] = [
  { 
    id: '1', 
    title: 'Byyu', 
    description: 'Social content & EDMs with WP publishing.', 
    tags: ['Content', 'WP'],
    longDescription: 'Managed high-conversion social narratives and email marketing cycles for Byyu. Engineered a unified content system linking social media touchpoints with weekly EDM newsletters to maximize brand recall.',
    scope: ['Social Content Systems', 'Creative/Video Coordination', 'EDM & Blog Copywriting', 'WordPress Publishing Flow', 'Lead Gen Pitches']
  },
  { 
    id: '2', 
    title: 'Loyyal', 
    description: 'Product docs & GTM campaign management.', 
    tags: ['GTM', 'Ops'],
    longDescription: 'Provided strategic operational support for Loyyal’s product launches. Translated complex blockchain-based loyalty features into digestible marketing assets and go-to-market documentation.',
    scope: ['Technical Product Documentation', 'GTM Strategy Sheets', 'Campaign Inbox Management', 'Lead-Gen Content Strategy']
  },
  { 
    id: '3', 
    title: 'Avalift', 
    description: 'Content calendar and competitor audits.', 
    tags: ['Strategy'],
    longDescription: 'Developed a robust market positioning framework for Zeizzu’s Avalift platform. Conducted deep-dive audits of the competitive landscape to define a unique value proposition for high-growth periods.',
    scope: ['Multi-Channel Content Calendar', 'Paid Ad Strategy Design', 'Competitor Landscape Audits', 'Strategic Positioning Reports']
  },
  { 
    id: '4', 
    title: 'ETP Group', 
    description: 'EDM visuals and reporting workflows.', 
    tags: ['Visuals', 'ROI'],
    longDescription: 'Modernized the visual communication strategy for ETP Group’s email marketing. Established automated reporting workflows to track campaign performance across multiple international markets.',
    scope: ['EDM Visual Identity Design', 'Campaign Execution Oversight', 'Reporting Workflow Automation', 'Asset Optimization']
  },
  { 
    id: '5', 
    title: 'Events Hub', 
    description: 'Outreach for Aikido & Eguardian.', 
    tags: ['LeadGen'],
    longDescription: 'Designed and managed high-touch follow-up sequences for attendees of premium cybersecurity events. Focused on nurturing leads from initial event engagement to SQL status.',
    scope: ['Direct Outreach Strategy', 'Post-Event Follow-up Automation', 'Engagement Management (Aikido/EvoluteIQ)', 'CRM Integration Support']
  },
  { 
    id: '6', 
    title: 'RSM Kuwait', 
    description: 'Social creative systems & scheduling.', 
    tags: ['Design', 'Scheduling'],
    longDescription: 'Maintained visual brand integrity across all social channels for RSM’s Kuwait division. Developed a streamlined scheduling system that ensured high-frequency, premium content delivery.',
    scope: ['Social Media Design System', 'Content Scheduling Architecture', 'Cross-Platform Deployment', 'Visual Brand Integrity Audits']
  }
];

const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="space-y-24">
      {/* CASE STUDIES */}
      <div>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Strategic Highlights</h2>
          <div className="h-px grow bg-zinc-900"></div>
        </div>
        
        <div className="space-y-20">
          {highlights.map((cs, i) => (
            <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start group">
              <div className="lg:col-span-6 relative">
                <div className="aspect-[16/9] bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-900 group-hover:border-neonPurple transition-all duration-700 flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                   <div className="text-zinc-800 font-mono text-8xl font-bold select-none opacity-10 group-hover:opacity-30 group-hover:text-neonPurple transition-all">0{i+1}</div>
                   <div className="absolute inset-0 bg-gradient-to-tr from-neonPurple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="lg:col-span-6 lg:pl-10">
                 <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-neonPurple transition-colors text-white">/ {cs.title}</h3>
                 <p className="text-base text-zinc-300 font-light mb-6 leading-relaxed">{cs.context}</p>
                 
                 <div className="space-y-4">
                    <div>
                       <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-2">Core Deliverables</span>
                       <div className="flex flex-wrap gap-2">
                         {cs.deliverables.map(d => (
                           <span key={d} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 rounded-full font-mono uppercase tracking-widest group-hover:border-neonPurple/40 transition-all">{d}</span>
                         ))}
                       </div>
                    </div>
                    <div className="p-5 border-l-2 border-neonPurple bg-neonPurple/5 shadow-[0_0_30px_rgba(188,19,254,0.1)] rounded-r-xl">
                       <span className="text-[10px] uppercase tracking-widest text-neonPurple font-bold block mb-1 neon-text-purple">Executive Result</span>
                       <p className="text-xs text-zinc-100 italic leading-relaxed">{cs.outcome}</p>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARCHIVE PROJECTS */}
      <div className="pt-20 border-t border-zinc-900">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Project Archive</h3>
          <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Interactive Analysis</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {archive.map(proj => (
             <button 
               key={proj.id} 
               onClick={() => setSelectedProject(proj)}
               className="p-8 border border-zinc-900 bg-zinc-950/60 rounded-2xl hover:bg-zinc-900 hover:scale-[1.02] hover:border-neonPurple transition-all group relative overflow-hidden h-full flex flex-col text-left shadow-[0_0_20px_rgba(0,0,0,0.3)] active:scale-95"
             >
                <div className="flex justify-between items-center mb-8">
                   <h4 className="text-sm font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors uppercase tracking-widest">{proj.title}</h4>
                   <div className="w-5 h-5 flex items-center justify-center border border-zinc-800 group-hover:border-neonPurple group-hover:text-neonPurple transition-colors text-zinc-700 rounded-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                   </div>
                </div>
                <p className="text-xs text-zinc-400 mb-8 leading-relaxed grow group-hover:text-zinc-200 transition-colors">{proj.description}</p>
                <div className="flex gap-3">
                   {proj.tags.map(t => (
                     <span key={t} className="text-[10px] text-neonPurple group-hover:neon-text-purple transition-all font-mono tracking-tighter uppercase">{t}</span>
                   ))}
                </div>
             </button>
           ))}
        </div>
      </div>

      {/* DETAILED PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500 ease-out" 
            onClick={closeModal}
          ></div>
          <div className="relative glass border-neonPurple/40 rounded-[32px] p-8 lg:p-14 max-w-3xl w-full shadow-[0_0_80px_rgba(188,19,254,0.15)] overflow-hidden transform transition-all duration-500 ease-out opacity-100 scale-100" 
               style={{ animation: 'modalEntry 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-neonPurple/5 blur-[100px] -z-10 pointer-events-none"></div>
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 p-3 rounded-full border border-zinc-800 hover:bg-neonPurple hover:text-white transition-all hover:shadow-[0_0_20px_rgba(188,19,254,0.8)] z-50 text-zinc-400"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-neonPurple/20 border border-neonPurple/40 text-[10px] font-mono text-neonPurple neon-text-purple rounded uppercase tracking-widest">
                System Log // PRJ_{selectedProject.id}
              </span>
              <div className="h-px grow bg-zinc-800/50"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <h3 className="text-4xl font-bold mb-6 tracking-tighter text-white leading-[1]">
                  {selectedProject.title} <br />
                  <span className="serif italic font-normal text-zinc-400 text-2xl">Context & Strategy</span>
                </h3>
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block">Analysis Summary</span>
                  <p className="text-zinc-200 font-light leading-relaxed text-sm">
                    {selectedProject.longDescription}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 h-full">
                  <span className="text-[10px] uppercase tracking-widest text-neonPurple font-bold block mb-6 neon-text-purple">Project Scope</span>
                  <ul className="space-y-4">
                    {selectedProject.scope?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[11px] text-zinc-100 group">
                        <span className="mt-1.5 w-1 h-1 shrink-0 bg-neonPurple rounded-full shadow-[0_0_10px_rgba(188,19,254,1)]"></span>
                        <span className="leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 uppercase tracking-widest">{tag}</span>
                ))}
              </div>
              <button 
                onClick={closeModal}
                className="w-full sm:w-auto px-10 py-3.5 bg-neonPurple text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:shadow-[0_0_30px_rgba(188,19,254,0.8)] rounded-full transition-all active:scale-95"
              >
                Close Analysis
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedWork;
