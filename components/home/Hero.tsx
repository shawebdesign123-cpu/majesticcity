"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImage = "/images/Library - 4 of 4.jpeg";

export function Hero() {
    return (
        <section className="relative min-h-[590px] h-[84vh] overflow-hidden bg-[#27251f] text-white lg:h-[min(95vh,930px)] lg:min-h-[670px]" id="top">
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt="Majestic City Colombo architecture"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,9,.72)_0%,rgba(10,10,9,.25)_60%,rgba(10,10,9,.15)),linear-gradient(0deg,rgba(10,10,9,.5),transparent_45%)]" />
            <div className="absolute bottom-[17%] left-6 right-6 lg:bottom-[10%] lg:left-[8vw] lg:right-auto space-y-4">
                <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/70 ">
                    <span className="inline-block h-px w-7 bg-[#c7af82]" />Colombo, Sri Lanka · Est. 1990
                </p>
                <h1 className="my-7 text-[clamp(4.7rem,23vw,7.5rem)]  font-light uppercase leading-[.77]  tracking-[-.09em] lg:my-3 lg:text-[clamp(5rem,12vw,12rem)]">
                    Majestic
                    <br />
                    <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">City</em>
                </h1>
                <p className="text-sm leading-relaxed text-white/80 lg:text-base pt-4">
                    Colombo&apos;s iconic destination for
                    <br className="hidden lg:block" /> shopping, dining & experiences.
                </p>
                <div className="mt-7 flex flex-col items-start gap-[22px] lg:mt-[34px] lg:flex-row lg:items-center lg:gap-6">
                    <Link className="inline-flex items-center gap-2.5 bg-[#f4f0e7] px-[18px] py-[13px] text-[10px] font-semibold uppercase tracking-[.12em] !text-[#000] transition hover:bg-white" href="#shop">
                        Explore Majestic City <ArrowRight size={16} />
                    </Link>
                    <Link className="border-b border-white/60 pb-1.5 text-[11px] uppercase tracking-[.12em] hover:bg-[#f4f0e7] px-[18px] py-[13px] hover:!text-black transition-all " href="#visit">
                        Plan your visit
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between lg:bottom-[25px] lg:left-[5vw] lg:right-[5vw]">
                <span className="flex items-center gap-2.5 text-[8px] uppercase tracking-[.15em] lg:text-[8px] ">
                    <ArrowDownRight size={16} /> Scroll to discover
                </span>
            </div>
        </section>
    );
}
