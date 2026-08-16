import { useState } from "react";
import { ProcessStage } from "../types";
import { Search, Compass, ShieldAlert, Cpu, Award, Zap, HelpCircle, ArrowRight, ClipboardList, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function OurProcess() {
  const [activeStageId, setActiveStageId] = useState<string>("discovery");

  const stages: ProcessStage[] = [
    {
      id: "discovery",
      phase: "Phase 01",
      title: "Discovery & Alignment",
      description: "We deep dive into your business model, catalog existing legacy application footprints, interview key process stakeholders, and map manual bottle-necks.",
      details: [
        "Infrastructure and license inventory audits",
        "Functional stakeholder workflow mapping workshops",
        "Legacy system bottleneck analysis report",
        "Immediate process redundancy evaluation",
      ],
      metric: "100% Operational Transparency Map",
    },
    {
      id: "analysis",
      phase: "Phase 02",
      title: "Functional Analysis",
      description: "We draft precise operational schemas, modeling your inventory flows, sales commissions, financial charts of accounts, and field service touchpoints.",
      details: [
        "Structured standard business process matrix (GAP)",
        "Odoo standard configuration feasibility study",
        "Entity relationship schema drafts (data blueprints)",
        "Custom application spec definition",
      ],
      metric: "Zero-Gap Process Reconciliation",
    },
    {
      id: "strategy",
      phase: "Phase 03",
      title: "Strategic Design",
      description: "We construct your bespoke Odoo system architecture, outline a staged data migration schedule, and propose a concrete timeline with direct ROI goals.",
      details: [
        "Staged phased rollout system roadmap",
        "Consolidated software cost mitigation chart",
        "Staging environment sandboxing configuration",
        "Data purification and mapping schemas",
      ],
      metric: "-35% System Redundancy ROI Targets",
    },
    {
      id: "implementation",
      phase: "Phase 04",
      title: "Implementation & Build",
      description: "Our certified engineers configure core Odoo modules, develop secure system connections, migrate legacy database structures, and run full end-to-end integration tests.",
      details: [
        "Standard Odoo module customization and theme setup",
        "Legacy SQL database cleansing & upload scripts",
        "Third-party API & sales sync setup",
        "Rigorous quality assurance (QA) scenarios",
      ],
      metric: "99.9% Uptime Secure System Deployment",
    },
    {
      id: "training",
      phase: "Phase 05",
      title: "Training & Change Management",
      description: "We deploy comprehensive team-specific training curriculums, interactive live walkthroughs, and custom-tailored process handbooks to secure high system adoption.",
      details: [
        "Role-based executive training classes (Accounting/Sales)",
        "Step-by-step video libraries for fast onboarding",
        "User Acceptance Testing (UAT) sign-offs",
        "Operational change resistance workshops",
      ],
      metric: "95%+ User Adoption Rating inside 30 days",
    },
    {
      id: "support",
      phase: "Phase 06",
      title: "Support & Continuous Optimization",
      description: "We provide high-grade SLAs, system health checks, continuous security patching, and ongoing consultancy to help your Odoo platform scale with your growth.",
      details: [
        "Dedicated account strategist review calls",
        "Quarterly system health check audits",
        "Continuous secure backup monitoring",
        "Version update & performance tuning",
      ],
      metric: "4h Enterprise SLA Response Time Guaranteed",
    },
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  const getStageIcon = (id: string) => {
    switch (id) {
      case "discovery": return <Search className="w-5 h-5" />;
      case "analysis": return <Compass className="w-5 h-5" />;
      case "strategy": return <ClipboardList className="w-5 h-5" />;
      case "implementation": return <Cpu className="w-5 h-5" />;
      case "training": return <Award className="w-5 h-5" />;
      case "support": return <CheckCircle2 className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Timeline Steps (Clickable circles connected by solid line) */}
      <div className="relative">
        {/* Horizontal connecting line in background */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border-dark -translate-y-1/2 z-0 hidden md:block" />
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
          {stages.map((stage, idx) => {
            const isActive = stage.id === activeStageId;
            const isCompleted = stages.findIndex((s) => s.id === activeStageId) >= idx;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`flex flex-col items-center text-center p-4 bg-bg-card border rounded-none hover:border-gold-muted/40 transition-all cursor-pointer ${
                  isActive
                    ? "border-gold-muted shadow-[0_0_15px_rgba(227,179,65,0.15)] bg-bg-card"
                    : "border-border-dark bg-transparent"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-none flex items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? "bg-gold-muted text-bg-dark border-gold-bright shadow-md scale-110"
                      : isCompleted
                      ? "bg-gold-muted/10 border-gold-muted text-gold-muted"
                      : "bg-[#070707] border-border-dark text-gray-500"
                  }`}
                >
                  {getStageIcon(stage.id)}
                </div>

                <div className="mt-3">
                  <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                    {stage.phase}
                  </span>
                  <span className="block font-sans font-medium text-xs text-gray-300 mt-0.5 tracking-tight">
                    {stage.title.split(" & ")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-bg-card border border-border-dark p-8 lg:p-12 rounded-none relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold-muted/5 blur-3xl rounded-none" />

          {/* Left Column (Core Title & Description, 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-gold-muted uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-gold-muted rounded-none animate-ping" />
                {activeStage.phase} Methodology
              </span>
              <h3 className="font-sans font-light text-3xl text-gray-100 tracking-tight">
                {activeStage.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                {activeStage.description}
              </p>
            </div>

            {/* Checklists */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-gray-500">Core deliverables & outputs:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeStage.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                    <span className="text-gold-muted shrink-0 mt-0.5">✓</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Phase Metric/Stat & Next Steps, 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border-dark pt-8 lg:pt-0 lg:pl-8 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Phase KPI Goal</span>
              <div className="bg-[#050505] border border-border-dark p-6 rounded-none text-center lg:text-left">
                <p className="font-sans font-medium text-lg text-gold-bright tracking-tight">
                  {activeStage.metric}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                Every stage in the Shepherd methodology is backed by strict QA protocols, ensuring smooth digital handshakes and fully validated processes.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 text-xs font-mono text-gold-muted hover:text-gold-bright uppercase tracking-wider cursor-pointer transition-colors"
              >
                <span>Request details of this phase</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
