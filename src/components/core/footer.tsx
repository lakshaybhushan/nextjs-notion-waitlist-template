import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-1 border-t bg-background p-6 text-muted-foreground md:justify-center">
      <motion.div variants={itemVariants}>
        © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
      </motion.div>
    </motion.div>
  );
}
