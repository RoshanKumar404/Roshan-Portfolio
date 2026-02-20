import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  SubTitle: string
  description: string
  screenshots: string[]
  apkUrl?: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, screenshots, apkUrl, SubTitle, liveUrl }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-dark rounded-3xl overflow-hidden border border-white/5 mb-8"
    >
      <div className="p-5">
        <div className="mb-4">
          <h2 className="text-xl font-black tracking-tight text-white mb-1 uppercase">{title}</h2>
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1px] bg-pink-500"></span>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-pink-500 uppercase">{SubTitle}</h4>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mb-6 leading-relaxed font-medium">{description}</p>

        {screenshots.length > 0 && (
          <div className="relative mb-6 group">
            <div className="aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden relative border border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={screenshots[currentImageIndex] || "/placeholder.svg"}
                    alt={`${title} screenshot ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
            </div>

            {screenshots.length > 1 && (
              <>
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={prevImage}
                    className="bg-black/40 backdrop-blur-md text-white rounded-full p-2 hover:bg-pink-500 transition-colors active:scale-90"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-black/40 backdrop-blur-md text-white rounded-full p-2 hover:bg-pink-500 transition-colors active:scale-90"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
                
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "transition-all duration-300 rounded-full",
                        currentImageIndex === index ? "w-4 h-1 bg-pink-500" : "w-1 h-1 bg-white/30"
                      )}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="flex gap-2">
          {apkUrl && (
            <Button className="flex-1 rounded-xl bg-white text-black hover:bg-gray-200 font-bold text-[10px] tracking-widest h-11" asChild>
              <a href={apkUrl} download>
                <Download size={14} className="mr-2" />
                GET APK
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="outline" className="flex-1 rounded-xl border-white/10 hover:bg-white/5 font-bold text-[10px] tracking-widest h-11" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} className="mr-2" />
                LIVE DEMO
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
