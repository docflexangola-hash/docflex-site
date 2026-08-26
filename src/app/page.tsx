"use client";

import { useState } from "react";
import SplashScreen from "@/components/sections/splash-screen";
import Navbar from "@/components/sections/navbar";
import LiquidMetalHero from "@/components/sections/liquid-metal-hero";
import AboutSection from "@/components/sections/about-section";
import ProductsSection from "@/components/sections/products-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import DifferentialsSection from "@/components/sections/differentials-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <LiquidMetalHero
          badge="Empresa de tecnologia — Benguela, Angola"
          title="Produtos digitais para os desafios reais de Angola"
          subtitle="Construímos ferramentas próprias para problemas concretos do mercado angolano — do acesso a numerário à automação de atendimento via WhatsApp."
          primaryCtaLabel="Falar no WhatsApp"
          secondaryCtaLabel="Conhecer os produtos"
          onPrimaryCtaClick={() =>
            window.open("https://wa.me/244933986318", "_blank")
          }
          onSecondaryCtaClick={() =>
            document
              .getElementById("produtos")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          features={["Feito para Angola", "Mobile-first", "Suporte directo via WhatsApp"]}
        />

        <AboutSection />
        <ProductsSection />
        <PortfolioSection />
        <DifferentialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
