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





import React from 'react'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-teal-600"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
      <span className="text-2xl font-bold text-gray-800">
        TYLER'S <span className="text-teal-600">HOME FINDS</span>
      </span>
    </Link>
  )
}

export default Logo





</form>
)
}