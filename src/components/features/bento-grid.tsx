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
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Database,
    UploadCloud,
    Bot,
    FileText,
} from "lucide-react";
import {
    motion,
    useMotionValue,
    useTransform,
    type Variants,
    useSpring,
    AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";


// Counter animation hook
const useCounter = (end: number, duration: number = 2, delay: number = 0) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasStarted(true);
            let start = 0;
            const increment = end / (duration * 60); // 60fps
            const counter = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(counter);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(counter);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [end, duration, delay]);

    return count;
};

// Match percentage component with counter animation
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

interface BentoItem {
    id: string;
    title: string;
    description: string;
    icons?: boolean;
    href?: string;
    cta?: string;
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
        | "priorKnowledgeCheck"
        | "praesentation"
        | "export"
        | "howItWorks";
    spotlightItems?: string[];
    timeline?: Array<{ year: string; event: string }>;
    code?: string;
    codeLang?: string;
    typingText?: string;
    chartData?: Array<{ month: string; miete: number; tilgung: number }>;
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
    textClassName?: string;
    descriptionClassName?: string;
    contentClassName?: string;
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
        feature: "chart",
        chartData: [
            { month: "Jan", miete: 1200000, tilgung: 950000 },
            { month: "", miete: 1250000, tilgung: 950000 },
            { month: "Feb", miete: 1180000, tilgung: 980000 },
            { month: "", miete: 1300000, tilgung: 980000 },
            { month: "Mär", miete: 1500000, tilgung: 1100000 },
            { month: "", miete: 1450000, tilgung: 1100000 },
            { month: "Apr", miete: 1700000, tilgung: 1200000 },
            { month: "", miete: 1650000, tilgung: 1200000 },
            { month: "Mai", miete: 1800000, tilgung: 1350000 },
            { month: "", miete: 1900000, tilgung: 1350000 },
            { month: "Jun", miete: 1850000, tilgung: 1400000 },
        ],
        className: "md:col-span-2",
    },
    {
        id: "praesentieren",
        title: "Beeindruckend präsentieren, mit einem Klick. ",
        description: "Automatische Teaser-Deck-Generierung.",
        href: "#",
        feature: "praesentation",
        className: "col-span-1",
    },
    {
        id: "verhandeln",
        title: "Schneller verhandeln und überzeugen.",
        description:
            "Exporte fertiger Berechnungen für Pitch und Verhandlung.",
        href: "#",
        feature: "export",
        className: "col-span-1",
    },
    {
        id: "how-it-works",
        title: "Für Family Offices, Private Equity und Asset Managers.",
        description:
            "In drei einfachen Schritten zu besseren Investitionsentscheidungen.",
        href: "#",
        cta: "Jetzt loslegen!",
        className:
            "md:col-span-1 border-t border-neutral-200/60 dark:border-neutral-800/60",
        textClassName: "text-4xl",
        descriptionClassName: "block mt-4 text-2xl",
        contentClassName: "!justify-start items-start h-full",
    },
    {
        id: "how-it-works-2",
        title: "",
        description: "",
        href: "#",
        feature: "howItWorks",
        className:
            "md:col-span-1 border-t border-l border-neutral-200/60 dark:border-neutral-800/60",
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

const HowItWorksFeature = () => {
    const steps = [
        {
            icon: <UploadCloud className="h-6 w-6 text-neutral-500" />,
            title: "1. Daten hochladen",
            description:
                "Laden Sie Ihre Immobiliendaten, Dokumente und Bilder sicher in die Plattform hoch.",
        },
        {
            icon: <Bot className="h-6 w-6 text-neutral-500" />,
            title: "2. KI-Analyse starten",
            description:
                "Unsere KI extrahiert, standardisiert und analysiert alle relevanten Informationen automatisch.",
        },
        {
            icon: <FileText className="h-6 w-6 text-neutral-500" />,
            title: "3. Ergebnisse erhalten",
            description:
                "Erhalten Sie fertige Auswertungen, Cashflow-Modelle und Präsentationen mit einem Klick.",
        },
    ];

    return (
        <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative">
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute left-4 -top-4 w-0.5 h-[calc(100%+2rem)] bg-neutral-200 dark:bg-neutral-800"
                />
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        className="flex items-start gap-6 pl-12 mb-10 last:mb-0 relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.5 + index * 0.3,
                            duration: 0.6,
                        }}
                    >
                        <motion.div
                            className="absolute left-0 top-0 flex items-center justify-center h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800"
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
                            {step.icon}
                        </motion.div>
                        <div>
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const LineChartFeature = ({
    data,
}: {
    data: Array<{ month: string; miete: number; tilgung: number }>;
}) => {
    const [isInitial, setIsInitial] = useState(true);
    const [activeX, setActiveX] = useState<number | null>(null);
    const [animationActive, setAnimationActive] = useState(true);
    const initialIndex = useMemo(
        () => Math.floor(data.length / 2),
        [data.length],
    );

    useEffect(() => {
        const timer = setTimeout(() => setAnimationActive(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const xSpring = useSpring(0, {
        stiffness: 200,
        damping: 40,
        mass: 1,
    });

    useEffect(() => {
        if (activeX !== null) {
            xSpring.set(activeX);
        }
    }, [activeX, xSpring]);

    const handleMouseMove = (e: any) => {
        if (isInitial) {
            setIsInitial(false);
        }
        if (e.activeCoordinate) {
            setActiveX(e.activeCoordinate.x);
        }
    };

    const handleMouseLeave = () => {
        if (isInitial) {
            setIsInitial(false);
        }
        setActiveX(null);
    };

    const allValues = data.flatMap((d) => [d.miete, d.tilgung]);
    const dataMin = Math.min(...allValues);

    const GradientDot = ({ cx, cy, index, color }: any) => {
        const totalPoints = data.length;
        const opacity = 0.2 + (index / (totalPoints - 1)) * 0.8;
        const rgbColor = color === "miete" ? "59, 130, 246" : "239, 68, 68";

        return (
            <circle
                cx={cx}
                cy={cy}
                r={4}
                fill={`rgba(${rgbColor}, ${opacity})`}
                stroke="rgba(23, 23, 23, 0.8)"
                strokeWidth={2}
            />
        );
    };

    const ActiveGradientDot = ({ cx, cy, index, color }: any) => {
        if (cx === null || cy === null) return null;
        const totalPoints = data.length;
        const opacity = 0.2 + (index / (totalPoints - 1)) * 0.8;
        const rgbColor = color === "miete" ? "59, 130, 246" : "239, 68, 68";

        return (
            <circle
                cx={cx}
                cy={cy}
                r={6}
                fill={`rgba(${rgbColor}, ${opacity})`}
                stroke="rgba(23, 23, 23, 0.8)"
                strokeWidth={2}
            />
        );
    };

    const CustomTooltip = ({ active, payload, coordinate }: any) => {
        useEffect(() => {
            if (isInitial && active && coordinate) {
                setActiveX(coordinate.x);
            }
        }, [isInitial, active, coordinate]);

        if (active && payload && payload.length) {
            return (
                <div className="bg-black p-4 rounded-lg border border-neutral-700 shadow-xl space-y-1">
                    {payload.map((pld: any) => (
                        <div
                            key={pld.dataKey}
                            className="flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-2.5 shrink-0">
                                <div
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: pld.stroke }}
                                />
                                <p className="text-base text-neutral-400">
                                    {pld.name === "miete"
                                        ? "Mieteinnahmen"
                                        : "Tilgung"}
                                </p>
                            </div>
                            <p className="font-bold text-neutral-100 text-right">
                                {pld.value.toLocaleString("de-DE")} €
                            </p>
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <div className="relative h-96 w-full">
            <AnimatePresence>
                {activeX !== null && (
                    <motion.div
                        className="absolute top-0 bottom-0 z-10"
                        style={{
                            left: xSpring,
                            width: 1,
                            backgroundColor: "rgba(163, 163, 163, 0.5)",
                            pointerEvents: "none",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: -20,
                        bottom: 5,
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <defs>
                        <linearGradient
                            id="colorMiete"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                        >
                            <stop
                                offset="5%"
                                stopColor="#3b82f6"
                                stopOpacity={0.2}
                            />
                            <stop
                                offset="95%"
                                stopColor="#3b82f6"
                                stopOpacity={1}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorTilgung"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                        >
                            <stop
                                offset="5%"
                                stopColor="#ef4444"
                                stopOpacity={0.2}
                            />
                            <stop
                                offset="95%"
                                stopColor="#ef4444"
                                stopOpacity={1}
                            />
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(163, 163, 163, 0.2)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="month"
                        tick={false}
                        axisLine={{ stroke: "rgba(163, 163, 163, 0.2)" }}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{
                            fill: "rgb(163, 163, 163)",
                            fontSize: 12,
                        }}
                        axisLine={false}
                        tickLine={false}
                        domain={[dataMin - 50000, "dataMax + 50000"]}
                        tickFormatter={(tick) => {
                            if (tick >= 1000000) {
                                return `${(tick / 1000000)
                                    .toFixed(1)
                                    .replace(".", ",")}M`;
                            }
                            return `${(tick / 1000).toFixed(0)}K`;
                        }}
                    />
                    <Tooltip
                        cursor={false}
                        animationDuration={300}
                        content={<CustomTooltip />}
                    />
                    <Line
                        isAnimationActive={animationActive}
                        name="miete"
                        type="step"
                        dataKey="miete"
                        stroke="url(#colorMiete)"
                        strokeWidth={2}
                        dot={<GradientDot color="miete" />}
                        activeDot={<ActiveGradientDot color="miete" />}
                    />
                    <Line
                        isAnimationActive={animationActive}
                        name="tilgung"
                        type="step"
                        dataKey="tilgung"
                        stroke="url(#colorTilgung)"
                        strokeWidth={2}
                        dot={<GradientDot color="tilgung" />}
                        activeDot={<ActiveGradientDot color="tilgung" />}
                    />
                </LineChart>
            </ResponsiveContainer>
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
                    className={cn(
                        "relative z-10 flex flex-col h-full justify-center gap-16",
                        item.contentClassName,
                    )}
                    style={{ 
                        transform: "translateZ(20px)",
                        ...(item.id === "how-it-works" && {
                            justifyContent: "flex-start",
                            paddingTop: "25%"
                        })
                    }}
                >
                    <div className="space-y-2">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3
                                    className={cn(
                                        "max-w-lg text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300",
                                        item.textClassName,
                                    )}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={cn(
                                        "font-normal text-neutral-600 dark:text-neutral-400",
                                        item.descriptionClassName,
                                    )}
                                >
                                    {item.description}
                                </p>
                                {item.cta && (
                                    <div className="mt-12">
                                        <button className="bg-black border border-[#1b1b1c] text-white font-semibold py-4 px-8 rounded-full text-[48px] tracking-[-2.88px] transition-colors hover:bg-gray-800 flex items-center gap-4">
                                            {item.cta}
                                            <span className="bg-white rounded-full p-2">
                                                <ArrowRight className="h-8 w-8 text-black" />
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
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

                        {item.feature === "praesentation" && (
                            <div className="flex justify-center items-center h-full">
                                <Image
                                    src="/praesentation2.svg"
                                    alt="Präsentation"
                                    width={500}
                                    height={400}
                                />
                            </div>
                        )}

                        {item.feature === "export" && (
                            <div className="flex justify-center items-center h-full">
                                <Image
                                    src="/group34.svg"
                                    alt="Export"
                                    width={200}
                                    height={150}
                                />
                            </div>
                        )}

                        {item.feature === "howItWorks" && <HowItWorksFeature />}

                        {item.feature === "chart" && item.chartData && (
                            <LineChartFeature data={item.chartData} />
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
                                item.id === "how-it-works" ? "min-h-[750px]" : "min-h-[500px]"
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
