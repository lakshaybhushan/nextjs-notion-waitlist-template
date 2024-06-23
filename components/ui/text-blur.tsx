"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextBlurProps {
  text: string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
}
const TextBlur = ({
  text,
  className,
  variant,
  duration = 1,
}: TextBlurProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  }
  const combinedVariants = variant || defaultVariants

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(className, "drop-shadow-sm")}>
      {text}
    </motion.h1>
  )
}

export default TextBlur
