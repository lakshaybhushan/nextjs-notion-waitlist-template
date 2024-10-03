






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
  
    );
  }
)
}