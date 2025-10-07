"use client";

import { motion } from "framer-motion";

export const PricingFeature = () => {
    const title = "Finde den passenden Plan für deine Deals.";
    const description = "praedia unterstützt Teams jeder Größe mit einer Preisgestaltung, die mitwächst.";

    return (
        <div className="relative text-left w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    {title}
                </h2>
                <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl">
                    {description}
                </p>
            </motion.div>
        </div>
    );
};
