import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ObraSuite — Sistema operativo de gestión para constructoras",
  description:
    "Controla presupuesto, planificación, compras, bodega, avance físico, costos, calidad, seguridad, contratos y reportabilidad en una sola plataforma.",
  keywords: [
    "gestión de construcción",
    "software constructoras",
    "control de obra",
    "planificación de obra",
    "Last Planner",
    "gestión de costos",
    "ObraSuite",
    "NexusOne",
  ],
  openGraph: {
    title: "ObraSuite — Controla la obra completa. En una sola plataforma.",
    description:
      "12 módulos, 1 base de datos conectada, visión 360° de tu operación.",
    url: "https://obrasuite.cl",
    siteName: "ObraSuite",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ObraSuite — Controla la obra completa.",
    description:
      "12 módulos, 1 base de datos conectada, visión 360° de tu operación.",
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "ObraSuite",
  authors: [{ name: "NexusOne SpA." }],
  creator: "NexusOne SpA.",
  metadataBase: new URL("https://obrasuite.cl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ObraSuite",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Plataforma integral de gestión para empresas constructoras. 12 módulos para controlar presupuesto, planificación, compras, bodega, avance físico, costos, calidad, seguridad, contratos y reportabilidad.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "CLP",
              },
              author: {
                "@type": "Organization",
                name: "NexusOne SpA.",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
