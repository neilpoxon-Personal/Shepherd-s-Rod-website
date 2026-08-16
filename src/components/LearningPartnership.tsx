import { useState } from "react";
import { 
  Award, ShieldCheck, CheckCircle2, GraduationCap, Users, BookOpen, 
  Sparkles, ArrowRight, Check, ExternalLink, Cpu, BarChart3, 
  Layers, ChevronRight, Lock, Laptop, FileText, BadgeCheck
} from "lucide-react";
import { PartnershipBadge, LearningTrack } from "../types";

export default function LearningPartnership() {
  const [selectedBadge, setSelectedBadge] = useState<PartnershipBadge | null>(null);
  const [activeTab, setActiveTab] = useState<string>("executive");

  const badges: PartnershipBadge[] = [
    {
      id: "badge-learning-partner",
      title: "Official Odoo Learning Partner",
      category: "Accredited Training Entity",
      issuer: "Odoo Official Education Network",
      level: "Official Partner",
      badgeCode: "SR-OD-LP-2026-A1",
      description: "Certified to deliver accredited corporate Odoo curriculum, structured superuser certifications, and custom workforce enablement programs.",
      verified: true,
      skills: ["Official Odoo Syllabus", "Enterprise Training Sandboxes", "Superuser Enablement", "Custom LMS Modules"],
      iconType: "award"
    },
    {
      id: "badge-certified-architect",
      title: "Enterprise Odoo Solution Architect",
      category: "Enterprise Architecture",
      issuer: "Odoo Ecosystem Architecture Authority",
      level: "Expert Tier",
      badgeCode: "SR-OD-ARCH-092",
      description: "Validated mastery in full-stack Odoo architecture, multi-company accounting, MRP routing, and multi-tier database migrations.",
      verified: true,
      skills: ["Multi-Company Rollouts", "Complex DB Migration", "Advanced Chart of Accounts", "Odoo Studio & Custom API"],
      iconType: "shield"
    },
    {
      id: "badge-change-mgmt",
      title: "Enterprise Change Management & Adoption",
      category: "Workforce Governance",
      issuer: "Strategic Transformation Council",
      level: "Mastery",
      badgeCode: "SR-ECM-994-PRO",
      description: "Specialized frameworks that eliminate user resistance, drive 90%+ first-month software adoption, and align department KPIs.",
      verified: true,
      skills: ["Stakeholder Buy-In", "Role-Based Playbooks", "SOP Video Libraries", "Adoption Analytics"],
      iconType: "users"
    },
    {
      id: "badge-ai-automation",
      title: "Intelligent AI & Workflow Integrator",
      category: "Advanced Technology",
      issuer: "AI Automation Standards Group",
      level: "Specialist",
      badgeCode: "SR-AI-AUTO-501-NX",
      description: "Accredited in deploying secure server-side GenAI assistants, automated quote dispatch, and OCR invoice reconciliation directly inside Odoo.",
      verified: true,
      skills: ["Gemini API Pipelines", "Automated OCR Billing", "Smart Lead Scoring", "Predictive Restocking"],
      iconType: "cpu"
    },
    {
      id: "badge-financial-compliance",
      title: "Financial & Accounting Systems Specialist",
      category: "Fiscal Governance",
      issuer: "Corporate Systems Advisory",
      level: "Mastery",
      badgeCode: "SR-FIN-ACC-882",
      description: "Certified configuration of multi-currency ledgers, automated bank synchronization, fiscal workflows, and automated reporting trails.",
      verified: true,
      skills: ["Multi-Entity Ledger Structures", "Real-Time Balance Sheets", "Automated Bank Feeds", "Multi-Currency Financials"],
      iconType: "barchart"
    },
    {
      id: "badge-supply-chain",
      title: "Supply Chain & MRP Precision Engineer",
      category: "Operations & Logistics",
      issuer: "Manufacturing Excellence Alliance",
      level: "Expert Tier",
      badgeCode: "SR-MRP-LOG-713",
      description: "Advanced engineering of dynamic Bill of Materials (BOM), multi-warehouse routing rules, barcode scanning, and lot tracking.",
      verified: true,
      skills: ["Automated Replenishment", "Barcode Scanner Stations", "Lot & Expiry Tracking", "Work Center Scheduling"],
      iconType: "layers"
    }
  ];

  const learningTracks: Record<string, LearningTrack> = {
    executive: {
      id: "track-executive",
      title: "C-Suite & Executive Leadership Track",
      targetRole: "CEOs, CFOs, COOs & Strategy Directors",
      duration: "2 Weeks (4 Intensive Sessions)",
      format: "Executive Strategy Briefings & Custom BI Dashboards",
      description: "Empowers leadership to govern their entire enterprise through real-time Odoo analytics, eliminate department silos, and monitor ROI telemetry.",
      curriculum: [
        "Executive Dashboard & Real-Time Financial Metric Setup",
        "Cost Containment & Legacy License Sunset Governance",
        "Inter-Departmental Workflow Bottleneck Identification",
        "Audit Trail Compliance & Access Control Security"
      ],
      badgeId: "badge-learning-partner"
    },
    finance: {
      id: "track-finance",
      title: "Finance & Financial Controller Track",
      targetRole: "CFOs, Controllers, Accounting Managers & Auditors",
      duration: "3 Weeks (Role-Specific Workshops)",
      format: "Hands-on Sandbox with Company Financial Structure",
      description: "Master automated bank reconciliation, multi-entity financial reporting, fiscal workflows, and streamlined vendor bill approval chains.",
      curriculum: [
        "Chart of Accounts & Multi-Currency Ledger Alignment",
        "Automated OCR Invoicing & 3-Way Bill Matching",
        "Dynamic Cash-Flow Forecasting & Budget Tracking",
        "Year-End Closing Runbooks & Audit Package Exports"
      ],
      badgeId: "badge-financial-compliance"
    },
    operations: {
      id: "track-operations",
      title: "Operations, Supply Chain & MRP Track",
      targetRole: "Plant Managers, Logistics Leads & Inventory Directors",
      duration: "4 Weeks (Shop Floor & Warehouse Practice)",
      format: "Live Barcode Scanner Stations & Staging Assemblies",
      description: "Comprehensive training in multi-warehouse transfers, real-time Bill of Materials management, automated reordering rules, and quality inspections.",
      curriculum: [
        "Multi-Warehouse Topology & Dynamic Replenishment Triggers",
        "Shop Floor Barcode Scanning & Lot Traceability Setup",
        "Work Center Routing, Work Order Scheduling & Capacity",
        "Vendor Lead-Time Optimization & Purchase Automation"
      ],
      badgeId: "badge-supply-chain"
    },
    sales: {
      id: "track-sales",
      title: "Commercial & Sales Acceleration Track",
      targetRole: "VPs of Sales, Account Executives & CRM Leads",
      duration: "2 Weeks (Interactive Pipeline Drills)",
      format: "Live CRM Workflows, E-Sign & Automated Quotes",
      description: "Transform your commercial team into high-speed operators with automated quote generation, email drip follow-ups, and customer portal management.",
      curriculum: [
        "Multi-Stage Pipeline Management & Deal Velocity Metrics",
        "Instant E-Sign Quotations & Automated Pricing Matrices",
        "Lead Scoring with AI Assistance & Follow-Up Triggers",
        "Customer Portal Collaboration & Direct Invoicing Integration"
      ],
      badgeId: "badge-ai-automation"
    },
    superuser: {
      id: "track-superuser",
      title: "Internal Superuser & System Admin Academy",
      targetRole: "IT Leads, Systems Admins & Designated Team Champions",
      duration: "5 Weeks (Deep Technical Certification)",
      format: "Studio Customization, Automated Actions & User Maintenance",
      description: "Create internal self-sufficiency so your organization never has to pay external consultants for basic adjustments, user onboarding, or custom views.",
      curriculum: [
        "User Permission Groups, Record Rules & Security Layers",
        "Odoo Studio Custom Field Building & View Logic",
        "Automated Server Actions & Webhook Notifications",
        "Release Upgrade Preparation & Staging Database Testing"
      ],
      badgeId: "badge-certified-architect"
    }
  };

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "award": return <Award className="w-5 h-5 text-gold-muted" />;
      case "shield": return <ShieldCheck className="w-5 h-5 text-gold-muted" />;
      case "users": return <Users className="w-5 h-5 text-gold-muted" />;
      case "cpu": return <Cpu className="w-5 h-5 text-gold-muted" />;
      case "barchart": return <BarChart3 className="w-5 h-5 text-gold-muted" />;
      case "layers": return <Layers className="w-5 h-5 text-gold-muted" />;
      default: return <BadgeCheck className="w-5 h-5 text-gold-muted" />;
    }
  };

  const currentTrack = learningTracks[activeTab];

  return (
    <div className="space-y-16" id="learning-partnership">
      
      {/* 1. Header with Partnership Credential Stamp */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-muted/10 border border-gold-muted/30 text-gold-bright text-[10px] font-mono uppercase tracking-[0.25em]">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Accredited Corporate Education</span>
        </div>
        <h2 className="font-sans font-light text-3xl lg:text-4xl text-gray-100 tracking-tight">
          Official <span className="italic font-serif text-[#E3B341]">Learning Partnership</span> & Certifications
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Software alone does not transform organizations — empowered teams do. Through our official Learning Partnership, we deliver accredited corporate training, superuser academies, and verified role certifications that make your company 100% self-sufficient.
        </p>
      </div>

      {/* 2. Official Badges Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border-dark pb-4">
          <div>
            <h3 className="font-sans font-semibold text-base text-gray-200 tracking-wide flex items-center gap-2">
              <Award className="w-4 h-4 text-gold-muted" />
              <span>Verified Badges & Accreditations</span>
            </h3>
            <p className="text-xs text-gray-500 font-mono mt-0.5">Click any credential badge to inspect verification metadata & competencies</p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ACTIVE ACCREDITATION STATUS 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {badges.map((badge) => {
            const isSelected = selectedBadge?.id === badge.id;
            return (
              <div
                key={badge.id}
                onClick={() => setSelectedBadge(isSelected ? null : badge)}
                className={`relative p-6 border transition-all duration-300 cursor-pointer text-left group bg-bg-card flex flex-col justify-between ${
                  isSelected
                    ? "border-gold-bright shadow-[0_0_25px_rgba(227,179,65,0.2)] bg-[#071738]"
                    : "border-border-dark hover:border-gold-muted/40 hover:bg-[#071430]"
                }`}
              >
                {/* Visual badge top medal styling */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 border border-gold-muted/30 bg-[#020815] flex items-center justify-center relative group-hover:scale-105 transition-transform">
                      {getBadgeIcon(badge.iconType)}
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-gold-muted rounded-full flex items-center justify-center text-[#020815] text-[8px] font-bold">
                        ✓
                      </div>
                    </div>
                    
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border border-gold-muted/20 text-gold-bright/90 bg-gold-muted/5">
                      {badge.level}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                      {badge.category}
                    </span>
                    <h4 className="font-sans font-semibold text-sm text-gray-100 group-hover:text-gold-bright transition-colors">
                      {badge.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0e2142] space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-gray-500">ISSUER:</span>
                    <span className="text-gray-300 font-medium">{badge.issuer}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-gray-500">BADGE ID:</span>
                    <span className="text-gold-muted font-bold">{badge.badgeCode}</span>
                  </div>
                  <div className="flex items-center justify-end text-[10px] font-mono text-gold-bright pt-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Details & Syllabus →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Badge Detail Drawer / Inspector (When a badge is clicked) */}
      {selectedBadge && (
        <div className="p-6 sm:p-8 bg-[#041026] border border-gold-muted/40 relative animate-fadeIn space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border-dark pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#020815] border border-gold-bright flex items-center justify-center">
                {getBadgeIcon(selectedBadge.iconType)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-bright bg-gold-muted/10 px-2 py-0.5 border border-gold-muted/30">
                    {selectedBadge.level}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Credential
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-white mt-1">{selectedBadge.title}</h3>
                <p className="text-xs text-gray-400 font-mono">Issuer: {selectedBadge.issuer} • Accreditation ID: {selectedBadge.badgeCode}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedBadge(null)}
              className="text-xs font-mono text-gray-400 hover:text-white uppercase tracking-wider px-3 py-1 border border-border-dark hover:border-gold-muted/40 cursor-pointer transition-colors"
            >
              Close Inspector ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-sans font-medium text-xs text-gray-300 uppercase tracking-wider font-mono">
                Core Competencies & Verified Curriculum
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedBadge.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 bg-[#020815] border border-border-dark text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-gold-muted shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-sans pt-2">
                This certification is issued under the Shepherd's Rod Corporate Learning Framework in direct alignment with Odoo enterprise best practices. All curriculum sessions are conducted with realistic staging environments mirroring the client's live operational schemas.
              </p>
            </div>

            <div className="bg-[#020815] p-5 border border-border-dark space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-gold-muted uppercase tracking-widest block font-semibold">Corporate Enrollment</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Enroll your department leads or internal IT team into this accredited training track.
                </p>
              </div>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-[#E3B341] hover:bg-[#FFD86E] text-black font-mono text-xs uppercase tracking-widest py-3 font-bold transition-all cursor-pointer text-center"
              >
                Inquire For Your Team →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. The 4 Pillars of Shepherd's Rod Learning Partnership */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
        <div className="bg-bg-card border border-border-dark p-6 space-y-3 hover:border-gold-muted/30 transition-all">
          <div className="w-8 h-8 bg-[#020815] border border-[#182f54] flex items-center justify-center text-gold-muted">
            <Laptop className="w-4 h-4" />
          </div>
          <h4 className="font-sans font-semibold text-sm text-gray-200">1. Staging Sandbox Practice</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            No generic dummy data. Staff train directly on duplicated snapshots of your company's actual catalogs, BOMs, and charts of accounts.
          </p>
        </div>

        <div className="bg-bg-card border border-border-dark p-6 space-y-3 hover:border-gold-muted/30 transition-all">
          <div className="w-8 h-8 bg-[#020815] border border-[#182f54] flex items-center justify-center text-gold-muted">
            <FileText className="w-4 h-4" />
          </div>
          <h4 className="font-sans font-semibold text-sm text-gray-200">2. Custom Video & SOP Library</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            We record tailored 2-to-5 minute video runbooks for every unique company process, ensuring seamless onboarding for future new hires.
          </p>
        </div>

        <div className="bg-bg-card border border-border-dark p-6 space-y-3 hover:border-gold-muted/30 transition-all">
          <div className="w-8 h-8 bg-[#020815] border border-[#182f54] flex items-center justify-center text-gold-muted">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h4 className="font-sans font-semibold text-sm text-gray-200">3. Internal Superuser Autonomy</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            We coach internal department champions to manage access rights, modify Studio views, and resolve frontline inquiries independently.
          </p>
        </div>

        <div className="bg-bg-card border border-border-dark p-6 space-y-3 hover:border-gold-muted/30 transition-all">
          <div className="w-8 h-8 bg-[#020815] border border-[#182f54] flex items-center justify-center text-gold-muted">
            <Sparkles className="w-4 h-4" />
          </div>
          <h4 className="font-sans font-semibold text-sm text-gray-200">4. Continuous Version Evolution</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Partners receive scheduled briefings for new Odoo annual releases with delta playbooks to prevent feature disruptions.
          </p>
        </div>
      </div>

      {/* 5. Role-Based Learning Tracks Interactive Selector */}
      <div className="border border-border-dark bg-[#030d22] p-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-border-dark pb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-gold-muted uppercase tracking-widest font-semibold block">Curriculum Pathways</span>
            <h3 className="font-sans font-light text-2xl text-gray-100">Role-Based Certification Tracks</h3>
          </div>
          <span className="text-xs font-mono text-gray-500">100% Tailored to Mid-Market Workflows</span>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "executive", label: "Executive Leadership" },
            { id: "finance", label: "Finance & Accounting" },
            { id: "operations", label: "Supply Chain & MRP" },
            { id: "sales", label: "Commercial & Sales" },
            { id: "superuser", label: "Superuser & System Admin" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider cursor-pointer transition-all border ${
                activeTab === tab.id
                  ? "bg-[#E3B341] text-black font-bold border-[#E3B341]"
                  : "bg-[#020815] text-gray-400 hover:text-white border-border-dark hover:border-gold-muted/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Track Details */}
        {currentTrack && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#020815] p-6 sm:p-8 border border-[#0d203d]">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gold-bright uppercase tracking-widest block font-medium">
                  TARGET AUDIENCE: {currentTrack.targetRole}
                </span>
                <h4 className="font-sans font-semibold text-xl text-white tracking-tight">
                  {currentTrack.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {currentTrack.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-semibold">
                  Key Curriculum Syllabus Modules
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentTrack.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans p-3 bg-[#030d22] border border-border-dark">
                      <span className="text-gold-muted font-bold font-mono">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#030d22] border border-border-dark p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4 font-mono text-xs">
                <div className="border-b border-border-dark pb-3">
                  <span className="text-gray-500 text-[10px] uppercase block">Program Duration</span>
                  <span className="text-gray-200 font-medium block mt-1">{currentTrack.duration}</span>
                </div>

                <div className="border-b border-border-dark pb-3">
                  <span className="text-gray-500 text-[10px] uppercase block">Delivery Format</span>
                  <span className="text-gray-200 font-medium block mt-1">{currentTrack.format}</span>
                </div>

                <div>
                  <span className="text-gray-500 text-[10px] uppercase block">Attained Credential</span>
                  <span className="text-gold-bright font-medium block mt-1 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-gold-muted" />
                    <span>Verified Badge Accredited</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-[#E3B341] hover:bg-[#FFD86E] text-black font-mono text-xs uppercase tracking-widest py-3 font-bold transition-colors cursor-pointer text-center"
              >
                Request Syllabus & Schedule →
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
