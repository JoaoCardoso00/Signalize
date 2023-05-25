import { CallToAction } from "@/components/sections/home/CTA";
import { Features } from "@/components/sections/home/Features";
import { Footer } from "@/components/sections/home/Footer";
import { Header } from "@/components/sections/home/Header";
import { Hero } from "@/components/sections/home/Hero";
import { LogoCloud } from "@/components/sections/home/LogoCloud";
import { Stats } from "@/components/sections/home/Stats";

export default function Example() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Hero />
      <LogoCloud />
      <Features />
      {/* <Stats /> */}
      <CallToAction />
      <Footer />
    </div>
  );
}
