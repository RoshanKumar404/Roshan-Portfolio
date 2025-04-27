"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  SubTitle:string
  description: string
  screenshots: string[]
  apkUrl?: string
}

export default function ProjectCard({ title, description, screenshots, apkUrl,SubTitle }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <h4 className="text-sm font-bold">{SubTitle}</h4>
        <p className="text-sm text-gray-300 mb-4">{description}</p>

        {screenshots.length > 0 && (
          <div className="relative mb-4">
            <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
              <img
                src={screenshots[currentImageIndex] || "/placeholder.svg"}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-1"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-1"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn("w-2 h-2 rounded-full", currentImageIndex === index ? "bg-white" : "bg-white/50")}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {apkUrl && (
          <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700" asChild>
            <a href={apkUrl} download>
              <Download size={16} />
              Download APK
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
