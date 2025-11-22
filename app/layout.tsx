import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Tablón de Anuncios para Adultos | Contacto Directo y Seguro",
  description:
    "Plataforma discreta de anuncios para adultos. Publica tu anuncio con contacto directo (email o teléfono) de forma segura y confidencial. Encuentra y conecta fácilmente.",
  keywords: "anuncios adultos, contacto directo, encuentros, plataforma discreta, anuncios clasificados, Bolivia",
  generator: "v0.app",
  openGraph: {
    title: "Tablón de Anuncios para Adultos | Contacto Directo y Seguro",
    description: "Publica y encuentra anuncios con contacto directo. Plataforma segura y discreta.",
    type: "website",
    locale: "es_BO",
    siteName: "Tablón de Anuncios",
    images: [
      {
        url: "/marketplace-platform.jpg",
        width: 1200,
        height: 1200,
        alt: "Tablón de Anuncios para Adultos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tablón de Anuncios para Adultos",
    description: "Publica y encuentra anuncios con contacto directo. Plataforma segura y discreta.",
    images: ["/marketplace-platform.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  metadataBase: new URL("https://skokka.com"),
  alternates: {
    canonical: "https://skokka.com",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1A2332" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F8F7F4" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
