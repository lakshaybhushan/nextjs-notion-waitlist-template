"use client";

import CTA from "@/components/features/cta";
import Form from "@/components/features/form";
import Header from "@/components/core/header";
import Footer from "@/components/core/footer";
import BentoGrid from "@/components/features/bento-grid";
import Testimonials from "@/components/features/testimonials";
import GridBackground from "@/components/ui/grid-background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip">
      <Header />
      <div className="relative w-full">
        <GridBackground />
        <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 max-w-7xl mx-auto">
          <CTA />

          <Form />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </section>
      </div>

      <BentoGrid />

      <Footer />
    </main>
  );
}
