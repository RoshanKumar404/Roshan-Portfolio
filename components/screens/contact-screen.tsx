"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { submitContactForm } from "@/actions/contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"
import { ScreenType } from "@/lib/types"

interface ContactScreenProps {
  onNavigate: (screen: ScreenType) => void
}

export default function ContactScreen({ onNavigate }: ContactScreenProps) {
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    const result = await submitContactForm(formData)
    setFormStatus(result)
  }

  return (
    <div className="min-h-full bg-gray-900 text-white p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-2">CONTACT</h1>
      <h2 className="text-xl mb-4">I'd Love To Hear From You.</h2>

      <p className="text-sm text-gray-300 mb-6 font-medium">
        Have a project in mind or just want to say hello? Drop me a message below and I'll get back to you as soon as possible.
      </p>

      <form action={handleSubmit} className="space-y-4 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <Input name="name" placeholder="Name" className="bg-gray-800/50 border-white/5 text-white h-12 rounded-xl focus:ring-pink-500/20" required />
          <Input
            name="email"
            placeholder="Email"
            type="email"
            className="bg-gray-800/50 border-white/5 text-white h-12 rounded-xl focus:ring-pink-500/20"
            required
          />
        </div>
        <Input name="subject" placeholder="Subject" className="bg-gray-800/50 border-white/5 text-white h-12 rounded-xl focus:ring-pink-500/20" required />
        <Textarea
          name="message"
          placeholder="Message"
          className="bg-gray-800/50 border-white/5 text-white min-h-[120px] rounded-xl focus:ring-pink-500/20 py-4"
          required
        />

        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 h-12 rounded-xl font-bold tracking-widest shadow-lg shadow-pink-500/20 active:scale-[0.98] transition-transform">
          SEND MESSAGE
        </Button>

        {formStatus && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl text-center font-medium ${formStatus.success ? "bg-green-500/20 text-green-400 border border-green-500/20" : "bg-red-500/20 text-red-400 border border-red-500/20"}`}
          >
            {formStatus.message}
          </motion.div>
        )}
      </form>

      <div className="space-y-6 mb-8">
        <div className="bg-gray-800/30 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center mb-1">
            <Mail size={16} className="text-pink-500 mr-2" />
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Email Me</span>
          </div>
          <a href="mailto:roshankuar951@gmail.com" className="text-sm font-medium hover:text-pink-500 transition-colors">
            roshankuar951@gmail.com
          </a>
        </div>

        <div className="bg-gray-800/30 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center mb-1">
            <Phone size={16} className="text-pink-500 mr-2" />
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Call / WhatsApp</span>
          </div>
          <a href="tel:+918252194251" className="text-sm font-medium hover:text-pink-500 transition-colors">
            (+91) 8252194251
          </a>
        </div>
      </div>

      <div className="text-[10px] text-gray-600 text-center pt-6 border-t border-gray-800/50 uppercase tracking-[0.2em] font-medium">
        Designed & Built by Roshan Kumar
      </div>
    </div>
  )
}
