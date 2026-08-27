"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SplashScreen from "@/components/sections/splash-screen";
import Navbar from "@/components/sections/navbar";
import LiquidMetalHero from "@/components/sections/liquid-metal-hero";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ProductsSection from "@/components/sections/products-section";

const PortfolioSection = dynamic(
  () => import("@/components/sections/portfolio-section"),
  { ssr: false }
);
const DifferentialsSection = dynamic(
  () => import("@/components/sections/differentials-section"),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("@/components/sections/contact-section"),
  { ssr: false }
);
const Footer = dynamic(() => import("@/components/sections/footer"), {
  ssr: false,
});

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <LiquidMetalHero
          badge="Empresa de tecnologia — Benguela, Angola"
          title="Desenvolvimento de sites, apps e soluções digitais para Angola"
          subtitle="Construímos sites, aplicações mobile e integrações com Multicaixa Express. Consultoria, automação e gestão de bases de dados — tudo sob medida para o mercado angolano."
          primaryCtaLabel="Falar no WhatsApp"
          secondaryCtaLabel="Conhecer os serviços"
          onPrimaryCtaClick={() =>
            window.open("https://wa.me/244933986318", "_blank")
          }
          onSecondaryCtaClick={() =>
            document
              .getElementById("servicos")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          features={["Desenvolvimento de Sites", "Integração Multicaixa Express", "Suporte directo via WhatsApp"]}
        />

        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <PortfolioSection />
        <DifferentialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
