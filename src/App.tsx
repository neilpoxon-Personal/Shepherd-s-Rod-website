/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Navigation from "./components/Navigation";
import OdooEcosystem from "./components/OdooEcosystem";
import OurProcess from "./components/OurProcess";
import WhyShepherdsRod from "./components/WhyShepherdsRod";
import ContactForm from "./components/ContactForm";
import LearningPartnership from "./components/LearningPartnership";
import mountainHeroBg from "./assets/images/mountain_hero_bg_1786043451589.jpg";

import {
  ArrowRight, ShieldCheck, Zap, Activity, Cpu,
  Settings, Users, Milestone,
  Layers, Hammer, Truck, Heart, Scale, Store, Briefcase,
  Award, GraduationCap, BadgeCheck
} from "lucide-react";

export default function App() {
  // Services details
  const services = [
    {
      title: "Odoo ERP Implementation",
      icon: <Cpu className="w-5 h-5 text-gold-muted" />,
      desc: "Full-scale core migration of production, financials, projects, and stock control into a unified, secure database.",
      bullets: ["Unified general ledger structures", "Multi-warehouse automatic replenishment", "Native sales-to-invoice handshakes"],
    },
    {
      title: "Odoo Sales Automation",
      icon: <Users className="w-5 h-5 text-gold-muted" />,
      desc: "Consolidate pipeline management, automate email drip follow-ups, and run automated lead-scoring scripts.",
      bullets: ["Salesforce licensing cost replacement", "Automated commission spreadsheets", "Complete mobile pipeline dashboards"],
    },
    {
      title: "Business Process Optimization",
      icon: <Activity className="w-5 h-5 text-gold-muted" />,
      desc: "Comprehensive corporate operational audits to streamline workflows and eliminate dual-system entries.",
      bullets: ["Thorough administrative latency audit", "Custom process bottleneck reports", "Optimized work center routing specs"],
    },
    {
      title: "AI & Workflow Automation",
      icon: <Zap className="w-5 h-5 text-gold-muted" />,
      desc: "Build secure server-side AI agents that handle lead scoring, write auto-replies, and categorize helpdesk requests.",
      bullets: ["Native Gemini AI API bridges", "OCR-driven automated billing matching", "Dynamic intelligent inventory forecasting"],
    },
    {
      title: "Digital Transformation Consulting",
      icon: <Milestone className="w-5 h-5 text-gold-muted" />,
      desc: "Strategic C-suite consultation drafting standard operational roadmaps, legacy cost replacements, and tech upgrades.",
      bullets: ["Detailed software cost mitigation charts", "Staged modular rollover planning", "Strategic SaaS consolidation reports"],
    },
    {
      title: "Staff Training & Managed Support",
      icon: <Settings className="w-5 h-5 text-gold-muted" />,
      desc: "Secure high internal staff adoption with role-based workshops, video catalogs, and guaranteed response SLAs.",
      bullets: ["Custom client onboarding video portals", "Direct user adoption audit metrics", "High-grade continuous uptime support"],
    },
  ];

  // Industry Verticals
  const industries = [
    { name: "Manufacturing", icon: <Hammer className="w-4 h-4 text-gold-muted" />, challenge: "Siloed shop floors and inventory lag.", solution: "Integrated Odoo MRP with real-time bill of materials (BOM)." },
    { name: "Distribution", icon: <Truck className="w-4 h-4 text-gold-muted" />, challenge: "Complex multi-warehouse shipping mismatches.", solution: "Automatic replenishment triggers & integrated scanner workflows." },
    { name: "Healthcare Supply", icon: <Heart className="w-4 h-4 text-gold-muted" />, challenge: "Strict compliance controls & tracking gaps.", solution: "Lot trace audits, automated expiration logs, and serial tracking." },
    { name: "Professional Services", icon: <Briefcase className="w-4 h-4 text-gold-muted" />, challenge: "Invoicing leakage on consult/engineering hours.", solution: "Unified Odoo Timesheets linking directly to project milestones." },
    { name: "Legal & Advisory", icon: <Scale className="w-4 h-4 text-gold-muted" />, challenge: "Scattered records and complex billing cycles.", solution: "Client portals with automated SLA logs and secure documents." },
    { name: "Retail & E-commerce", icon: <Store className="w-4 h-4 text-gold-muted" />, challenge: "Disjointed web channels and manual stock count.", solution: "Direct Odoo Shopify, Amazon & POS sync in real-time." },
  ];

  // Case Studies
  const caseStudies = [
    {
      client: "Hexa Logistics",
      stat: "+38%",
      metric: "Sales Velocity Growth",
      challenge: "Operating on isolated legacy databases that delayed customer dispatch.",
      solution: "Consolidated all pipelines into Odoo Sales, triggering direct billing.",
    },
    {
      client: "Apex Manufacturing",
      stat: "45%",
      metric: "Reduced Shop Latency",
      challenge: "Assembly lines operated with manually compiled inventory logs.",
      solution: "Implemented automated Odoo inventory scanner barcodes.",
    },
    {
      client: "Vance Healthcare",
      stat: "3x",
      metric: "Faster Audit Reporting",
      challenge: "Regulatory lot traces took days across three separate databases.",
      solution: "Unified core warehouse registers into a secure single-database node.",
    },
  ];

  // Insights / Articles
  const articles = [
    {
      title: "The CFO Guide to Legacy ERP Replacement Costs in 2026",
      category: "ERP Strategy",
      readTime: "8 min read",
      excerpt: "How forward-thinking finance directors consolidate SAP/Salesforce subscription overhead into a unified Odoo architecture.",
    },
    {
      title: "Leveraging GenAI for Automated Client Quote Dispatch",
      category: "AI Automation",
      readTime: "6 min read",
      excerpt: "Step-by-step methodology on connecting server-side Gemini AI models directly to sales customer pipelines.",
    },
    {
      title: "Eliminating Administrative Time Leakage in Logistics",
      category: "Workflow Optimization",
      readTime: "5 min read",
      excerpt: "How automatic barcode registers and replenishment cycles reduce labor waste by up to 12 hours weekly.",
    },
  ];

  return (
    <div className="bg-bg-dark min-h-screen text-[#F8F8F8] relative selection:bg-gold-muted/20 selection:text-white">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dot-grid-overlay z-0" />

      {/* Top sticky navigation */}
      <Navigation />

      {/* 1. Fullscreen Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden" id="hero">
        {/* Mountain Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={mountainHeroBg}
            alt="Majestic mountain landscape background"
            className="w-full h-full object-cover object-center opacity-35 brightness-90 contrast-110 scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Dark Gradient Overlays for flawless text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020815]/85 via-[#020815]/65 to-[#020815]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#020815]/40 to-[#020815]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full space-y-8">
          
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 border border-[#E3B341]/30 text-[#E3B341] text-[10px] tracking-[0.3em] uppercase font-mono font-semibold">
              Strategic Odoo Consultancy
            </span>
            <h1 className="font-sans font-light text-4xl sm:text-6xl lg:text-7xl text-gray-100 tracking-tight leading-[1.08]">
              Transform Your <span className="italic font-serif text-[#E3B341] font-light">Business</span> with <span className="gold-glow-text font-medium">Intelligent Odoo</span>.
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We help organizations streamline operations, consolidate legacy software license costs, and secure digital growth through custom Odoo ERP, sales systems, and strategic management consulting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-[#E3B341] hover:bg-[#FFD86E] text-black font-mono font-bold uppercase tracking-widest text-xs px-9 py-4 rounded-none transition-all cursor-pointer shadow-[0_0_20px_rgba(227,179,65,0.2)]"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto text-[#F8F8F8] border-b border-[#F8F8F8]/30 hover:border-[#E3B341] font-mono font-bold uppercase tracking-widest text-xs px-4 py-4 rounded-none transition-all cursor-pointer"
            >
              Explore Solutions
            </button>
          </div>

        </div>
      </section>

      {/* 2. Official Badges & Learning Partner Accreditation Ribbon */}
      <section className="border-y border-border-dark bg-[#020815] py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Main Partner Emblem */}
            <div 
              onClick={() => document.getElementById("learning-partnership")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-4 cursor-pointer group bg-[#041026] border border-gold-muted/30 hover:border-gold-bright px-5 py-3 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#020815] border border-gold-muted/40 flex items-center justify-center text-gold-bright shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5 text-gold-muted" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-gold-bright uppercase tracking-widest bg-gold-muted/10 px-1.5 py-0.2 border border-gold-muted/20">
                    OFFICIAL ACCREDITATION
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <h4 className="font-sans font-semibold text-xs text-white uppercase tracking-wider group-hover:text-gold-bright transition-colors">
                  Official Odoo Learning Partner
                </h4>
                <span className="text-[9px] font-mono text-gray-500 block">Accredited Corporate Curriculum & Superuser Certification</span>
              </div>
            </div>

            {/* Badges Carousel / Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              <div 
                onClick={() => document.getElementById("learning-partnership")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2.5 px-3 py-2 bg-bg-card border border-border-dark hover:border-gold-muted/30 transition-colors cursor-pointer text-left"
              >
                <Award className="w-4 h-4 text-gold-muted shrink-0" />
                <div>
                  <span className="font-sans font-medium text-xs text-gray-200 block leading-tight">Enterprise Architect</span>
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">Implementation Partner</span>
                </div>
              </div>

              <div 
                onClick={() => document.getElementById("learning-partnership")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2.5 px-3 py-2 bg-bg-card border border-border-dark hover:border-gold-muted/30 transition-colors cursor-pointer text-left"
              >
                <ShieldCheck className="w-4 h-4 text-gold-muted shrink-0" />
                <div>
                  <span className="font-sans font-medium text-xs text-gray-200 block leading-tight">Financial Systems</span>
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">Fiscal Architecture</span>
                </div>
              </div>

              <div 
                onClick={() => document.getElementById("learning-partnership")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2.5 px-3 py-2 bg-bg-card border border-border-dark hover:border-gold-muted/30 transition-colors cursor-pointer text-left col-span-2 sm:col-span-1"
              >
                <BadgeCheck className="w-4 h-4 text-gold-muted shrink-0" />
                <div>
                  <span className="font-sans font-medium text-xs text-gray-200 block leading-tight">94%+ Adoption Rate</span>
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block">Change Governance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="services">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-[10px] text-gold-muted uppercase tracking-[0.25em] font-semibold block">Consulting Specialties</span>
          <h2 className="font-sans font-light text-3xl lg:text-4xl text-gray-100 tracking-tight">
            Our Core <span className="italic font-serif text-[#E3B341]">Services</span> Portfolio
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Every business has a signature logic. We design, configure, and secure tailored architectures that reflect your precise operational blueprint.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div 
              key={idx} 
              className="bg-bg-card border border-border-dark p-8 rounded-none space-y-6 hover:border-gold-muted/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle visual top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-muted/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-10 h-10 rounded-none bg-[#141414] border border-[#222] flex items-center justify-center">
                {svc.icon}
              </div>

              <div className="space-y-2.5">
                <h3 className="font-sans font-semibold text-base text-gray-200 tracking-tight group-hover:text-gold-bright transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#161616]">
                {svc.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                    <span className="text-gold-muted">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Learning Partnership & Certified Badges Section */}
      <section className="py-24 border-y border-border-dark bg-[#020815] relative overflow-hidden" id="learning-partnership">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-muted/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <LearningPartnership />
        </div>
      </section>

      {/* 5. Why Shepherd's Rod Section (Methodology and comparative stats) */}
      <section className="py-24 border-b border-border-dark bg-[#030d22] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-gold-muted/5 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <WhyShepherdsRod />
        </div>
      </section>

      {/* 5. The Odoo Ecosystem Visualizer */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="ecosystem">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-[10px] text-gold-muted uppercase tracking-[0.25em] font-semibold block">Ecosystem Integrity</span>
          <h2 className="font-sans font-light text-3xl lg:text-4xl text-gray-100 tracking-tight">
            Consolidated <span className="italic font-serif text-[#E3B341]">Odoo</span> Modules
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Click on any orbit satellite below to explore standard business benefits, API capabilities, and direct software replacement savings.
          </p>
        </div>

        <OdooEcosystem />
      </section>

      {/* 6. Industries Focus Grid */}
      <section className="py-24 border-y border-border-dark bg-[#030d22] relative overflow-hidden" id="industries">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="font-mono text-[10px] text-gold-muted uppercase tracking-[0.25em] font-semibold block">Corporate Adaptability</span>
            <h2 className="font-sans font-light text-3xl lg:text-4xl text-gray-100 tracking-tight">
              Industry-Specific <span className="italic font-serif text-[#E3B341]">Engineering</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We specialize in deep business-domain customization, configured to eliminate specific sector compliance and efficiency bottlenecks.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <div 
                key={idx} 
                className="bg-bg-card border border-border-dark p-6 rounded-none hover:border-gold-muted/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-none bg-[#091b3a] border border-[#182f54] flex items-center justify-center text-gold-muted">
                    {ind.icon}
                  </div>
                  <h4 className="font-sans font-semibold text-xs text-gray-200 tracking-wider uppercase">{ind.name}</h4>
                </div>
                
                <div className="space-y-3 font-mono text-[11px] pt-3 border-t border-[#0d203d]">
                  <div>
                    <span className="text-red-400 font-semibold block">PRE-TRANSITION CHALLENGE:</span>
                    <span className="text-gray-400 block mt-0.5">{ind.challenge}</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold block">ODOO RESOLUTION:</span>
                    <span className="text-gray-300 block mt-0.5">{ind.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="process">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-[10px] text-gold-muted uppercase tracking-[0.25em] font-semibold block">Execution Rigor</span>
          <h2 className="font-sans font-light text-3xl lg:text-4xl text-gray-100 tracking-tight">
            Our Structured <span className="italic font-serif text-[#E3B341]">Deployment</span> Process
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A disciplined, step-by-step corporate transition blueprint designed to preserve data fidelity and maintain business continuity.
          </p>
        </div>

        <OurProcess />
      </section>

      {/* 8. Success Stories / Case Studies */}
      <section className="py-24 border-y border-border-dark bg-[#030d22] relative overflow-hidden" id="case-studies">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="font-mono text-[10px] text-gold-muted uppercase tracking-[0.25em] font-semibold block">Measurable ROI</span>
            <h2 className="font-sans font-light text-3xl lg:text-4xl text-gray-100 tracking-tight">
              Successful Corporate <span className="italic font-serif text-[#E3B341]">Transformations</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Tangible business growth, optimized administrative hours, and consolidated licensing fees achieved by our clients.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx} 
                className="bg-bg-card border border-border-dark p-8 rounded-none relative overflow-hidden space-y-6 hover:border-gold-muted/30 transition-all duration-300"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-muted/5 blur-2xl rounded-full" />
                
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">{study.client}</span>
                  <span className="font-sans font-semibold text-3xl text-gold-bright block">{study.stat}</span>
                  <span className="font-mono text-[11px] text-gray-300 block font-medium uppercase tracking-wider">{study.metric}</span>
                </div>

                <div className="space-y-4 font-mono text-[11px] pt-4 border-t border-[#122240]">
                  <div>
                    <span className="text-gray-500 uppercase block">The Challenge</span>
                    <p className="text-gray-400 font-sans text-xs mt-1 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-gold-muted uppercase block">The Solution</span>
                    <p className="text-gray-300 font-sans text-xs mt-1 leading-relaxed">{study.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   
      {/* 9. Insights & Resources */}
      <section className="py-24 border-t border-border-dark bg-[#030d22] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-gold-muted uppercase tracking-[0.25em] font-semibold block">C-Suite Intelligence</span>
              <h2 className="font-sans font-light text-3xl text-gray-100 tracking-tight">
                Consulting <span className="italic font-serif text-[#E3B341]">Insights</span> & Guides
              </h2>
            </div>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs font-mono text-gold-muted hover:text-gold-bright uppercase tracking-widest cursor-pointer flex items-center gap-1 transition-colors"
            >
              Access full resource library <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Articles list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((art, idx) => (
              <div 
                key={idx} 
                className="bg-bg-card border border-border-dark p-6 rounded-none hover:border-gold-muted/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span className="uppercase tracking-widest text-gold-muted font-medium">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="font-sans font-medium text-base text-gray-200 tracking-tight leading-snug hover:text-gold-bright transition-colors cursor-pointer">
                    {art.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{art.excerpt}</p>
                </div>

                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-6 text-[11px] font-mono text-gray-400 hover:text-white uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Read article <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Big Call to Action & Contact Form */}
      <section className="py-24 border-t border-border-dark bg-[#020815] relative overflow-hidden" id="contact">
        {/* Abstract background rod glowing light effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-gold-muted/10 blur-3xl rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-sans font-light text-3xl sm:text-4xl text-gray-100 tracking-tight">
              Ready to Transform Your <span className="italic font-serif text-[#E3B341]">Corporate</span> Systems?
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              Consolidate expensive software subscriptions, synchronize warehouse/sales channels, and secure data integrity. Request a 100% free consultative operational audit today.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01050d] border-t border-border-dark py-12 text-gray-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-8 bg-[#E3B341] shadow-[0_0_15px_rgba(227,179,65,0.6)]"></div>
              <div>
                <span className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-gray-300 block">Shepherd's Rod</span>
                <span className="block text-[7px] font-mono text-gray-500 uppercase tracking-wider leading-none mt-1">
                  LEADING • GUIDING • EMPOWERING • STRATEGY • SOLUTION • SUCCESS
                </span>
              </div>
            </div>
            <p className="text-[10px] text-gray-600 leading-relaxed uppercase">
              Elite Odoo ERP and strategic digital transformation advisory.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">Core Services</span>
            <ul className="space-y-2 text-[10px] uppercase tracking-wider">
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors">Odoo ERP Implementation</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors">Odoo Sales Integration</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors">Process Optimization</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors">Workflow Automation</button></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">Company & Academy</span>
            <ul className="space-y-2 text-[10px] uppercase tracking-wider">
              <li><button onClick={() => document.getElementById("learning-partnership")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors text-gold-bright">Learning Partnership</button></li>
              <li><button onClick={() => document.getElementById("learning-partnership")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors">Certified Badges</button></li>
              <li><button onClick={() => document.getElementById("ecosystem")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors">Odoo Ecosystem</button></li>
              <li><button onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors">Our Process</button></li>
              <li><button onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gold-muted cursor-pointer transition-colors">Case Studies</button></li>
             </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">Contact Details</span>
            <p className="text-[10px] text-gray-600 leading-relaxed uppercase">
              Shepherd's Rod Consulting Group LLC<br />
              Executive Suite 500 • New York, NY<br />
              Email: advisor@shepherdsrod.com
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-[#111] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase">
          <p>© 2026 Shepherd's Rod. All Rights Reserved. Delivered with Elite Craftsmanship.</p>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-gold-muted transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-gold-muted transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-gold-muted transition-colors">LinkedIn Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
