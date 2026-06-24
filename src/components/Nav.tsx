"use client";

import { useEffect, useState } from "react";
import { CartIcon, MenuIcon } from "@/components/icons";

function L7Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M3 2v18a2 2 0 0 0 2 2h11" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" />
      <path d="M24 3h17L29 22" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  );
}

export function Nav() {
  // Flip nav colour to match the section currently behind it (the live site does the same).
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = document.elementFromPoint(12, 86);
      const block = el?.closest("section, footer");
      const bg = block ? getComputedStyle(block).backgroundColor : "";
      const m = bg.match(/(\d+),\s*(\d+),\s*(\d+)/);
      if (m) {
        const lum = (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255;
        setOnDark(lum < 0.5);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const fg = onDark ? "text-ln-cream" : "text-ln-olive";

  return (
    <header className={`fixed inset-x-0 top-0 z-[120] transition-colors duration-300 ${fg}`}>
      <div className="relative flex items-center justify-between px-3 py-3">
        <a href="/" className="font-display text-[26px] leading-[0.8] tracking-[-0.01em]">
          <span className="block">LANDO</span>
          <span className="block">NORRIS</span>
        </a>

        <a
          href="/"
          aria-label="Lando Norris home"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <L7Mark className="h-[18px] w-auto" />
        </a>

        <div className="flex items-center gap-2">
          <a
            href="#store"
            className="flex items-center gap-2 rounded-full bg-ln-lime px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.02em] text-ln-olive transition-transform hover:scale-[1.03]"
          >
            <CartIcon className="h-[18px] w-[18px]" />
            Store
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl border transition-colors ${
              onDark ? "border-ln-cream/40 hover:bg-ln-cream/10" : "border-ln-olive/55 hover:bg-ln-olive/5"
            }`}
          >
            <MenuIcon className="h-3 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
