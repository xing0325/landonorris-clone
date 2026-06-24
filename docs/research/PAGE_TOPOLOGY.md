# landonorris.com — Page Topology

Source: https://landonorris.com/ (Webflow site, Lenis smooth scroll, `html.lenis`)
Total page height: ~9666px. 12 `<section>` elements. Body bg `#282C20`, text `#F4F4ED`.

> Interaction models below are **initial judgments** from the recon sweep. Confirm each during per-section extraction (scroll BEFORE click to determine scroll- vs click-driven).

| # | Selector | absTop | Height | img | canvas | svg | Working name | Interaction model |
|---|----------|-------:|-------:|----:|-------:|----:|--------------|-------------------|
| 1 | `section.s.home-hero` | 0 | 633 | 1 | 2 | 3 | **Hero** — LANDO NORRIS wordmark, L7 monogram, STORE btn, hamburger, NEXT RACE card (Spielberg GP / McLaren F1 since 2019), portrait | WebGL helmet (time-driven canvas) over portrait + bg blob canvas; sticky header overlay |
| 2 | `section.s.home-marquee` | 0* | 633 | 2 | 1 | 0 | **Marquee** — "Message from Lando" | Auto-scroll marquee (time-driven). *top:0 — verify if absolute/pinned overlay |
| 3 | `section.s` | 1266 | 683 | 0 | 1 | 1 | **Statement** — ON TRACK / OFF TRACK; "push the limits, fight to win, leave it all out there" | Scroll-reveal text; bg blob canvas |
| 4 | `section.s.is-horizontal-track` | 1949 | 2200 | 13 | 0 | 0 | **Horizontal Track** — career moments (Qatar 2024, FIA Awards…) | **Scroll-driven horizontal scroll (pinned)** — tall section, content moves sideways as you scroll down |
| 5 | `section.s.is-otot-home` | 4149 | 633 | 2 | 3 | 0 | **OTOT Home** — On Track / Off Track feature intro | Likely scroll/canvas-driven; 3 canvases |
| 6 | `section.s.is-otot-end` | 4782 | 633 | 1 | 0 | 0 | **OTOT End** — closing of OTOT block | Static / scroll-reveal |
| 7 | `section.s.home-helmets` | 5415 | 1242 | 64 | 0 | 64 | **Helmets** — helmet design gallery (Season, Discoball, Dark Glitter, Porcelain, Japan…) | Grid / marquee of 64 helmet items; verify if filter tabs or auto-scroll |
| 8 | `section.s` | 6657 | 348 | 0 | 2 | 1 | **Statement 2** — short divider/quote | Static + bg canvas |
| 9 | `section.s.is-lando-exe` | 7005 | 664 | 5 | 1 | 1 | **LN·EXE** — lifestyle/brand callout | Static / hover; verify |
| 10 | `section.s.is-home-collabs` | 7669 | 582 | 18 | 2 | 0 | **Collabs** — partners/sponsors wall (18 logos/images) | Grid; possibly hover or marquee |
| 11 | `section.s.is-callout-socials` | 8252 | 706 | 7 | 1 | 0 | **Socials** — social-media callout | Static / hover cards |
| 12 | `section.s.is-footer` | 8958 | 708 | 10 | 2 | 8 | **Footer** — nav, legal, socials | Static + hover |

## Global layers
- **Header** (fixed/overlay): LANDO NORRIS wordmark (top-left), L7 monogram (top-center), STORE button + hamburger (top-right). Overlays all sections, z-index high.
- **Lenis smooth scroll** active on `<html>` — must replicate (install `lenis`).
- **WebGL/canvas** (21 total): hero 3D helmet, background morphing blobs, OTOT canvases. → approximate with static frame images / simplified effects.
- Right-edge floating icons in screenshot (grid + translate) are **browser-injected (Google Translate / extension), NOT part of the site** — exclude from clone.

## Build order
Foundation → Hero → Marquee → Statement → Horizontal Track → OTOT(home/end) → Helmets → Statement2 → LN·EXE → Collabs → Socials → Footer → Assembly → QA.
