import { useState } from "react";
import { CheckCircle2, TrendingUp, Cpu, Calendar, PoundSterling, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function WhyShepherdsRod() {
  const [activeChart, setActiveChart] = useState<"costs" | "speed">("costs");

  const corePillars = [
    {
      title: "Proven Methodology",
      desc: "Our agile, gapless implementation framework eliminates scope creep, ensuring 100% on-time and on-budget delivery.",
    },
    {
      title: "Certified Odoo ERP Specialists",
      desc: "Consultants with decades of combined system experience, holding active certifications across the latest Odoo ERP versions.",
    },
    {
      title: "Consolidated Systems",
      desc: "We completely eliminate software sprawl by migrating accounting, sales operations, and stock control into a unified database.",
    },
    {
      title: "Long-term Support Partnership",
      desc: "We don't just hand over keys; we support your enterprise with custom training handbooks and responsive SLA backing.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Column (Core Arguments, 6 cols) */}
      <div className="lg:col-span-6 space-y-8">
        <div className="space-y-4">
          <span className="font-mono text-[10px] text-gold-muted uppercase tracking-[0.25em] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-muted" /> Enterprise Advisory Group
          </span>
          <h3 className="font-sans font-light text-3xl lg:text-4xl text-gray-100 tracking-tight leading-tight">
            Why Forward-Thinking <span className="italic font-serif text-[#E3B341]">Enterprises</span> Select Shepherd's Rod
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
            We help mid-market enterprises replace fragmented legacy databases, reduce high licensing overhead, and secure fully synchronized automation workflows.
          </p>
        </div>

        {/* Pillars checklist */}
        <div className="space-y-5">
          {corePillars.map((pillar, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              <div className="w-6 h-6 rounded-none bg-gold-muted/10 border border-gold-muted/30 flex items-center justify-center text-gold-muted group-hover:border-gold-bright transition-all shrink-0 mt-0.5">
                <span className="font-mono text-[10px] font-semibold">0{idx + 1}</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-semibold text-sm text-gray-200 tracking-tight group-hover:text-gold-bright transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column (Data comparisons / dashboards, 6 cols) */}
      <div className="lg:col-span-6">
        <div className="bg-bg-card border border-border-dark p-6 lg:p-8 rounded-none space-y-6 relative overflow-hidden">
          
          {/* Header tabs for metrics comparison */}
          <div className="flex items-center justify-between border-b border-[#122240] pb-4">
            <div>
              <h4 className="font-sans font-medium text-base text-gray-100">Direct Comparison Dashboard</h4>
              <p className="text-[10px] text-gray-500 font-mono mt-0.5">Verified Odoo Metrics vs Legacy Systems</p>
            </div>
            
            <div className="flex items-center gap-1.5 bg-[#01050d] border border-border-dark p-1 rounded-none">
              <button
                onClick={() => setActiveChart("costs")}
                className={`px-3 py-1.5 rounded-none text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeChart === "costs"
                    ? "bg-[#E3B341] text-black font-bold"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Direct Costs
              </button>
              <button
                onClick={() => setActiveChart("speed")}
                className={`px-3 py-1.5 rounded-none text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeChart === "speed"
                    ? "bg-[#E3B341] text-black font-bold"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Launch Speed
              </button>
            </div>
          </div>

          {/* Interactive display of metrics */}
          <div className="h-[220px] flex flex-col justify-center space-y-6 relative z-10">
            {activeChart === "costs" ? (
              <div className="space-y-5">
                {/* Legacy platform bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-400">Legacy Multi-Software Array (Salesforce + HubSpot + SAP)</span>
                    <span className="text-red-400 font-semibold">£1,650 / seat / year</span>
                  </div>
                  <div className="w-full bg-[#020815] h-2 rounded-none overflow-hidden border border-[#122240]">
                    <div className="bg-red-400/85 h-full rounded-none w-full" />
                  </div>
                </div>

                {/* Consolidated Odoo bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gold-muted font-medium">Consolidated Odoo Unified Ecosystem</span>
                    <span className="text-green-400 font-bold">£380 / seat / year</span>
                  </div>
                  <div className="w-full bg-[#020815] h-2 rounded-none overflow-hidden border border-[#122240]">
                    <div className="bg-green-400 h-full rounded-none w-[23%]" />
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 font-mono text-right leading-none">
                  *Based on typical mid-market setups (accounting, sales pipelines, warehouse tracking, and helpdesk).
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Traditional deployment timeline */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-400">Traditional ERP Rollout (SAP / Oracle NetSuite)</span>
                    <span className="text-red-400 font-semibold">12 - 18 Months</span>
                  </div>
                  <div className="w-full bg-[#020815] h-2 rounded-none overflow-hidden border border-[#122240]">
                    <div className="bg-red-400/85 h-full rounded-none w-full" />
                  </div>
                </div>

                {/* Shepherd Odoo Timeline */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gold-muted font-medium">Shepherd Odoo Implementation Methodology</span>
                    <span className="text-green-400 font-bold">3 - 4 Months</span>
                  </div>
                  <div className="w-full bg-[#020815] h-2 rounded-none overflow-hidden border border-[#122240]">
                    <div className="bg-green-400 h-full rounded-none w-[25%]" />
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 font-mono text-right leading-none">
                  *Leveraging standardized, clean gapless templates and automated migration scripts.
                </p>
              </div>
            )}
          </div>

          {/* Quick Stats Panel */}
          <div className="grid grid-cols-3 gap-3 border-t border-[#122240] pt-6">
            <div className="text-center p-3 bg-[#030c1f] border border-border-dark rounded-none">
              <span className="block font-mono text-[9px] text-gray-500 uppercase">License Cost Reduction</span>
              <span className="block font-sans font-semibold text-lg text-green-400 mt-1">-75%</span>
            </div>
            <div className="text-center p-3 bg-[#030c1f] border border-border-dark rounded-none">
              <span className="block font-mono text-[9px] text-gray-500 uppercase">Project Kickoff Delay</span>
              <span className="block font-sans font-semibold text-lg text-green-400 mt-1">Zero</span>
            </div>
            <div className="text-center p-3 bg-[#030c1f] border border-border-dark rounded-none">
              <span className="block font-mono text-[9px] text-gray-500 uppercase">Average ROI Realized</span>
              <span className="block font-sans font-semibold text-lg text-green-400 mt-1">8 Months</span>
            </div>
          </div>

          {/* Disclaimer Note */}
          <p className="text-[10px] text-gray-500 font-mono text-center pt-2 italic">
            *Note: All metric comparisons and projections shown in this dashboard are estimates for illustrative purposes.
          </p>

        </div>
      </div>

    </div>
  );
}
