const pageLinks = [
  { label: "Home", href: "#" },
  { label: "On Track", href: "#" },
  { label: "Off Track", href: "#" },
  { label: "Partnerships", href: "#" },
  { label: "Calendar", href: "#" },
  { label: "Store", href: "#" },
];

const followLinks = [
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Twitch", href: "#" },
];

const sponsorLogos = [
  {
    src: "images/68dbd5d70a9e147b77952c0d_ln4-footer-logo-android.svg",
    alt: "Android",
  },
  {
    src: "images/68dbd5d7361eb2ca03ba0929_ln4-footer-logo-google.svg",
    alt: "Google",
  },
  {
    src: "images/68dbd5d74d2804b912ed1fcc_ln4-footer-logo-hilton.svg",
    alt: "Hilton",
  },
  {
    src: "images/68dbd5d761eeca9060e00622_ln4-footer-logo-monster.svg",
    alt: "Monster Energy",
  },
  {
    src: "images/68dbd5d7564fc5a9fccf822f_ln4-footer-logo-pap.svg",
    alt: "PAP",
  },
  {
    src: "images/68dbd5d722f5ba2f4074cbe7_ln4-footer-logo-ralph-lauren.svg",
    alt: "Ralph Lauren",
  },
  {
    src: "images/67d33eb40292f3a5fef32ed3_ln4-footer-logo-add-c.svg",
    alt: "Add C",
  },
];

export function FooterSection() {
  return (
    <footer className="bg-ln-olive text-ln-cream">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <h2 className="font-display text-5xl uppercase leading-[0.85] tracking-tight md:text-7xl lg:text-8xl">
          Always Bringing
          <br />
          The <span className="text-ln-lime">Fight.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          <nav aria-label="Pages">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ln-sage-gray">
              Pages
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-base text-ln-cream transition-colors hover:text-ln-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Follow on">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ln-sage-gray">
              Follow On
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {followLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-base text-ln-cream transition-colors hover:text-ln-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ln-sage-gray">
              Sign Up
            </h3>
            <p className="mt-5 max-w-sm font-sans text-base text-ln-sage-gray">
              Join the newsletter for the latest news, exclusive drops and
              behind-the-scenes from Lando.
            </p>
            <form className="mt-6 flex max-w-md items-center gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="w-full rounded-full border border-ln-cream/30 bg-transparent px-5 py-3 font-sans text-sm text-ln-cream placeholder-ln-cream/50 transition-colors focus:border-ln-lime focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ln-lime px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-ln-olive transition-opacity hover:opacity-90"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-8 font-sans text-sm text-ln-sage-gray">
              For{" "}
              <a
                href="#"
                className="text-ln-cream underline underline-offset-4 transition-colors hover:text-ln-lime"
              >
                business enquiries
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-ln-cream/15 pt-10 md:mt-20">
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {sponsorLogos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className="h-6 w-auto object-contain opacity-80 md:h-7"
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ln-cream/15 pt-8 font-sans text-sm text-ln-cream/60 sm:flex-row sm:items-center sm:justify-between md:mt-20">
          <p>&copy; 2026 Lando Norris. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors hover:text-ln-cream"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-ln-cream"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
