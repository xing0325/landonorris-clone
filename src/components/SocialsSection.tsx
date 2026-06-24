const socialLinks = [
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Twitch", href: "#" },
];

const socialPhotos = [
  {
    src: "images/6830302d42237886d0c4b24c_ln-social-img-2.webp",
    alt: "Lando Norris on social media",
  },
  {
    src: "images/6830302dadd0727e6ac034dd_ln-social-img-6.webp",
    alt: "Lando Norris behind the scenes",
  },
];

export function SocialsSection() {
  return (
    <section className="bg-ln-olive text-ln-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              What&apos;s Up
              <br />
              <span className="text-ln-lime">On Socials</span>
            </h2>
            <p className="mt-6 font-sans text-base text-ln-sage-gray md:text-lg">
              Follow Lando on social media
            </p>
          </div>

          <ul className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-ln-cream/20 px-5 py-2.5 font-sans text-sm font-semibold uppercase tracking-wide text-ln-cream transition-colors hover:border-ln-lime hover:text-ln-lime"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-ln-lime transition-colors group-hover:bg-ln-lime"
                  />
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {socialPhotos.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-2xl bg-ln-surface"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
