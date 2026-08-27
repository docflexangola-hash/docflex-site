import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const baseUrl = "https://docflex-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "DocFlex Angola — Desenvolvimento de Sites e Apps em Angola",
    template: "%s | DocFlex Angola",
  },
  description:
    "DocFlex Angola — empresa líder em desenvolvimento de sites, aplicações mobile, integração com Multicaixa Express, consultoria tecnológica, gestão de bases de dados e automação de processos. Sediada em Benguela, Angola.",
  keywords: [
    "desenvolvimento de sites Angola",
    "criação de sites Benguela",
    "desenvolvimento de apps mobile Angola",
    "integração Multicaixa Express",
    "Multicaixa Express API",
    "consultoria tecnológica Angola",
    "gestão de bases de dados Angola",
    "automação de processos Angola",
    "empresa de tecnologia Benguela",
    "software Angola",
    "DocFlex Angola",
  ],
  authors: [{ name: "DocFlex Angola" }],
  creator: "DocFlex Angola",
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: baseUrl,
    siteName: "DocFlex Angola",
    title: "DocFlex Angola — Desenvolvimento de Sites e Apps em Angola",
    description:
      "Líder em desenvolvimento de sites, apps mobile, integração Multicaixa Express, consultoria, bases de dados e automação. Benguela, Angola.",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "DocFlex Angola" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DocFlex Angola — Desenvolvimento de Sites e Apps em Angola",
    description:
      "Líder em desenvolvimento de sites, apps mobile, integração Multicaixa Express, consultoria, bases de dados e automação.",
    images: ["/icon.png"],
  },
  icons: { icon: "/icon.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
