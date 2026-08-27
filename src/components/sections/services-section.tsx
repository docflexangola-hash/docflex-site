"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  Smartphone,
  CreditCard,
  Lightbulb,
  Database,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    description:
      "Sites institucionais, e-commerce e landing pages com design moderno e performance optimizada.",
  },
  {
    icon: Smartphone,
    title: "Aplicações Mobile",
    description:
      "Apps iOS e Android nativas ou híbridas, pensadas para o mercado angolano.",
  },
  {
    icon: CreditCard,
    title: "Integração Multicaixa Express",
    description:
      "Integração de pagamentos via Multicaixa Express para e-commerce e sistemas de gestão.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Tecnológica",
    description:
      "Análise de necessidades, arquitectura de soluções e estratégia digital para empresas.",
  },
  {
    icon: Database,
    title: "Gestão de Bases de Dados",
    description:
      "Projecto, optimização e administração de bases de dados para empresas de todos os tamanhos.",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description:
      "Automação de workflows, integrações entre sistemas e robótica de processos.",
  },
];

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="servicos" className="bg-gradient-to-b from-paper via-primary/[0.03] to-paper py-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Os nossos serviços
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para a sua empresa — do desenvolvimento à automação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="text-center space-y-4 p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
                <service.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
