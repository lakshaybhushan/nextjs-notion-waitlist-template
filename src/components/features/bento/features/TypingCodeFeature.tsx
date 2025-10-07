"use client";

import { useState, useEffect, useRef } from "react";

export const TypingCodeFeature = ({ text }: { text: string }) => {
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
