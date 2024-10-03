"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"
import { Header, Footer, CTA, Particles, FeaturedProducts } from '@/components'
import WaitlistForm from '@/components/JoinWaitlistForm'

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <Header />
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <CTA
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        >
          <WaitlistForm />
        </CTA>
        <FeaturedProducts />
      </section>
      <Footer />
      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  )
}