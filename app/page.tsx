"use client"
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState<string>("")

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/notion/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        console.log("Success")
      } else {
        console.log("Failed")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Notion Waitlist</h1>
      <div className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          className="p-2 m-2 border border-gray-300 rounded"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="p-2 m-2 bg-blue-500 text-white rounded"
          onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </main>
  )
}
