export { BentoCard } from "./card";

export interface BentoItem {
    id: string;
    title: string;
    description: string;
    icons?: boolean;
    tagline?: string;
    cta?: string;
    svgName?: string;
    subsections?: { title: string; description: string }[];
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
        | "howItWorks"
        | "customSvg"
        | "threeSections"
        | "pricing"
        | "pricingTiers"
        | "calEmbed";
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

export const fadeInUp = {
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
