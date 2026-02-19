"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { ScreenType } from "../mobile-emulator"

interface AboutScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function AboutScreen({ onNavigate }: AboutScreenProps) {
  const BASE_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3000/Roshan Resume.pdf"
  : "https://roshanandroiddevelper.netlify.app/Roshan Resume.pdf";


  return (
    <div className="min-h-full bg-gray-900 text-white p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">ABOUT</h1>
      <h2 className="text-xl mb-4">Let me introduce myself.</h2>

      <p className="text-sm text-gray-300 mb-6 leading-relaxed">
        Passionate Software Engineer with a focus on Android Native and AI Integration. 
        Winner of the <span className="text-pink-500 font-semibold">Hack Horizon Hackathon</span> (GDG Ranchi). 
        I specialize in building high-performance mobile apps and intelligent web systems.
      </p>

      <div className="mb-6 bg-gray-800/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
        <h3 className="text-lg font-bold mb-3 text-pink-500">PROFILE</h3>

        <div className="grid grid-cols-2 gap-4 text-[13px]">
          <div>
            <div className="text-gray-400 uppercase text-[10px]">Full Name</div>
            <div className="font-medium">Roshan Kumar</div>
          </div>
          <div>
            <div className="text-gray-400 uppercase text-[10px]">Birth Date</div>
            <div className="font-medium">May 5th, 2002</div>
          </div>
          <div>
            <div className="text-gray-400 uppercase text-[10px]">Location</div>
            <div className="font-medium">Ranchi, India</div>
          </div>
          <div>
            <div className="text-gray-400 uppercase text-[10px]">Email</div>
            <div className="truncate font-medium">roshankuar951@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-pink-500"></span>
          SKILLS
        </h3>

        <div className="space-y-4">
          {[
            { name: "Android Native (Kotlin)", level: "95%" },
            { name: "React Native / JS", level: "90%" },
            { name: "AI & TensorFlow.js", level: "85%" },
            { name: "Python / Backend", level: "80%" },
            { name: "Next.js / Web", level: "75%" },
            { name: "Linux / OS", level: "85%" },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5 text-xs font-medium uppercase tracking-wider">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-pink-500">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-gradient-to-r from-pink-600 to-pink-400 h-full rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <Button 
          onClick={() => onNavigate("contact")}
          className="bg-pink-600 hover:bg-pink-700 flex-1 font-bold tracking-wider"
        >
          HIRE ME
        </Button>
        <Button className="bg-gray-700 hover:bg-gray-600 flex-1" asChild>
          <a href={BASE_URL}download>
            DOWNLOAD CV
          </a>
        </Button>
      </div>
    </div>
  )
}
