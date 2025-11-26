"use client";

export default function VideoShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-8">

      {/* Large header section */}
      <div className="text-center space-y-4">
        <h2 className="font-serif text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          See it in action
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
          Watch how ChatGPT becomes your social media command center
        </p>
      </div>

      {/* Video container */}
      <div className="w-full">
        <div className="w-full rounded-xl border-2 border-primary/20 bg-black p-3 shadow-xl">
          <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '1920 / 1004' }}>
            <video
              className="w-full h-full rounded-lg"
              autoPlay
              loop
              muted
              playsInline>
              <source src="/hero-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
