"use client";

import { useEffect, useRef, useState } from "react";

const MOMENTS: { img: string; title: string; year: string }[] = [
  { img: "images/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp", title: "Qatar", year: "2024" },
  { img: "images/68302baab12220595c8223b3_ln-home-horiz-2.webp", title: "FIA Prize Giving", year: "2024" },
  { img: "images/68302babcf12f0111d96322e_ln-home-horiz-3.webp", title: "Miami GP", year: "2024" },
  { img: "images/68302baa798e2cc6e02ac38a_ln-home-horiz-4.webp", title: "Monaco", year: "2023" },
  { img: "images/68da85d632bfefc552a0faac_Britain-25__1_.webp", title: "Britain", year: "2025" },
  { img: "images/68302baa14a96f3cdd2f9a95_ln-home-horiz-6.webp", title: "Battersea", year: "2024" },
  { img: "images/68302bab3ee6e26b1f434a7d_ln-home-horiz-7.webp", title: "High Performance Gala", year: "2024" },
  { img: "images/68302baaedf821dd2e3a7c74_ln-home-horiz-8.webp", title: "Barcelona", year: "2024" },
  { img: "images/68302babb87c5f19ec131093_ln-home-horiz-9.webp", title: "", year: "" },
  { img: "images/68302bab4f762cdbc5e93415_ln-home-horiz-10.webp", title: "", year: "" },
];

export function HorizontalTrackSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    let raf = 0;
    const update = () => {
      const total = wrap.offsetHeight - window.innerHeight;
      const progress =
        total > 0 ? Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / total)) : 0;
      const dist = Math.max(0, track.scrollWidth - window.innerWidth);
      setX(-progress * dist);
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

  return (
    <section ref={wrapRef} className="relative bg-ln-cream text-ln-olive" style={{ height: "340vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 px-[8vw] will-change-transform"
          style={{ transform: `translateX(${x}px)` }}
        >
          <div className="flex w-[78vw] max-w-[560px] shrink-0 flex-col justify-center pr-6 md:w-[36vw]">
            <p className="font-display text-4xl uppercase leading-[0.9] md:text-6xl">
              It doesn&rsquo;t matter where you start, it&rsquo;s how you progress from there.
            </p>
          </div>
          {MOMENTS.map((m, i) => (
            <figure key={i} className="relative flex w-[66vw] max-w-[440px] shrink-0 flex-col md:w-[27vw]">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-ln-sage">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.img}
                  alt={m.title || "Lando Norris"}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              {m.title && (
                <figcaption className="mt-3 flex items-baseline justify-between">
                  <span className="font-display text-lg uppercase">{m.title}</span>
                  <span className="text-sm text-ln-muted">{m.year}</span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
