import { TrackLineIcon } from "@/components/icons";

// Front-facing helmeted portrait (real downloadable still — the live site's Rive
// helmet-drop animation resolves to this look). Replaces the side-profile head.
const HEAD = "images/67d43d6e276c436a378a1da6_ln-360-helm-1.webp";
const BLOBS = "images/67dbeb1e708b818bc15a8d17_blobs_nav.svg";

function NextRaceCard() {
  return (
    <div className="absolute bottom-5 left-3 z-30 w-[136px] select-none">
      <div className="rounded-[18px] border border-ln-olive/25 bg-ln-cream/50 p-3 backdrop-blur-[2px]">
        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-ln-olive/60">
          Next Race
        </p>
        <TrackLineIcon className="my-2.5 w-full text-ln-olive/80" />
        <p className="text-center font-display text-[13px] uppercase leading-none tracking-tight">
          Spielberg <span className="text-ln-olive/60">GP</span>
        </p>
        <div className="mt-2.5 flex flex-col items-center gap-1 border-t border-ln-olive/15 pt-2.5">
          <div className="flex items-center gap-1 text-ln-olive/70">
            <span className="text-[14px] leading-none">❮</span>
            <span className="h-7 w-7 rounded-full border border-ln-olive/40" aria-hidden />
            <span className="text-[14px] leading-none">❯</span>
          </div>
          <p className="text-center text-[7.5px] font-semibold uppercase leading-tight tracking-wide text-ln-olive/70">
            McLaren F1
            <br />
            Since 2019
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-ln-cream">
      {/* faint background blob outlines */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BLOBS} alt="" className="w-[92%] max-w-[1200px] opacity-[0.06]" />
      </div>

      {/* Front portrait. The live site renders a Rive helmet-drop animation over the
          head via canvas; we approximate the resting state with the real front still.
          Top-anchored so the head sits just below the nav, torso clipped at the fold. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden pt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HEAD}
          alt="Lando Norris"
          className="h-auto w-[clamp(320px,40vw,540px)] object-contain"
        />
      </div>

      <NextRaceCard />
    </section>
  );
}
