"use client";

import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

export const LineChartFeature = ({
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
