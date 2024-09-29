export default function Header() {
  return (
  <header className="w-full text-center mb-8">
  <h1 className="text-3xl sm:text-5xl font-bold text-teal-600 drop-shadow-lg whitespace-normal sm:whitespace-nowrap flex flex-col sm:flex-row items-center justify-center">
  <span className="font-serif italic tracking-tighter" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>TYLER'S</span>
  <span className="font-serif italic tracking-tighter sm:ml-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>HOME FINDS</span>
  </h1>
  <p className="text-2xl sm:text-4xl font-semibold text-orange-400 font-serif italic tracking-tighter" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Coming soon!</p>
  </header>
  )
  }