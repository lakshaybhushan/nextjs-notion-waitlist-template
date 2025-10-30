import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaInfoCircle, FaSignInAlt } from "react-icons/fa";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex right-0 left-0 justify-between top-0 z-[50] m-4">
      <motion.div variants={itemVariants}>
        <Link href="https://www.kontentino.com" rel="noopener noreferrer" target="_blank">
          <Button
            size="sm"
            variant="secondary"
            className="transition-all duration-150 ease-linear">
            <FaInfoCircle className="md:mr-1.5" />
            <span className="hidden md:inline">About Kontentino</span>
          </Button>
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link href="https://app.kontentino.com" rel="noopener noreferrer" target="_blank">
          <Button
            size="sm"
            variant="secondary"
            className="transition-all duration-150 ease-linear">
            <FaSignInAlt className="md:mr-1.5" />
            <span className="hidden md:inline">Existing Customer?</span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
