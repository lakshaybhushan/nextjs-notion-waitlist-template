"use client";

import { cn } from "@/lib/utils";
import {
    motion,
    type Variants,
} from "framer-motion";
import { BentoCard } from "./card";
import { BentoItem, fadeInUp } from "./types";

const bentoItems: BentoItem[] = [
    {
        id: "ueberblick",
        title: "Sofort Überblick erhalten. ",
        description:
            "Automatische Extraktion und Standardisierung aller Immobiliendaten.",
        feature: "typing",
        tagline: "Datenextraktion",
        typingText: `{\n  "property_name": "Berlin Central Tower",\n  "location": "Berlin, Germany",\n  "size_sqm": 25000,\n  "noi_eur": 4500000,\n  "cap_rate": "5.5%",\n  "status": "Validated"\n}`,
        className: "col-span-1",
    },
    {
        id: "investitionsentscheidungen",
        title: "Passende Investments für jeden Investor.",
        description:
            "KI-gestützte Investor-CRM mit automatischer Präferenzabgleichung.",
        feature: "priorKnowledgeCheck",
        tagline: "Investor Matching",
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
        feature: "chart",
        tagline: "Cashflow Analyse",
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
        feature: "praesentation",
        tagline: "Präsentation",
        className: "col-span-1",
    },
    {
        id: "verhandeln",
        title: "Schneller verhandeln und überzeugen.",
        description:
            "Exporte fertiger Berechnungen für Pitch und Verhandlung.",
        feature: "export",
        tagline: "Datenexport",
        className: "col-span-1",
    },
    {
        id: "how-it-works",
        title: "Für Family Offices, Private Equity und Asset Managers.",
        description:
            "In drei einfachen Schritten zu besseren Investitionsentscheidungen.",
        cta: "Jetzt loslegen!",
        className:
            "md:col-span-1 border-t border-neutral-200/60 dark:border-neutral-800/60",
        textClassName: "text-3xl md:text-4xl",
        descriptionClassName: "block mt-2 text-lg md:text-2xl",
        contentClassName: "!justify-start items-start h-full",
    },
    {
        id: "how-it-works-2",
        title: "",
        description: "",
        feature: "howItWorks",
        className:
            "md:col-span-1 border-t border-l border-neutral-200/60 dark:border-neutral-800/60",
        contentClassName: "justify-start",
    },
    {
        id: "new-section",
        title: "Eine volle Inbox soll motivieren, nicht überfordern.",
        description: "Mit intelligenter Automatisierung wird aus Informationsflut echte Übersicht und Produktivität.",
        feature: "customSvg",
        svgName: "ueberfordert2.svg",
        subsections: [
            {
                title: "Gemeinsam, gewinnbringend.",
                description: "Alle im Team sehen sofort, worauf es ankommt – Zusammenarbeit ohne Umwege."
            },
            {
                title: "Zentraler Datahub",
                description: "Alle Daten an einem Ort. Immer aktuell, sofort nutzbar."
            },
            {
                title: "Professionell skalierbar.",
                description: "Angebote treffen gezielt die richtigen Investoren – und das in Sekunden."
            }
        ],
        className:
            "md:col-span-2 border-t border-neutral-200/60 dark:border-neutral-800/60",
        contentClassName: "items-center",
    },
    {
        id: "security-title",
        title: "Mehr treffen. Schneller entscheiden.",
        description: "",
        className:
            "md:col-span-2 border-t border-neutral-200/60 dark:border-neutral-800/60",
        textClassName: "text-3xl md:text-[48px]",
        contentClassName: "justify-end",
    },
    {
        id: "security-features",
        title: "",
        description: "",
        className: "md:col-span-2",
        feature: "threeSections",
        contentClassName: "justify-center",
        subsections: [
            {
                title: "Family Offices.",
                description: "Verwalte und analysiere dein Portfolio effizient – mit automatischer Datenverarbeitung und präzisem Investment-Matching, selbst für komplexe Portfolios und kleine Teams."
            },
            {
                title: "Private Equity.",
                description: "Beschleunige Kaufentscheidungen durch vollautomatisierte Due Diligence inklusive Wirtschaftlichkeits- und ESG-Prüfung – exportierbare Analysen liefern schnelle Klarheit."
            },
            {
                title: "Investmentbüros.",
                description: "Vereinfache das Investorenmatching mit KI-basiertem Matching und standardisierten Daten – automatische Reports und Präsentationen sorgen für schnelle, transparente Entscheidungen."
            }
        ],
    },
    {
        id: "pricing",
        title: "",
        description: "",
        feature: "pricing",
        className: "md:col-span-2",
        contentClassName: "justify-center items-center",
    },
    {
        id: "pricing-tiers",
        title: "",
        description: "",
        feature: "pricingTiers",
        className: "md:col-span-2 -mt-px bg-black border-t border-b border-neutral-200/60 dark:border-neutral-800/60",
        contentClassName: "justify-center items-center",
    },
    {
        id: "call-booking",
        title: "",
        description: "",
        feature: "calEmbed",
        className: "md:col-span-2 border-t border-neutral-200/60 dark:border-neutral-800/60",
    },
];

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
                                item.id === "how-it-works"
                                    ? "min-h-[600px] md:min-h-[750px]"
                                    : item.id === "new-section"
                                      ? "min-h-[700px] md:min-h-[950px]"
                                      : item.id === "security-title"
                                        ? "min-h-[250px] md:min-h-[300px]"
                                        : item.id === "security-features"
                                          ? "min-h-[350px] md:min-h-[400px]"
                                          : item.id === "pricing"
                                            ? "min-h-[250px] md:min-h-[300px]"
                                            : item.id === "pricing-tiers"
                                              ? "min-h-[450px] md:min-h-[500px]"
                                              : item.id === "call-booking"
                                                ? "min-h-[800px] md:min-h-[600px]"
                                                : "min-h-[400px] md:min-h-[500px]",
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
