import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowroomSection from "@/components/ShowroomSection";
import ContactsSection from "@/components/ContactsSection";
import DividerBanner from "@/components/DividerBanner";

export default function HomePage() {
  return (
    <main className="relative bg-[#080808] min-h-screen">
      <Header />
      <HeroSection />
      <DividerBanner text="NEXT.JS · REACT · TYPESCRIPT · PYTHON · NODE.JS · POSTGRESQL · GIT · DOCKER · GITHUB ACTIONS" />
      <AboutSection />
      <DividerBanner text="IT WORKS ON MY MACHINE · 99 BUGS IN THE CODE · GIT COMMIT -M &quot;FIXES&quot; · SUDO APT GET RID OF THE BUGS · TO BE OR NOT TO B · 42 · SEGMENTATION FAULT (CORE DUMPED) · PERL IS NOT DEAD · F*CK SOCIETY · WHOAMI · FLYNN LIVES" />
      <ShowroomSection />
      <DividerBanner text="01000110 00101010 01000011 01001011 00100000 01010011 01001111 01000011 01001001 01000101 01010100 01011001 · 01010111 01001000 01001111 01000001 01001101 01001001 · 01000110 01001100 01011001 01001110 01001110 00100000 01001100 01001001 01010110 01000101 01010011 · SHOWROOM · PROJECTS · CODE · DESIGN · ENGINEERING · PRODUCTION IS DOWN · I FIXED IT WITH A REGEX" />
      <ContactsSection />
      <DividerBanner text="CONTACT · AVAILABLE · OPEN TO WORK · COLLABORATION · SEND MEMES · RFC 1149 · 0 & 1 SAY GOODBYE · 01001000 01000001 01000011 01001011 · 01000010 01010010 01000101 01000001 01001011 00100000 01010100 01001000 01000101 00100000 01010011 01011001 01010011 01010100 01000101 01001101" />
    </main>
  );
}
