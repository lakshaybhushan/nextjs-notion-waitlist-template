"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const pricingTiersData = [
    {
        name: "Starter",
        price: "Kostenlos",
        description: "Für Einzelpersonen und kleine Teams, die gerade erst anfangen.",
        features: ["3 Analysen inklusive", "Erkunde die praedia Platform", "Lade deine ersten Exposés hoch"],
        cta: "Heute starten",
    },
    {
        name: "Pro",
        price: "€349,99",
        description: "Für wachsende Unternehmen, die mehr Leistung und Support benötigen.",
        features: ["50 Analysen/Monat", "25 Excel Export", "100 Investoren-CRM", "Präsentation/Teaser-Erstellung", "Advanced Cashflow Analysis"],
        cta: "Mit Pro fortfahren",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Individuell",
        description: "Für große Organisationen mit speziellen Anforderungen.",
        features: ["∞ Analysen/Monat", "∞ Excel Export", "∞ Investoren-CRM", "Präsentation/Teaser-Erstellung", "Custom Cashflow Analysis", "Custom Features"],
        cta: "Mit Sales sprechen",
    },
];

export const PricingTiersFeature = () => {
    const scrollToCalEmbed = () => {
        const calSection = document.getElementById('call-booking');
        if (calSection) {
            calSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="grid md:grid-cols-3 w-full h-full">
            {pricingTiersData.map((tier, index) => (
                 <div
                     key={tier.name}
                     className={cn(
                         "p-8 flex flex-col relative",
                         index > 0 && "border-l border-neutral-200/60 dark:border-neutral-800/60",
                         tier.popular && "bg-neutral-50/30 dark:bg-neutral-800/30"
                     )}
                 >
                    {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                           <span className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-800/60">
                               Popular
                           </span>
                       </div>
                    )}
                    <h3 className="text-2xl font-semibold">{tier.name}</h3>
                    <p className="mt-4 text-neutral-500">{tier.description}</p>
                     <p className="mt-4 text-base font-bold">
                         {tier.price}
                         {tier.name !== "Enterprise" && tier.name !== "Starter" && <span className="text-base font-normal text-neutral-500"> / Monat</span>}
                     </p>
                    <ul className="mt-8 pt-8 mb-8 space-y-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                <span className="text-sm text-neutral-500">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60">
                         <button 
                             onClick={scrollToCalEmbed}
                             className={cn(
                                 "w-full py-3 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm",
                                 tier.name === "Starter" 
                                     ? "bg-transparent border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100" 
                                     : tier.name === "Pro"
                                     ? "bg-blue-600 hover:bg-blue-700 text-white"
                                     : "bg-neutral-900 dark:bg-white text-white dark:text-black"
                             )}
                         >
                             {tier.cta}
                         </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
