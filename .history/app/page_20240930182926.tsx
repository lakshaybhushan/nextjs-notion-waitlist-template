export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24 bg-gray-100"
'use client'

import { useState, useEffect } from 'react'

export default function Page() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Tyler's Home Finds</h1>
      <p className="text-xl mb-8">Discover amazing home decor and furniture!</p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-2xl font-semibold">You've been here for:</p>
        <p className="text-5xl font-bold text-teal-600">{count} seconds</p>
      </div>
      <button 
        className="mt-8 px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
        onClick={() => alert('Join our mailing list!')}
      >
        Join Now
      </button>
    </main>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { toast } from "sonner"
import CTA from "@/components/cta"
import Form from "@/components/form"
import Logos from "@/components/logos"
import Particles from "@/components/ui/particles"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [fireworks, setFireworks] = useState<Array<{id: number, color: string, size: number, left: number, top: number, animationDuration: number}>>([])
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const createFirework = () => {
      const colors = ['#00CED1', '#FFA500', '#A9A9A9']
      return {
        id: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: Math.random() * 2 + 1
      }
    }

    const interval = setInterval(() => {
      setFireworks(prev => [...prev.slice(-50), createFirework()])
    }, 200)

    return () => clearInterval(interval)
  }, [])

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
        // First, attempt to send the email
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
          return // Exit the promise early if mail sending fails
        }

        // If email sending is successful, proceed to insert into Notion
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
    <main className="relative flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24 bg-gray-100">
      <style jsx>{`
        .join-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .join-button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
          transform: scale(0);
          transition: transform 0.6s ease-out;
        }
        .join-button:hover::before {
          transform: scale(1);
        }
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        .wiggle {
          animation: wiggle 0.5s ease-in-out infinite;
        }
        @keyframes firework {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)); opacity: 0; }
        }
        .animate-firework {
          --tx: 0;
          --ty: 0;
          animation: firework var(--duration, 1s) ease-out forwards;
        }
      `}</style>
      {fireworks.map(firework => (
        <div
          key={firework.id}
          className="absolute rounded-full animate-firework"
          style={{
            backgroundColor: firework.color,
            width: firework.size,
            height: firework.size,
            left: `${firework.left}%`,
            top: `${firework.top}%`,
            '--duration': `${firework.animationDuration}s`,
            '--tx': `${(Math.random() - 0.5) * 100}px`,
            '--ty': `${(Math.random() - 0.5) * 100}px`,
          } as React.CSSProperties}
        />
      ))}
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <Header />

        <CTA />

        <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-lg max-w-4xl w-full">
          <p className="text-lg sm:text-xl text-gray-700 font-medium drop-shadow-md" style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>
            For nearly half a century, TYLER'S has been the heart of family shopping in Texas and a go-to destination!
          </p>

          <Form
            name={name}
            email={email}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handleSubmit={handleSubmit}
            loading={loading}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />

          <p className="text-lg sm:text-xl text-gray-700 font-medium drop-shadow-md" style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>
            Join the waitlist for this EXCITING NEW addition that's gonna make TYLER'S HOME FINDS that HOME GO-TO DESTINATION!
          </p>
        </div>

        <Logos />
      </section>

      <Footer />

      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  )
}



             </main>
  )
}
