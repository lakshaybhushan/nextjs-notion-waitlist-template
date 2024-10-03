"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"
import { JoinWaitlistForm } from '@/components'

export default function ClientWaitlistForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    toast.success("Thank you for joining our waitlist!")
  }

  return <JoinWaitlistForm onSubmit={handleSubmit} email={email} setEmail={setEmail} />
}