const partners: { name: string; file: string }[] = [
  { name: "Ralph Lauren", file: "67d4349e00e6b7904f3746a3_ln4-ln4-collab-logo-ralph.svg" },
  { name: "Mind", file: "67d435767c599270fb721513_ln4-ln4-collab-logo-mind.svg" },
  { name: "PlayStation", file: "67ded2a099f418db1d37323c_ln4-ln4-collab-logo-ps4.svg" },
  { name: "Quadrant", file: "67ded2d59a2773f9b6518792_ln4-ln4-collab-logo-quadrant.svg" },
  { name: "Tumi", file: "67ded2eb42843bae575a6892_ln4-ln4-collab-logo-tumi.svg" },
  { name: "Hilton", file: "67efc88c1939bc87931c2599_ln4-ln4-collab-logo-hilton.svg" },
  { name: "Uber", file: "68d294a99b218abd71dc0764_ln4-ln4-collab-logo-uber.svg" },
  { name: "Google", file: "68dbd5d7a8a302c07e91904d_ln4-ln4-collab-google.svg" },
  { name: "LN Kart", file: "68dbd5d7e14222573f46ebdb_ln4-ln4-collab-lnkart.svg" },
  { name: "Pure Electric", file: "68dbd5d718fcdbf76afbcc45_ln4-ln4-collab-pure-electric.svg" },
  { name: "Bell Helmets", file: "68dbd5d72c50967c2195c702_ln4-ln4-collab-bell-helmets.svg" },
];

export function CollabsSection() {
  return (
    <section className="bg-ln-cream text-ln-olive">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">
              <span className="block">partners</span>
              <span className="block">&amp;campaigns</span>
            </h2>
            <p className="mt-6 max-w-md font-sans text-base text-ln-muted md:text-lg">
              Lando is proud to collaborate with a range of partners, who share
              his passion for performance across a range of industries.
            </p>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              className="rounded-full border border-ln-olive/40 px-6 py-3 text-sm uppercase transition hover:bg-ln-olive hover:text-ln-cream"
            >
              View partnerships
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ln-olive/15 bg-ln-olive/15 sm:grid-cols-3 lg:grid-cols-4 md:mt-20">
          {partners.map((partner) => (
            <div
              key={partner.file}
              className="flex items-center justify-center bg-ln-cream px-6 py-10 md:py-14"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`images/${partner.file}`}
                alt={`${partner.name} logo`}
                className="h-8 w-auto object-contain md:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
