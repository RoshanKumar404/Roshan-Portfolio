"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ScreenType } from "@/lib/types"
import { CV_URL } from "@/lib/constants"
import { Download, Rocket } from "lucide-react"

interface AboutScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function AboutScreen({ onNavigate }: AboutScreenProps) {
  return (
    <div className="min-h-full bg-slate-950 text-white p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-black tracking-tighter text-glow uppercase">ABOUT</h1>
        <div className="w-12 h-1 bg-pink-500 mt-2 rounded-full"></div>
      </motion.div>

      <h2 className="text-xl font-bold mb-4 tracking-tight leading-tight">
        Solving complex problems with <span className="text-pink-500">elegant code.</span>
      </h2>

      <p className="text-xs text-gray-400 mb-8 leading-relaxed font-medium">
        I am a results-driven Software Engineer with a mastery in <span className="text-white">Android Native Development</span> and <span className="text-white">AI Integration</span>. 
        As the champion of the <span className="text-pink-500">Hack Horizon</span>, I thrive on building high-performance systems.
      </p>

      <div className="mb-8 glass-dark p-5 rounded-3xl border border-white/5">
        <h3 className="text-[10px] font-black tracking-[0.3em] mb-4 text-pink-500 uppercase">PROFILE</h3>

        <div className="grid grid-cols-2 gap-y-5 gap-x-2 text-[12px]">
          <div>
            <div className="text-gray-500 uppercase text-[9px] font-bold tracking-widest mb-1">Full Name</div>
            <div className="font-bold text-white tracking-tight">Roshan Kumar</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase text-[9px] font-bold tracking-widest mb-1">Born</div>
            <div className="font-bold text-white tracking-tight">May 5th, 2002</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase text-[9px] font-bold tracking-widest mb-1">Location</div>
            <div className="font-bold text-white tracking-tight">Ranchi, India</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase text-[9px] font-bold tracking-widest mb-1">Email</div>
            <div className="truncate font-bold text-white tracking-tight">roshankuar951@...</div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-[10px] font-black tracking-[0.3em] mb-6 text-pink-500 uppercase flex items-center gap-3">
          SKILLS
          <span className="flex-1 h-[1px] bg-white/5"></span>
        </h3>

        <div className="space-y-5">
          {[
            { name: "Android Native", level: "95%" },
            { name: "React Native", level: "90%" },
            { name: "AI & TensorFlow", level: "85%" },
            { name: "Python / Backend", level: "80%" },
            { name: "Next.js / Web", level: "75%" },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2 text-[10px] font-black uppercase tracking-widest">
                <span className="text-gray-400">{skill.name}</span>
                <span className="text-pink-500">{skill.level}</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-[3px] overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="bg-gradient-to-r from-pink-600 to-violet-500 h-full rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button 
          onClick={() => onNavigate("contact")}
          className="bg-pink-600 hover:bg-pink-700 rounded-2xl h-12 font-black tracking-[0.2em] text-[10px] shadow-xl shadow-pink-500/20"
        >
          <Rocket size={14} className="mr-2" />
          HIRE ME
        </Button>
        <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-2xl h-12 font-black tracking-[0.2em] text-[10px]" asChild>
          <a href={CV_URL} download>
            <Download size={14} className="mr-2" />
            DOWNLOAD CV
          </a>
        </Button>
      </div>
    </div>
  )
}
