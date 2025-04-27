"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Github, BookOpen } from "lucide-react"
import type { ScreenType } from "../mobile-emulator"

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-full bg-gray-900 text-white flex flex-col relative overflow-hidden">
      {/* Stars background effect */}
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-cover opacity-30"></div>

      <div className="relative z-10 flex-1 flex flex-col justify-between p-6">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-pink-500">
            <img src="/profile.jpg" alt="Roshan Kumar" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-light mb-2">HELLO, WORLD.</h2>
          <h1 className="text-4xl font-bold mb-1">I'm Roshan</h1>
          <h1 className="text-4xl font-bold mb-6">Kumar.</h1>

          <div className="text-sm text-gray-300 mb-8">
            SOFTWARE ENGINEER | ANDROID NATIVE AND CROSS PLATFORM | JavaScript | Debugger
          </div>

          <Button
            onClick={() => onNavigate("about")}
            className="bg-pink-600 hover:bg-pink-700 text-white rounded-md px-6 py-2"
          >
            MORE ABOUT ME
          </Button>
        </div>

        {/* Person silhouette */}
        <div className="absolute bottom-0 right-0 w-40 h-80 opacity-70">
          <div className="w-full h-full bg-[url('/person-silhouette.png')] bg-contain bg-no-repeat bg-bottom"></div>
        </div>

        {/* Social links */}
        <div className="mt-auto mb-4 flex space-x-4">
          <a
            href="https://www.linkedin.com/in/roshan-kumar-3bb631267/"
            className="text-white hover:text-pink-500 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/RoshanKumar404" className="text-white hover:text-pink-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-white hover:text-pink-500 transition-colors">
            <BookOpen size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
