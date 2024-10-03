"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Mail } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function TylersCTA() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-16 bg-gradient-to-b from-teal-50 to-white rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex justify-center mb-8">
        <div className="flex items-center justify-center rounded-full bg-teal-100 p-3">
          <Home className="h-8 w-8 text-teal-600" />
        </div>
      </motion.div>

      <motion.h1 
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-6"
      >
        Discover Your Perfect Home
      </motion.h1>

      <motion.p 
        variants={itemVariants}
        className="text-xl text-center text-teal-600 mb-8 max-w-2xl mx-auto"
      >
        For nearly half a century, Tylers has been the heart of family shopping in Texas. 
        Join our community and be the first to explore our latest home finds!
      </motion.p>

      <motion.div variants={itemVariants} className="max-w-md mx-auto">
        <form className="flex flex-col sm:flex-row gap-4">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow"
          />
          <Button type="submit" size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Mail className="mr-2 h-4 w-4" /> Join Waitlist
          </Button>
        </form>
      </motion.div>

      <motion.p 
        variants={itemVariants}
        className="text-sm text-center text-teal-500 mt-4"
      >
        Be the first to know when we launch and get exclusive offers!
      </motion.p>
    </motion.div>
  )
}