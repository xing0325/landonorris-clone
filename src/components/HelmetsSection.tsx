type Helmet = {
  year: string;
  name: string;
  base: string;
  hover: string;
};

const HELMETS: Helmet[] = [
  {
    year: "2025",
    name: "Season",
    base: "68305b3e6c7ab86033cf172c_In-helm-2025-Season-base.webp",
    hover: "68305b411c575b2f777125f6_In-helm-2025-Season-hover.webp",
  },
  {
    year: "2025",
    name: "Discoball",
    base: "68305b2259159e5170d2b923_In-helm-2025-Discoball-base.webp",
    hover: "68305b24037a1e7681195c20_In-helm-2025-Discoball-hover.webp",
  },
  {
    year: "2025",
    name: "Dark Glitter",
    base: "68305aff4692de3e7ea12251_In-helm-2025-DarkGlitter-base.webp",
    hover: "68305b03644c91f0a8de407b_In-helm-2025-DarkGlitter-hover.webp",
  },
  {
    year: "2024",
    name: "Season",
    base: "68305aeac44aa40f7bda5460_In-helm-2024-Season-base.webp",
    hover: "68305af56183c37dfd14ff3f_In-helm-2024-Season-hover.webp",
  },
  {
    year: "2024",
    name: "Porcelain",
    base: "68305acf3fccf71c6d72607b_In-helm-2024-Porcelain-base.webp",
    hover: "68305ad3a594ec37bd1d32cb_In-helm-2024-Porcelain-hover.webp",
  },
  {
    year: "2024",
    name: "Japan",
    base: "68305a980c399022066600a6_In-helm-2024-Japan-base.webp",
    hover: "68305a9b1716264ea006064b_In-helm-2024-Japan-hover.webp",
  },
  {
    year: "2024",
    name: "GIF",
    base: "68305a7d4e96d5f8f44f7803_In-helm-2024-GIF_Helmet-base.webp",
    hover: "68305a8e13a9b59a5e99cafe_In-helm-2024-GIF_Helmet-hover.webp",
  },
  {
    year: "2024",
    name: "Dark Mode",
    base: "68305a59417d51c0a58c32c6_In-helm-2024-DarkMode-base.webp",
    hover: "68305a5cdaa389d0c080afc7_In-helm-2024-DarkMode-hover.webp",
  },
  {
    year: "2023",
    name: "Race 100",
    base: "68305a459178b78319e05b55_In-helm-2023-Race_100-base.webp",
    hover: "68305a47417d51c0a58c28a6_In-helm-2023-Race_100-hover.webp",
  },
  {
    year: "2023",
    name: "Las Vegas",
    base: "68305a2e3fccf71c6d71e5a8_In-helm-2023-Las_Vegas-base.webp",
    hover: "68305a3053985f797745cdfc_In-helm-2023-Las_Vegas-hover.webp",
  },
  {
    year: "2023",
    name: "Chrome",
    base: "68305a153de4a824d397d21d_In-helm-2023-Chrome-base.webp",
    hover: "68305a175a720573cbd3000f_In-helm-2023-Chrome-hover.webp",
  },
  {
    year: "2023",
    name: "Beach Ball",
    base: "683053f61b468e794507c0a7_In-helm-2023-Beach_Ball-base.webp",
    hover: "683053fb6e004f8218de7f11_In-helm-2023-Beach_Ball-hover.webp",
  },
  {
    year: "2022",
    name: "Basketball",
    base: "683052a8a475dfa06075ca17_In-helm-2022-Basketball-base.webp",
    hover: "683052ab1073a33331767d2a_In-helm-2022-Basketball-hover.webp",
  },
  {
    year: "2021",
    name: "",
    base: "68305038652a87f86290bf3b_ln-helm-2021-base.webp",
    hover: "68305b57817f019bc368a7b6_ln-helm-2021-hover.webp",
  },
  {
    year: "2020",
    name: "Silverstone",
    base: "68305203f28384dcf8ef81cb_In-helm-2020-Silverstone-base.webp",
    hover: "68305223cddca8f1ea359a7a_In-helm-2020-Silverstone-hover.webp",
  },
  {
    year: "2019",
    name: "",
    base: "68305139c5020a27624aa793_In-helm-2019-base.webp",
    hover: "6830513c652a87f862917de3_In-helm-2019-hover.webp",
  },
];

export function HelmetsSection() {
  return (
    <section className="bg-ln-olive text-ln-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col">
            <span className="font-sans text-sm uppercase tracking-[0.2em] text-ln-lime">
              Hall of Fame
            </span>
            <h2 className="font-display text-6xl uppercase leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl">
              Helmets
            </h2>
          </div>
          <p className="max-w-md font-sans text-base leading-relaxed text-ln-cream/70 md:text-lg">
            From his iconic blobs to innovative one-off designs, Lando has always
            been passionate about designing innovative and memorable helmets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {HELMETS.map((helmet) => {
            const label = helmet.name
              ? `${helmet.name} helmet`
              : `${helmet.year} helmet`;
            const key = `${helmet.year}-${helmet.name || "base"}`;
            return (
              <div key={key} className="group flex flex-col gap-3">
                <div className="group relative aspect-square overflow-hidden rounded-2xl bg-ln-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`images/${helmet.base}`}
                    alt={label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`images/${helmet.hover}`}
                    alt={label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-lg uppercase leading-none">
                    {helmet.name || helmet.year}
                  </span>
                  {helmet.name && (
                    <span className="font-sans text-sm text-ln-lime">
                      {helmet.year}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
