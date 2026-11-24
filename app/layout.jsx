import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata = {
  title: "Love Pet Petshop | Kasımpaşa, İstanbul",
  description: "Kasımpaşa Love Pet Petshop'ta kedi ve köpek mamaları, aksesuar, bakım ve günlük ihtiyaç ürünlerini keşfedin. Bahriye Caddesi 58/A, Beyoğlu.",
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
}

export const viewport = {
  colorScheme: "light",
  themeColor: "#f8f7f2",
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
