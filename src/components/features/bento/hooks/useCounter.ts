"use client";

import { useState, useEffect } from "react";

// Counter animation hook
export const useCounter = (end: number, duration: number = 2, delay: number = 0) => {
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
