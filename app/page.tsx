"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { CV_URL } from '@/lib/constants'
import { Download, Mail, ExternalLink, Code2, Cpu, Globe, Zap, Shield, Layout, Target, Sparkles } from 'lucide-react'
import { ScreenType } from '@/lib/types'

const MobileEmulator = dynamic(() => import("@/components/mobile-emulator"), {
  ssr: false,
  loading: () => (
    <div className="relative mx-auto border-8 border-gray-800 rounded-[40px] overflow-hidden">
      <div className="relative w-[320px] h-[650px] mx-auto bg-slate-900 flex items-center justify-center">
        <div className="text-white opacity-20 text-xs tracking-widest font-bold animate-pulse">BOOTING...</div>
      </div>
    </div>
  )
})

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeScreen, setActiveScreen] = useState<ScreenType>("home")

  useEffect(() => {
    setMounted(true)
  }, [])

  const sidebarContent: Record<ScreenType, {
    left: { title: string; description: string; stats: { value: string; label: string }[] };
    right: { title: string; items: { name: string; icon: any }[] };
  }> = {
    home: {
      left: {
        title: "MASTERY",
        description: "A specialized Software Engineer focused on building high-performance Android applications and seamless AI-integrated systems.",
        stats: [
          { value: "02+", label: " Years of PersonalExp." },
          { value: "11+", label: "Projects" }
        ]
      },
      right: {
        title: "CORE STACK",
        items: [
          { name: "Kotlin", icon: Code2 },
          { name: "AI/ML", icon: Cpu },
          { name: "React-Native", icon: Globe },
          { name: "Python", icon: Zap },
          { name: "Java", icon: Sparkles }
        ]
      }
    },
    about: {
      left: {
        title: "PHILOSOPHY",
        description: "Architecture is about intent. I build software that is as maintainable as it is efficient, ensuring long-term scalability.",
        stats: [
          { value: "95%", label: "Native Perf" },
          { value: "90%", label: "UX Research" }
        ]
      },
      right: {
        title: "EXPERTISE",
        items: [
          { name: "Architecture", icon: Layout },
          { name: "Optimization", icon: Zap },
          { name: "Database", icon: Cpu },
          { name: "Security", icon: Shield }
        ]
      }
    },
    projects: {
      left: {
        title: "STRATEGY",
        description: "From wireframing to final distribution, every project is built with user-centric modularity and clean architecture.",
        stats: [
          { value: "100%", label: "Success Rate" },
          { value: "MVP", label: "Ready" }
        ]
      },
      right: {
        title: "TECH DEPTH",
        items: [
          { name: "Clean Arch", icon: Target },
          { name: "Compose", icon: Layout },
          { name: "API Design", icon: Globe },
          { name: "Cloud", icon: Shield }
        ]
      }
    },
    contact: {
      left: {
        title: "STATUS",
        description: "Currently open for high-impact projects and engineering consultations. Ready to build the next big thing.",
        stats: [
          { value: "24h", label: "Reply Time" },
          { value: "Remote", label: "Available" }
        ]
      },
      right: {
        title: "TRUST",
        items: [
          { name: "Veracity", icon: Shield },
          { name: "Quality", icon: Target },
          { name: "Support", icon: Sparkles },
          { name: "Integrity", icon: Code2 }
        ]
      }
    }
  }

  const currentContent = sidebarContent[activeScreen]

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 md:p-8 relative overflow-hidden font-inter">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Sidebar */}
        <div className="hidden lg:flex flex-col w-1/4 h-[650px] justify-between py-10">
          {mounted && (
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${activeScreen}-left`}
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="space-y-10"
              >
                <div className="space-y-4">
                  <h2 className="text-sm font-black tracking-[0.4em] text-pink-500 uppercase">{currentContent.left.title}</h2>
                  <h1 className="text-5xl font-black tracking-tighter leading-none italic uppercase">
                    {activeScreen === "home" ? (
                      <>AI <br /><span className="text-white/20">DRIVEN.</span><br />NATIVE.</>
                    ) : activeScreen.split("").join(" ")}
                  </h1>
                </div>

                <div className="glass-dark p-6 rounded-3xl border border-white/5 space-y-6">
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {currentContent.left.description}
                  </p>
                  <div className="flex gap-4">
                    {currentContent.left.stats.map((stat: { value: string; label: string }, idx: number) => (
                      <div key={idx} className={`flex-1 ${idx > 0 ? "border-l border-white/5 pl-4" : ""}`}>
                        <div className="text-2xl font-black tracking-tighter">{stat.value}</div>
                        <div className="text-[9px] uppercase font-bold tracking-widest text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          <div className="flex items-center gap-4 text-slate-500 mt-auto">
            <span className="text-[10px] font-bold tracking-widest uppercase">Connect</span>
            <div className="h-[1px] flex-1 bg-white/5"></div>
            <a href="mailto:roshankuar951@gmail.com" className="hover:text-pink-500 transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Center - Emulator */}
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <div className="absolute -inset-10 bg-pink-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <MobileEmulator onScreenChange={(screen) => setActiveScreen(screen)} />
          </motion.div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:flex flex-col w-1/4 h-[650px] justify-between py-10">
          {mounted && (
            <>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${activeScreen}-right`}
                  initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="space-y-12"
                >
                  <div className="space-y-6">
                    <h2 className="text-sm font-black tracking-[0.4em] text-pink-500 uppercase text-right">{currentContent.right.title}</h2>
                    <div className="flex flex-wrap justify-end gap-2">
                      {currentContent.right.items.map((tech: { name: string; icon: any }) => (
                        <div key={tech.name} className="glass border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default group">
                          <tech.icon size={12} className="text-pink-500 group-hover:scale-110 transition-transform" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a 
                      href={CV_URL} 
                      download
                      className="glass-dark border border-white/5 w-full py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-pink-600 transition-all font-black text-[10px] tracking-[0.2em] shadow-xl shadow-black/20"
                    >
                      <Download size={14} />
                      DOWNLOAD RESUME
                    </a>
                    <button 
                      onClick={() => setActiveScreen("contact")}
                      className="w-full py-5 rounded-2xl flex items-center justify-center gap-3 bg-white text-black hover:bg-slate-200 transition-all font-black text-[10px] tracking-[0.2em]"
                    >
                      <ExternalLink size={14} />
                      LET&apos;S TALK
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="text-right mt-auto">
                <div className="text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">Availability</div>
                <div className="font-bold tracking-tight text-green-500 flex items-center justify-end gap-2 text-xs">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  OPEN FOR PROJECTS
                </div>
              </div>
            </>
          )}
        </div>

      </div>

      {/* Mobile Header (only visible on small screens) */}
      <div className="lg:hidden absolute top-8 left-0 right-0 text-center z-20">
         <h1 className="text-sm font-black tracking-[0.5em] text-pink-500 uppercase text-glow">ROSHAN.DEV</h1>
      </div>
    </main>
  )
}
