import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

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
    opacity: 1
  }
}

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
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 relative overflow-hidden">
          <span className="relative z-10">Featured Products</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
        </h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden group"
              variants={itemVariants}
            >
              <div className="relative">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={500} 
                  height={300} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                    <Link href="/products" className="mt-4 inline-block text-blue-300 hover:text-blue-100 transition-colors duration-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}