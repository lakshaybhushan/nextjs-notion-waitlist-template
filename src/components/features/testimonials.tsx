"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

// Smoother counter hook with easing
const useCountUp = (end: number, duration: number = 3, delay: number = 0.5) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            let startTime: number;
            
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / (duration * 1000), 1);
                
                // Easing function for smoother animation (ease-out)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.floor(easeOut * end);
                
                setCount(currentCount);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            
            requestAnimationFrame(animate);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [end, duration, delay]);

    return count;
};

// Animated Counter Component
const AnimatedCounter = () => {
    const count = useCountUp(160000000, 3, 0.5); // 160 Million over 3 seconds with 0.5s delay
    
    // Format number with dots as thousand separators
    const formatNumber = (num: number) => {
        return num.toLocaleString('de-DE');
    };

    return (
        <p className="text-[40px] font-semibold text-black bg-white tracking-[-2.4px] px-2">
            €{formatNumber(count)}
        </p>
    );
};

const testimonials = [
    {
        company: "Die Portfoliorendite ",
        quote: "stieg auf 8,2% p.a.",
    },
    {
        company: "Leerstand ",
        quote: "sank auf 2,1% dank automatisiertem Monitoring.",
    },
    {
        company: "Vorkenntnisprüfung & Dealroom",
        quote: "dauern jetzt nur noch 10 Sekunden.",
    },
];

const categories = ["Rendite", "Leerstand", "Vorkenntnis"];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Left Column */}
                    <div className="md:col-span-2 flex flex-col justify-between min-h-[12rem] pl-12">
                        <div className="relative h-24">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl absolute inset-0"
                                >
                                    <span className="font-normal text-white">{testimonials[index].company}</span> 
                                    <span className="text-neutral-400"> {testimonials[index].quote}</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category, i) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * i }}
                                >
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="rounded-lg bg-neutral-800 text-neutral-400 hover:bg-neutral-700 border border-neutral-700"
                                    >
                                        {category}
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-between items-start"
                    >
                        <div>
                            <AnimatedCounter />
                            <p className="text-lg text-neutral-400 mt-2">
                                in Transaktionsvolumen analysiert
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
