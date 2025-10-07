"use client";

import { useEffect } from "react";

export const CalEmbedFeature = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // @ts-ignore - Cal.com embed script
        (function (C, A, L) { let p = function (a: any, ar: any) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        
        const Cal = (window as any).Cal;
        Cal("init", "sales-call", {origin:"https://app.cal.com"});

        Cal.ns["sales-call"]("inline", {
            elementOrSelector:"#my-cal-inline-sales-call",
            config: {"layout":"month_view"},
            calLink: "nyka-technologies/sales-call",
        });

        Cal.ns["sales-call"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#000000"},"dark":{"cal-brand":"#1ab8a3"}},"hideEventTypeDetails":false,"layout":"month_view"});
    }, []);

    return (
        <div className="w-full h-full overflow-scroll" id="my-cal-inline-sales-call"></div>
    );
};
