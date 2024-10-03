import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";


const featuredProducts = [
  { 
    name: "Luxe Reclining Living Room Set", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-08%206.54.54%20PM-Heuw5C1kte0mQzLLrytKJE9p0M8xEv.png",
    description: "Elevate your living space with our plush gray reclining sofa set, perfect for ultimate relaxation."
  },
  { 
    name: "Cozy Autumn Living Room", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-08%207.03.18%20PM-dnqJvQYMpBZ3TCiJUm7UGpAEWsHR83.png",
    description: "Create a warm and inviting atmosphere with our lift-top coffee table and vibrant orange accents."
  },
  { 
    name: "Natural Wood Dining Set", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-08%207.06.29%20PM-W2hULHOSQt0qQvtYBn7kXhCPleQOL1.png",
    description: "Bring rustic charm to your dining area with our solid wood table and chair set."
  },
  { 
    name: "Modern Bedroom Collection", 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-09-08%207.08.50%20PM-uPGlaPx2Ete971rO2CClt8WZwB9Etw.png",
    description: "Transform your bedroom into a contemporary retreat with our light wood furniture and upholstered headboard."
  },
]
export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
          text="testttt"
        />
      </motion.div>
      
      </motion.div>
  
  );
}