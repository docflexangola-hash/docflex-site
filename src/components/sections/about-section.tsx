"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="sobre" className="bg-gradient-to-b from-paper via-primary/[0.03] to-paper py-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8 bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-8"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Sobre a DocFlex Angola
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A DocFlex Angola é a empresa líder em desenvolvimento de sites e
              aplicações mobile em Benguela, Angola. Oferecemos serviços completos
              de tecnologia: criação de sites institucionais e e-commerce, desenvolvimento
              de apps iOS e Android, integração com Multicaixa Express, consultoria
              tecnológica, gestão de bases de dados e automação de processos.
            </p>

            <p>
              Acreditamos que a tecnologia deve ser acessível, prática e adaptada
              à realidade angolana. Trabalhamos com uma abordagem mobile-first,
              considerando as limitações de conectividade e as necessidades
              específicas dos utilizadores angolanos.
            </p>

            <p>
              Integramos ferramentas locais como WhatsApp e Multicaixa Express,
              porque sabemos que a tecnologia só faz diferença quando se encaixa
              na vida real das pessoas.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-mono">
              DocFlex Angola — Prestação de Serviços, Lda &middot; NIF: 5002888068
              &middot; Benguela, Angola
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
