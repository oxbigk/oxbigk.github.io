import { LucideIcon } from "lucide-react";

export interface Job {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  image: string;
  link?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
  skills: string[];
  experience: Job[];
  projects: Project[];
}

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export interface HistoryEntry {
  type: "system" | "user" | "bot";
  content: string;
}
