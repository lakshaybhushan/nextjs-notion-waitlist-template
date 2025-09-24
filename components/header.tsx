import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Image from "next/image";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex left-0 top-0 z-50 p-4 items-center border-b border-white/10 backdrop-blur-sm w-full"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={24} height={24} />
          <span className="font-bold text-white">whisper</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#features" className="text-neutral-400 hover:text-white transition-colors">
              Features
          </Link>
          <Link href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
              Pricing
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
