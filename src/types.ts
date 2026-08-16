/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OdooService {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  features: string[];
}

export interface OdooModule {
  id: string;
  name: string;
  description: string;
  benefits: string;
  businessValue: string;
  category: "operations" | "financials" | "sales" | "hr";
  color: string;
}

export interface IndustryFocus {
  id: string;
  name: string;
  description: string;
  challenge: string;
  solution: string;
  icon: string;
}

export interface ProcessStage {
  id: string;
  phase: string;
  title: string;
  description: string;
  details: string[];
  metric: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  roi: string;
  metricValue: string;
  metricLabel: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatarText: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export interface LeadSubmission {
  name: string;
  email: string;
  company: string;
  phone?: string;
  services: string[];
  message: string;
}

export interface PartnershipBadge {
  id: string;
  title: string;
  category: string;
  issuer: string;
  level: "Official Partner" | "Expert Tier" | "Mastery" | "Specialist";
  badgeCode: string;
  description: string;
  verified: boolean;
  skills: string[];
  iconType: string;
}

export interface LearningTrack {
  id: string;
  title: string;
  targetRole: string;
  duration: string;
  format: string;
  description: string;
  curriculum: string[];
  badgeId: string;
}
