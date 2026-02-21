import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Monoframe - Creative Brand",
  description: "Monoframe menaungi Monobox (Photobooth), Monodev (Web Development), dan Monoframe Studio (Photography). Melayani dengan passion dan profesionalisme.",
  keywords: ["monoframe", "photobooth", "web development", "photography", "studio foto", "monobox", "monodev"],
  authors: [{ name: "Monoframe" }],
  openGraph: {
    title: "Monoframe - Creative Brand",
    description: "Monoframe menaungi Monobox, Monodev, dan Monoframe Studio.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
