import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>🚀 Early Beta Access</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-balance text-center text-xl font-semibold text-foreground sm:text-2xl">
          Kontentino ChatGPT App
        </h2>
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-balance text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="Create in ChatGPT. Approve with Kontentino."
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[30rem] text-pretty pt-1.5 text-center text-base text-muted-foreground sm:text-lg"
          text="Finally-generate posts, preview them perfectly, and share for approval without the tool-switching headache."
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
