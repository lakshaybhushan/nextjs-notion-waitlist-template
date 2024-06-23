"use client"

import { EnhancedButton } from "@/components/ui/enhanced-btn"
import { Input } from "@/components/ui/input"
import { FaArrowRightLong } from "react-icons/fa6"
import { useState } from "react"
import Link from "next/link"
import Particles from "@/components/ui/particles"
import TextBlur from "@/components/ui/text-blur"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { FaXTwitter } from "react-icons/fa6"
import AnimatedShinyText from "@/components/ui/shimmer-text"

export default function Home() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

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
        const notionResponse = await fetch("/api/notion/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        })

        const mailResponse = await fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        })

        if (notionResponse.ok && mailResponse.ok) {
          resolve({ name })
        } else {
          reject(new Error("Failed to add to the waitlist"))
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
        return "Thank you for joining morph2json's waitlist! 🎉"
      },
      error: "An error occurred. Please try again 😢.",
    })

    promise.finally(() => {
      setLoading(false)
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <main className="flex flex-col min-h-screen items-center pt-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col gap-2 max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center">
            <div className="bg-muted/80 text-center w-fit rounded-full flex items-center justify-center">
              <AnimatedShinyText className="px-4 py-1">
                <span>Coming soon!</span>
              </AnimatedShinyText>
            </div>
          </div>
        </motion.div>

        <motion.img
          src="/logo.svg"
          alt="logo"
          className="w-24 h-24 mx-auto"
          variants={itemVariants}
        />

        <motion.div variants={itemVariants}>
          <TextBlur
            className="text-3xl sm:text-5xl font-medium tracking-tighter text-center"
            text="Effortlessly Convert your raw data into a well structured JSON"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextBlur
            className="text-base sm:text-lg text-center pt-1.5 text-zinc-300 max-w-[27rem] mx-auto"
            text="Join the waitlist to get early access to morph2json and get notified
            the moment it goes live!"
            duration={0.8}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col gap-2 mt-6 w-full max-w-[24rem]"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants}>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={handleEmailChange}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <EnhancedButton
            variant="expandIcon"
            Icon={FaArrowRightLong}
            onClick={handleSubmit}
            iconPlacement="right"
            className="w-full mt-2"
            disabled={loading}>
            {loading ? "Loading..." : "Join Waitlist!"}
          </EnhancedButton>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex justify-center w-full mt-4 text-muted-foreground gap-1 items-center">
          <p>For any queries, reach out at </p>
          <Link
            href="https://x.com/blakssh"
            rel="noopener noreferrer"
            target="_blank">
            <FaXTwitter className="w-4 h-4 hover:text-yellow-200 ease-linear transition-all duration-200" />
          </Link>
        </motion.div>
      </motion.div>

      <Particles
        className="absolute inset-0 -z-[100]"
        quantity={150}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  )
}
