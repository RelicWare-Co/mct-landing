import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  description: string;
}

export interface AboutFeature {
  id: string;
  title: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  type: 'location' | 'email' | 'phone';
  label: string;
  value: string;
}

export interface FooterLink {
  label: string;
  sectionId?: string;
  href?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
