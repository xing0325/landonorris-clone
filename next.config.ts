import type { NextConfig } from "next";

// GitHub Pages project site is served from /landonorris-clone/.
// basePath is only applied for production builds so local `npm run dev` stays at "/".
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/landonorris-clone" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
