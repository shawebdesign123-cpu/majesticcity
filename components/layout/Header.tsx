"use client";

import { Map, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    window.dispatchEvent(new CustomEvent("majestic-menu", { detail: next }));
  }
  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 text-white transition-[background,color,box-shadow] duration-500 ${scrolled ? "bg-[rgba(251,250,247,.95)] text-[#252321] shadow-[0_1px_0_rgba(21,21,21,.16)] backdrop-blur-[14px]" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div
        className={`flex items-center justify-between border-b px-6 py-2.5 text-[10px] uppercase tracking-[.11em] transition-colors duration-500 lg:px-[5vw] ${scrolled ? "border-[#252321]/15" : "border-white/20"}`}>
        <span className={`whitespace-nowrap ${scrolled ? "text-[#252321]" : "text-white"}`}>
          Open today <b>9:00 AM — 9:00 PM</b>
        </span>
        <nav className="hidden gap-6 md:flex">
          <Link
            className={`opacity-80 transition-opacity hover:opacity-100 ${scrolled ? "!text-[#252321]" : "text-white"}`}
            href="#visit">
            Plan your visit
          </Link>
          <Link
            className={`opacity-80 transition-opacity hover:opacity-100 ${scrolled ? "!text-[#252321]" : "text-white"}`}
            href="#directory">
            Store directory
          </Link>
          <Link
            className={`opacity-80 transition-opacity hover:opacity-100 ${scrolled ? "!text-[#252321]" : "text-white"}`}
            href="#footer">
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex h-[74px] items-center justify-between px-6 lg:h-[92px] lg:px-[5vw]">
        <Link
          href="#top"
          className="flex items-center"
          aria-label="Majestic City home">
          <Image
            src="/images/logo.png"
            alt="Majestic City"
            width={154}
            height={48}
            className="block h-auto w-32 lg:w-[154px]"
          />
        </Link>
        <nav
          className={`ml-auto mr-[5vw] hidden gap-[clamp(20px,2.5vw,43px)] text-[11px] uppercase tracking-[.12em] lg:flex ${scrolled ? "text-[#252321]" : "text-white"}`}>
          <Link
            className="opacity-80 transition-opacity hover:opacity-100"
            href="#shop">
            Shop
          </Link>
          <Link
            className="opacity-80 transition-opacity hover:opacity-100"
            href="#dine">
            Dine
          </Link>
          <Link
            className="opacity-80 transition-opacity hover:opacity-100"
            href="#entertainment">
            Entertainment
          </Link>
          <Link
            className="opacity-80 transition-opacity hover:opacity-100"
            href="#whats-on">
            What&apos;s on
          </Link>
          <Link
            className="opacity-80 transition-opacity hover:opacity-100"
            href="#about">
            About
          </Link>
          <Link
            className="opacity-80 transition-opacity hover:opacity-100"
            href="#visit">
            Visit
          </Link>
        </nav>
        <div
          className={`flex items-center gap-[18px] ${scrolled ? "text-[#252321]" : "text-white"}`}>
          <button
            className="flex items-center justify-center border-0 bg-transparent p-2"
            aria-label="Search">
            <Search size={19} />
          </button>
          <Link
            className="hidden items-center gap-2 border border-current px-[18px] py-[13px] text-[10px] font-semibold uppercase tracking-[.12em] lg:flex"
            href="#visit">
            <Map size={16} /> Plan your visit
          </Link>
          <button
            className="flex items-center justify-center border-0 bg-transparent p-2 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
