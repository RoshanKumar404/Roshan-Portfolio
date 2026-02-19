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
        <div className="absolute top-0 left-0 right-0 h-6 bg-black z-40 flex justify-between items-center px-5">
          <div className="text-white text-[10px] font-medium">9:41</div>
          <div className="flex items-center space-x-1.5">
            <div className="flex space-x-0.5">
              <div className="w-0.5 h-1.5 bg-white/40 rounded-full"></div>
              <div className="w-0.5 h-2 bg-white/60 rounded-full"></div>
              <div className="w-0.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <div className="text-[10px] text-white font-medium">5G</div>
            <div className="w-5 h-2.5 border border-white/40 rounded-sm relative flex items-center px-0.5">
              <div className="h-1.5 bg-white rounded-xs" style={{ width: "60%" }}></div>
              <div className="absolute -right-1 w-0.5 h-1 bg-white/40 rounded-r-full"></div>
            </div>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-xl z-50"></div>

        {/* Screen content */}
        <div className="w-full h-full pt-6 bg-gray-900 overflow-hidden relative">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gray-900/80 backdrop-blur-md text-white z-40 relative">
            <AnimatePresence mode="wait">
              {currentScreen !== "home" ? (
                <motion.button 
                  key="back-btn"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={handleBack} 
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </motion.button>
              ) : (
                <motion.div 
                  key="logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-lg font-bold tracking-tight"
                >
                  PORTFOLIO
                </motion.div>
              )}
            </AnimatePresence>
            <button onClick={toggleMenu} className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <Menu size={24} />
            </button>
          </div>

          {/* Menu overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl z-50 pt-16"
              >
                <div className="flex flex-col text-white text-xl p-8 space-y-6">
                  {["home", "about", "projects", "contact"].map((screen) => (
                    <motion.button
                      key={screen}
                      whileHover={{ x: 10, color: "#ec4899" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        navigateTo(screen as ScreenType)
                        setMenuOpen(false)
                      }}
                      className="text-left font-medium capitalize"
                    >
                      {screen}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main App Container with Layering */}
          <div className="relative h-[calc(100%-56px)] w-full overflow-hidden bg-black/20">
            <AnimatePresence mode="popLayout">
              {/* Enhanced Background Screen (Full-width Vibrant Blur) */}
              {prevScreen && (
                <motion.div
                  key={`bg-${prevScreen}`}
                  initial={{ opacity: 0, scale: 1, filter: "blur(10px) saturate(100%)" }}
                  animate={{ opacity: 0.5, scale: 1.05, filter: "blur(25px) saturate(180%)" }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden brightness-75"
                >
                  <div className="w-full h-full scale-110 origin-center">
                    {renderScreen(prevScreen)}
                  </div>
                  {/* Dark overlay to ensure foreground legibility */}
                  <div className="absolute inset-0 bg-black/40"></div>
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
                  damping: 28, 
                  stiffness: 220,
                  mass: 1
                }}
                className="absolute inset-0 w-full h-full z-20 overflow-y-auto bg-gray-900 rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10"
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
