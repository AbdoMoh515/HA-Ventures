import Hero from "@/components/Hero";
import BriefAbout from "@/components/BriefAbout";
import FeaturedProjects from "@/components/FeaturedProjects";
import HowWeWork from "@/components/HowWeWork"; // 1. استيراد المكون الجديد

export default function Home() {
  return (
    <main>
      <Hero />
      <BriefAbout />
      <HowWeWork />
      <FeaturedProjects />
    </main>
  );
}