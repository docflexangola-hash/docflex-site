"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageSquare } from "lucide-react";

const products = [
  {
    name: "Dinheiro em Mão",
    description:
      "Localizador de disponibilidade de numerário em caixas ATM. Saiba onde há dinheiro disponível, com mapas actualizados em tempo real.",
    cta: "Visitar dinheiroemmao.com",
    href: "https://dinheiroemmao.com",
    icon: MapPin,
  },
  {
    name: "Botforge",
    description:
      "Plataforma SaaS de chatbots para WhatsApp. Crie bots sem código para automatizar o atendimento ao cliente, potenciada por IA.",
    cta: "Experimentar Botforge",
    href: "#",
    icon: MessageSquare,
  },
];

export default function ProductsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="produtos" className="bg-paper py-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Os nossos produtos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas próprias construídas para resolver desafios concretos do
            mercado angolano.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-white/70 backdrop-blur-md border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30">
                      <product.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <Button
                    asChild
                    variant="brand"
                  >
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
