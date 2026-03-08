import { useState, useEffect, useRef, type ReactNode } from "react";

/* ───────────────────────────────────────────────
   SCROLL REVEAL HOOK
─────────────────────────────────────────────── */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("revealed");
          io.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${delay ? `reveal-delay-${delay}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ───────────────────────────────────────────────
   DATA
─────────────────────────────────────────────── */
const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80",
    headline: "Crystal-Clear 2-Way Communication",
    sub: "Built for Real Work",
    description:
      "Sales, rentals, setup, and support for retail, events, warehouses, and industrial sites.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1920&q=80",
    headline: "Stay Connected Across Every Floor",
    sub: "Retail & Commercial Solutions",
    description:
      "Discreet, lightweight setups with clear audio — designed for customer-facing spaces.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
    headline: "Rugged Radios for Tough Sites",
    sub: "Industrial & Construction Ready",
    description:
      "Durable equipment, advanced configuration, and coverage planning for harsh environments.",
  },
];

const features = [
  {
    icon: "📡",
    title: "Coverage Planning",
    desc: "Site-based signal mapping and channel configuration tailored to your environment.",
    color: "from-blue-500/15 to-blue-600/5",
    border: "border-blue-200/60",
  },
  {
    icon: "🔧",
    title: "Radio Programming",
    desc: "Custom channels, groups, privacy codes, and tone settings configured for your workflow.",
    color: "from-green-500/15 to-green-600/5",
    border: "border-green-200/60",
  },
  {
    icon: "⚡",
    title: "Fast Deployment",
    desc: "Pre-configured kits shipped ready to go. Minimal setup, maximum uptime from day one.",
    color: "from-amber-500/15 to-amber-600/5",
    border: "border-amber-200/60",
  },
  {
    icon: "🛡️",
    title: "Compliance Guidance",
    desc: "We help navigate licensing, frequency coordination, and regulatory requirements.",
    color: "from-purple-500/15 to-purple-600/5",
    border: "border-purple-200/60",
  },
];

const packages = [
  {
    icon: "⚡",
    tag: "Light",
    title: "Starter Package",
    desc: "Simple, affordable option for small teams and straightforward use cases.",
    features: [
      "Entry-level radio setup",
      "Basic channel programming",
      "Quick onboarding guide",
      "Email support",
    ],
    color: "from-slate-500 to-slate-600",
    featured: false,
  },
  {
    icon: "🔁",
    tag: "Versatile",
    title: "Most Popular",
    desc: "Flexible for growing teams who need more options and better workflow integration.",
    features: [
      "Multiple channels & groups",
      "Accessory-ready radios",
      "Upgrade path available",
      "Priority support",
    ],
    color: "from-accent to-accent2",
    featured: true,
  },
  {
    icon: "🏬",
    tag: "Retail",
    title: "Retail-Focused",
    desc: "Discreet setups and crystal-clear audio designed for customer-facing environments.",
    features: [
      "Lightweight slim radios",
      "Discrete earpiece options",
      "Floor-to-backroom coverage",
      "Staff training guide",
    ],
    color: "from-amber-500 to-orange-500",
    featured: false,
  },
  {
    icon: "🏗️",
    tag: "Industrial",
    title: "Rugged Performance",
    desc: "For warehouses, yards, construction, and louder/harsher working environments.",
    features: [
      "IP67 durable radios",
      "Extended range coverage",
      "Advanced configuration",
      "On-site support available",
    ],
    color: "from-emerald-600 to-teal-600",
    featured: false,
  },
];

const solutions = [
  {
    icon: "🛒",
    title: "Sales & Fleet Setup",
    desc: "We help you choose the right gear, program radios to your specs, and align channels to your team structure — so you're operational from day one.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: "📅",
    title: "Rentals for Events",
    desc: "Short-term radio kits for productions, security teams, festivals, pop-ups, and seasonal operations. Flexible terms, pre-programmed units.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: "🔧",
    title: "Service & Support",
    desc: "Repairs, reprogramming, accessory replacements, and fast troubleshooting. We keep your fleet running with minimal downtime.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
];

const industries = [
  { icon: "🏬", name: "Retail", desc: "Floor coordination" },
  { icon: "📦", name: "Warehousing", desc: "Logistics & fulfillment" },
  { icon: "🏗️", name: "Construction", desc: "Site safety" },
  { icon: "🛡️", name: "Security", desc: "Patrol teams" },
  { icon: "🎪", name: "Events", desc: "Production comms" },
  { icon: "🏨", name: "Hospitality", desc: "Guest services" },
  { icon: "🚚", name: "Transportation", desc: "Fleet dispatch" },
  { icon: "🏢", name: "Property Mgmt", desc: "Building operations" },
];

const steps = [
  {
    num: "01",
    title: "Tell Us Your Needs",
    desc: "Share your team size, site type, and workflow. We'll map the right solution.",
  },
  {
    num: "02",
    title: "We Configure Everything",
    desc: "Radios programmed, channels set, accessories matched. Delivered ready to use.",
  },
  {
    num: "03",
    title: "Deploy & Communicate",
    desc: "Your team is live in minutes. We're here for support, changes, and growth.",
  },
];

const testimonials = [
  {
    quote:
      "Copy That made our warehouse transition seamless. Crystal-clear coverage from dock to dock, and the setup was done in under an hour.",
    name: "Jordan M.",
    role: "Operations Manager",
    company: "Pacific Logistics",
  },
  {
    quote:
      "We rented radios for a 3-day outdoor festival. Flawless performance, great range, and the team was super helpful with channel planning.",
    name: "Sarah K.",
    role: "Event Coordinator",
    company: "Horizon Events",
  },
  {
    quote:
      "Finally, a radio provider that understands retail. Discreet earpieces, clean audio, and they handled all the programming for us.",
    name: "Alex R.",
    role: "Store Director",
    company: "Urban Home",
  },
];

const supportItems = [
  {
    icon: "⚙️",
    title: "Programming & Changes",
    desc: "New channels, call groups, privacy codes, or tone adjustments — updated and shipped fast.",
  },
  {
    icon: "🔩",
    title: "Repairs & Replacements",
    desc: "Diagnose issues, swap units, and get your fleet back to full strength with minimal downtime.",
  },
  {
    icon: "📈",
    title: "Growth Planning",
    desc: "Scale up with repeaters, additional units, new accessories, and expanded coverage mapping.",
  },
];

/* ───────────────────────────────────────────────
   CHECKMARK SVG COMPONENT
─────────────────────────────────────────────── */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ───────────────────────────────────────────────
   APP
─────────────────────────────────────────────── */
export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setActiveSlide((s) => (s + 1) % heroSlides.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const navLinks = [
    { label: "Packages", href: "#packages" },
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "How It Works", href: "#process" },
    { label: "Support", href: "#support" },
    { label: "Contact", href: "#contact" },
  ];

  const W = "mx-auto max-w-[1200px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)]";

  return (
    <div className="font-sans text-ink antialiased">
      {/* ════════════════════════════════════════
          HEADER
      ════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className={W}>
          <div className="header-row-1">
            <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group">
              <span className="logo-mark logo-mark-icon w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] lg:w-[52px] lg:h-[52px] rounded-[14px] bg-gradient-to-br from-blue-600 to-purple-600 border border-blue-200 shadow-lg shadow-blue-500/20 flex items-center justify-center shrink-0 relative overflow-hidden transition-all duration-300">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 26 26"
                  fill="none"
                  className="relative z-10"
                >
                  <circle cx="13" cy="13" r="3" fill="white" />
                  <path d="M8.5 8.5a6.5 6.5 0 0 1 9 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".9" />
                  <path d="M5.5 5.5a10.5 10.5 0 0 1 15 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
                  <path d="M17.5 17.5a6.5 6.5 0 0 1-9 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".9" />
                  <path d="M20.5 20.5a10.5 10.5 0 0 1-15 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="flex items-center">
                  <span className="text-gray-900 font-black text-[18px] sm:text-[20px] tracking-tight">Copy</span>
                  <span className="mx-1 text-blue-400 font-light">/</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black text-[18px] sm:text-[20px] tracking-tight">That</span>
                </span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 font-semibold tracking-wider uppercase">2-Way Communications</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-3">
              <a href="#packages" className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 font-bold text-[14px] hover:bg-gray-50 hover:border-gray-300 transition-all">
                View Packages
              </a>
              <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[14px] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Get a Quote
              </a>
            </div>

            <button
              className="lg:hidden px-3 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 text-lg cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <nav className="hidden lg:flex items-center justify-center gap-8 py-3 border-t border-gray-100" aria-label="Primary navigation">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-600 hover:text-blue-600 font-semibold text-[14px] transition-colors">{l.label}</a>
            ))}
          </nav>
        </div>

        <div className={`lg:hidden mobile-drawer ${menuOpen ? "open" : ""} border-t border-gray-100 bg-white/95 backdrop-blur-md`}>
          <div className={`${W} py-4 grid gap-2`}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-2xl border border-gray-100 bg-gray-50 text-gray-700 font-bold text-[14px] active:bg-gray-100"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 mt-3">
              <a href="#packages" onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-3 rounded-2xl border border-gray-200 bg-white text-gray-700 font-bold text-[14px]">
                Packages
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[14px]">
                Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          HERO - LIGHT THEME
      ════════════════════════════════════════ */}
      <section id="top" className="relative h-[100svh] min-h-[580px] sm:min-h-[700px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
              activeSlide === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover opacity-10"
              style={{ animation: "kenBurns 20s ease-in-out infinite alternate" }}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-blue-50/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/80" />
        
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 h-full flex items-center">
          <div className={W}>
            <div className="max-w-3xl pt-24 sm:pt-16">
              <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 mb-5 sm:mb-8 rounded-full border border-blue-200 bg-white/90 backdrop-blur-md shadow-lg shadow-blue-100/50">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-green-500 animate-pulse" />
                <span className="text-gray-700 font-semibold text-[11px] sm:text-[13px] tracking-wide">
                  Trusted 2-Way Radio Solutions
                </span>
              </div>

              {heroSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    activeSlide === i
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 translate-y-6 absolute pointer-events-none"
                  }`}
                >
                  {activeSlide === i && (
                    <>
                      <h1 className="animate-fade-in-up-delay-1 text-gray-900 font-black text-[32px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] mb-3">
                        {slide.headline}
                      </h1>
                      <p className="animate-fade-in-up-delay-2 font-bold text-[16px] sm:text-[20px] md:text-[24px] mb-4 sm:mb-5 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {slide.sub}
                      </p>
                      <p className="animate-fade-in-up-delay-2 text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-6 sm:mb-10 max-w-xl">
                        {slide.description}
                      </p>
                    </>
                  )}
                </div>
              ))}

              <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-14">
                <a
                  href="#packages"
                  className="group relative px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-[14px] sm:text-[15px] shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
                >
                  <span className="relative z-10">
                    Explore Packages{" "}
                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full border-2 border-blue-300 bg-white/90 backdrop-blur-md text-blue-700 font-bold text-[14px] sm:text-[15px] hover:bg-white hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 text-center shadow-lg shadow-blue-100/30"
                >
                  Request Pricing
                </a>
              </div>

              <div className="animate-fade-in-up-delay-4 grid grid-cols-3 gap-2 sm:gap-3 max-w-sm sm:max-w-lg">
                {[
                  { val: "500+", label: "Radios Deployed" },
                  { val: "24hr", label: "Support" },
                  { val: "99.9%", label: "Uptime" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="text-center px-2 py-3 sm:px-4 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-lg shadow-gray-100/50"
                  >
                    <span className="block font-black text-[16px] sm:text-[22px] leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {s.val}
                    </span>
                    <span className="block text-gray-500 text-[10px] sm:text-[12px] font-medium mt-1 sm:mt-2">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 sm:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                activeSlide === i
                  ? "w-10 sm:w-12 bg-blue-600"
                  : "w-3 sm:w-4 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <a
          href="#features"
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[9px] sm:text-[10px] font-bold tracking-[3px] uppercase">Discover</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ animation: "scrollBounce 2s infinite" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      <main>
        {/* ════════════════════════════════════════
            TRUSTED BY MARQUEE
        ════════════════════════════════════════ */}
        <div className="border-b border-ink/6 bg-white py-4 sm:py-6 overflow-hidden">
          <div className="flex items-center gap-8 sm:gap-12 whitespace-nowrap marquee-track" style={{ width: "max-content" }}>
            {[0, 1].map((rep) => (
              <div key={rep} className="flex items-center gap-8 sm:gap-12">
                {[
                  "Trusted by retail teams", "•",
                  "Event production crews", "•",
                  "Warehouse operators", "•",
                  "Construction sites", "•",
                  "Security patrols", "•",
                  "Hotel & hospitality", "•",
                  "Property management", "•",
                ].map((t, i) => (
                  <span key={i} className={`text-[11px] sm:text-[13px] font-semibold ${t === "•" ? "text-accent/40" : "text-muted/60"}`}>
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════
            FEATURES / WHY COPY THAT
        ════════════════════════════════════════ */}
        <section id="features" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-softer to-white relative overflow-hidden">
          <div className="absolute top-20 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/4 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
          <div className="absolute bottom-20 -left-40 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent2/4 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

          <div className={W}>
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-5 rounded-full bg-accent/8 text-accent font-bold text-[11px] sm:text-[12px] tracking-wider uppercase">
                  Why Copy That
                </span>
                <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-ink">
                  Everything you need for{" "}
                  <span className="gradient-text">seamless communication</span>
                </h2>
                <p className="text-muted text-[14px] sm:text-[16px] mt-4 sm:mt-5 leading-relaxed">
                  From planning to deployment to ongoing support — we handle
                  every detail so your team stays connected.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {features.map((f, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className="group relative rounded-2xl sm:rounded-3xl bg-white border border-ink/6 p-5 sm:p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                    <div className={`feature-icon bg-gradient-to-br ${f.color} border ${f.border} mb-4 sm:mb-5`}>
                      <span className="text-[24px] sm:text-[28px]">{f.icon}</span>
                    </div>
                    <h3 className="font-bold text-[16px] sm:text-[17px] tracking-tight mb-2 text-ink">{f.title}</h3>
                    <p className="text-muted text-[13px] sm:text-[14px] leading-relaxed">{f.desc}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-r from-accent/0 via-accent/20 to-accent2/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ════════════════════════════════════════
            PACKAGES
        ════════════════════════════════════════ */}
        <section id="packages" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-softer relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.06),transparent_60%)] pointer-events-none" />

          <div className={W}>
            <Reveal>
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 sm:mb-14">
                <div>
                  <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-5 rounded-full bg-accent/8 text-accent font-bold text-[11px] sm:text-[12px] tracking-wider uppercase">
                    Packages
                  </span>
                  <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-black tracking-[-0.03em] text-ink">
                    Choose your <span className="gradient-text">perfect fit</span>
                  </h2>
                  <p className="text-muted mt-3 max-w-lg text-[14px] sm:text-[15px] leading-relaxed">
                    Four tailored starting points. Customize with accessories, channels, coverage, and support level.
                  </p>
                </div>
                <a href="#contact" className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-ink/10 bg-white text-ink font-bold text-[13px] sm:text-[14px] hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap shadow-sm">
                  Request Pricing
                </a>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              {packages.map((pkg, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className={`pkg-card ${pkg.featured ? "featured" : "border border-ink/8 bg-white"} p-5 sm:p-7 h-full flex flex-col relative group`}>
                    {pkg.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-accent to-accent2 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-lg shadow-accent/30 z-10 whitespace-nowrap">
                        Most Popular
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg`}>
                        {pkg.icon}
                      </div>
                      <div>
                        <span className="block text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-muted">Copy That</span>
                        <span className="block text-[14px] sm:text-[15px] font-black text-ink">{pkg.tag}</span>
                      </div>
                    </div>
                    <h3 className="font-black text-[18px] sm:text-[20px] tracking-tight mb-2 text-ink">{pkg.title}</h3>
                    <p className="text-muted text-[13px] sm:text-[14px] leading-relaxed mb-4 sm:mb-5">{pkg.desc}</p>
                    <div className="flex-1">
                      <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                        {pkg.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2.5 sm:gap-3 text-[12.5px] sm:text-[13.5px] text-ink/75">
                            <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0 text-accent2" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="#contact"
                      className={`block text-center py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-[13px] sm:text-[14px] transition-all duration-300 ${
                        pkg.featured
                          ? "bg-gradient-to-r from-accent to-accent2 text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-0.5"
                          : "border border-ink/10 bg-soft/80 text-ink hover:bg-ink hover:text-white hover:border-ink"
                      }`}
                    >
                      Get a Quote →
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ════════════════════════════════════════
            SOLUTIONS
        ════════════════════════════════════════ */}
        <section id="solutions" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-softer to-white relative">
          <div className={W}>
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-5 rounded-full bg-accent2/10 text-green-700 font-bold text-[11px] sm:text-[12px] tracking-wider uppercase">
                  Solutions
                </span>
                <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-black tracking-[-0.03em] text-ink">
                  Deploy, manage, and <span className="gradient-text">scale with ease</span>
                </h2>
                <p className="text-muted text-[14px] sm:text-[16px] mt-4 sm:mt-5 leading-relaxed">
                  Whether you&rsquo;re buying, renting, or need service — we&rsquo;ve got a solution that fits.
                </p>
              </div>
            </Reveal>

            <div className="space-y-5 sm:space-y-8">
              {solutions.map((s, i) => (
                <Reveal key={i}>
                  <div className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-ink/6 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className="solution-img-wrapper w-full md:w-2/5 relative overflow-hidden" style={{ minHeight: "240px" }}>
                      <img
                        src={s.image}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/10 to-transparent" />
                    </div>
                    <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-14 flex flex-col justify-center">
                      <span className="text-3xl sm:text-4xl mb-3 sm:mb-5 block">{s.icon}</span>
                      <h3 className="font-black text-[20px] sm:text-[24px] tracking-tight mb-2 sm:mb-3 text-ink">{s.title}</h3>
                      <p className="text-muted text-[13px] sm:text-[15px] leading-relaxed mb-4 sm:mb-6 max-w-lg">{s.desc}</p>
                      <a href="#contact" className="inline-flex items-center gap-2 font-bold text-accent text-[13px] sm:text-[14px] group-hover:gap-3 transition-all hover-underline w-fit">
                        Learn more <span>→</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            INDUSTRIES — DARK SECTION
        ════════════════════════════════════════ */}
        <section id="industries" className="dark-section py-16 sm:py-24 md:py-32">
          <div className={`${W} relative z-10`}>
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-5 rounded-full bg-white/[0.08] border border-white/10 text-white/80 font-bold text-[11px] sm:text-[12px] tracking-wider uppercase">
                  Industries
                </span>
                <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-black tracking-[-0.03em] text-white">
                  Built for teams that <span className="gradient-text">move fast</span>
                </h2>
                <p className="text-white/50 text-[14px] sm:text-[16px] mt-4 sm:mt-5 leading-relaxed">
                  Wherever coordination and safety matter, clear communication makes all the difference.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {industries.map((ind, i) => (
                <Reveal key={i} delay={(i % 4) + 1}>
                  <div className="group text-center rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/15 hover:-translate-y-2 transition-all duration-500 cursor-default">
                    <span className="text-2xl sm:text-4xl mb-2 sm:mb-4 block group-hover:scale-110 transition-transform duration-300">
                      {ind.icon}
                    </span>
                    <h4 className="font-bold text-white text-[12px] sm:text-[15px] mb-0.5 sm:mb-1">{ind.name}</h4>
                    <p className="text-white/40 text-[10px] sm:text-[12px] font-medium">{ind.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            HOW IT WORKS
        ════════════════════════════════════════ */}
        <section id="process" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-softer to-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.05),transparent_60%)] pointer-events-none" />

          <div className={W}>
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
                <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-5 rounded-full bg-purple/10 text-purple font-bold text-[11px] sm:text-[12px] tracking-wider uppercase">
                  How It Works
                </span>
                <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-black tracking-[-0.03em] text-ink">
                  Three steps to <span className="gradient-text-purple">clear communication</span>
                </h2>
                <p className="text-muted text-[14px] sm:text-[16px] mt-4 sm:mt-5 leading-relaxed">
                  Getting started is simple. We handle the complexity — you just communicate.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
              <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-accent via-purple to-accent2 opacity-20 z-0" />

              {steps.map((step, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className="relative text-center group flex flex-row md:flex-col items-center md:items-center gap-5 md:gap-0">
                    <div className="relative z-10 w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] md:w-[88px] md:h-[88px] shrink-0 md:mx-auto md:mb-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-ink to-[#1a2540] flex items-center justify-center shadow-2xl shadow-ink/20 group-hover:-translate-y-2 transition-all duration-500">
                      <span className="text-[20px] sm:text-[24px] md:text-[28px] font-black gradient-text">{step.num}</span>
                    </div>
                    <div className="text-left md:text-center">
                      <h3 className="font-black text-[17px] sm:text-[18px] md:text-[20px] tracking-tight mb-1.5 sm:mb-3 text-ink">{step.title}</h3>
                      <p className="text-muted text-[13px] sm:text-[14px] leading-relaxed max-w-xs">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ════════════════════════════════════════
            TESTIMONIALS
        ════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-softer relative overflow-hidden">
          <div className="absolute -bottom-20 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/4 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

          <div className={W}>
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
                <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-5 rounded-full bg-amber/10 text-amber font-bold text-[11px] sm:text-[12px] tracking-wider uppercase">
                  Testimonials
                </span>
                <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-black tracking-[-0.03em] text-ink">
                  Trusted by teams <span className="gradient-text">across industries</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.map((t, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className="testimonial-card h-full flex flex-col">
                    <div className="flex gap-1 mb-4 sm:mb-5">
                      {[0, 1, 2, 3, 4].map((j) => (
                        <svg key={j} className="w-4 h-4 sm:w-5 sm:h-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-ink/80 text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8 flex-1 italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t border-ink/6">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-white font-black text-[12px] sm:text-[14px]">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-[13px] sm:text-[14px] text-ink">{t.name}</div>
                        <div className="text-muted text-[11px] sm:text-[12px]">{t.role} · {t.company}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SUPPORT
        ════════════════════════════════════════ */}
        <section id="support" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-softer to-white relative">
          <div className={W}>
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
                <div>
                  <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-5 rounded-full bg-accent/8 text-accent font-bold text-[11px] sm:text-[12px] tracking-wider uppercase">
                    Support
                  </span>
                  <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-black tracking-[-0.03em] text-ink">
                    We&rsquo;re here when <span className="gradient-text">you need us</span>
                  </h2>
                  <p className="text-muted mt-2 sm:mt-3 max-w-lg text-[14px] sm:text-[15px] leading-relaxed">
                    Fast answers, clean configurations, and a simple path to upgrades.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {supportItems.map((s, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className="group relative rounded-2xl sm:rounded-3xl bg-white border border-ink/6 p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-3xl sm:text-4xl mb-4 sm:mb-5 block">{s.icon}</span>
                    <h3 className="font-bold text-[16px] sm:text-[18px] tracking-tight mb-2 sm:mb-3 text-ink">{s.title}</h3>
                    <p className="text-muted text-[13px] sm:text-[14px] leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA / CONTACT
        ════════════════════════════════════════ */}
        <section id="contact" className="py-12 sm:py-24 md:py-32 relative overflow-hidden">
          <div className={W}>
            <Reveal>
              <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ink via-[#0f1b33] to-[#0a1628]" />
                <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_30%,rgba(37,99,235,0.2),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_70%,rgba(34,197,94,0.12),transparent_60%)]" />
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-16 md:px-16 md:py-24 text-center">
                  <span className="inline-block px-3 sm:px-4 py-1.5 mb-5 sm:mb-6 rounded-full border border-white/15 bg-white/[0.08] text-white/80 font-bold text-[11px] sm:text-[12px] tracking-wider uppercase">
                    Get Started
                  </span>
                  <h2 className="text-[24px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-black tracking-[-0.03em] text-white mb-4 sm:mb-5 max-w-2xl mx-auto leading-[1.1]">
                    Ready to upgrade your team&rsquo;s communication?
                  </h2>
                  <p className="text-white/55 text-[13px] sm:text-[16px] leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
                    Tell us your team size, environment, and timeline. We&rsquo;ll recommend the best package and pricing — no obligation.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <a
                      href="mailto:hello@copythat.ca?subject=Quote%20Request"
                      className="px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-accent to-accent2 text-white font-bold text-[14px] sm:text-[15px] shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      Email for Quote
                    </a>
                    <a
                      href="tel:+15870000000"
                      className="px-8 sm:px-10 py-4 rounded-full border-2 border-white/20 bg-white/[0.08] backdrop-blur text-white font-bold text-[14px] sm:text-[15px] hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
                    >
                      📞 Call Now
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-8 text-white/40 text-[12px] sm:text-[13px] font-medium">
                    <span className="flex items-center justify-center gap-2">
                      <CheckIcon className="w-4 h-4 text-accent2" />
                      Free consultation
                    </span>
                    <span className="flex items-center justify-center gap-2">
                      <CheckIcon className="w-4 h-4 text-accent2" />
                      No obligation quote
                    </span>
                    <span className="flex items-center justify-center gap-2">
                      <CheckIcon className="w-4 h-4 text-accent2" />
                      Fast response
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="footer-gradient text-white pt-12 sm:pt-20 pb-6 sm:pb-8">
        <div className={W}>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-16">
            <div className="col-span-2 sm:col-span-2 md:col-span-1">
              <a href="#top" className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0d1528] to-[#1a2540] border border-white/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
                    <circle cx="13" cy="13" r="3" fill="url(#flg)" />
                    <path d="M8.5 8.5a6.5 6.5 0 0 1 9 0" stroke="url(#flg)" strokeWidth="1.5" strokeLinecap="round" opacity=".9" />
                    <path d="M17.5 17.5a6.5 6.5 0 0 1-9 0" stroke="url(#flg)" strokeWidth="1.5" strokeLinecap="round" opacity=".9" />
                    <defs>
                      <linearGradient id="flg" x1="0" y1="0" x2="26" y2="26">
                        <stop stopColor="#60a5fa" />
                        <stop offset="1" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>
                  <span className="block font-black text-[15px] sm:text-[16px] text-white">Copy That</span>
                  <span className="block text-[10px] sm:text-[11px] text-white/40 tracking-wider uppercase">2-Way Communications</span>
                </span>
              </a>
              <p className="text-white/40 text-[12px] sm:text-[13px] leading-relaxed max-w-xs">
                Modern 2-way radio solutions for teams that need clear, reliable communication.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[12px] sm:text-[13px] uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Quick Links</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {["Packages", "Solutions", "Industries", "How It Works", "Support"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().replace(/ /g, "")}`} className="text-white/40 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[12px] sm:text-[13px] uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Solutions</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {["Sales & Setup", "Event Rentals", "Service & Repair", "Coverage Planning", "Fleet Management"].map((l) => (
                  <li key={l}>
                    <a href="#contact" className="text-white/40 hover:text-white text-[13px] sm:text-[14px] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-[12px] sm:text-[13px] uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Contact</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-white/40 text-[13px] sm:text-[14px]">
                <li className="flex items-center gap-2">
                  <span className="text-[14px] sm:text-[16px]">📧</span>
                  <a href="mailto:hello@copythat.ca" className="hover:text-white transition-colors">hello@copythat.ca</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[14px] sm:text-[16px]">📞</span>
                  <a href="tel:+15870000000" className="hover:text-white transition-colors">(587) 000-0000</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[14px] sm:text-[16px]">📍</span>
                  <span>Alberta, Canada</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <span className="text-white/30 text-[12px] sm:text-[13px]">
              © {new Date().getFullYear()} Copy That. All rights reserved.
            </span>
            <div className="flex items-center gap-4 sm:gap-6 text-white/30 text-[12px] sm:text-[13px]">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
              <span className="text-white/15 hidden sm:inline">•</span>
              <span className="hidden sm:inline">Designed with precision</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}