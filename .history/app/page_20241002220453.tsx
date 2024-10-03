"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"
import { Header, Footer, CTA, Particles, FeaturedProducts } from '@/components'

export default function Home() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill in all fields 😠")
      return
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address 😠")
      return
    }

    setLoading(true)

    const promise = new Promise(async (resolve, reject) => {
      try {
        const mailResponse = await fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        })

        if (!mailResponse.ok) {
          if (mailResponse.status === 429) {
            reject("Rate limited")
          } else {
            reject("Email sending failed")
          }
          return
        }

        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        })

        if (!notionResponse.ok) {
          if (notionResponse.status === 429) {
            reject("Rate limited")
          } else {
            reject("Notion insertion failed")
          }
        } else {
          resolve({ name })
        }
      } catch (error) {
        reject(error)
      }
    })

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("")
        setEmail("")
        return "Thank you for joining the waitlist 🎉"
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later"
        } else if (error === "Email sending failed") {
          return "Failed to send email. Please try again 😢."
        } else if (error === "Notion insertion failed") {
          return "Failed to save your details. Please try again 😢."
        }
        return "An error occurred. Please try again 😢."
      },
    })

    promise.finally(() => {
      setLoading(false)
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <Header />
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <CTA
          name={name}
          email={email}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
          loading={loading}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <FeaturedProducts />
      </section>
      <Footer />
      <Particles
        quantityDesktop=> {
          quantityDesktop
        }={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  )
}