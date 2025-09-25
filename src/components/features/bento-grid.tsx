"use client";

/**
 * @author: @dorian_baffier
 * @description: Bento Grid
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import {
    ArrowUpRight,
    CheckCircle2,
    Database,
} from "lucide-react";
import {
    motion,
    useMotionValue,
    useTransform,
    type Variants,
} from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface BentoItem {
    id: string;
    title: string;
    description: string;
    icons?: boolean;
    href?: string;
    feature?:
        | "chart"
        | "counter"
        | "code"
        | "timeline"
        | "spotlight"
        | "icons"
        | "typing"
        | "metrics"
        | "investorMatch"
        | "priorKnowledgeCheck";
    spotlightItems?: string[];
    timeline?: Array<{ year: string; event: string }>;
    code?: string;
    codeLang?: string;
    typingText?: string;
    metrics?: Array<{
        label: string;
        value: number;
        suffix?: string;
        color?: string;
    }>;
    investorMatches?: Array<{
        investor: string;
        propertyHint: string;
        score: number;
        color?: string;
    }>;
    priorKnowledgeItems?: Array<{
        object: string;
        city: string;
        priorKnowledge: boolean;
    }>;
    statistic?: {
        value: string;
        label: string;
        start?: number;
        end?: number;
        suffix?: string;
    };
    size?: "sm" | "md" | "lg";
    className?: string;
}

const bentoItems: BentoItem[] = [
    {
        id: "ueberblick",
        title: "Sofort Überblick erhalten. ",
        description:
            "Automatische Extraktion und Standardisierung aller Immobiliendaten.",
        href: "#",
        feature: "typing",
        typingText: `{\n  "property_name": "Berlin Central Tower",\n  "location": "Berlin, Germany",\n  "size_sqm": 25000,\n  "noi_eur": 4500000,\n  "cap_rate": "5.5%",\n  "status": "Validated"\n}`,
        className: "col-span-1",
    },
    {
        id: "investitionsentscheidungen",
        title: "Passende Investments für jeden Investor.",
        description:
            "KI-gestützte Investor-CRM mit automatischer Präferenzabgleichung.",
        href: "#",
        feature: "priorKnowledgeCheck",
        priorKnowledgeItems: [
            { object: "City villa", city: "Munich", priorKnowledge: false },
            {
                object: "Multi-family house",
                city: "Berlin",
                priorKnowledge: true,
            },
            { object: "Condominium", city: "Dusseldorf", priorKnowledge: true },
        ],
        className: "col-span-1",
    },
    {
        id: "investments",
        title: "Sichere Investitionsentscheidungen treffen.",
        description:
            "Automatisierte Cashflow-Berechnung und Vorkenntnisprüfung.",
        href: "#",
        feature: "investorMatch",
        investorMatches: [
            {
                investor: "Investor Group Alpha",
                propertyHint: "B-CT",
                score: 96,
                color: "emerald",
            },
            {
                investor: "Syndicate Partners",
                propertyHint: "B-CT",
                score: 82,
                color: "emerald",
            },
            {
                investor: "Momentum Ventures",
                propertyHint: "M-RP",
                score: 74,
                color: "blue",
            },
        ],
        className: "md:col-span-2",
    },
    {
        id: "praesentieren",
        title: "Beeindruckend präsentieren, mit einem Klick. ",
        description: "Automatische Teaser-Deck-Generierung.",
        href: "#",
        feature: "timeline",
        timeline: [
            { year: "1", event: "Data Ingestion & Analysis" },
            { year: "2", event: "Financial Modeling" },
            { year: "3", event: "Risk Assessment" },
            { year: "4", event: "Investor-Ready Deck Generated" },
        ],
        className: "col-span-1",
    },
    {
        id: "verhandeln",
        title: "Schneller verhandeln und überzeugen.",
        description:
            "Exporte fertiger Berechnungen für Pitch und Verhandlung.",
        href: "#",
        feature: "spotlight",
        spotlightItems: [
            "Cashflow-Modelle (PDF, Excel)",
            "Sensitivitätsanalysen (PDF)",
            "Mieterlisten (Excel)",
        ],
        className: "col-span-1",
    },
];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const SpotlightFeature = ({ items }: { items: string[] }) => {
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

const TimelineFeature = ({
    timeline,
}: {
    timeline: Array<{ year: string; event: string }>;
}) => {
    return (
        <div className="mt-3 relative">
            <div className="absolute top-0 bottom-0 left-[11px] w-[3px] bg-neutral-200 dark:bg-neutral-700" />
            {timeline.map((item) => (
                <motion.div
                    key={`timeline-${item.year}-${item.event
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    className="flex gap-3 mb-3 relative"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: (0.15 * Number.parseInt(item.year)) % 10,
                    }}
                >
                    <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 flex-shrink-0 z-10 mt-0.5" />
                    <div>
                        <div className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                            {item.year}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            {item.event}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const TypingCodeFeature = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);

                if (terminalRef.current) {
                    terminalRef.current.scrollTop =
                        terminalRef.current.scrollHeight;
                }
            }, Math.random() * 30 + 10); // Random typing speed for realistic effect

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    // Reset animation when component unmounts and remounts
    useEffect(() => {
        setDisplayedText("");
        setCurrentIndex(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="relative">
            <div
                ref={terminalRef}
                className="bg-neutral-900 dark:bg-black text-neutral-100 p-3 rounded-b-md text-sm font-mono h-[180px] overflow-y-auto"
            >
                <pre className="whitespace-pre-wrap">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </pre>
            </div>
        </div>
    );
};

const PriorKnowledgeCheckFeature = ({
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
                    boxShadow: { duration: 2, repeat: Infinity, repeatDelay: 1 }
                }}
            >
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    CRM
                </span>
            </motion.div>

            {/* Horizontal Line - directly connected */}
            <motion.div
                className="flex items-center"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <motion.div 
                    className="h-0.5 w-16 bg-neutral-400 dark:bg-neutral-600 relative overflow-hidden"
                    animate={{
                        opacity: [0.4, 1, 0.4],
                        backgroundColor: [
                            "rgb(163, 163, 163)",
                            "rgb(59, 130, 246)",
                            "rgb(163, 163, 163)"
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: 0.8,
                        ease: "linear"
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
                            delay: 0.8,
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
                transition={{ delay: 0.6 }}
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
                        <span>
                            {item.priorKnowledge ? (
                                <div className="flex items-center gap-1.5 w-fit px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/25">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                                    96%
                                </div>
                            ) : (
                                <div className="flex items-center gap-1.5 w-fit px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/25">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                                    {index === 1 ? '82%' : '74%'}
                                </div>
                            )}
                        </span>
                    </motion.div>
                ))}
            </div>
            </motion.div>
        </div>
    );
};

const InvestorMatchFeature = ({
    matches,
}: {
    matches: Array<{
        investor: string;
        propertyHint: string;
        score: number;
        color?: string;
    }>;
}) => {
    const getColorClass = (color = "emerald") => {
        const colors = {
            emerald: "text-emerald-500 dark:text-emerald-400",
            blue: "text-blue-500 dark:text-blue-400",
            amber: "text-amber-500 dark:text-amber-400",
            rose: "text-rose-500 dark:text-rose-400",
        };
        return colors[color as keyof typeof colors] || colors.emerald;
    };

    return (
        <div className="mt-3 space-y-2.5">
            <div className="grid grid-cols-3 gap-2 text-sm text-neutral-500 dark:text-neutral-400 font-semibold px-1">
                <span>INVESTOR</span>
                <span className="text-center">PROPERTY</span>
                <span className="text-right">MATCH</span>
            </div>
            {matches.map((match, index) => (
                <motion.div
                    key={`match-${match.investor
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    className="grid grid-cols-3 gap-2 items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * index }}
                >
                    <div className="text-base font-medium text-neutral-800 dark:text-neutral-200 truncate">
                        {match.investor}
                    </div>
                    <div className="text-sm font-mono text-neutral-600 dark:text-neutral-400 text-center bg-neutral-100 dark:bg-neutral-800/50 rounded-sm px-1 py-0.5 truncate">
                        {match.propertyHint}
                    </div>
                    <div
                        className={`text-base font-bold text-right ${getColorClass(
                            match.color
                        )}`}
                    >
                        {match.score}%
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const DashboardWindow = () => {
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

const BentoCard = ({ item }: { item: BentoItem }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [2, -2]);
    const rotateY = useTransform(x, [-100, 100], [-2, 2]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 100);
        y.set(yPct * 100);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }

    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <Link
                href={item.href || "#"}
                className={`
                    group relative flex flex-col h-full p-12
                    transition-all duration-500 ease-out
                `}
                tabIndex={0}
                aria-label={`${item.title} - ${item.description}`}
            >
                <div
                    className="relative z-10 flex flex-col h-full justify-center gap-16"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="max-w-lg text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                                {item.title}
                                <span className="font-normal text-neutral-600 dark:text-neutral-400">
                                    {" "}{item.description}
                                </span>
                            </h3>
                            <div className="text-neutral-400 dark:text-neutral-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                <ArrowUpRight className="h-5 w-5" />
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* Feature specific content */}
                        {item.feature === "spotlight" &&
                            item.spotlightItems && (
                                <SpotlightFeature
                                    items={item.spotlightItems}
                                />
                            )}



                        {item.feature === "timeline" && item.timeline && (
                            <TimelineFeature timeline={item.timeline} />
                        )}

                        {item.feature === "typing" && item.typingText && (
                            <div className="relative max-w-md mx-auto h-[182px]">
                                <motion.div
                                    initial={{ y: 0, scale: 1 }}
                                    animate={{ y: -20, scale: 0.95 }}
                                    transition={{
                                        delay: 1.2,
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                    className="rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden"
                                >
                                    <div className="flex items-center gap-2 p-2 bg-neutral-100/30 dark:bg-neutral-900/30 border-b border-neutral-200/80 dark:border-neutral-800/80">
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
                                    </div>
                                    <TypingCodeFeature
                                        text={item.typingText}
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-4 right-0 w-[70%] shadow-2xl"
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        delay: 1.5,
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                >
                                    <DashboardWindow />
                                </motion.div>
                            </div>
                        )}

                        {item.feature === "investorMatch" &&
                            item.investorMatches && (
                                <InvestorMatchFeature
                                    matches={item.investorMatches}
                                />
                            )}

                        {item.feature === "priorKnowledgeCheck" &&
                            item.priorKnowledgeItems && (
                                <PriorKnowledgeCheckFeature
                                    items={item.priorKnowledgeItems}
                                />
                            )}

                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function BentoGrid() {
    return (
        <section className="relative pb-24 sm:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bento Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 divide-y divide-x divide-neutral-200/60 dark:divide-neutral-800/60 border border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden"
                >
                    {bentoItems.map((item) => (
                        <motion.div
                            variants={fadeInUp}
                            key={item.id}
                            className={cn(
                                item.className,
                                "min-h-[500px]"
                            )}
                        >
                            <BentoCard item={item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
