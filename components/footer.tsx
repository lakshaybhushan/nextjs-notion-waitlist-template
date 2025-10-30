import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "./mode-toggle";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-between border-t bg-background p-6 text-muted-foreground">
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <img
          src="/kontentino-logo.svg"
          alt="Kontentino"
          className="h-4 w-auto"
        />
        <div className="flex items-center gap-2">
          <span>© 2025</span>
          <Link
            href="https://www.kontentino.com"
            rel="noopener noreferrer"
            target="_blank">
            <span className="text-foreground underline underline-offset-2 transition-all duration-200 ease-linear hover:text-primary">
              Kontentino
            </span>
          </Link>
          <span className="hidden md:inline">— Social Media Management Platform</span>
        </div>
      </motion.div>
      <motion.div variants={itemVariants}>
        <ModeToggle />
      </motion.div>
    </motion.div>
  );
}
