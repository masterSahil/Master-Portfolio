"use client";
import React, { useState } from "react";
import { 
  motion
} from "framer-motion";
import { 
  ArrowUpRight, 
  Terminal,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import img1 from '../assets/Image/Home/Projects/prj1.png'
import img2 from '../assets/Image/Home/Projects/prj2.png'
import img3 from '../assets/Image/Home/Projects/prj3.png'
import img4 from '../assets/Image/Home/Projects/prj4.png'
import img5 from '../assets/Image/Home/Projects/prj5.png'
import img6 from '../assets/Image/Home/Projects/prj6.png'

// --- PROJECT DATA ---
const PROJECTS = [
  {
    id: 1,
    title: "Corporate Software System",
    desc: "A powerful internal system to manage employees, rewards, and company operations in one place.",
    image: img1, 
    tech: ["React", "Node", "Razorpay", "MongoDB"],
    category: "Full Stack",
    repoUrl: "https://github.com/masterSahil/Corporate-Landing-page",
    liveUrl: "https://corporates.app/"
  },
  {
    id: 2,
    title: "Secure Credentials Vault",
    desc: "A secure web-based vault for credentials storage integration.",
    image: img2,
    tech: ["React", "Node.js", "JWT", "Cloudinary"],
    category: "Full Stack",
    repoUrl: "https://github.com/masterSahil/Credentials",
    liveUrl: "https://credentials-bay.vercel.app/"
  },
  {
    id: 3,
    title: "Secure Vault Mobile App",
    desc: "A cross-platform mobile vault application to securely store any kind of credentials.",
    image: img6,
    tech: ["Native", "MongoDB", "Supabase", "Expo"],
    category: "Mobile App",
    repoUrl: "https://github.com/masterSahil/Vault-App",
    liveUrl: "https://github.com/masterSahil/Vault-App"
  },
  {
  id: 4,
    title: "Full Stack E-Commerce",
    desc: "A complete MERN-based e-commerce platform with inventory management.",
    image: img4,
    tech: ["React", "MongoDB", "Multer"],
    category: "Full Stack",
    repoUrl: "https://github.com/masterSahil/E-Shop",
    liveUrl: "https://e-shop-pearl-gamma.vercel.app"
  },
  {
    id: 5,
    title: "React Projects Collection",
    desc: "A curated collection of multiple React.js projects.",
    image: img5,
    tech: ["React", "Tailwind", "Redux"],
    category: "Frontend",
    repoUrl: "https://github.com/masterSahil/React-Projects",
    liveUrl: "https://github.com/masterSahil/React-Projects"
  },
  {
    id: 6,
    title: "Chatbot Core",
    desc: "Real-time conversational agent with memory.",
    image: img3,
    tech: ["React JS", "Multi Theme", "Gemini API"],
    category: "AI",
    repoUrl: "https://github.com/masterSahil/Chatbot-main",
    liveUrl: "https://chatbot-main-nine.vercel.app/"
  }
];

const RecentProjects = () => {
  return (
    <section 
      className="relative w-full bg-[#020602] py-24 px-4 md:px-8 font-sans selection:bg-emerald-500/30 overflow-hidden group"
    >
      
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Terminal className="w-4 h-4" />
              <span>System Output</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Deployments</span>
            </h2>
          </div>
          <Link href="/projects" 
           className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-pointer">
            <span className="text-sm font-medium text-slate-300 hover:text-emerald-400">View All Archives</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 hover:text-emerald-400 transition-colors" />
          </Link>
        </div>

        {/* --- THE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <PowerCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ISOLATED CARD COMPONENT ---
const PowerCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = React.useRef(null);

  // Stagger animation for tech pills
  const techContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const techItem = {
    hidden: { opacity: 0.3, color: "rgb(148, 163, 184)", borderColor: "rgba(255,255,255,0.05)" },
    visible: { opacity: 1, color: "rgb(52, 211, 153)", borderColor: "rgba(16, 185, 129, 0.4)" }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[450px] w-full rounded-[24px] bg-[#020602] overflow-hidden cursor-pointer border border-white/5 shadow-2xl"
    >
      {/* 1. Animated Border Tracing (Neon Line Perimeter) */}
      <div className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ease-in-out z-0",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_75%,#34d399_100%)] animate-[spin_3s_linear_infinite]" />
      </div>

      {/* 2. Inner Card Content Background (Creates the 1px edge effect) */}
      <div className="absolute inset-[1px] rounded-[23px] bg-[#050a06] overflow-hidden z-10 flex flex-col">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image src={project.image} alt={project.title} fill
            priority={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-all duration-700 ease-in-out",
              isHovered ? "opacity-40 grayscale-0 contrast-125 brightness-110 scale-105" : "opacity-50 grayscale-[50%] contrast-100 scale-100"
            )}
          />
          {/* Static Dark Overlay */}
          <div className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isHovered 
              ? "bg-gradient-to-t from-[#020602] via-[#020602]/80 to-transparent opacity-100"
              : "bg-gradient-to-t from-[#020602] via-[#020602]/50 to-transparent opacity-90"
          )} />
        </div>

        {/* Dynamic Background Grid - Strictly invisible unhovered */}
        <div className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-500 ease-in-out z-0",
          isHovered ? "opacity-30" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
        </div>

        {/* Sci-Fi Targeting / Laser Effect (Bharavdaar & Lifted) */}
        {/* Wrapper opacity guarantees no faint artifacts unhovered */}
        <div className={cn(
          "absolute inset-0 pointer-events-none z-10 overflow-hidden transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
           
           {/* Heavy Ambient Glow Behind Target */}
           <div className={cn(
             "absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 blur-[50px] rounded-full transition-all duration-700 ease-in-out",
             isHovered ? "scale-100" : "scale-50"
           )} />

           {/* Thick Laser Line Drops from Top */}
           <div className={cn(
             "absolute top-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-transparent via-emerald-400 to-emerald-300 shadow-[0_0_20px_2px_rgba(52,211,153,0.9)] transition-all duration-700 ease-in-out",
             isHovered ? "h-[35%]" : "h-0"
           )} />
           
           {/* Rich Center Glowing Diamond Target */}
           <div className={cn(
             "absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rotate-45 bg-white border-[4px] border-emerald-400 shadow-[0_0_30px_8px_rgba(52,211,153,0.8)] transition-all duration-500 delay-300",
             isHovered ? "scale-100" : "scale-0"
           )} />

           {/* 4 Constrained Radar Rings (Smaller Radius) */}
           {isHovered && (
             <>
               {[0, 1, 2, 3].map((i) => (
                 <motion.div
                   key={i}
                   initial={{ scale: 0.2, opacity: 0 }}
                   animate={{ scale: [0.2, 2.5], opacity: [0, 0.7, 0] }}
                   transition={{ 
                     duration: 3.5, 
                     repeat: Infinity, 
                     ease: "linear", 
                     delay: i * 0.85 
                   }}
                   className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-[1.5px] border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)_inset,0_0_15px_rgba(52,211,153,0.4)]"
                 />
               ))}
             </>
           )}
        </div>

        {/* Subtle Animated Corner Accents */}
        <div className={cn("absolute top-5 left-5 w-4 h-4 border-t border-l transition-all duration-500 ease-in-out z-20", isHovered ? "border-emerald-400 shadow-[-2px_-2px_10px_rgba(52,211,153,0.5)]" : "border-white/10")} />
        <div className={cn("absolute top-5 right-5 w-4 h-4 border-t border-r transition-all duration-500 ease-in-out z-20", isHovered ? "border-emerald-400 shadow-[2px_-2px_10px_rgba(52,211,153,0.5)]" : "border-white/10")} />
        <div className={cn("absolute bottom-5 left-5 w-4 h-4 border-b border-l transition-all duration-500 ease-in-out z-20", isHovered ? "border-emerald-400 shadow-[-2px_2px_10px_rgba(52,211,153,0.5)]" : "border-white/10")} />
        <div className={cn("absolute bottom-5 right-5 w-4 h-4 border-b border-r transition-all duration-500 ease-in-out z-20", isHovered ? "border-emerald-400 shadow-[2px_2px_10px_rgba(52,211,153,0.5)]" : "border-white/10")} />

        {/* Content Structure (Always Visible Layout) */}
        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col z-20">
          
          {/* Top Bar - Fades in on hover to keep the non-hover state incredibly clean like the screenshot */}
          <div className={cn(
            "flex justify-between items-start transition-all duration-500 ease-out",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}>
            <span className={cn(
              "px-3 py-1.5 text-[10px] sm:text-xs font-mono font-semibold tracking-widest uppercase transition-all duration-500 border rounded-full",
              isHovered ? "text-emerald-300 border-emerald-500/40 bg-emerald-950/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "text-slate-500 border-white/5 bg-white/5"
            )}>
              {project.category}
            </span>
            <a 
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "p-2.5 rounded-full flex items-center justify-center transition-all duration-500 ease-out",
                isHovered ? "bg-black/60 text-emerald-400 border border-white/10 shadow-lg drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-transparent text-slate-500"
              )}
            >
               <FaGithub className="w-5 h-5" />
            </a>
          </div>

          <div className="flex-1" />

          {/* Bottom Content - Static Layout */}
          <div className="flex flex-col justify-end">
            
            {/* Title */}
            <h3 className={cn(
              "text-2xl font-bold tracking-tight mb-3 transition-colors duration-500 ease-in-out",
              isHovered ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]" : "text-white"
            )}>
              {project.title}
            </h3>

            {/* Description - Always Visible */}
            <p className={cn(
              "text-[15px] leading-relaxed mb-6 transition-colors duration-500 ease-in-out",
              isHovered ? "text-slate-200" : "text-slate-400"
            )}>
              {project.desc}
            </p>

            {/* Tech Stack & Action Button - Always Visible */}
            <div className="flex items-center justify-between pt-5 border-t border-white/5">
              
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className={cn(
                      "text-[11px] font-mono border px-2.5 py-1 rounded-md shadow-sm transition-all duration-500",
                      isHovered 
                        ? "bg-[#020602] border-emerald-500/40 text-emerald-400" 
                        : "bg-white/5 border-transparent text-slate-400"
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Morphing Link Button */}
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "flex items-center justify-center transition-all duration-500 ease-in-out group/btn ml-4 flex-shrink-0",
                  isHovered 
                    ? "w-11 h-11 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] text-black border-transparent" 
                    : "w-9 h-9 rounded-xl bg-[#050a06] text-emerald-500 border border-white/5"
                )}
              >
                 <ArrowUpRight className={cn("transition-all duration-500", isHovered ? "w-5 h-5 stroke-[2.5]" : "w-4 h-4 stroke-[2]")} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentProjects;