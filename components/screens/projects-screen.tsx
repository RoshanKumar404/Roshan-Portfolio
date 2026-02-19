"use client"

import type { ScreenType } from "../mobile-emulator"
import ProjectCard from "./project-card"

interface ProjectsScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function ProjectsScreen({ onNavigate }: ProjectsScreenProps) {
  const BASE_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3000/"
  : "https://roshanandroiddevelper.netlify.app/";


  return (
    <div className="min-h-full bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">PROJECTS</h1>

      <div className="space-y-8">
        <ProjectCard
          title="Global Water-Logging Detector"
          SubTitle="AI & GPS Monitoring"
          description="A sophisticated Android solution leveraging Computer Vision to identify water-logged areas. It generates real-time, GPS-tagged reports to assist municipal authorities in rapid flood response."
          screenshots={[
            "/Dtector  image uploading for AI procesing.png",
            "/camera screen.png",
            "/water detector report ai resposne.png",
            "/location the water logged area detected form the image.png"
          ]}
          apkUrl={`${BASE_URL}/apks/detector.apk`}
        />

        <ProjectCard
          title="Live Stream Pro"
          SubTitle="Kotlin & Jetpack Compose"
          description="A high-performance streaming platform offering seamless live TV playback. Features a modern intuitive interface, optimized buffering, and robust channel management."
          screenshots={[
            "/Live tv channels.png",
            "/live tv channel list.png",
            "/live tv video playing preview.png",
            "/LiveTV FullScreen.png"
          ]}
          apkUrl={`${BASE_URL}/apks/livetv.apk`}
        />

        <ProjectCard
          title="Finance Advisor"
          SubTitle="Hackathon Champion"
          description="An intuitive financial management app developed for small business owners. It simplifies bookkeeping with digital ledger tracking for online and cash transactions."
          screenshots={["/Finance_Screen.jpg", "/Finance_Screen1.jpg", "Finance_Screen5.jpg","Finance_Screen4.jpg","Finance_Screen6.png"]}
          apkUrl={`${BASE_URL}/apks/FinanceAdvisor.apk`}
        />

        <ProjectCard
          title="Velvet View"
          SubTitle="Generative AI"
          description="An innovative mobile gallery powered by DALL-E and Midjourney integration. Velvet View allows users to generate and apply high-resolution AI wallpapers instantly."
          screenshots={["/Velvet_Screen1.png", "/Velvet_Screen2.png", "/Velvet_Screen3.png","/Velvet_Screen4.png","/Velvet_Screen5.png","/Velvet_Screen6.png"]}
          apkUrl={`${BASE_URL}/apks/VelvetView.apk`}
        />
      </div>
    </div>
  )
}
