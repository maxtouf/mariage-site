import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

export const metadata: Metadata = {
  title: 'Mariage de Maxime & Cousin',
  description: 'Site web du mariage de Maxime & Cousin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}