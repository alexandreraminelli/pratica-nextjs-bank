import type { Metadata } from "next" // metadata
import "./globals.css" // styles
import { lexend } from "./ui/fonts/fonts" // fonte
import Header from "@/app/ui/layout/header/Header"
import Footer from "@/app/ui/layout/footer/Footer"

/**
 * Metadados principais do site.
 * @author Alexandre Raminelli
 */
export const metadata: Metadata = {
  title: {
    template: "%s | YourBank",
    default: "YourBank | Empowering Your Financial Journey",
  },
  description: "Empowering Your Financial Journey",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased bg-gray-10 text-white`}>
        {/* Cabeçalho */}
        <Header />

        {/* Conteúdo da página */}
        {children}

        {/* Rodapé */}
        <Footer />
      </body>
    </html>
  )
}
