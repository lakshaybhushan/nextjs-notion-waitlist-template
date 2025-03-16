import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex right-0 left-0 justify-between top-0 z-[50] m-4">
      <motion.div variants={itemVariants}>
        <Link href="https://lakshaybhushan.notion.site/15e45b25609e80408f83ebb97b45882b?v=c949c24dff4a42b3baa31bfb3e8a3354" rel="noopener noreferrer" target="_blank">
          
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link href="https://github.com/lakshaybhushan/nextjs-notion-waitlist-template/fork" rel="noopener noreferrer" target="_blank">
          
        </Link>
      </motion.div>
    </motion.div>
  );
}
