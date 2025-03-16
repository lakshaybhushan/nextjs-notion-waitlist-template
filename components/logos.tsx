import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";
import { FaMicrophone, FaBook, FaQuestionCircle, FaBrain, FaGraduationCap, FaYoutube } from "react-icons/fa";

const features = [
  {
    icon: <FaMicrophone className="h-10 w-10 text-[#1877F2] mb-4" />,
    title: "AI Voice Tutor",
    description: "Speak naturally and get instant help—it's like having a friendly tutor right by your side."
  },
  {
    icon: <FaBook className="h-10 w-10 text-[#1877F2] mb-4" />,
    title: "Personal Study Mode",
    description: "Receive clear, custom lessons and learning paths that fit your unique study needs."
  },
  {
    icon: <FaQuestionCircle className="h-10 w-10 text-[#1877F2] mb-4" />,
    title: "Practice Quiz Mode",
    description: "Generate practice questions to test your knowledge and boost your exam readiness."
  },
  {
    icon: <FaBrain className="h-10 w-10 text-[#1877F2] mb-4" />,
    title: "Critical Thinking Mode",
    description: "Dive into guided reasoning exercises to break down complex topics and solve problems."
  },
  {
    icon: <FaGraduationCap className="h-10 w-10 text-[#1877F2] mb-4" />,
    title: "Custom Course Builder",
    description: "Tell us what you want to learn and get a tailor-made course with lessons, videos, and guides."
  },
  {
    icon: <FaYoutube className="h-10 w-10 text-[#1877F2] mb-4" />,
    title: "Instant Video Summary",
    description: "Quickly capture the main points from long YouTube videos so you can focus on what matters."
  }
];

export default function Features() {
  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    // Fixed target date - March 31, 2025
    // Replace this with your actual launch date
    const targetDate = new Date("2025-04-01T00:00:00");
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    };
    
    // Calculate initially
    calculateTimeLeft();
    
    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-4 py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
          text="What To Expect In The v2?"
        />
      </motion.div>
      
      <motion.div variants={itemVariants} className="flex justify-center mt-2 mb-8">
        <div className="flex flex-col items-center rounded-xl border border-[#1877F2]/30 bg-zinc-900/70 px-8 py-6 shadow-sm shadow-[#1877F2]/10">
          <h3 className="text-lg font-medium text-zinc-300 mb-3">Launching In</h3>
          
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#1877F2]">{countdown.days}</div>
              <div className="text-xs text-zinc-400 mt-1">days</div>
            </div>
            
            <div className="text-2xl text-[#1877F2]">:</div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#1877F2]">{countdown.hours}</div>
              <div className="text-xs text-zinc-400 mt-1">hours</div>
            </div>
            
            <div className="text-2xl text-[#1877F2]">:</div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#1877F2]">{countdown.minutes}</div>
              <div className="text-xs text-zinc-400 mt-1">minutes</div>
            </div>
            
            <div className="text-2xl text-[#1877F2]">:</div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#1877F2]">{countdown.seconds}</div>
              <div className="text-xs text-zinc-400 mt-1">seconds</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border border-zinc-800 bg-zinc-900 p-6 text-center transition-all duration-150 ease-in hover:border-[#1877F2]/40 hover:shadow-sm hover:shadow-[#1877F2]/10">
            {feature.icon}
            <h3 className="mb-2 text-xl font-medium text-zinc-100">{feature.title}</h3>
            <p className="text-sm text-zinc-400">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}