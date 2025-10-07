"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SpotlightFeature } from "./features/SpotlightFeature";
import { HowItWorksFeature } from "./features/HowItWorksFeature";
import { LineChartFeature } from "./features/LineChartFeature";
import { TimelineFeature } from "./features/TimelineFeature";
import { TypingCodeFeature } from "./features/TypingCodeFeature";
import { PriorKnowledgeCheckFeature } from "./features/PriorKnowledgeCheckFeature";
import { PricingFeature } from "./features/PricingFeature";
import { PricingTiersFeature } from "./features/PricingTiersFeature";
import { CalEmbedFeature } from "./features/CalEmbedFeature";
import { DashboardWindow } from "./features/DashboardWindow";
import { BentoItem, fadeInUp } from "./types";


export const BentoCard = ({ item }: { item: BentoItem }) => {
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
            className="h-full"
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <div
                id={item.id}
                className={cn(
                    "relative flex flex-col h-full scroll-mt-32 transition-all duration-500 ease-out",
                    item.feature === "calEmbed" ? "p-6 md:p-12" : "p-6 md:p-12"
                )}
            >
                {["new-section", "security-title", "security-features", "call-booking"].includes(item.id) && (
                    <>
                        <div className="absolute top-0 left-1/3 h-full w-px bg-neutral-200/60 dark:bg-neutral-800/60" />
                        <div className="absolute top-0 left-2/3 h-full w-px bg-neutral-200/60 dark:bg-neutral-800/60" />
                    </>
                )}
                {item.id === "pricing" && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        {/* Vertical lines */}
                        <div className="absolute inset-0 w-full h-full flex justify-around">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={`v-${i}`}
                                    className="w-px h-full bg-neutral-200/60 dark:bg-neutral-800/60"
                                />
                            ))}
                        </div>
                        {/* Horizontal lines */}
                        <div className="absolute inset-0 w-full h-full flex flex-col justify-around">
                             {[...Array(5)].map((_, i) => (
                                <div
                                    key={`h-${i}`}
                                    className="h-px w-full bg-neutral-200/60 dark:bg-neutral-800/60"
                                />
                            ))}
                        </div>
                    </div>
                )}
                <div
                    className={cn(
                        "relative z-10 flex flex-col h-full",
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
                    {item.id === "new-section" && <div className="h-1/6 flex-shrink-0" />}
                    
                    {/* Render title for calEmbed here, then hide the generic one */}
                    {item.feature === "calEmbed" && (
                        <>
                            <h3 className="text-[32px] md:text-[48px] font-semibold tracking-[-2.4px] text-center mb-6 md:mb-8 mt-8 md:mt-12">
                                Buchen Sie eine Demo
                            </h3>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6 md:mb-8">
                                <Image 
                                    src="/testimonial-01.png" 
                                    alt="Sebastian Sales" 
                                    width={100} 
                                    height={100} 
                                    className="rounded-full md:w-[120px] md:h-[120px]"
                                />
                                <blockquote className="p-4 border-l-4 border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 max-w-md">
                                    <p className="text-base md:text-xl italic text-neutral-700 dark:text-neutral-300">
                                        "Ich bin überzeugt, dass wir Ihre Immobilienanalyse auf ein neues Level heben können. Lassen Sie uns in einem kurzen Gespräch herausfinden, wie praedia Sie dabei unterstützen kann."
                                    </p>
                                    <footer className="mt-4 text-right">
                                        <p className="font-semibold text-neutral-800 dark:text-neutral-200">- Sebastian Sales</p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Sales Manager</p>
                                    </footer>
                                </blockquote>
                            </div>
                        </>
                    )}

                    {item.feature !== "calEmbed" && (
                        <div>
                            {item.tagline && (
                                <div className="flex items-center gap-2 mb-2 text-neutral-500">
                                    <p className="font-semibold">_{item.tagline}</p>
                                </div>
                            )}
                            <div className="space-y-2">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3
                                            className={cn(
                                                "max-w-lg text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100",
                                                item.textClassName,
                                                item.id === "new-section" &&
                                                    "text-left text-3xl md:text-[48px] max-w-none",
                                                item.id === "security-title" && "text-left max-w-none",
                                            )}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={cn(
                                                "font-normal text-neutral-600 dark:text-neutral-400 text-lg md:text-2xl",
                                                item.descriptionClassName,
                                                item.id === "new-section" && "text-left md:text-center text-lg md:text-[20px] leading-[28px] md:leading-[36px]",
                                            )}
                                        >
                                            {item.description}
                                        </p>
                                        {item.cta && (
                                            <div className="mt-12 md:mt-24">
                                                <button 
                                                    onClick={() => {
                                                        const calSection = document.getElementById('call-booking');
                                                        if (calSection) {
                                                            calSection.scrollIntoView({ behavior: 'smooth' });
                                                        }
                                                    }}
                                                    className="bg-black border border-[#1b1b1c] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-[28px] md:text-[48px] tracking-[-2.88px] transition-colors hover:bg-gray-800 flex items-center gap-2 md:gap-4"
                                                >
                                                    {item.cta}
                                                    <span className="bg-white rounded-full p-1.5 md:p-2">
                                                        <ArrowRight className="h-5 w-5 md:h-8 md:w-8 text-black" />
                                                    </span>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {item.feature && (
                        <div className={cn("h-full", item.feature !== "calEmbed" && item.feature !== 'threeSections' && "mt-12")}>
                            {/* Feature specific content */}
                            {item.feature === "spotlight" &&
                                item.spotlightItems && (
                                    <SpotlightFeature
                                        items={item.spotlightItems}
                                    />
                                )}

                            {item.feature === "customSvg" && item.svgName && (
                                <div>
                                    <div className="flex justify-center">
                                        <Image
                                            src={`/${item.svgName}`}
                                            alt="Feature illustration"
                                            width={800}
                                            height={480}
                                            className="w-full md:w-auto max-w-[80%] md:max-w-none h-auto"
                                        />
                                    </div>
                                    {item.subsections && (
                                        <div className="mt-8 md:mt-12 flex flex-col md:flex-row w-full gap-8 md:gap-32">
                                            {item.subsections.map((section, index) => (
                                                <div key={index} className="w-full md:w-1/4 flex flex-col items-start text-left">
                                                    <h4 className="font-semibold text-[20px] tracking-[-0.4px] text-white">{section.title}</h4>
                                                    <p className="text-neutral-400 mt-2 text-[16px] tracking-[-0.4px]">{section.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {item.feature === "threeSections" && item.subsections && (
                                <div className="mt-0 md:mt-12 flex flex-col md:flex-row w-full gap-8 md:gap-32">
                                    {item.subsections.map((section, index) => (
                                        <div key={index} className="w-full md:w-1/4 flex flex-col items-start text-left">
                                            <h4 className="font-semibold text-[24px] tracking-[-0.4px] text-white">{section.title}</h4>
                                            <p className="text-neutral-400 mt-2 text-[20px] tracking-[-0.4px]">{section.description}</p>
                                        </div>
                                    ))}
                                </div>
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
                            {item.feature === "pricing" && <PricingFeature />}
                            {item.feature === "pricingTiers" && <PricingTiersFeature />}
                            {item.feature === "calEmbed" && <CalEmbedFeature />}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
