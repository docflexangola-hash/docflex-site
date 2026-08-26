"use client";

import { motion, useReducedMotion } from "framer-motion";
import DeviceMockup from "./device-mockup";

const projects = [
  {
    name: "Dinheiro em Mão",
    description:
      "Localizador de disponibilidade de numerário em caixas ATM — produto próprio da DocFlex, com mapas em tempo real.",
    href: "https://dinheiroemmao.com",
    fullPage: {
      desktop: "/screenshots/dinheiro-em-mao-full-desktop.png",
      iphone: "/screenshots/dinheiro-em-mao-full-mobile.png",
      ipad: "/screenshots/dinheiro-em-mao-full-ipad.png",
    },
  },
  {
    name: "Hotel Mil Cidades",
    description:
      "Site institucional do Aparthotel Mil Cidades — design editorial de luxo para hospitalidade.",
    href: "https://stitchluxoeditorialangolano.vercel.app/",
    fullPage: {
      desktop: "/screenshots/mil-cidades-full-desktop.png",
      iphone: "/screenshots/mil-cidades-full-mobile.png",
      ipad: "/screenshots/mil-cidades-full-ipad.png",
    },
  },
  {
    name: "Academia da Força Aérea Angola",
    description:
      "Portal institucional da Academia da Força Aérea — plataforma de informação e serviços académicos.",
    href: "https://stitchportalinstitucionalafanangola.vercel.app/",
    fullPage: {
      desktop: "/screenshots/afan-full-desktop.png",
      iphone: "/screenshots/afan-full-mobile.png",
      ipad: "/screenshots/afan-full-ipad.png",
    },
  },
];

export default function PortfolioSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="portfolio" className="bg-gradient-to-b from-paper via-primary/[0.03] to-paper py-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Os nossos trabalhos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Projectos que construímos para clientes e para o mercado angolano.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="space-y-8"
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 40 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
                <motion.div
                  className="hidden md:block"
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <DeviceMockup
                    type="desktop"
                    fullPageSrc={project.fullPage.desktop}
                    alt={`Desktop de ${project.name}`}
                  />
                </motion.div>

                <motion.div
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <DeviceMockup
                    type="iphone"
                    fullPageSrc={project.fullPage.iphone}
                    alt={`iPhone de ${project.name}`}
                  />
                </motion.div>

                <motion.div
                  className="hidden md:block"
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <DeviceMockup
                    type="ipad"
                    fullPageSrc={project.fullPage.ipad}
                    alt={`iPad de ${project.name}`}
                  />
                </motion.div>
              </div>

              <div className="text-center">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-brand-blue)] font-semibold text-sm hover:underline underline-offset-4 transition-all"
                >
                  Ver site
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
