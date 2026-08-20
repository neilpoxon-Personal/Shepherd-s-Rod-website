import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, GraduationCap } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Services", targetId: "services" },
    { label: "Learning Partner", targetId: "learning-partnership", badge: "Accredited" },
    { label: "Ecosystem", targetId: "ecosystem" },
    { label: "Our Process", targetId: "process" },
    { label: "Case Studies", targetId: "case-studies" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#020815]/90 backdrop-blur-md py-3.5 border-border-dark shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-[#020815]/90 to-transparent py-5 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-[3px] h-7 bg-[#E3B341] shadow-[0_0_12px_rgba(227,179,65,0.6)] transition-all duration-300 group-hover:scale-y-110"></div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-medium text-sm lg:text-base tracking-[0.18em] text-[#F8F8F8] uppercase group-hover:text-gold-bright transition-colors duration-300 block">
                Shepherd's Rod
              </span>
            </div>
            <span className="block text-[8px] font-mono text-gray-400 uppercase tracking-wider leading-none mt-0.5">
              <span>LEADING • GUIDING • EMPOWERING</span>
              <span className="hidden 2xl:inline"> • STRATEGY • SUCCESS</span>
            </span>
          </div>
        </div>

        {/* Desktop Links (Visible on Large screens to avoid overcrowding) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 shrink-0">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(link.targetId)}
              className="text-[11px] xl:text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-[#F8F8F8] relative py-1 group cursor-pointer transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[8px] font-mono uppercase px-1.5 py-0.2 bg-gold-muted/15 border border-gold-muted/30 text-gold-bright tracking-widest hidden xl:inline-block">
                  {link.badge}
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E3B341] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Action CTA Button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 text-[11px] xl:text-xs font-mono uppercase tracking-wider xl:tracking-widest bg-transparent hover:bg-[#E3B341] text-[#E3B341] hover:text-black border border-[#E3B341] px-4 xl:px-5 py-2 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile & Tablet menu toggle trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[10px] font-mono uppercase tracking-wider bg-[#E3B341] text-black px-3 py-1.5 font-bold cursor-pointer transition-colors"
          >
            Consultation
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-300 hover:text-white border border-border-dark bg-[#041026] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-[#020815]/98 border-b border-border-dark py-6 px-6 backdrop-blur-xl flex flex-col gap-4 shadow-2xl animate-fadeIn">
          <div className="flex items-center gap-2 pb-2 border-b border-border-dark text-[10px] font-mono text-gold-muted uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Navigation Menu</span>
          </div>
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(link.targetId)}
              className="text-left text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-gold-bright py-2 border-b border-[#0e2142] transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-gold-muted/10 border border-gold-muted/30 text-gold-bright">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-[#E3B341] hover:bg-[#FFD86E] text-black font-mono text-xs uppercase tracking-widest py-3 text-center font-bold cursor-pointer transition-colors mt-2"
          >
            Book Free Consultation →
          </button>
        </div>
      )}
    </nav>
  );
}
