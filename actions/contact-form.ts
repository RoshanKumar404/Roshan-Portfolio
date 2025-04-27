"use server"
import 'dotenv/config'
export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          name,
          email,
          subject,
          message,
          to_email: 'roshankuar951@gmail.com',
        },
      }),
    })
    
    

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error submitting form:", error)
    return { success: false, message: "Failed to send message. Please try again." }
  }
}
