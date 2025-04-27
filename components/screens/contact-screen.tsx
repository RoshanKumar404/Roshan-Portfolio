"use client"

import { useState } from "react"
import { submitContactForm } from "@/actions/contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"
import type { ScreenType } from "../mobile-emulator"

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

      <p className="text-sm text-gray-300 mb-6">
        In case of any queries you can send your queries by following the below details!
      </p>

      <form action={handleSubmit} className="space-y-4 mb-6">
        <Input name="name" placeholder="Name" className="bg-gray-800 border-gray-700 text-white" required />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          className="bg-gray-800 border-gray-700 text-white"
          required
        />
        <Input name="subject" placeholder="Subject" className="bg-gray-800 border-gray-700 text-white" required />
        <Textarea
          name="message"
          placeholder="Message"
          className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
          required
        />

        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
          SUBMIT
        </Button>

        {formStatus && (
          <div className={`p-3 rounded ${formStatus.success ? "bg-green-800" : "bg-red-800"}`}>
            {formStatus.message}
          </div>
        )}
      </form>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex items-center mb-2">
            <Mail size={18} className="text-pink-500 mr-2" />
            <h3 className="font-bold">EMAIL ME AT</h3>
          </div>
          <a href="mailto:shakil.py@gmail.com" className="text-gray-300 hover:text-pink-500 transition-colors">
            roshankuar951@gmail.com
          </a>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Phone size={18} className="text-pink-500 mr-2" />
            <h3 className="font-bold">CONTACT WITH ME AT MOBILE/WHAT'S APP AT</h3>
          </div>
          <a href="tel:+8801688499299" className="text-gray-300 hover:text-pink-500 transition-colors">
            Phone/Mobile: (+91) 8252194251
          </a>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-800">Designed by Roshan Kumar</div>
    </div>
  )
}
