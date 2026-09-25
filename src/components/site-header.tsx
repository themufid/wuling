"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/vehicles", label: "Vehicles" },
  { href: "/electric", label: "Electric" },
  { href: "/technology", label: "Technology" },
  { href: "/charging", label: "Charging" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled || open ? "glass-nav" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="display text-[22px] tracking-[0.18em]" aria-label="Wuling Electric Experience, concept home">
          Wuling
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[12px] uppercase tracking-[0.16em] text-[#d9d3c8] hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/electric" className="btn btn-solid hidden md:inline-flex">Explore EV</Link>
          <button className="btn lg:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 px-5 pb-6 lg:hidden" aria-label="Mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="display text-4xl">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
