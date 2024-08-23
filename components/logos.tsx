import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

const logos = [
  { href: "https://nextjs.org", src: "/nextjs.svg", alt: "Next.js Logo" },
  { href: "https://notion.so", src: "/notion.svg", alt: "Notion Logo" },
  { href: "https://upstash.com", src: "/upstash.svg", alt: "Upstash Logo" },
  { href: "https://vercel.com", src: "/vercel.svg", alt: "Vercel Logo" },
];

export default function Logos() {
  return (
    <motion.div
      className="my-16 flex w-full flex-col gap-2 md:mb-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <h2 className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl">
          Powered by
        </h2>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-4 grid w-full grid-cols-2 items-center justify-center gap-4 md:mt-6 md:flex md:gap-8">
        {logos.map((logo, index) => (
          <Link
            key={index}
            href={logo.href}
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-24 items-center justify-center rounded-lg border bg-zinc-900 p-8 transition-all duration-150 ease-in-out md:hover:border-zinc-700 md:hover:bg-accent">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-auto w-32 opacity-85"
            />
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
