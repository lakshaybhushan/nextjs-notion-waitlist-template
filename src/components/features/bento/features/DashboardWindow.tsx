"use client";

import { motion } from "framer-motion";

export const DashboardWindow = () => {
    return (
        <div className="rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden bg-neutral-50 dark:bg-neutral-900 shadow-lg">
            <div className="flex items-center gap-2 px-3 py-2 bg-neutral-100/30 dark:bg-neutral-900/30 border-b border-neutral-200/80 dark:border-neutral-800/80">
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            </div>
            <div className="p-3 space-y-2">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.3 }}
                >
                    <h4 className="font-bold text-xs text-neutral-800 dark:text-neutral-200">
                        Berlin Central Tower
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        Berlin, Germany
                    </p>
                </motion.div>
                <div className="flex gap-2">
                    <motion.div
                        className="w-full p-2 rounded-md bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.3 }}
                    >
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            Fläche
                        </p>
                        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                            25,000 m²
                        </p>
                    </motion.div>
                    <motion.div
                        className="w-full p-2 rounded-md bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.3, duration: 0.3 }}
                    >
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            NOI
                        </p>
                        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                            €4.5M
                        </p>
                    </motion.div>
                    <motion.div
                        className="w-full p-2 rounded-md bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.4, duration: 0.3 }}
                    >
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            Rendite
                        </p>
                        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                            5.5%
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
