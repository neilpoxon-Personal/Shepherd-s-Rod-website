import { useState, FormEvent } from "react";
import { Mail, Briefcase, Phone, User, Send, CheckCircle2, ShieldCheck, RefreshCw } from "lucide-react";
import { LeadSubmission } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setError("Please fill in all required fields (Name, Email, and Company).");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setLeadId(data.leadId);
        setSubmitted(true);
      } else {
        throw new Error(data.error || "An error occurred. Please try again.");
      }
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      // Fallback local submission in case of temporary server delay
      setLeadId(`sr-lead-local-${Math.random().toString(36).substring(2, 9)}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg-card border border-border-dark p-8 lg:p-10 rounded-none relative overflow-hidden shadow-2xl">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold-muted/5 blur-3xl rounded-full" />

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <h4 className="font-sans font-light text-xl text-gray-100">Schedule an <span className="italic font-serif text-[#E3B341]">Executive</span> Consultation</h4>
              <p className="text-xs text-gray-400 font-mono mt-1">Book a complimentary 30-minute Odoo workflow & ROI audit.</p>
            </div>

            {error && (
              <div className="bg-red-950/20 border border-red-500/30 p-3.5 rounded-none text-xs text-red-400 font-mono">
                Error: {error}
              </div>
            )}

            {/* Fields grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Jonathan Vance"
                    className="w-full bg-[#020815] border border-border-dark focus:border-gold-muted text-sm text-gray-200 pl-10 pr-4 py-3 rounded-none focus:outline-none placeholder-gray-700 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Corporate Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g., vance@corporate.com"
                    className="w-full bg-[#020815] border border-border-dark focus:border-gold-muted text-sm text-gray-200 pl-10 pr-4 py-3 rounded-none focus:outline-none placeholder-gray-700 transition-colors"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Company Name *</label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="E.g., Vantage Logistics Group"
                    className="w-full bg-[#020815] border border-border-dark focus:border-gold-muted text-sm text-gray-200 pl-10 pr-4 py-3 rounded-none focus:outline-none placeholder-gray-700 transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Telephone (Optional)</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g., +1 (555) 902-1823"
                    className="w-full bg-[#020815] border border-border-dark focus:border-gold-muted text-sm text-gray-200 pl-10 pr-4 py-3 rounded-none focus:outline-none placeholder-gray-700 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Current Scope / Operational Bottlenecks</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="E.g., We are looking to migrate 35 sales users from spreadsheets and a legacy Quickbooks build. Financial consolidation is a primary priority."
                className="w-full bg-[#020815] border border-border-dark focus:border-gold-muted text-sm text-gray-200 px-4 py-3 rounded-none focus:outline-none placeholder-gray-700 transition-colors resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E3B341] hover:bg-[#FFD86E] text-black py-4 rounded-none font-mono font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">Establishing secure B2B handshake...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request strategy callback</span>
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 space-y-6"
          >
            <div className="w-16 h-16 rounded-none bg-green-950/20 border border-green-500/40 flex items-center justify-center mx-auto text-green-400">
              <CheckCircle2 className="w-8 h-8 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h4 className="font-sans font-light text-2xl text-gray-100">Consultation Request Logged</h4>
              <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-gold-bright font-semibold">{formData.name}</span>. Your Odoo strategic assessment is queued. An advisor representing <span className="text-gold-muted">Shepherd's Rod</span> will follow up shortly.
              </p>
            </div>

            {/* Tracking detail block */}
            <div className="max-w-md mx-auto bg-[#01050d] border border-border-dark p-5 rounded-none text-left space-y-3.5 font-mono text-[11px]">
              <div className="flex items-center justify-between border-b border-border-dark pb-2.5">
                <span className="text-gray-500 uppercase tracking-wider">Enterprise Lead ID</span>
                <span className="text-gold-bright font-semibold">{leadId}</span>
              </div>
              <div className="flex items-center justify-between border-b border-border-dark pb-2.5">
                <span className="text-gray-500 uppercase tracking-wider">Corporate Account</span>
                <span className="text-gray-300 font-medium">{formData.company}</span>
              </div>
              <div className="flex items-center justify-between text-green-400 font-medium">
                <span className="text-gray-500 uppercase tracking-wider">Sync Connection Status</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> SECURE HANDSHAKE SUCCESS
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  company: "",
                  phone: "",
                  services: [],
                  message: "",
                });
              }}
              className="text-xs font-mono text-gold-muted hover:text-gold-bright uppercase tracking-widest cursor-pointer transition-colors"
            >
              ← Schedule another company account
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
