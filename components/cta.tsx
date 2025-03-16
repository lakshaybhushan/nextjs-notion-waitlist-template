import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-[#1877F2]/80 text-center shadow-md shadow-[#1877F2]/20">
            <AnimatedShinyText className="px-4 py-1 text-white">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/Logomark.svg"
        alt="logo"
        className="mx-auto h-24 w-24 drop-shadow-[0_0_10px_rgba(24,119,242,0.3)]"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="Learnrithm Ai v2 Is coming, Cleaner ui and More features"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-[#a8c7f7] sm:text-lg"
          text="Be the first to unlock Learnrithm AI's power — join our exclusive waitlist today and score an entire month FREE when we launch!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}