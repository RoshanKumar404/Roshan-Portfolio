import { Button } from "@/components/ui/button"
import type { ScreenType } from "../mobile-emulator"

interface AboutScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function AboutScreen({ onNavigate }: AboutScreenProps) {
  const BASE_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3000/Roshan_Resume.pdf"
  : "https://roshanandroiddevelpor.netlify.app/Roshan_Resume.pdf";


  return (
    <div className="min-h-full bg-gray-900 text-white p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">ABOUT</h1>
      <h2 className="text-xl mb-4">Let me introduce myself.</h2>

      <p className="text-sm text-gray-300 mb-6">
        Android Developer with 8 months of working experience on my Own Projects.Recently i have won Hack Horizon
        Hackathon which was organised by Arka jain University with Google Developers Group Ranchi.
      </p>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3">PROFILE</h3>

        <div className="space-y-3 text-sm">
          <div>
            <div className="text-gray-400">FULLNAME:</div>
            <div>Roshan Kumar</div>
          </div>

          <div>
            <div className="text-gray-400">BIRTH DATE:</div>
            <div>May 5th, 2002</div>
          </div>

          <div>
            <div className="text-gray-400">WEBSITE:</div>
          </div>

          <div>
            <div className="text-gray-400">EMAIL:</div>
            <div>roshankuar951@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold mb-3">SKILLS</h3>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>ANDROID</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-pink-600 h-2 rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Linux</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-pink-600 h-2 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>Python</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-pink-600 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>React-Native</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-pink-600 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>JavaScript</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-pink-600 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span>FLUTTER</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-pink-600 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-3">
        <Button className="bg-pink-600 hover:bg-pink-700 flex-1">HIRE ME</Button>
        <Button className="bg-gray-700 hover:bg-gray-600 flex-1" asChild>
          <a href={BASE_URL}download>
            DOWNLOAD CV
          </a>
        </Button>
      </div>
    </div>
  )
}
