# landonorris.com — Design Tokens

## Colors (from getComputedStyle frequency sweep)

| Hex | RGB | Usage (by frequency) | shadcn mapping |
|-----|-----|----------------------|----------------|
| `#F4F4ED` | 244,244,237 | Off-white — primary light bg / light text | `--background` (light) / `--foreground` (dark sections) |
| `#282C20` | 40,44,32 | Dark olive — primary dark bg / dark text | `--foreground` (light) / `--background` (dark) |
| `#535450` | 83,84,80 | Muted gray-green — secondary text | `--muted-foreground` |
| `#DDE1D2` | 221,225,210 | Light sage — subtle surfaces/borders | `--muted` / `--border` |
| `#111112` | 17,17,18 | Near-black — high-contrast text/bg | `--foreground` strong |
| `#D2FF00` | 210,255,0 | **Lime/chartreuse — signature accent** (STORE btn, highlights) | `--primary` / `--accent` |
| `#B4B8A5` | 180,184,165 | Sage gray | secondary muted |
| `#3B3C38` | 59,60,56 | Dark gray | surfaces on dark |
| `#B2C73A` | 178,199,58 | Olive-lime (accent variant) | accent-2 |
| `#343A26` | 52,58,38 | Dark olive (surface) | card on dark |

Accent contrast: lime `#D2FF00` text sits on dark olive `#282C20`. Light sections use `#F4F4ED` bg with `#282C20`/`#111112` text.

## Typography
- **Primary (body/UI):** `Mona Sans Variable` (variable weight, GitHub's open font — free). Fallback `Arial, sans-serif`.
- **Display (big headings / "LANDO NORRIS" wordmark, section titles):** `Brier` — heavy condensed display face. Fallback `Arial, sans-serif`.
- Font files served from Webflow CDN as woff2 — download to `public/fonts/` and self-host via `next/font/local` (see Foundation phase). Mona Sans can also come from `next/font/google` or its official repo.

## Other
- Smooth scroll: **Lenis** (install `lenis`, init at page level).
- Accent shape language: organic blob outlines (SVG/canvas), bold geometric sans, lime highlights on dark olive.
- Border radius: TBD per-component (NEXT RACE card, STORE button pill — extract exact values in Phase 3).

> All values above are real `getComputedStyle()` outputs. Per-component exact CSS captured in `docs/research/components/*.spec.md`.
