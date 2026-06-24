import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { StatementSection } from "@/components/StatementSection";
import { HorizontalTrackSection } from "@/components/HorizontalTrackSection";
import { OtotSection } from "@/components/OtotSection";
import { HelmetsSection } from "@/components/HelmetsSection";
import { TrackCtaSection } from "@/components/TrackCtaSection";
import { StoreSection } from "@/components/StoreSection";
import { CollabsSection } from "@/components/CollabsSection";
import { SocialsSection } from "@/components/SocialsSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <HeroSection />
      <MarqueeSection />
      <StatementSection />
      <HorizontalTrackSection />
      <OtotSection />
      <HelmetsSection />
      <TrackCtaSection />
      <StoreSection />
      <CollabsSection />
      <SocialsSection />
      <FooterSection />
    </main>
  );
}
