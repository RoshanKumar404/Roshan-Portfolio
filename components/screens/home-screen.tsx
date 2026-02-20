"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, BookOpen, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ScreenType } from "@/lib/types"
import Image from "next/image"

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
}

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generatedStars = [...Array(15)].map(() => ({
      x: Math.random() * 320,
      y: Math.random() * 600,
      size: Math.random() * 1.5 + 0.5,
      duration: 3 + Math.random() * 4,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="min-h-full bg-slate-950 text-white flex flex-col relative overflow-hidden">
      {/* Dynamic CSS Stars Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-500/10 via-slate-950 to-slate-950"></div>
        {/* Animated CSS Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              initial={{ 
                x: star.x, 
                y: star.y, 
                width: star.size, 
                height: star.size 
              }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.5, 1] 
              }}
              transition={{ 
                duration: star.duration, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between p-6 pt-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-28 h-28 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
              <Image 
                src="/profile.jpg" 
                alt="Roshan Kumar" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 w-28 h-28 bg-pink-500 rounded-3xl blur-2xl opacity-20"></div>
          </div>
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-black tracking-[0.4em] text-pink-500 mb-4 uppercase"
          >
            Software Engineer
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl font-black tracking-tighter leading-[0.9] mb-4">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-glow">
                DIGITAL <br />
                EXCELLENCE.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.4 }}
            className="text-[11px] text-gray-300 mt-6 leading-relaxed font-medium max-w-[220px]"
          >
            Building high-performance mobile experiences and intelligent AI solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <Button
              onClick={() => onNavigate("about")}
              className="bg-white text-black hover:bg-gray-200 rounded-2xl px-8 h-12 text-[10px] font-black tracking-widest transition-all shadow-xl active:scale-95 group"
            >
              EXPLORE MORE
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-auto flex space-x-6 pt-10"
        >
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/roshan-kumar-3bb631267/" },
            { Icon: Github, href: "https://github.com/RoshanKumar404" },
            { Icon: BookOpen, href: "#" }
          ].map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
