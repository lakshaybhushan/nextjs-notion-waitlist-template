import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";

const logos = [
  { href: "https://nextjs.org", src: "/nextjs.svg", alt: "Next.js Logo" },
  { href: "https://notion.so", src: "/notion.svg", alt: "Notion Logo" },
  { href: "https://resend.com", src: "/resend.svg", alt: "Resend Logo" },
  { href: "https://upstash.com", src: "/upstash.svg", alt: "Upstash Logo" },
  { href: "https://ui.shadcn.com", src: "/shadcn.svg", alt: "shadcn Logo" },
  { href: "https://vercel.com", src: "/vercel.svg", alt: "Vercel Logo" },
];

export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
          text="Powered by"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="Simple and powerful tools that help you build faster"
          duration={0.8}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-4 grid w-full grid-cols-2 items-center justify-center gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
        {logos.map((logo, index) => (
          <Link
            key={index}
            href={logo.href}
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-24 items-center justify-center rounded-lg border bg-zinc-900 p-8 transition-all duration-150 ease-in-out md:hover:border-zinc-700 md:hover:bg-accent">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="h-auto w-32 opacity-85"
            />
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
