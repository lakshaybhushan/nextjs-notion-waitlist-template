"use client";

import { motion } from "framer-motion";
import { useCounter } from "../hooks/useCounter";

const MatchPercentage = ({ targetValue, isGreen, delay }: { targetValue: number, isGreen: boolean, delay: number }) => {
    const count = useCounter(targetValue, 1.5, delay);
    
    return (
        <span>
            <div className={`flex items-center gap-1.5 w-fit px-2 py-0.5 rounded-full ${
                isGreen 
                    ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/25'
                    : 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/25'
            }`}>
                <div className={`h-1.5 w-1.5 rounded-full ${
                    isGreen ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-blue-500 dark:bg-blue-400'
                }`} />
                <span className="w-8 text-center font-mono">
                    {count}%
                </span>
            </div>
        </span>
    );
};

export const PriorKnowledgeCheckFeature = ({
    items,
}: {
    items: Array<{
        object: string;
        city: string;
        priorKnowledge: boolean;
    }>;
}) => {
    return (
        <div className="mt-3 flex items-center justify-center">
            {/* CRM Square Box */}
            <motion.div
                className="flex items-center justify-center w-14 h-14 rounded bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 dark:border-blue-500/25"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                        "0 0 0 4px rgba(59, 130, 246, 0.1)",
                        "0 0 0 8px rgba(59, 130, 246, 0)",
                        "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                }}
                transition={{ 
                    delay: 0.2,
                    duration: 0.4,
                    boxShadow: { duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.5 }
                }}
            >
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    CRM
                </span>
            </motion.div>

            {/* Horizontal Line - grows from left to right */}
            <motion.div
                className="flex items-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
            >
                <motion.div 
                    className="h-0.5 bg-blue-400 dark:bg-blue-300 relative overflow-hidden origin-left"
                    initial={{ scaleX: 0, width: 0 }}
                    animate={{ 
                        scaleX: 1,
                        width: "4rem" // w-16 equivalent
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                >
                    {/* Pulsing circle effect from left to right */}
                    <motion.div
                        className="absolute top-1/2 left-0 w-6 h-6 -translate-y-1/2 bg-blue-400 dark:bg-blue-300 rounded-full opacity-90"
                        animate={{
                            x: ["-8px", "72px"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: 2,
                            ease: "linear"
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Match Table */}
            <motion.div
                className="w-fit overflow-hidden rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/30 dark:bg-neutral-900/30 p-1 font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
            >
            <div className="grid grid-cols-3 gap-2 text-sm text-neutral-600 dark:text-neutral-400 px-2 py-1.5">
                <span className="font-bold text-neutral-800 dark:text-neutral-200">
                    object
                </span>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">
                    city
                </span>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">
                    Match
                </span>
            </div>
            <div className="">
                {items.map((item, index) => (
                    <motion.div
                        key={item.object}
                        className="grid grid-cols-3 gap-2 items-center text-base text-neutral-800 dark:text-neutral-300 px-2 py-2 border-t border-neutral-200/80 dark:border-neutral-800/80"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 * index }}
                    >
                        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded animate-pulse"></div>
                        <MatchPercentage 
                            targetValue={item.priorKnowledge ? 96 : (index === 1 ? 82 : 74)}
                            isGreen={item.priorKnowledge}
                            delay={2 + index * 0.2}
                        />
                    </motion.div>
                ))}
            </div>
            </motion.div>
        </div>
    );
};
