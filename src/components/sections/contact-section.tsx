"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Erro de ligação. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="bg-gradient-to-b from-paper via-primary/[0.03] to-paper py-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Fale connosco
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem um projecto em mente ou quer saber mais sobre os nossos
            produtos? Entre em contacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/70 backdrop-blur-md border-white/20 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="O seu nome"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="email@exemplo.ao"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Send className="size-4 mr-2" />
                    {sending ? "A enviar..." : "Enviar mensagem"}
                  </Button>

                  {sent && (
                    <p className="text-sm text-green-600 text-center">
                      Mensagem enviada com sucesso!
                    </p>
                  )}

                  {error && (
                    <p className="text-sm text-red-600 text-center">
                      {error}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                WhatsApp directo
              </h3>
              <p className="text-muted-foreground mb-4">
                Para uma resposta rápida, fale connosco directamente no
                WhatsApp.
              </p>
              <Button
                asChild
                variant="brand"
              >
                <a
                  href="https://wa.me/244933986318"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="size-4 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Email e dados empresariais
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  docflex.angola@gmail.com
                </p>
                <p>
                  <strong className="text-foreground">Sede:</strong> Benguela,
                  Angola
                </p>
                <p className="font-mono text-sm">
                  NIF: 5002888068
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
