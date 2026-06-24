const ON_TRACK = "images/67d18655b032045a4dc78e53_ln4-hp-lando-helmet.webp";
const OFF_TRACK = "images/67d18655b032045a4dc78e56_ln4-hp-lando-head.webp";
const BIG_HELMET = "images/68302ff5ff89a9a4afb8c19e_ln-home-helm-large.webp";

function Panel({
  kicker,
  body,
  image,
  align,
}: {
  kicker: string;
  body: string;
  image: string;
  align: "left" | "right";
}) {
  return (
    <div className="group relative flex min-h-[78vh] flex-col justify-between overflow-hidden p-8 md:p-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={kicker}
        className="pointer-events-none absolute bottom-0 left-1/2 h-[80%] w-auto max-w-none -translate-x-1/2 object-contain opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className={align === "right" ? "ml-auto text-right" : ""}>
        <h2 className="font-display text-5xl uppercase leading-[0.85] md:text-7xl">
          {kicker.split(" ").map((w) => (
            <span key={w} className="block">
              {w}
            </span>
          ))}
        </h2>
      </div>
      <p
        className={`relative z-10 max-w-xs text-sm leading-relaxed text-ln-cream/70 ${
          align === "right" ? "ml-auto text-right" : ""
        }`}
      >
        {body}
      </p>
    </div>
  );
}

export function OtotSection() {
  return (
    <section className="relative bg-ln-olive text-ln-cream">
      <div className="grid md:grid-cols-2 md:divide-x md:divide-ln-cream/10">
        <Panel
          kicker="ON TRACK"
          body="Most recent results, career stats and photos from trackside."
          image={ON_TRACK}
          align="left"
        />
        <Panel
          kicker="OFF TRACK"
          body="Campaigns, shoots and other such promotional materials for fans."
          image={OFF_TRACK}
          align="right"
        />
      </div>
      <div className="flex justify-center overflow-hidden pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BIG_HELMET}
          alt="Lando Norris helmet"
          className="w-[min(560px,80vw)] -translate-y-10 object-contain"
        />
      </div>
    </section>
  );
}
