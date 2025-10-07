"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const SpotlightFeature = ({ items }: { items: string[] }) => {
    return (
        <ul className="mt-2 space-y-1.5">
            {items.map((item, index) => (
                <motion.li
                    key={`spotlight-${item.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2"
                >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                    <span className="text-base text-neutral-700 dark:text-neutral-300">
                        {item}
                    </span>
                </motion.li>
            ))}
        </ul>
    );
};
