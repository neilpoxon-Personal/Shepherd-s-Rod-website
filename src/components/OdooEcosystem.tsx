import { useState } from "react";
import { OdooModule } from "../types";
import { Database, ShieldCheck, Zap, ArrowRight, Layers, Coins, ClipboardList, BarChart3, HelpCircle, Users, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function OdooEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "operations" | "financials" | "sales" | "hr">("all");
  const [activeModuleId, setActiveModuleId] = useState<string>("crm");

  const modules: OdooModule[] = [
    {
      id: "crm",
      name: "Odoo Customer & Sales Portals",
      description: "Manage pipelines, automate follow-ups, optimize deal velocity, and generate instant quotes.",
      benefits: "38% faster conversion cycles and full visibility of sales teams from lead source to final invoice.",
      businessValue: "Eliminate £12k-£45k in annual Salesforce licensing per 20 users with identical feature coverage.",
      category: "sales",
      color: "from-amber-500 to-yellow-600",
    },
    {
      id: "inventory",
      name: "Inventory & Warehousing",
      description: "Double-entry inventory management system with automated replenishment rules and real-time tracking.",
      benefits: "30% reduction in obsolete stock holdings and automated purchasing triggers that prevent inventory outages.",
      businessValue: "Save up to £18k in administration labor with live barcode scanning and shipping platform sync.",
      category: "operations",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "accounting",
      name: "Accounting & Invoicing",
      description: "Automated billing, multi-currency handling, bank synchronization, and instant financial reports.",
      benefits: "Real-time Profit & Loss statement visibility. Drastically reduce month-end closing latency from weeks to hours.",
      businessValue: "Reduce overhead by automating invoice matching (OCR-driven) and digital bank statement reconciliation.",
      category: "financials",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "manufacturing",
      name: "MRP & Manufacturing",
      description: "Full production scheduling (OEE), bills of materials (BOM), work center routings, and quality checks.",
      benefits: "Synchronize factory floor activities directly with customer demand and supply chain logistics in real-time.",
      businessValue: "Increase assembly line throughput by 18% with dynamic capacity planning and raw material scheduling.",
      category: "operations",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "projects",
      name: "Project Management",
      description: "Agile task tracking, timesheets, resource allocation forecasting, and integrated client billing.",
      benefits: "Timesheet submissions are linked directly to invoice lines and payroll records, ending leakage.",
      businessValue: "Recapture 15% of previously unbilled consultative or engineering hours with automated tracking logs.",
      category: "operations",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "hr",
      name: "HR, Leaves & Payroll",
      description: "Centralized employee files, leave approval cycles, attendance logs, and automated payroll runs.",
      benefits: "Self-service portal for employees reduces manager email overhead and ensures fully compliant records.",
      businessValue: "Saves up to 40 hours of payroll administration labor monthly through native integration with timesheets.",
      category: "hr",
      color: "from-rose-500 to-orange-600",
    },
    {
      id: "marketing",
      name: "Marketing Automation",
      description: "Run multi-channel email campaigns, social media posts, and SMS marketing directly linked to customer contacts.",
      benefits: "Measure direct marketing ROI precisely since campaigns are directly tied to sales records and closed deals.",
      businessValue: "Replace Mailchimp and third-party tools, consolidating database sync issues and cutting costs.",
      category: "sales",
      color: "from-pink-500 to-red-600",
    },
    {
      id: "helpdesk",
      name: "Helpdesk & Customer Service",
      description: "SLA-driven ticketing, live chat widgets, instant customer portals, and a unified knowledge base.",
      benefits: "Achieve up to a 94% customer satisfaction rate with automated escalation pathways and quick FAQs.",
      businessValue: "Boost agent efficiency by 3x using self-service portals and macro templates that handle standard queries.",
      category: "hr",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const filteredModules = selectedCategory === "all" 
    ? modules 
    : modules.filter(m => m.category === selectedCategory);

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

  // Helper function to return icon depending on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sales": return <Zap className="w-4 h-4" />;
      case "operations": return <Layers className="w-4 h-4" />;
      case "financials": return <Coins className="w-4 h-4" />;
      case "hr": return <Users className="w-4 h-4" />;
      default: return <Database className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-12">
      
      {/* Category filters */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {(["all", "operations", "financials", "sales", "hr"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-none text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? "bg-gold-muted text-bg-dark font-semibold shadow-[0_0_15px_rgba(227,179,65,0.3)]"
                : "bg-bg-card border border-border-dark text-gray-400 hover:text-white hover:border-gold-muted/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid: Interactive orbit map & side details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Interactive Hub Visual (7 columns) */}
        <div className="lg:col-span-7 bg-bg-card/40 border border-border-dark rounded-none p-6 lg:p-10 h-[500px] flex items-center justify-center relative overflow-hidden">
          
          {/* Subtle background radar circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[180px] h-[180px] border border-border-dark/50 rounded-none rotate-45 animate-pulse" />
            <div className="w-[340px] h-[340px] border border-border-dark/30 rounded-none -rotate-12" />
            <div className="w-[450px] h-[450px] border border-border-dark/10 rounded-none rotate-12" />
          </div>

          {/* Central Hub representing Odoo Unified Database */}
          <div className="z-10 text-center relative flex flex-col items-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="w-24 h-24 rounded-none bg-gold-muted/5 border-2 border-dashed border-gold-muted/40 flex items-center justify-center p-2 shadow-[0_0_40px_rgba(227,179,65,0.1)] mb-4"
            >
              <div className="w-16 h-16 rounded-none bg-gold-muted/10 border border-gold-muted flex items-center justify-center text-gold-muted">
                <Database className="w-8 h-8 animate-bounce" />
              </div>
            </motion.div>
            <span className="font-sans font-semibold text-xs text-gold-bright uppercase tracking-widest block">Unified Odoo Core</span>
            <span className="text-[10px] text-gray-500 font-mono block mt-0.5 uppercase tracking-wider">Single Master Database</span>
          </div>

          {/* SVG Connector Lines (active synced visual) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {filteredModules.map((m, idx) => {
              // Mathematical placement around center
              const count = filteredModules.length;
              const radius = 170;
              const angle = (idx / count) * Math.PI * 2 - Math.PI / 2;
              
              // Calculate coordinate percentage
              const xStart = 50 + Math.cos(angle) * (radius / 5);
              const xEnd = 50 + Math.cos(angle) * (radius / 2.5);
              const yStart = 50 + Math.sin(angle) * (radius / 5);
              const yEnd = 50 + Math.sin(angle) * (radius / 2.5);

              const isActive = m.id === activeModuleId;

              return (
                <line
                  key={m.id}
                  x1={`${xStart}%`}
                  y1={`${yStart}%`}
                  x2={`${xEnd}%`}
                  y2={`${yEnd}%`}
                  stroke={isActive ? "#FFD86E" : "#1A1A1A"}
                  strokeWidth={isActive ? "1.5" : "1"}
                  strokeDasharray={isActive ? "4,4" : "0"}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          {/* Satellite Modules */}
          {filteredModules.map((m, idx) => {
            const count = filteredModules.length;
            const radius = 180; // Distance from center
            const angle = (idx / count) * Math.PI * 2 - Math.PI / 2; // Offset angle to space evenly
            
            // X and Y positions
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const isActive = m.id === activeModuleId;

            return (
              <button
                key={m.id}
                onClick={() => setActiveModuleId(m.id)}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`absolute z-10 w-12 h-12 rounded-none flex items-center justify-center border transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "bg-gold-muted/10 border-gold-bright shadow-[0_0_20px_rgba(227,179,65,0.4)] text-gold-bright scale-110"
                    : "bg-[#0A0A0A] border-border-dark hover:border-gold-muted/30 text-gray-500 hover:text-gray-300"
                }`}
              >
                {getCategoryIcon(m.category)}
                
                {/* Micro Label */}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-wider font-medium text-gray-400 opacity-60 hover:opacity-100 uppercase scale-90">
                  {m.name.split(" ")[1] || m.name.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Details Card (5 columns) */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-bg-card border border-border-dark p-8 rounded-none space-y-6 relative overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-muted/5 blur-3xl rounded-none" />

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-gold-muted uppercase tracking-widest font-semibold">
                  Odoo Module Analysis
                </span>
                <h3 className="font-sans font-light text-2xl text-gray-100 tracking-tight">
                  {activeModule.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {activeModule.description}
                </p>
              </div>

              {/* Core Advantage */}
              <div className="bg-[#050505] p-5 rounded-none border border-border-dark space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-bright uppercase tracking-wider">
                  <Activity className="w-4 h-4 text-gold-muted animate-pulse" />
                  <span>Strategic Advantage</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeModule.benefits}
                </p>
              </div>

              {/* License and Operational Savings */}
              <div className="bg-[#050505] p-5 rounded-none border border-border-dark space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-green-400 uppercase tracking-wider">
                  <Coins className="w-4 h-4 text-green-500" />
                  <span>Projected Cost Mitigation (ROI)</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeModule.businessValue}
                </p>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-muted" /> Fully Synced
                </span>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gold-muted hover:text-gold-bright uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Request assessment <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
