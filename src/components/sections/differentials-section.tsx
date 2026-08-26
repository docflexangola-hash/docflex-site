"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Smartphone, Globe, Headphones, CreditCard } from "lucide-react";

const differentials = [
  {
    icon: Smartphone,
    title: "Mobile-first",
    description:
      "Todos os nossos produtos são pensados primeiro para telemóvel, o dispositivo mais usado em Angola.",
  },
  {
    icon: Globe,
    title: "Feito para Angola",
    description:
      "Conhecemos as realidades locais — conectividade limitada, pagamentos via Multicaixa, comunicação por WhatsApp.",
  },
  {
    icon: Headphones,
    title: "Suporte directo",
    description:
      "Apoio ao cliente directo via WhatsApp. Sem filas, sem formulários complexos, sem espera.",
  },
  {
    icon: CreditCard,
    title: "Integrações locais",
    description:
      "Integramos com WhatsApp Business e Multicaixa Express, as ferramentas que os angolanos já usam no dia a dia.",
  },
];

export default function DifferentialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="diferenciais" className="bg-gradient-to-b from-paper via-primary/[0.03] to-paper py-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Porquê a DocFlex
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Não somos uma empresa genérica de software. Construímos para Angola.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center space-y-4 p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/20 shadow-lg"
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30">
                <item.icon className="size-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
