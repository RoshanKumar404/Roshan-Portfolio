import type { ScreenType } from "../mobile-emulator"
import ProjectCard from "./project-card"

interface ProjectsScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function ProjectsScreen({ onNavigate }: ProjectsScreenProps) {
  return (
    <div className="min-h-full bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">PROJECTS</h1>

      <div className="space-y-8">
        <ProjectCard
          title="Finance-Advisor"
          description="A React Native app that lets Small Business Owners maintains their transactions(Online+cash) in table format , for easier maintainance and many more..."
          screenshots={["/Finance_Screen.jpg", "/Finance_Screen1", "Finance_Screen2.jpg","Finance_Screen3.jpg"]}
          apkUrl="/apks/pdf-generator.apk"
        />

        <ProjectCard
          title="Velvet View "
          description="An AI Wallpaper gnerating App"
          screenshots={["/Velvet_Screen1.png", "/Velvet_Screen2.png", "/Velvet_Screen3.png","/Velvet_Screen4.png","/Velvet_Screen5.png","/Velvet_Screen6.png"]}
          apkUrl="/apks/VelvetView.apk"
        />
      </div>
    </div>
  )
}
