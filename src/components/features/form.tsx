import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Form() {
  const scrollToCalEmbed = () => {
    const calSection = document.getElementById('call-booking');
    if (calSection) {
      calSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="mt-12 flex w-full max-w-md flex-row gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants} className="flex-1">
        <Button 
          onClick={scrollToCalEmbed}
          className="w-full bg-white text-black hover:bg-neutral-200 rounded-lg font-semibold py-3 px-3 text-sm"
        >
          Mit Sales sprechen
        </Button>
      </motion.div>
      <motion.div variants={itemVariants} className="flex-1">
        <Button 
          onClick={scrollToHowItWorks}
          variant="outline"
          className="w-full border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-lg font-semibold py-3 px-3 text-sm"
        >
          So funktioniert's
        </Button>
      </motion.div>
    </motion.div>
  );
}
