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

import Anthropic from "@/components/icons/anthropic";
import AnthropicDark from "@/components/icons/anthropic-dark";
import Google from "@/components/icons/gemini";
import OpenAI from "@/components/icons/open-ai";
import OpenAIDark from "@/components/icons/open-ai-dark";
import MistralAI from "@/components/icons/mistral";
import DeepSeek from "@/components/icons/deepseek";
import { cn } from "@/lib/utils";
import {
    Mic,
    Plus,
    ArrowUpRight,
    CheckCircle2,
    Clock,
    Sparkles,
    Zap,
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
        title: "Sichere Investitionsentscheidungen treffen. ",
        description:
            "Automatisierte Cashflow-Berechnung und Vorkenntnisprüfung.",
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
        title: "Passende Investments für jeden Investor. ",
        description:
            "KI-gestützte Investor-CRM mit automatischer Präferenzabgleichung.",
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
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {item}
                    </span>
                </motion.li>
            ))}
        </ul>
    );
};

const CounterAnimation = ({
    start,
    end,
    suffix = "",
}: {
    start: number;
    end: number;
    suffix?: string;
}) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);

        let currentFrame = 0;
        const counter = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const easedProgress = 1 - (1 - progress) ** 3;
            const current = start + (end - start) * easedProgress;

            setCount(Math.min(current, end));

            if (currentFrame === totalFrames) {
                clearInterval(counter);
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [start, end]);

    return (
        <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                {count.toFixed(1).replace(/\.0$/, "")}
            </span>
            <span className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                {suffix}
            </span>
        </div>
    );
};

const ChartAnimation = ({ value }: { value: number }) => {
    return (
        <div className="mt-2 w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </div>
    );
};

const IconsFeature = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <OpenAI className="w-7 h-7 dark:hidden transition-transform " />
                    <OpenAIDark className="w-7 h-7 hidden dark:block transition-transform " />
                </div>
                <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                    OpenAI
                </span>
            </motion.div>
            <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <Anthropic className="w-7 h-7 dark:hidden transition-transform " />
                    <AnthropicDark className="w-7 h-7 hidden dark:block transition-transform " />
                </div>
                <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                    Anthropic
                </span>
            </motion.div>
            <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <Google className="w-7 h-7 transition-transform " />
                </div>
                <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                    Google
                </span>
            </motion.div>
            <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <MistralAI className="w-7 h-7 transition-transform " />
                </div>
                <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                    Mistral
                </span>
            </motion.div>
            <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <DeepSeek className="w-7 h-7 transition-transform " />
                </div>
                <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                    DeepSeek
                </span>
            </motion.div>
            <motion.div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-neutral-100/80 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <Plus className="w-6 h-6 text-neutral-600 dark:text-neutral-400 transition-transform " />
                </div>
                <span className="text-xs font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                    More
                </span>
            </motion.div>
        </div>
    );
};

const TimelineFeature = ({
    timeline,
}: {
    timeline: Array<{ year: string; event: string }>;
}) => {
    return (
        <div className="mt-3 relative">
            <div className="absolute top-0 bottom-0 left-[9px] w-[2px] bg-neutral-200 dark:bg-neutral-700" />
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
                    <div className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 flex-shrink-0 z-10 mt-0.5" />
                    <div>
                        <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            {item.year}
                        </div>
                        <div className="text-xs text-neutral-600 dark:text-neutral-400">
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
                className="bg-neutral-900 dark:bg-black text-neutral-100 p-3 rounded-b-md text-xs font-mono h-[150px] overflow-y-auto"
            >
                <pre className="whitespace-pre-wrap">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </pre>
            </div>
        </div>
    );
};

const MetricsFeature = ({
    metrics,
}: {
    metrics: Array<{
        label: string;
        value: number;
        suffix?: string;
        color?: string;
    }>;
}) => {
    const getColorClass = (color = "emerald") => {
        const colors = {
            emerald: "bg-emerald-500 dark:bg-emerald-400",
            blue: "bg-blue-500 dark:bg-blue-400",
            violet: "bg-violet-500 dark:bg-violet-400",
            amber: "bg-amber-500 dark:bg-amber-400",
            rose: "bg-rose-500 dark:bg-rose-400",
        };
        return colors[color as keyof typeof colors] || colors.emerald;
    };

    return (
        <div className="mt-3 space-y-3">
            {metrics.map((metric, index) => (
                <motion.div
                    key={`metric-${metric.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    className="space-y-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * index }}
                >
                    <div className="flex justify-between items-center text-sm">
                        <div className="text-neutral-700 dark:text-neutral-300 font-medium flex items-center gap-1.5">
                            {metric.label === "Uptime" && (
                                <Clock className="w-3.5 h-3.5" />
                            )}
                            {metric.label === "Response time" && (
                                <Zap className="w-3.5 h-3.5" />
                            )}
                            {metric.label === "Cost reduction" && (
                                <Sparkles className="w-3.5 h-3.5" />
                            )}
                            {metric.label}
                        </div>
                        <div className="text-neutral-700 dark:text-neutral-300 font-semibold">
                            {metric.value}
                            {metric.suffix}
                        </div>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <motion.div
                            className={`h-full rounded-full ${getColorClass(
                                metric.color
                            )}`}
                            initial={{ width: 0 }}
                            animate={{
                                width: `${Math.min(100, metric.value)}%`,
                            }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                                delay: 0.15 * index,
                            }}
                        />
                    </div>
                </motion.div>
            ))}
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
        <div className="mt-3 w-fit overflow-hidden rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/30 dark:bg-neutral-900/30 p-1 font-medium">
            <div className="grid grid-cols-3 gap-2 text-xs text-neutral-600 dark:text-neutral-400 px-2 py-1.5">
                <span className="font-bold text-neutral-800 dark:text-neutral-200">
                    object
                </span>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">
                    city
                </span>
                <span className="font-bold text-neutral-800 dark:text-neutral-200">
                    prior knowledge
                </span>
            </div>
            <div className="">
                {items.map((item, index) => (
                    <motion.div
                        key={item.object}
                        className="grid grid-cols-3 gap-2 items-center text-sm text-neutral-800 dark:text-neutral-300 px-2 py-2 border-t border-neutral-200/80 dark:border-neutral-800/80"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 * index }}
                    >
                        <span>{item.object}</span>
                        <span>{item.city}</span>
                        <span>
                            {item.priorKnowledge ? (
                                <div className="flex items-center gap-1.5 w-fit px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 dark:bg-rose-500/15 dark:text-rose-400 border border-rose-500/20 dark:border-rose-500/25">
                                    <div
                                        className="h-1.5 w-1.5 rounded-full bg-rose-500 dark:bg-rose-400 animate-slow-blink"
                                        style={{ animationDelay: `${index * 0.4}s` }}
                                    />
                                    Ja
                                </div>
                            ) : (
                                <div className="flex items-center gap-1.5 w-fit px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/25">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                                    Nein
                                </div>
                            )}
                        </span>
                    </motion.div>
                ))}
            </div>
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
            <div className="grid grid-cols-3 gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-semibold px-1">
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
                    <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200 truncate">
                        {match.investor}
                    </div>
                    <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 text-center bg-neutral-100 dark:bg-neutral-800/50 rounded-sm px-1 py-0.5 truncate">
                        {match.propertyHint}
                    </div>
                    <div
                        className={`text-sm font-bold text-right ${getColorClass(
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

function AIInput_Voice() {
    const [submitted, setSubmitted] = useState(false);
    const [time, setTime] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [isDemo, setIsDemo] = useState(true);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (submitted) {
            intervalId = setInterval(() => {
                setTime((t) => t + 1);
            }, 1000);
        } else {
            setTime(0);
        }

        return () => clearInterval(intervalId);
    }, [submitted]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    };

    useEffect(() => {
        if (!isDemo) return;

        let timeoutId: NodeJS.Timeout;
        const runAnimation = () => {
            setSubmitted(true);
            timeoutId = setTimeout(() => {
                setSubmitted(false);
                timeoutId = setTimeout(runAnimation, 1000);
            }, 3000);
        };

        const initialTimeout = setTimeout(runAnimation, 100);
        return () => {
            clearTimeout(timeoutId);
            clearTimeout(initialTimeout);
        };
    }, [isDemo]);

    const handleClick = () => {
        if (isDemo) {
            setIsDemo(false);
            setSubmitted(false);
        } else {
            setSubmitted((prev) => !prev);
        }
    };

    return (
        <div className="w-full py-4">
            <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2">
                <button
                    className={cn(
                        "group w-16 h-16 rounded-xl flex items-center justify-center transition-colors",
                        submitted
                            ? "bg-none"
                            : "bg-none hover:bg-black/10 dark:hover:bg-white/10"
                    )}
                    type="button"
                    onClick={handleClick}
                >
                    {submitted ? (
                        <div
                            className="w-6 h-6 rounded-sm animate-spin bg-black  dark:bg-white cursor-pointer pointer-events-auto"
                            style={{ animationDuration: "3s" }}
                        />
                    ) : (
                        <Mic className="w-6 h-6 text-black/70 dark:text-white/70" />
                    )}
                </button>

                <span
                    className={cn(
                        "font-mono text-sm transition-opacity duration-300",
                        submitted
                            ? "text-black/70 dark:text-white/70"
                            : "text-black/30 dark:text-white/30"
                    )}
                >
                    {formatTime(time)}
                </span>

                <div className="h-4 w-64 flex items-center justify-center gap-0.5">
                    {[...Array(48)].map((_, i) => (
                        <div
                            key={`voice-bar-${i}`}
                            className={cn(
                                "w-0.5 rounded-full transition-all duration-300",
                                submitted
                                    ? "bg-black/50 dark:bg-white/50 animate-pulse"
                                    : "bg-black/10 dark:bg-white/10 h-1"
                            )}
                            style={
                                submitted && isClient
                                    ? {
                                          height: `${20 + Math.random() * 80}%`,
                                          animationDelay: `${i * 0.05}s`,
                                      }
                                    : undefined
                            }
                        />
                    ))}
                </div>

                <p className="h-4 text-xs text-black/70 dark:text-white/70">
                    {submitted ? "Listening..." : "Click to speak"}
                </p>
            </div>
        </div>
    );
}

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
                    className="relative z-10 flex flex-col h-full justify-between"
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

                    <div className="mt-10">
                        {/* Feature specific content */}
                        {item.feature === "spotlight" &&
                            item.spotlightItems && (
                                <SpotlightFeature items={item.spotlightItems} />
                            )}

                        {item.feature === "counter" && item.statistic && (
                            <div className="mt-auto pt-3">
                                <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                                    {item.statistic.label}
                                </div>
                                <CounterAnimation
                                    start={item.statistic.start || 0}
                                    end={item.statistic.end || 100}
                                    suffix={item.statistic.suffix}
                                />
                            </div>
                        )}

                        {item.feature === "chart" && item.statistic && (
                            <div className="mt-auto pt-3">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                        {item.statistic.label}
                                    </span>
                                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                        {item.statistic.end}
                                        {item.statistic.suffix}
                                    </span>
                                </div>
                                <ChartAnimation
                                    value={item.statistic.end || 0}
                                />
                            </div>
                        )}

                        {item.feature === "timeline" && item.timeline && (
                            <TimelineFeature timeline={item.timeline} />
                        )}

                        {item.feature === "icons" && 
                            <IconsFeature />
                        }

                        {item.feature === "typing" && item.typingText && (
                            <div className="max-w-md mx-auto">
                                <div className="rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden">
                                    <div className="flex items-center gap-2 p-2 bg-neutral-100/30 dark:bg-neutral-900/30 border-b border-neutral-200/80 dark:border-neutral-800/80">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                                    </div>
                                    <TypingCodeFeature text={item.typingText} />
                                </div>
                            </div>
                        )}

                        {item.feature === "metrics" && item.metrics && (
                            <MetricsFeature metrics={item.metrics} />
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

                        {item.icons && !item.feature && (
                            <div className="mt-auto pt-4 flex items-center flex-wrap gap-4 border-t border-neutral-200/70 dark:border-neutral-800/70">
                                <OpenAI className="w-5 h-5 dark:hidden opacity-70 hover:opacity-100 transition-opacity" />
                                <OpenAIDark className="w-5 h-5 hidden dark:block opacity-70 hover:opacity-100 transition-opacity" />
                                <AnthropicDark className="w-5 h-5 dark:block hidden opacity-70 hover:opacity-100 transition-opacity" />
                                <Anthropic className="w-5 h-5 dark:hidden opacity-70 hover:opacity-100 transition-opacity" />
                                <Google className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
                                <MistralAI className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
                                <DeepSeek className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
                            </div>
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
                            className={item.className}
                        >
                            <BentoCard item={item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
