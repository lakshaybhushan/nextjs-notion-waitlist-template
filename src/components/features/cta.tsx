import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col items-center gap-2 mt-20 md:mt-28"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Backed by nyka.</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="px-4">
        <TextBlur
          className="text-center text-4xl md:text-6xl font-black tracking-tighter md:whitespace-nowrap"
          text={"Immobilien analysiert in Sekunden."}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[42rem] pt-1.5 text-center text-base md:text-lg text-zinc-300"
          text="Praedia verwandelt Off-Market-Deals in Sekundenschnelle in fertige Analysen, Präsentationen und Verkaufstools."
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
