"use client";

import { ArrowDownRight, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
    { src: "/images/Library - 4 of 4.jpeg", alt: "Majestic City Colombo architecture" },
    { src: "/images/Library - 1 of 4.jpeg", alt: "Majestic City Colombo interior" },
    { src: "/images/Library-4banner.jpeg", alt: "Majestic City Colombo shopping destination" },
    { src: "/images/Library-3banner.jpeg", alt: "Majestic City Colombo experiences" },
];

export function Hero() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = window.setInterval(() => {
            setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
        }, 6000);

        return () => window.clearInterval(interval);
    }, [isPaused]);

    const goToSlide = (slide: number) => setActiveSlide(slide);
    const goToPreviousSlide = () => setActiveSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length);
    const goToNextSlide = () => setActiveSlide((activeSlide + 1) % heroSlides.length);

    return (
        <section className="relative min-h-[590px] h-[84vh] overflow-hidden bg-[#27251f] text-white lg:h-[min(95vh,930px)] lg:min-h-[670px]" id="top">
            <div className="absolute inset-0">
                {heroSlides.map((slide, slideIndex) => (
                    <Image
                        key={slide.src}
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={slideIndex === 0}
                        sizes="100vw"
                        className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${activeSlide === slideIndex ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
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
                <div className="flex items-center gap-3" aria-label="Hero slideshow controls">
                    <button
                        type="button"
                        aria-label="Previous slide"
                        className="grid h-9 w-9 place-items-center border border-white/40 transition hover:border-white hover:bg-white hover:text-black"
                        onClick={goToPreviousSlide}
                    >
                        <ArrowLeft size={15} />
                    </button>
                    <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
                        {heroSlides.map((slide, slideIndex) => (
                            <button
                                key={slide.src}
                                type="button"
                                role="tab"
                                aria-label={`Go to slide ${slideIndex + 1}`}
                                aria-selected={activeSlide === slideIndex}
                                className={`h-1 transition-all ${activeSlide === slideIndex ? "w-8 bg-[#c7af82]" : "w-3 bg-white/50 hover:bg-white"}`}
                                onClick={() => goToSlide(slideIndex)}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                        className="grid h-9 w-9 place-items-center border border-white/40 transition hover:border-white hover:bg-white hover:text-black"
                        onClick={() => setIsPaused((paused) => !paused)}
                    >
                        {isPaused ? <Play size={14} /> : <Pause size={14} />}
                    </button>
                    <button
                        type="button"
                        aria-label="Next slide"
                        className="grid h-9 w-9 place-items-center border border-white/40 transition hover:border-white hover:bg-white hover:text-black"
                        onClick={goToNextSlide}
                    >
                        <ArrowRight size={15} />
                    </button>
                </div>
            </div>
        </section>
    );
}
