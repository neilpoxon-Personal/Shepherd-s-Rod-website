import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, ShieldCheck, TrendingUp, Cpu, Calendar, Clock, PoundSterling, RefreshCw, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  role: "user" | "model";
  text: string;
  timestamp: string;
}

export default function OdooAIConsultant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: `### Welcome to the Executive Suite

I am the **Shepherd Odoo Advisor**. I am here to help you evaluate, design, and architect high-performance business workflows using the Odoo ecosystem.

Whether you are looking to migrate from fragmented legacy platforms, consolidate licenses, or deploy intelligent ERP and operations systems, I can provide:
- **Licensing Cost Comparisons** (e.g., Salesforce/SAP vs. Odoo)
- **Calculated Workflow ROI Projections**
- **A Tailored Digital Transformation Roadmap**

To get started, feel free to use the quick ROI calculator below, select a strategic starter question, or type your operational requirements directly.`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Quick Calculator State
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [teamSize, setTeamSize] = useState("15");
  const [wasteHours, setWasteHours] = useState("8");
  const [hourlyRate, setHourlyRate] = useState("45");

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const starterPrompts = [
    {
      label: "Estimate Odoo ROI",
      prompt: "Can you provide a clear financial and productivity ROI breakdown of Odoo implementation compared to running isolated spreadsheets and old software?",
    },
    {
      label: "Salesforce vs. Odoo Sales",
      prompt: "We are currently using Salesforce and find it extremely expensive and complex. How does Odoo Sales integrate with other modules and compare in total cost of ownership?",
    },
    {
      label: "ERP Implementation Plan",
      prompt: "What is the typical deployment timeframe, methodology, and change management approach of Shepherd's Rod for a mid-market enterprise Odoo ERP rollout?",
    },
    {
      label: "AI-Powered Customer Workflows",
      prompt: "How can we integrate modern generative AI features directly into our Odoo Sales and customer service modules to automate response drafts and lead scoring?",
    },
  ];

  const handleSendMessage = async (userPrompt: string) => {
    if (!userPrompt.trim() || loading) return;

    const userMsg: ChatMessage = {
      role: "user",
      text: userPrompt,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Format chat history for backend endpoint
    const history = messages.map((m) => ({
      role: m.role,
      text: m.text,
    }));

    try {
      const response = await fetch("/api/consultant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt, history }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const modelMsg: ChatMessage = {
          role: "model",
          text: data.text,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, modelMsg]);
      } else {
        throw new Error(data.error || "Failed to reach your AI consultant.");
      }
    } catch (err: any) {
      console.error(err);
      const errorMsg: ChatMessage = {
        role: "model",
        text: `### System Notice: Offline Fallback

I apologize, but our high-speed secure API channel is experiencing a brief operational delay. However, let me address your strategic focus immediately:

A proper Odoo deployment delivers standard operational gains:
- **Consolidated Software Costs**: Up to **70% savings** compared to standalone subscriptions (HubSpot, Salesforce, QuickBooks).
- **Reduced Labor Waste**: Saving an average of **6 to 12 hours weekly per employee** through cross-module workflow synchronization.
- **Unified Master Database**: Real-time inventory, sales, and accounting operations working in perfect unison.

Let's discuss how Shepherd's Rod can guide your digital transition. Would you like to schedule an executive strategy session?`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const calculateROI = () => {
    const size = parseFloat(teamSize) || 0;
    const hours = parseFloat(wasteHours) || 0;
    const wage = parseFloat(hourlyRate) || 0;

    const weeklyWaste = size * hours * wage;
    const annualWaste = weeklyWaste * 52;
    // Odoo typical reduction of admin hours is 45%
    const potentialSavings = Math.round(annualWaste * 0.45);

    const calcPrompt = `ROI ANALYSIS INPUTS:
- Corporate Team Size: ${size} members
- Redundant Weekly Labor: ${hours} hours per employee wasted on manual data re-entry, emails, or switching spreadsheets.
- Average Weighted Hourly Cost: £${wage}/hour

Please run a professional, mathematically grounded strategic ROI calculation based on these parameters. Project our annual savings, highlight which Odoo modules (like Odoo Sales, and Accounting) eliminate this specific waste, and lay out an implementation recommendation.`;

    setCalculatorOpen(false);
    handleSendMessage(calcPrompt);
  };

  return (
    <div className="w-full rounded-none bg-bg-card border border-border-dark flex flex-col h-[650px] overflow-hidden shadow-2xl relative">
      
      {/* Header */}
      <div className="p-4 border-b border-border-dark bg-[#0F0F0F] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-none bg-gold-muted/10 flex items-center justify-center border border-gold-muted/30 text-gold-muted">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h4 className="font-sans font-semibold text-sm text-gray-100 tracking-tight flex items-center gap-2">
              Shepherd Odoo Advisor
              <span className="inline-flex items-center gap-1 text-[10px] bg-gold-muted/20 text-gold-bright px-2 py-0.5 rounded-none font-mono font-medium uppercase tracking-wider">
                Active B2B API
              </span>
            </h4>
            <p className="text-[11px] text-gray-500 font-mono">Expertise, Transformation, Trust</p>
          </div>
        </div>
        
        <button
          onClick={() => setCalculatorOpen(!calculatorOpen)}
          className="flex items-center gap-2 text-[10px] bg-[#E3B341] hover:bg-[#FFD86E] text-black font-mono font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-none transition-colors cursor-pointer"
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Interactive ROI Calculator</span>
        </button>
      </div>

      {/* Messages Window */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#01050d] relative scroll-smooth">
        
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
            >
              <div
                className={`w-8 h-8 rounded-none flex items-center justify-center text-xs font-semibold select-none shrink-0 ${
                  msg.role === "user"
                    ? "bg-[#0d203d] border border-[#182f54] text-gray-300"
                    : "bg-gold-muted/10 border border-gold-muted/30 text-gold-muted"
                }`}
              >
                {msg.role === "user" ? "EX" : "SR"}
              </div>

              <div className="space-y-1">
                <div
                  className={`p-4 rounded-none text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#0a182d] border border-[#182f54] text-gray-200"
                      : "bg-[#040e1d] border border-border-dark text-gray-300"
                  }`}
                >
                  {/* Robust Markdown parser fallback for beautiful presentation layout */}
                  <div className="prose prose-invert prose-xs">
                    {msg.text.split("\n").map((line, lIdx) => {
                      if (line.startsWith("### ")) {
                        return <h3 key={lIdx} className="font-sans font-medium text-base text-gold-bright mt-3 mb-1 first:mt-0">{line.replace("### ", "")}</h3>;
                      }
                      if (line.startsWith("#### ")) {
                        return <h4 key={lIdx} className="font-sans font-medium text-sm text-gold-muted mt-2 mb-1">{line.replace("#### ", "")}</h4>;
                      }
                      if (line.startsWith("* **") || line.startsWith("- **")) {
                        const content = line.substring(2);
                        const splitBold = content.split("**");
                        return (
                          <li key={lIdx} className="list-disc list-inside ml-2 my-1 text-gray-300">
                            <strong className="text-gray-100">{splitBold[1]}</strong>
                            {splitBold.slice(2).join("")}
                          </li>
                        );
                      }
                      if (line.startsWith("* ") || line.startsWith("- ")) {
                        return <li key={lIdx} className="list-disc list-inside ml-2 my-0.5 text-gray-400">{line.substring(2)}</li>;
                      }
                      return <p key={lIdx} className="mb-2 last:mb-0 text-gray-300">{line}</p>;
                    })}
                  </div>
                </div>
                <div className={`text-[10px] text-gray-600 font-mono ${msg.role === "user" ? "text-right" : "text-left"}`}>
                  {msg.timestamp}
                </div>
              </div>
            </motion.div>
          ))}

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-3 mr-auto items-center"
            >
              <div className="w-8 h-8 rounded-none bg-gold-muted/10 border border-gold-muted/30 flex items-center justify-center text-gold-muted">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
              </div>
              <div className="bg-[#040e1d] border border-border-dark px-4 py-2.5 rounded-none flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold-muted rounded-none animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-gold-muted rounded-none animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-gold-muted rounded-none animate-bounce"></span>
                <span className="text-xs text-gray-500 font-mono ml-1.5">Consultant compiling business systems model...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={chatEndRef} />
      </div>

      {/* Floating ROI Calculator Overlay Panel */}
      <AnimatePresence>
        {calculatorOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-x-4 top-16 bottom-20 bg-[#040e1d]/95 border border-gold-muted/30 rounded-none backdrop-blur-md z-30 p-6 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border-dark pb-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-gold-bright" />
                  <h5 className="font-sans font-semibold text-base text-gray-100">B2B Workflow Waste Calculator</h5>
                </div>
                <button
                  onClick={() => setCalculatorOpen(false)}
                  className="p-1 rounded-none hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Provide estimates regarding your current administrative setup. The Shepherd Odoo Advisor will compute precise direct cost loss, and draft modules to reclaim these assets.
              </p>

              <div className="space-y-4">
                {/* Team Size */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-gray-500 flex items-center gap-1">
                    <PoundSterling className="w-3 h-3 text-gold-muted" />
                    Corporate Team Size (Employees)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="5"
                      max="150"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="flex-1 accent-gold-muted"
                    />
                    <span className="font-mono text-sm text-gold-bright font-semibold w-12 text-right">{teamSize}</span>
                  </div>
                </div>

                {/* Labor Waste Hours */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-muted" />
                    Weekly Hours Wasted Per Person (Manual Data Re-entry, File Syncing)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={wasteHours}
                      onChange={(e) => setWasteHours(e.target.value)}
                      className="flex-1 accent-gold-muted"
                    />
                    <span className="font-mono text-sm text-gold-bright font-semibold w-12 text-right">{wasteHours}h</span>
                  </div>
                </div>

                {/* Hourly Cost */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-gray-500 flex items-center gap-1">
                    <PoundSterling className="w-3 h-3 text-gold-muted" />
                    Estimated Weighted Hourly Wage (Fully Loaded Cost, GBP)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="20"
                      max="150"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="flex-1 accent-gold-muted"
                    />
                    <span className="font-mono text-sm text-gold-bright font-semibold w-12 text-right">£{hourlyRate}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Instant Metric Preview */}
              <div className="mt-6 bg-[#020815] border border-border-dark p-4 rounded-none flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase text-gray-500">Current Cost of Operational Inefficiency</p>
                  <p className="font-sans font-semibold text-lg text-red-400 mt-1">
                    £{(parseFloat(teamSize) * parseFloat(wasteHours) * parseFloat(hourlyRate) * 52).toLocaleString()}/yr
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono uppercase text-gold-muted">Target Recoverable Savings (Odoo)</p>
                  <p className="font-sans font-semibold text-lg text-green-400 mt-1">
                    £{Math.round(parseFloat(teamSize) * parseFloat(wasteHours) * parseFloat(hourlyRate) * 52 * 0.45).toLocaleString()}/yr
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={calculateROI}
              className="w-full bg-[#E3B341] hover:bg-[#FFD86E] text-black font-mono font-bold uppercase tracking-widest text-xs py-4 rounded-none flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Cpu className="w-4 h-4" />
              <span>Generate Strategic Custom ROI Report</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Starter Options / Chat Form */}
      <div className="p-4 border-t border-border-dark bg-[#020815] space-y-3 z-10">
        
        {/* Starter Prompts list */}
        {messages.length === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {starterPrompts.map((p, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSendMessage(p.prompt)}
                className="text-left text-xs bg-[#06122b] hover:bg-[#0c2045] border border-border-dark hover:border-gold-muted/40 p-2.5 rounded-none text-gray-400 hover:text-gray-100 transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>{p.label}</span>
                <Send className="w-3 h-3 text-gray-600 group-hover:text-gold-muted transition-colors" />
              </button>
            ))}
          </div>
        )}

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(input);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            placeholder="Type your strategic Odoo requirement or challenge..."
            className="flex-1 bg-[#040e1d] border border-[#122240] focus:border-gold-muted text-sm text-gray-200 px-4 py-3 rounded-none focus:outline-none placeholder-gray-600 transition-colors"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-gold-muted disabled:bg-[#081830] text-bg-dark disabled:text-gray-600 p-3.5 rounded-none transition-all cursor-pointer hover:bg-gold-bright flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
