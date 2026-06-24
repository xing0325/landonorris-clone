export function StoreSection() {
  return (
    <section className="is-lando-exe bg-ln-olive text-ln-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Text column */}
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-ln-lime">
              Lando Store
            </span>

            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.92] sm:text-6xl md:text-7xl">
              World Drivers&rsquo; Champion
            </h2>

            <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-ln-sage-gray sm:text-lg">
              Celebrate this incredible moment with a collection designed for the
              fans who never stopped believing. Wear it, frame it, treasure it
              forever.
            </p>

            <div className="mt-10">
              <a
                href="https://landonorris.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-ln-lime px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-ln-ink transition-transform duration-300 hover:scale-105"
              >
                Visit the store
              </a>
            </div>
          </div>

          {/* Image composition */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="images/69458be7e803d4123abb47dd_lando-store-gold-5.webp"
                  alt="Lando Norris championship merchandise"
                  className="aspect-square w-full rounded-3xl object-cover"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="images/69458be8f7e939c143a9bed6_lando-store-gold-3.webp"
                  alt="World Drivers' Champion collection apparel"
                  className="aspect-[3/4] w-full rounded-3xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 pt-8 sm:gap-6 sm:pt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="images/69458be88faa89137717632c_lando-store-gold-2.webp"
                  alt="Limited edition championship gold merch"
                  className="aspect-[3/4] w-full rounded-3xl object-cover"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="images/69458be7e4ccfdba84b69d27_lando-store-gold-1.webp"
                  alt="Lando Norris fan collection product"
                  className="aspect-square w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
