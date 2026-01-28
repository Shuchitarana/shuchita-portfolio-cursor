
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  longDescription?: string;
  scope?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  role: string[];
  deliverables: string[];
  outcome: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  type?: string;
}

export interface Certification {
  name: string;
  impact: string;
  icon?: string;
}