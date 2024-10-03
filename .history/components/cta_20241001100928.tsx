
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TylersHomeFindsComponent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted:', { name, email })
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitted(true)
  }



  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  
  interface FormProps {
  name: string
  email: string
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: () => void
  loading: boolean
  isHovered: boolean
  setIsHovered: (isHovered: boolean) => void
  }
  
  export default function Form({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
  isHovered,
  setIsHovered
  }: FormProps) {
  return (
  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
  <Input
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={handleNameChange}
  required
  className="w-full border-2 border-teal-400 bg-white/50 placeholder-teal-400 text-teal-600 font-semibold rounded-full px-4 sm:px-6 py-2 sm:py-3"
  style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}
  />
  <Input
  type="email"
  placeholder="Your Email"
  value={email}
  onChange={handleEmailChange}
  required
  className="w-full border-2 border-teal-400 bg-white/50 placeholder-teal-400 text-teal-600 font-semibold rounded-full px-4 sm:px-6 py-2 sm:py-3"
  style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}
  />
  <Button
  type="submit"
  disabled={loading}
  className={`w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 sm:py-3 rounded-full transition-colors duration-300 text-lg sm:text-xl join-button ${isHovered ? 'wiggle' : ''}`}
  style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  >
  {loading ? "Joining..." : "Join the fuss!"}
  </Button>
  
  </form>








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

  return (
    <div className="relative w-full max-w-4xl mx-auto space-y-8 text-center z-10 p-4 sm:p-6 my-4 sm:my-8">
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
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-600 drop-shadow-lg whitespace-normal sm:whitespace-nowrap flex flex-col sm:flex-row items-center justify-center">
          <span className="font-serif italic tracking-tighter" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>TYLER'S</span>
          <span className="font-serif italic tracking-tighter sm:ml-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>HOME FINDS</span>
        </h2>
        <p className="text-2xl sm:text-4xl font-semibold text-orange-400 font-serif italic tracking-tighter" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Coming soon!</p>
      </div>

      <div className="bg-grey/80 backdrop-blur-md rounded-xl p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-lg">
        <p className="text-lg sm:text-xl text-gray-700 font-medium drop-shadow-md" style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>
          For nearly half a century, TYLER'S has been the heart of family shopping in Texas and a go-to destination!
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border-2 border-teal-400 bg-white/50 placeholder-teal-400 text-teal-600 font-semibold rounded-full px-4 sm:px-6 py-2 sm:py-3"
              style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-2 border-teal-400 bg-white/50 placeholder-teal-400 text-teal-600 font-semibold rounded-full px-4 sm:px-6 py-2 sm:py-3"
              style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}
            />
            <Button 
              type="submit" 
              className={`w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 sm:py-3 rounded-full transition-colors duration-300 text-lg sm:text-xl join-button ${isHovered ? 'wiggle' : ''}`}
              style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Join the fuss!
            </Button>
          </form>
        ) : (
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl font-semibold text-teal-600 drop-shadow-md" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>You're on the list!</p>
            <p className="text-lg sm:text-xl text-gray-700 drop-shadow-md" style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>We're excited to introduce you to a trusted and exciting way to decorate homes.</p>
          </div>
        )}

        <p className="text-lg sm:text-xl text-gray-700 font-medium drop-shadow-md" style={{ fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>
          Join the waitlist for this EXCITING NEW addition that's gonna make TYLER'S HOME FINDS that HOME GO-TO DESTINATION!
        </p>
      </div>

      <div className="mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-4 sm:mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 mb-4 sm:mb-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 sm:h-56 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center px-2">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Discover a world of comfort and style with our featured products. From the luxurious reclining living room set that promises ultimate relaxation, to the cozy autumn-inspired space with its clever lift-top coffee table and vibrant accents. Bring a touch of nature indoors with our rustic solid wood dining set, perfect for family gatherings. And for a peaceful night's sleep, our modern bedroom collection offers a contemporary retreat with light wood furniture and an elegant upholstered headboard. Each piece is carefully selected to transform your house into a home that reflects your unique style and comfort needs.
          </p>
        </div>
      </div>
    </div>
  )
}