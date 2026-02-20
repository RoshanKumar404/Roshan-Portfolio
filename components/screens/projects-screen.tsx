"use client"

import type { ScreenType } from "../mobile-emulator"
import ProjectCard from "./project-card"
import { PROJECTS } from "@/lib/constants"
import { motion } from "framer-motion"

interface ProjectsScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function ProjectsScreen({ onNavigate }: ProjectsScreenProps) {
  return (
    <div className="min-h-full bg-slate-950 text-white p-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-black tracking-tighter text-glow">PROJECTS</h1>
        <div className="w-12 h-1 bg-pink-500 mt-2 rounded-full"></div>
      </motion.div>

      <div className="space-y-4">
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            SubTitle={project.subTitle}
            description={project.description}
            screenshots={project.screenshots}
            apkUrl={project.apkUrl}
          />
        ))}
      </div>
    </div>
  )
}
