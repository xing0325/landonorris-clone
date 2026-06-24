// Content structures observed on landonorris.com

export interface NavLink {
  label: string;
  href: string;
}

export interface RaceInfo {
  label: string; // "NEXT RACE"
  grandPrix: string; // "Spielberg GP"
  team: string; // "McLaren F1"
  since: string; // "Since 2019"
}

export interface HelmetDesign {
  name: string; // "Discoball", "Dark Glitter", "Porcelain", "Japan"
  season?: string;
  image: string;
  frame?: string;
}

export interface Collab {
  name: string;
  logo: string;
  href?: string;
}

export interface SocialLink {
  platform: string; // "Instagram", "X", "TikTok", "YouTube"
  href: string;
  handle?: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface TrackMoment {
  title: string; // e.g. "Qatar, 2024"
  caption?: string;
  image: string;
}
