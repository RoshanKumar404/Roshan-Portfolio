"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Github, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import type { ScreenType } from "../mobile-emulator"

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-full bg-gray-900 text-white flex flex-col relative overflow-hidden">
      {/* Dynamic CSS Stars Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        {/* Animated CSS Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              initial={{ 
                x: Math.random() * 320, 
                y: Math.random() * 600, 
                width: Math.random() * 2 + 1, 
                height: Math.random() * 2 + 1 
              }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1] 
              }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between p-6 pt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="flex justify-center mb-6"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <img 
              src="/profile.jpg" 
              alt="Roshan Kumar" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Roshan+Kumar&background=ec4899&color=fff";
              }}
            />
          </div>
        </motion.div>

        <div className="mt-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold tracking-[0.3em] text-pink-500 mb-4 uppercase"
          >
            Software Engineer
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl font-black tracking-tight leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                Roshan Kumar.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-gray-400 mt-6 leading-relaxed max-w-[200px]"
          >
            Specializing in Android Native, Cross-platform, and AI integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Button
              onClick={() => onNavigate("about")}
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-xs font-bold transition-all shadow-xl active:scale-95"
            >
              MORE ABOUT ME
            </Button>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-auto mb-4 flex space-x-6 pt-10"
        >
          <a
            href="https://www.linkedin.com/in/roshan-kumar-3bb631267/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/RoshanKumar404" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <BookOpen size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
