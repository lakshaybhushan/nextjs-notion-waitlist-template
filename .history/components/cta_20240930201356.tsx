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
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/logo.svg"
        alt="logo"
        className="mx-auto h-24 w-24"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="For Nearly Half A Century, TYLERS has been the heart of family shopping in Texas and a go-to destination!"
        />
      </motion.div>


      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="For Nearly Half A Century, TYLERS has been the heart of family shopping in Texas and a go-to destination!"
        />
      </motion.div>
       
    export default function CTA() {
  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-4">Join Our Waitlist</h2>
      <p className="text-lg text-gray-600">Be the first to know when we launch and get exclusive offers!</p>
    </div>
  )
}
  );
}