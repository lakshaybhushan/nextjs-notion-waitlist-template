"use client";

import Particles from "@/components/ui/particles";

export default function MinimalPage() {
  return (
    <main className="flex h-screen min-h-screen flex-col items-center justify-center overflow-x-clip">
      <Particles
        className="absolute inset-0 -z-10"
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
      <h1 className="font-offbit-dot text-5xl text-gray-300">
        Coming Soon
      </h1>
    </main>
  );
}
