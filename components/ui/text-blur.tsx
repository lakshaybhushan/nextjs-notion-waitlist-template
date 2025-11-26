"use client"
import { cn } from "@/lib/utils"

interface TextBlurProps {
  text: string
  className?: string
}

const TextBlur = ({
  text,
  className,
}: TextBlurProps) => {
  return (
    <h1 className={cn(className, "drop-shadow-sm")}>
      {text}
    </h1>
  )
}

export default TextBlur
