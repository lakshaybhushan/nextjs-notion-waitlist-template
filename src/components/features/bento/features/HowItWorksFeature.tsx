"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HowItWorksFeature = () => {
    const steps = [
        {
            title: "PDF hochladen.",
            description:
                "Egal ob 1 oder 100 gleichzeitig.",
        },
        {
            title: "Kurz Kaffee holen.",
            description:
                "praedia macht die Analyse Arbeit.",
        },
        {
            title: "Verhandeln.",
            description:
                "Jetzt nur noch mit Kunden reden.",
        },
    ];

    return (
        <div className="relative h-full">
            <motion.div
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute left-4 top-0 w-0.5 h-full bg-neutral-200 dark:bg-neutral-800"
            />
            <div className="flex h-full items-center">
                <div className="max-w-2xl">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="relative mb-10 flex items-start gap-6 pl-12 last:mb-0"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5 + index * 0.3,
                                duration: 0.6,
                            }}
                        >
                            <motion.div
                                className={cn(
                                    "absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-[#09090b]",
                                    index === steps.length - 1
                                        ? "border-[#f8ff9c]"
                                        : "border-neutral-200 dark:border-neutral-800",
                                )}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.4 + index * 0.3,
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                            >
                                <span className="text-sm font-semibold text-white">
                                    {index + 1}
                                </span>
                            </motion.div>
                            <div>
                                <h3 className="text-[24px] font-semibold text-neutral-900 dark:text-neutral-100">
                                    {step.title}
                                </h3>
                                <p className="mt-0.5 text-[24px] text-neutral-600 dark:text-neutral-400">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
