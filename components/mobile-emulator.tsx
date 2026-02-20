"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import HomeScreen from "./screens/home-screen"
import AboutScreen from "./screens/about-screen"
import ProjectsScreen from "./screens/projects-screen"
import ContactScreen from "./screens/contact-screen"
import { cn } from "@/lib/utils"

export type ScreenType = "home" | "about" | "projects" | "contact"

export default function MobileEmulator() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("home")
  const [prevScreen, setPrevScreen] = useState<ScreenType | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const navigateTo = (screen: ScreenType) => {
    if (screen !== currentScreen) {
      setPrevScreen(currentScreen)
      setCurrentScreen(screen)
    }
  }

  // Clear prevScreen after transition
  useEffect(() => {
    if (prevScreen) {
      const timer = setTimeout(() => {
        setPrevScreen(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [currentScreen, prevScreen])

  const handleBack = () => {
    navigateTo("home")
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const renderScreen = (screen: ScreenType) => {
    switch (screen) {
      case "home": return <HomeScreen onNavigate={navigateTo} />;
      case "about": return <AboutScreen onNavigate={navigateTo} />;
      case "projects": return <ProjectsScreen onNavigate={navigateTo} />;
      case "contact": return <ContactScreen onNavigate={navigateTo} />;
      default: return <HomeScreen onNavigate={navigateTo} />;
    }
  }

  return (
    <div className="relative mx-auto">
      {/* Phone frame */}
      <div className="relative w-[320px] h-[650px] mx-auto bg-black rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-black/40 backdrop-blur-md z-40 flex justify-between items-center px-6">
          <div className="text-white text-[10px] font-bold tracking-tight">9:41</div>
          <div className="flex items-center space-x-1.5">
            <div className="flex space-x-0.5 items-end">
              <div className="w-0.5 h-1.5 bg-white/40 rounded-full"></div>
              <div className="w-0.5 h-2 bg-white/60 rounded-full"></div>
              <div className="w-0.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <div className="text-[10px] text-white font-bold">5G</div>
            <div className="w-5 h-2.5 border border-white/30 rounded-[2px] relative flex items-center px-0.5">
              <div className="h-1.5 bg-white rounded-[1px]" style={{ width: "65%" }}></div>
              <div className="absolute -right-1 w-0.5 h-1 bg-white/30 rounded-r-full"></div>
            </div>
          </div>
        </div>

        {/* Notch (Dynamic Island Style) */}
        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50 border border-white/5 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-500/20 blur-[2px]"></div>
        </div>

        {/* Screen content */}
        <div className="w-full h-full pt-7 bg-slate-950 overflow-hidden relative">
          {/* Header */}
          <div className="flex justify-between items-center p-4 glass-dark text-white z-40 relative">
            <AnimatePresence mode="wait">
              {currentScreen !== "home" ? (
                <motion.button 
                  key="back-btn"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleBack} 
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors active:scale-90"
                >
                  <ChevronLeft size={20} />
                </motion.button>
              ) : (
                <motion.div 
                  key="logo"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm font-black tracking-widest text-pink-500 text-glow"
                >
                  ROSHAN.DEV
                </motion.div>
              )}
            </AnimatePresence>
            <button onClick={toggleMenu} className="p-1.5 hover:bg-white/10 rounded-full transition-colors active:scale-90">
              <Menu size={20} />
            </button>
          </div>

          {/* Menu overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xl z-50 pt-20"
              >
                <div className="flex flex-col text-white text-2xl p-8 space-y-8">
                  {["home", "about", "projects", "contact"].map((screen, idx) => (
                    <motion.button
                      key={screen}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 10, color: "#ec4899" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        navigateTo(screen as ScreenType)
                        setMenuOpen(false)
                      }}
                      className="text-left font-black capitalize tracking-tighter"
                    >
                      {screen}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main App Container with Layering */}
          <div className="relative h-[calc(100%-60px)] w-full overflow-hidden">
            <AnimatePresence mode="popLayout">
              {/* Enhanced Background Screen (Full-width Vibrant Blur) */}
              {prevScreen && (
                <motion.div
                  key={`bg-${prevScreen}`}
                  initial={{ opacity: 0, scale: 1, filter: "blur(0px)" }}
                  animate={{ opacity: 0.4, scale: 1.1, filter: "blur(20px) saturate(200%)" }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
                >
                  <div className="w-full h-full scale-110 origin-center">
                    {renderScreen(prevScreen)}
                  </div>
                  <div className="absolute inset-0 bg-slate-950/40"></div>
                </motion.div>
              )}

              {/* Foreground Screen (Main Card) */}
              <motion.div
                key={currentScreen}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  damping: 30, 
                  stiffness: 250,
                  mass: 0.8
                }}
                className="absolute inset-0 w-full h-full z-20 overflow-y-auto bg-slate-950 rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/5"
              >
                <div className="w-full h-full pb-10">
                  {renderScreen(currentScreen)}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>
      </div>
    </div>
  )
}
