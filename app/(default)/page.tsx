export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Team from "@/components/team";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Team />
      <Newsletter />
    </>
  );
}