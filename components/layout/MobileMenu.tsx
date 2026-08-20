"use client";

import { ArrowUpRight, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileMenu() {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handler = (event: Event) => setOpen((event as CustomEvent<boolean>).detail);
        window.addEventListener("majestic-menu", handler);
        return () => window.removeEventListener("majestic-menu", handler);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-[15] flex flex-col bg-[#151515] px-[8vw] pb-[35px] pt-[120px] text-[#f5f3ee] transition duration-300 lg:hidden ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2.5 opacity-0"}`}
            aria-hidden={!open}>
            <div className="flex flex-col">
                {["Shop", "Dine", "Entertainment", "What's on", "Offers", "About", "Plan your visit", "Store directory", "Contact"].map((item) => (
                    <a
                        href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                        key={item}
                        className="flex items-center justify-between border-b border-white/15 py-[13px] text-[clamp(1.8rem,8vw,3.3rem)] font-light tracking-[-.06em]"
                        onClick={() => setOpen(false)}>
                        {item}
                        <ArrowUpRight className="text-[#c7af82]" size={18} />
                    </a>
                ))}
            </div>
            <div className="mt-auto flex flex-col gap-3.5 text-[10px] uppercase tracking-[.1em] text-[#99958b] lg:flex-row lg:justify-between">
                <span className="flex items-center gap-1.5"><Clock3 size={15} /> Open today · 9:00 AM – 9:00 PM</span>
                <span>011 250 8673 · Colombo 04</span>
            </div>
        </div>
    );
}