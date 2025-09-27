"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

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
                            <p className="text-[40px] font-semibold text-black bg-white tracking-[-2.4px] px-2">
                                €160.000.000
                            </p>
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
