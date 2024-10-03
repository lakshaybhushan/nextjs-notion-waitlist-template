jsx
import { useState, useEffect } from 'react'

export default function Page() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Tyler's Home Finds</h1>
      <p className="text-xl mb-8">Discover amazing home decor and furniture!</p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-2xl font-semibold">You've been here for:</p>
        <p className="text-5xl font-bold text-teal-600">{count} seconds</p>
      </div>
      <button 
        className="mt-8 px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
        onClick={() => alert('Join our mailing list!')}
      >
        Join Now
      </button>
    </main>
  )
}