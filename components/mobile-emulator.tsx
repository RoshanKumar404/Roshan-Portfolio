"use client"

import { useState } from "react"
import { ChevronLeft, Menu } from "lucide-react"
import HomeScreen from "./screens/home-screen"
import AboutScreen from "./screens/about-screen"
import ProjectsScreen from "./screens/projects-screen"
import ContactScreen from "./screens/contact-screen"
import { cn } from "@/lib/utils"

export type ScreenType = "home" | "about" | "projects" | "contact"

export default function MobileEmulator() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const screens = {
    home: <HomeScreen onNavigate={setCurrentScreen} />,
    about: <AboutScreen onNavigate={setCurrentScreen} />,
    projects: <ProjectsScreen onNavigate={setCurrentScreen} />,
    contact: <ContactScreen onNavigate={setCurrentScreen} />,
  }

  const handleBack = () => {
    setCurrentScreen("home")
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="relative mx-auto">
      {/* Phone frame */}
      <div className="relative w-[320px] h-[650px] mx-auto bg-black rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800">
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex justify-between items-center px-5">
          <div className="text-white text-xs">9:41</div>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-white rounded-sm"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-xl z-20"></div>

        {/* Screen content */}
        <div className="w-full h-full pt-6 bg-gray-900 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
            {currentScreen !== "home" ? (
              <button onClick={handleBack} className="p-1">
                <ChevronLeft size={24} />
              </button>
            ) : (
              <div className="text-lg font-bold">PORTFOLIO</div>
            )}
            <button onClick={toggleMenu} className="p-1">
              <Menu size={24} />
            </button>
          </div>

          {/* Menu overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-black/90 z-30 transition-transform duration-300 pt-16",
              menuOpen ? "translate-y-0" : "translate-y-full",
            )}
          >
            <div className="flex flex-col text-white text-xl p-8 space-y-6">
              <button
                onClick={() => {
                  setCurrentScreen("home")
                  setMenuOpen(false)
                }}
                className="text-left hover:text-pink-500 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentScreen("about")
                  setMenuOpen(false)
                }}
                className="text-left hover:text-pink-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  setCurrentScreen("projects")
                  setMenuOpen(false)
                }}
                className="text-left hover:text-pink-500 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  setCurrentScreen("contact")
                  setMenuOpen(false)
                }}
                className="text-left hover:text-pink-500 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Screen content */}
          <div className="h-[calc(100%-56px)] overflow-y-auto">{screens[currentScreen]}</div>
        </div>

        {/* Home button / indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  )
}
