import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "portal">("home");
  const [activeTab, setActiveTab] = useState("Home");
  const [isStartedHovered, setIsStartedHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredServiceCard, setHoveredServiceCard] = useState<number | null>(null);

  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  const handleNavClick = (item: string) => {
    setActiveTab(item);
    if (item === "Home") {
      setCurrentPage("home");
    } else {
      setCurrentPage("portal");
    }
  };

  const handleGetStarted = () => {
    setCurrentPage("portal");
    setActiveTab("About");
  };

  const cardsData = [
    {
      id: 1,
      title: "Advanced AI Systems",
      desc: "Cutting-edge artificial intelligence solutions.",
      color: "purple",
      glowClass: "group-hover:shadow-[0_0_25px_rgba(189,0,255,0.35)]",
      borderColor: "from-[#bd00ff]/30 via-[#3b82f6]/40 to-[#00f0ff]/30",
      hoverBorderColor: "from-[#bd00ff] via-[#4f46e5] to-[#3b82f6]",
      iconGlow: "rgba(189, 0, 255, 0.45)",
      hexStroke: "#bd00ff",
      hexFill: "rgba(189, 0, 255, 0.15)",
      iconPath: (
        <path
          d="M50 30 L65 52 L55 52 L55 70 L45 70 L45 52 L35 52 Z"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
      extraIcon: (
        <>
          <path d="M50 40 L50 78" stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="50" cy="78" r="3" fill="#00f0ff" />
        </>
      ),
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      desc: "Protecting your digital world.",
      color: "blue",
      glowClass: "group-hover:shadow-[0_0_25px_rgba(0,240,255,0.35)]",
      borderColor: "from-[#00f0ff]/30 via-[#0072ff]/40 to-[#bd00ff]/30",
      hoverBorderColor: "from-[#00f0ff] via-[#0072ff] to-[#bd00ff]",
      iconGlow: "rgba(0, 240, 255, 0.45)",
      hexStroke: "#00f0ff",
      hexFill: "rgba(0, 240, 255, 0.15)",
      iconPath: (
        <path
          d="M50 28 C 38 28, 30 35, 30 46 C 30 62, 50 74, 50 74 C 50 74, 70 62, 70 46 C 70 35, 62 28, 50 28 Z"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
      extraIcon: (
        <>
          <circle cx="50" cy="50" r="5" fill="#00f0ff" />
          <path d="M47 50 A 3 3 0 0 1 50 47" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ),
    },
    {
      id: 3,
      title: "Future Tech Development",
      desc: "Building tomorrow's innovations.",
      color: "teal",
      glowClass: "group-hover:shadow-[0_0_25px_rgba(45,212,191,0.35)]",
      borderColor: "from-[#2dd4bf]/30 via-[#14b8a6]/40 to-[#00f0ff]/30",
      hoverBorderColor: "from-[#2dd4bf] via-[#14b8a6] to-[#00f0ff]",
      iconGlow: "rgba(45, 212, 191, 0.45)",
      hexStroke: "#2dd4bf",
      hexFill: "rgba(45, 212, 191, 0.15)",
      iconPath: (
        <path
          d="M28 42 L72 42 L76 58 L68 62 L50 56 L32 62 L24 58 Z"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
      extraIcon: (
        <>
          <line x1="30" y1="50" x2="70" y2="50" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="50,42 50,56" stroke="#00f0ff" strokeWidth="2.5" />
        </>
      ),
    },
  ];

  // Core Services Data for Section 2 (corresponds precisely to the provided Service Panel Reference image)
  const coreServices = [
    {
      id: 1,
      title: "AI & ML Solutions",
      desc: "Intelligent systems designed to automate, analyze, and accelerate.",
      borderColor: "from-[#00f0ff]/40 to-[#3b82f6]/40",
      hoverBorder: "from-[#00f0ff] to-[#3b82f6]",
      glowColor: "rgba(0, 240, 255, 0.4)",
      hexStroke: "#00f0ff",
      hexFill: "rgba(0, 240, 255, 0.08)",
      icon: (
        // Advanced AI chip / brain nodes symbol
        <>
          <rect x="36" y="36" width="28" height="28" rx="4" fill="none" stroke="#fff" strokeWidth="2" />
          <line x1="50" y1="24" x2="50" y2="36" stroke="#00f0ff" strokeWidth="2" />
          <line x1="50" y1="64" x2="50" y2="76" stroke="#00f0ff" strokeWidth="2" />
          <line x1="24" y1="50" x2="36" y2="50" stroke="#00f0ff" strokeWidth="2" />
          <line x1="64" y1="50" x2="76" y2="50" stroke="#00f0ff" strokeWidth="2" />
          
          <circle cx="50" cy="50" r="4" fill="#00f0ff" />
          <circle cx="50" cy="24" r="2" fill="#fff" />
          <circle cx="50" cy="76" r="2" fill="#fff" />
          <circle cx="24" cy="50" r="2" fill="#fff" />
          <circle cx="76" cy="50" r="2" fill="#fff" />
        </>
      ),
    },
    {
      id: 2,
      title: "Cyber Defense",
      desc: "Robust security solutions to safeguard your data and digital infrastructure.",
      borderColor: "from-[#3b82f6]/40 to-[#bd00ff]/40",
      hoverBorder: "from-[#3b82f6] to-[#bd00ff]",
      glowColor: "rgba(189, 0, 255, 0.4)",
      hexStroke: "#3b82f6",
      hexFill: "rgba(59, 130, 246, 0.08)",
      icon: (
        // Detailed security shield with lock
        <>
          <path
            d="M50 26 C40 26, 32 30, 32 42 C32 58, 50 74, 50 74 C50 74, 68 58, 68 42 C68 30, 60 26, 50 26 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          />
          {/* Inner Lock indicator */}
          <rect x="44" y="46" width="12" height="10" rx="1.5" fill="none" stroke="#00f0ff" strokeWidth="1.5" />
          <path d="M47 46 V42 C47 40, 50 38, 50 38 C50 38, 53 40, 53 42 V46" fill="none" stroke="#00f0ff" strokeWidth="1.5" />
        </>
      ),
    },
    {
      id: 3,
      title: "DX & Innovation",
      desc: "Driving digital transformation with innovative strategies and technologies.",
      borderColor: "from-[#bd00ff]/40 to-[#fb7185]/40",
      hoverBorder: "from-[#bd00ff] to-[#fb7185]",
      glowColor: "rgba(251, 113, 133, 0.4)",
      hexStroke: "#bd00ff",
      hexFill: "rgba(189, 0, 255, 0.08)",
      icon: (
        // Quantum box / hyper-cube node
        <>
          <rect x="34" y="34" width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" />
          <rect x="42" y="42" width="16" height="16" fill="none" stroke="#00f0ff" strokeWidth="1.5" />
          
          <line x1="34" y1="34" x2="42" y2="42" stroke="#fff" strokeWidth="1.5" />
          <line x1="66" y1="34" x2="58" y2="42" stroke="#fff" strokeWidth="1.5" />
          <line x1="34" y1="66" x2="42" y2="58" stroke="#fff" strokeWidth="1.5" />
          <line x1="66" y1="66" x2="58" y2="58" stroke="#fff" strokeWidth="1.5" />
        </>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans overflow-x-hidden cyber-grid select-none flex flex-col justify-between scanlines">
      {/* Cinematic High-Tech Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-30 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dxkdwjc9y/video/upload/v1781705408/kling_20260617_VIDEO__5498_0_q0me26.mp4"
        />
        {/* Semi-transparent overlay layer for contrast and neon glow readability */}
        <div className="absolute inset-0 bg-[#02050c]/85 md:bg-[#000104]/80 backdrop-blur-[1px]" />
      </div>

      {/* Absolute Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-900/15 to-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[500px] bg-gradient-to-r from-purple-900/15 to-cyan-900/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-cyber-pulse" />

      {/* Decorative top grid dots wrapper */}
      <div className="absolute inset-0 cyber-grid-dots opacity-40 pointer-events-none -z-10" />

      {/* ==================== SCREEN HEADER & NAVBAR ==================== */}
      <header className="relative w-full z-40 max-w-7xl mx-auto px-6 pt-6">
        <div className="relative flex items-center justify-between pb-4">
          {/* Logo Brand Frame */}
          <div 
            onClick={() => handleNavClick("Home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Nexoranova Complex Overlapping Geometric N SVG Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#00f0ff]/10 rounded-lg blur-md group-hover:bg-[#bd00ff]/15 transition-all duration-500" />
              <svg
                width="34"
                height="34"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 filter drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]"
              >
                <defs>
                  <linearGradient id="logo-ribbon-left" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bd00ff" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="logo-ribbon-right" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                  <linearGradient id="logo-diag" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#bd00ff" />
                  </linearGradient>
                </defs>
                <polygon points="12,85 32,85 32,20 12,38" fill="url(#logo-ribbon-left)" />
                <polygon points="68,85 88,67 88,20 68,20" fill="url(#logo-ribbon-right)" />
                <polygon points="32,20 68,85 68,70 32,35" fill="url(#logo-diag)" />
              </svg>
            </div>
            
            {/* Brand Typography */}
            <span 
              id="brand-name"
              className="text-white font-system font-medium tracking-[0.22em] text-lg lg:text-xl transition-all duration-300 group-hover:text-cyber-blue"
            >
              NEXORANOVA
            </span>
          </div>

          {/* Central Navigation Links */}
          {currentPage === "home" ? (
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    id={`nav-item-${item.toLowerCase()}`}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
                      isActive 
                        ? "text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] font-bold" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-[-16px] left-[15%] right-[15%] h-[3px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"
                        style={{
                          boxShadow: "0 0 12px 1.5px rgba(0, 240, 255, 0.8)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          ) : (
            <div className="hidden md:block font-system text-xs font-semibold tracking-[0.3em] uppercase text-slate-500 hover:text-[#00f0ff] transition-colors duration-300 select-none">
              [ SECURED ACCESS GATEWAY ]
            </div>
          )}

          {/* Glowing CTA Button or Back to Home Icon Button */}
          <div>
            {currentPage === "home" ? (
              <motion.button
                id="btn-get-started"
                onHoverStart={() => setIsStartedHovered(true)}
                onHoverEnd={() => setIsStartedHovered(false)}
                onClick={handleGetStarted}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-6 py-2 rounded-lg bg-[#010915] text-white text-xs font-bold tracking-widest uppercase cursor-pointer overflow-hidden transition-all duration-500"
              >
                <div 
                  className={`absolute inset-0 p-[1.5px] rounded-lg bg-gradient-to-r from-[#00f0ff]/40 via-[#3b82f6]/50 to-[#bd00ff]/40 transition-all duration-500 ${
                    isStartedHovered 
                      ? "opacity-100 scale-100 shadow-[0_0_20px_rgba(0,240,255,0.5)] bg-gradient-to-r from-cyber-blue via-blue-500 to-cyber-purple" 
                      : "opacity-80"
                  }`}
                  style={{
                    clipPath: "padding-box",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />
                
                <span className="relative z-10 px-2 py-0.5 text-slate-100 tracking-[0.16em] flex items-center justify-center gap-1 font-system">
                  Get Started
                </span>

                <AnimatePresence>
                  {isStartedHovered && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      exit={{ x: "200%" }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ) : (
              <motion.button
                id="btn-back-home-icon"
                onClick={() => handleNavClick("Home")}
                whileHover={{ 
                  scale: 1.06, 
                  boxShadow: "0 0 15px rgba(0, 240, 255, 0.45)",
                  borderColor: "#00f0ff"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00f0ff]/30 bg-[#010915]/90 text-xs font-bold tracking-widest uppercase text-[#00f0ff] transition-all duration-300"
              >
                <Home className="w-4 h-4 text-cyber-blue animate-pulse" />
                <span className="hidden sm:inline font-system text-slate-200 group-hover:text-amber-300">Home</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* High-Tech Shield/Visor Boundary HUD Vector line */}
        <div className="relative w-full h-[16px] overflow-hidden opacity-90">
          <svg className="w-full h-full pointer-events-none" viewBox="0 0 1200 16" preserveAspectRatio="none">
            <path 
              d="M 0 2 C 50 2, 80 14, 150 14 L 1050 14 C 1120 14, 1150 2, 1200 2" 
              fill="none" 
              stroke="url(#navbar-glow-grad)" 
              strokeWidth="1" 
              className="opacity-40" 
            />
            <path 
              d="M 120 14 L 1080 14" 
              fill="none" 
              stroke="url(#navbar-glow-grad)" 
              strokeWidth="1.5" 
              className="opacity-85" 
            />
            <defs>
              <linearGradient id="navbar-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#bd00ff" stopOpacity="0.1" />
                <stop offset="15%" stopColor="#00f0ff" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#00f0ff" stopOpacity="1.0" />
                <stop offset="85%" stopColor="#00f0ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#bd00ff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </header>

      {/* ==================== CORE SCREENS VIEW LAYER ==================== */}
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          /* ========================================================= */
          /* ==================== VIEW 1: HERO HOME ================== */
          /* ========================================================= */
          <motion.div
            key="home-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-grow flex flex-col justify-between"
          >
            {/* Main Hero titles and callouts */}
            <main className="relative flex-grow flex flex-col justify-center items-start max-w-7xl mx-auto px-8 w-full py-16">
              <div className="max-w-4xl space-y-8 z-20">
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-system font-bold tracking-[-0.015em] flex flex-col"
                  >
                    <span className="leading-tight select-none">
                      <span className="text-[#FFA2B6] drop-shadow-[0_0_22px_rgba(255,162,182,0.18)] select-none">Innovating</span>{" "}
                      <span className="text-[#7DE2FC] drop-shadow-[0_0_22px_rgba(125,226,252,0.18)] select-none">the Future</span>
                    </span>
                    <span className="leading-tight select-none mt-2">
                      <span className="text-[#7C88FE] drop-shadow-[0_0_22px_rgba(124,136,254,0.18)] select-none">of Technology</span>
                    </span>
                  </motion.h1>

                  <motion.p
                    id="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1.2 }}
                    className="text-base sm:text-lg text-slate-300 font-sans font-light tracking-widest max-w-xl pt-2 pl-1 select-none"
                  >
                    Pioneering the next generation of digital solutions.
                  </motion.p>
                </div>

                {/* Primary Discover More action */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1.0 }}
                  className="pt-2 pl-1"
                >
                  <motion.button
                    id="btn-discover-more"
                    onClick={handleGetStarted}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 0 25px rgba(0, 240, 255, 0.45)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative px-8 py-3.5 rounded-xl bg-[#020914] text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase cursor-pointer border border-[#00f0ff]/50 hover:border-[#00f0ff] overflow-hidden shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 font-system"
                  >
                    Discover More
                    <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent skew-x-12 hover:animate-[swipe_1.5s_ease-in-out_infinite]" />
                  </motion.button>
                </motion.div>
              </div>
            </main>

            {/* Bottom high-tech details deck & cards */}
            <footer className="relative w-full z-30 pb-16 pt-6 px-6">
              {/* Connector border line */}
              <div className="relative w-full max-w-7xl mx-auto px-4 mb-8">
                <div className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent flex items-center justify-between">
                  <div className="absolute left-0 -translate-y-1/2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-ping absolute" />
                    <div 
                      className="w-3 h-5 bg-gradient-to-r from-[#00f0ff] to-cyan-500 fill-none" 
                      style={{
                        clipPath: "polygon(100% 0, 0 50%, 100% 100%, 40% 50%)",
                        filter: "drop-shadow(0 0 6px rgba(0,240,255,0.9))"
                      }}
                    />
                  </div>

                  <div className="absolute right-0 -translate-y-1/2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#bd00ff] rounded-full animate-ping absolute" />
                    <div 
                      className="w-3 h-5 bg-gradient-to-r from-purple-500 to-[#bd00ff] fill-none" 
                      style={{
                        clipPath: "polygon(0 0, 100% 50%, 0 100%, 60% 50%)",
                        filter: "drop-shadow(0 0 6px rgba(189,0,255,0.9))"
                      }}
                    />
                  </div>

                  <div className="w-1/3 mx-auto h-[3px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent shadow-[0_0_15px_#00f0ff]" />
                </div>
              </div>

              {/* Grid block of 3 tech items */}
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {cardsData.map((card, idx) => {
                  const isHovered = hoveredCard === idx;
                  return (
                    <div
                      key={card.id}
                      id={`tech-card-${idx + 1}`}
                      className="relative group cursor-pointer"
                      onClick={handleGetStarted}
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div 
                        className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-r ${
                          isHovered 
                            ? "from-[#bd00ff]/20 via-[#00f0ff]/25 to-[#2dd4bf]/20 blur-xl opacity-100" 
                            : "opacity-0 blur-md"
                        } transition-all duration-500 pointer-events-none`}
                      />

                      <div
                        className="relative p-[1.5px] transition-all duration-500 overflow-hidden"
                        style={{
                          clipPath: "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)"
                        }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${card.borderColor} transition-all duration-500 ${
                          isHovered ? `bg-gradient-to-r ${card.hoverBorderColor} scale-105 opacity-100` : "opacity-80"
                        }`} />

                        <div
                          className="relative bg-gradient-to-b from-[#020610]/95 via-[#01040a]/98 to-[#000104]/100 p-6 flex items-center gap-5 transition-all duration-500"
                          style={{
                            clipPath: "polygon(13px 0, calc(100% - 13px) 0, 100% 13px, 100% calc(100% - 13px), calc(100% - 13px) 100%, 13px 100%, 0 calc(100% - 13px), 0 13px)",
                            minHeight: "100px"
                          }}
                        >
                          <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                            <div 
                              className="absolute inset-0 transition-transform duration-500 rounded-full blur-lg opacity-40 scale-75 group-hover:scale-110"
                              style={{ backgroundColor: card.iconGlow }}
                            />
                            
                            <svg 
                              viewBox="0 0 100 100" 
                              fill="none" 
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-14 h-14 relative z-10 filter transition-transform duration-500 group-hover:scale-105"
                            >
                              <polygon 
                                points="50,4 92,27 92,73 50,96 8,73 8,27" 
                                fill={card.hexFill} 
                                stroke={card.hexStroke} 
                                strokeWidth="2.5" 
                                className="transition-all duration-300"
                              />
                              {card.iconPath}
                              {card.extraIcon}
                            </svg>
                          </div>

                          <div className="space-y-0.5 flex-grow">
                            <h3 className="text-white text-[15px] sm:text-[17px] font-system font-semibold tracking-wider transition-colors duration-300 group-hover:text-[#00f0ff]">
                              {card.title}
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-[13px] font-sans font-light tracking-wide leading-snug">
                              {card.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </footer>
          </motion.div>
        ) : (
          /* ========================================================= */
          /* ==================== VIEW 2: PORTAL PAGE ================ */
          /* ========================================================= */
          <motion.main
            key="portal-screen"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full space-y-10 z-20"
          >
            {/* Back Button HUD Accessory to return Home */}
            <div className="flex items-center justify-between pb-2">
              <button
                onClick={() => handleNavClick("Home")}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#00f0ff]/20 bg-[#020914]/60 text-xs font-semibold tracking-widest uppercase hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all duration-300"
              >
                <span className="text-[#00f0ff] group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span>Return Home</span>
              </button>

              <span className="text-slate-500 font-mono text-[10px] tracking-widest uppercase">
                SYSTEM PORTAL / ACTIVE SESSION
              </span>
            </div>

            {/* ========================================================================= */}
            {/* PANEL 1: ABOUT NEXORANOVA CONTAINER (Exact replica of the provided design) */}
            {/* ========================================================================= */}
            <div
              className="relative p-[1.5px] transition-all duration-500 overflow-hidden"
              style={{
                clipPath: "polygon(34px 0, calc(100% - 34px) 0, 100% 34px, 100% calc(100% - 34px), calc(100% - 34px) 100%, 34px 100%, 0 calc(100% - 34px), 0 34px)"
              }}
            >
              {/* Futuristic blue-violet bounding cyber border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/35 via-[#00f0ff]/40 to-purple-600/35" />

              {/* Inner card with dark sci-fi glass panel block */}
              <div
                className="relative bg-[#02050e]/95 p-8 md:p-12 space-y-6 flex flex-col justify-between"
                style={{
                  clipPath: "polygon(33px 0, calc(100% - 33px) 0, 100% 33px, 100% calc(100% - 33px), calc(100% - 33px) 100%, 33px 100%, 0 calc(100% - 33px), 0 33px)"
                }}
              >
                {/* Visual sci-fi side indicators at the exact cut spots */}
                <div className="absolute top-0 left-0 w-8 h-1 bg-[#00f0ff]" />
                <div className="absolute bottom-0 right-0 w-8 h-1 bg-[#bd00ff]" />
                <div className="absolute top-[50%] -left-[1px] w-[3px] h-12 bg-gradient-to-b from-[#00f0ff] to-transparent" />
                <div className="absolute top-[50%] -right-[1px] w-[3px] h-12 bg-gradient-to-b from-[#bd00ff] to-transparent" />

                <div className="space-y-4">
                  {/* Title Frame: About NexoraNova */}
                  <h2 className="text-3xl md:text-5xl font-system font-bold tracking-tight">
                    About <span className="text-[#7DE2FC] drop-shadow-[0_0_15px_rgba(125,226,252,0.3)]">NexoraNova</span>
                  </h2>

                  {/* Sleek cyan glow divider ornament below the Title */}
                  <div className="relative w-72 h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#3b82f6]/50 to-transparent">
                    <span className="absolute right-0 -top-1 w-2.5 h-2.5 bg-[#00f0ff] rounded-full animate-ping" />
                    <span className="absolute right-0 -top-[3px] w-2 h-2 bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff]" />
                  </div>

                  {/* Elegant peach/coral and blue subtitle pairing */}
                  <div className="text-xl md:text-2xl font-semibold tracking-wide">
                    <span className="text-[#FFA2B6] drop-shadow-[0_0_15px_rgba(255,162,182,0.15)] font-system">Shaping</span>{" "}
                    <span className="text-[#7C88FE] drop-shadow-[0_0_15px_rgba(124,136,254,0.15)] font-system">the Future of Technology</span>
                  </div>

                  {/* Body description matching reference */}
                  <p className="text-slate-300 font-sans font-light leading-relaxed max-w-4xl text-sm md:text-base tracking-wide select-none">
                    NexoraNova is at the forefront of technological innovation, delivering cutting-edge solutions that empower businesses and individuals. Our mission is to create intelligent, scalable, and secure digital experiences that drive progress.
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* PANEL 2: CORE SERVICES CONTAINER (Exact replica of the provided design) */}
            {/* ========================================================================= */}
            <div
              className="relative p-[1.5px] transition-all duration-500 overflow-hidden"
              style={{
                clipPath: "polygon(34px 0, calc(100% - 34px) 0, 100% 34px, 100% calc(100% - 34px), calc(100% - 34px) 100%, 34px 100%, 0 calc(100% - 34px), 0 34px)"
              }}
            >
              {/* Outer boundary gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/35 via-[#00f0ff]/40 to-cyan-500/35" />

              {/* Inner card viewport */}
              <div
                className="relative bg-[#02050e]/95 p-8 md:p-12 space-y-8"
                style={{
                  clipPath: "polygon(33px 0, calc(100% - 33px) 0, 100% 33px, 100% calc(100% - 33px), calc(100% - 33px) 100%, 33px 100%, 0 calc(100% - 33px), 0 33px)"
                }}
              >
                {/* Visual side highlights */}
                <div className="absolute top-0 right-0 w-8 h-1 bg-[#00f0ff]" />
                <div className="absolute bottom-0 left-0 w-8 h-1 bg-[#bd00ff]" />

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-[#00f0ff]/10 pb-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl md:text-4xl font-system font-bold tracking-tight">
                      Our <span className="text-[#FFA2B6] drop-shadow-[0_0_15px_rgba(255,162,182,0.15)]">Core Services</span>
                    </h2>
                    <span className="text-[#7DE2FC] text-[11px] font-mono tracking-widest uppercase bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/20">
                      LIVE PLATFORM
                    </span>
                  </div>
                  {/* Mini high tech label: What We Offer */}
                  <span className="text-[#7C88FE] font-system font-medium text-xs sm:text-sm tracking-widest uppercase">
                    What We Offer
                  </span>
                </div>

                {/* Row of 3 interactive service blocks */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                  {coreServices.map((service, idx) => {
                    const isHovered = hoveredServiceCard === idx;
                    return (
                      <div
                        key={service.id}
                        id={`service-card-${idx + 1}`}
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setHoveredServiceCard(idx)}
                        onMouseLeave={() => setHoveredServiceCard(null)}
                      >
                        {/* Service Item Glow Backdrop on hover */}
                        <div 
                          className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${
                            isHovered ? "opacity-100 blur-lg scale-100" : "opacity-0 blur-md"
                          } transition-all duration-500 pointer-events-none`}
                          style={{
                            backgroundImage: `linear-gradient(to right, ${service.glowColor}, transparent)`
                          }}
                        />

                        {/* Chamfered Service Item container */}
                        <div
                          className="relative p-[1.5px] transition-all duration-500 overflow-hidden"
                          style={{
                            clipPath: "polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)"
                          }}
                        >
                          {/* Inner border line gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${service.borderColor} transition-all duration-500 group-hover:scale-105 group-hover:${service.hoverBorder}`} />

                          <div
                            className="relative bg-gradient-to-b from-[#010611]/98 via-[#010309]/98 to-[#000000]/100 p-6 flex flex-col justify-between space-y-6 transition-all duration-500"
                            style={{
                              clipPath: "polygon(13px 0, calc(100% - 13px) 0, 100% 13px, 100% calc(100% - 13px), calc(100% - 13px) 100%, 13px 100%, 0 calc(100% - 13px), 0 13px)",
                              minHeight: "220px"
                            }}
                          >
                            <div className="space-y-4">
                              {/* Glowing Hexagonal Logo block */}
                              <div className="relative w-12 h-12 flex items-center justify-center">
                                <div 
                                  className="absolute inset-0 transition-transform duration-500 rounded-full blur-md opacity-35 scale-75 group-hover:scale-110"
                                  style={{
                                    backgroundColor: service.glowColor
                                  }}
                                />
                                <svg 
                                  viewBox="0 0 100 100" 
                                  fill="none" 
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-12 h-12 relative z-10"
                                >
                                  <polygon 
                                    points="50,4 92,27 92,73 50,96 8,73 8,27" 
                                    fill={service.hexFill} 
                                    stroke={service.hexStroke} 
                                    strokeWidth="2.5" 
                                  />
                                  {service.icon}
                                </svg>
                              </div>

                              {/* Title and descriptions formatted exactly */}
                              <div className="space-y-2">
                                <h4 className="text-white text-base md:text-lg font-system font-semibold tracking-wider transition-colors duration-300 group-hover:text-[#00f0ff]">
                                  {service.title}
                                </h4>
                                <p className="text-slate-400 text-xs sm:text-[13px] font-sans font-light tracking-wide leading-relaxed select-none">
                                  {service.desc}
                                </p>
                              </div>
                            </div>

                            {/* View Projects CTA */}
                            <div className="pt-2">
                              <motion.button
                                id={`btn-view-${service.id}`}
                                whileHover={{ scale: 1.03, boxShadow: `0 0 15px ${service.glowColor}` }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-2 rounded border border-[#00f0ff]/30 text-[#00f0ff] hover:text-white hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] text-[10px] tracking-widest uppercase font-system transition-all duration-300"
                              >
                                View Projects
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Decorative Outer Margin Tech Details */}
      <div className="relative w-full max-w-7xl mx-auto px-6 pb-2 text-[10px] text-slate-600 font-mono flex items-center justify-between select-none">
        <span>[SYS.LOC: O-M9]</span>
        <span>© 2026 NEXORANOVA ALL RIGHTS RESERVED</span>
        <span>[SYS.NET: SECURE]</span>
      </div>
    </div>
  );
}
