const LN_LOGO = "images/67f517cdc5bb460c3c3b8e5b_ln4-LN-logo-svg.svg";

export function MarqueeSection() {
  const unit = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-3xl uppercase tracking-tight md:text-5xl">
            Message from Lando
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LN_LOGO} alt="" className="h-6 w-auto md:h-8" />
        </span>
      ))}
    </div>
  );

  return (
    <section className="overflow-hidden border-y border-ln-olive/10 bg-ln-lime py-4 text-ln-olive">
      <div className="flex w-max animate-[ln-marquee_30s_linear_infinite] items-center">
        {unit}
        {unit}
      </div>
    </section>
  );
}
