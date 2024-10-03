import React from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

interface ParticlesBackgroundProps {
  quantityDesktop: number
  quantityMobile: number
  ease: number
  color: string
  refresh: boolean
}

export default function ParticlesBackground({
  quantityDesktop,
  quantityMobile,
  ease,
  color,
  refresh
}: ParticlesBackgroundProps) {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const options = {
    particles: {
      number: {
        value: typeof window !== 'undefined' && window.innerWidth > 768 ? quantityDesktop : quantityMobile,
      },
      color: {
        value: color,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      links: {
        color: color,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
    },
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      refresh={refresh}
    />
  )
}