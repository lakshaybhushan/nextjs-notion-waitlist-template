import ParticlesBackground from '../components/ParticlesBackground'
// ... other imports

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* ... other components */}
      <ParticlesBackground
        quantityDesktop={100}
        quantityMobile={50}
        ease={50}
        color="#4a90e2"
        refresh={true}
      


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