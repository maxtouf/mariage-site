import Image from 'next/image'
import Link from 'next/link'
import Countdown from './components/Countdown'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f5]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Couple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="font-playfair text-6xl md:text-7xl mb-4">
            Marie & Thomas
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Nous allons nous marier !
          </p>
          <p className="font-playfair text-3xl md:text-4xl">
            24 Août 2024
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-md py-6">
        <ul className="flex justify-center space-x-8 text-gray-700">
          <li>
            <Link href="/programme" className="hover:text-[#d4a373] transition-colors">
              Programme
            </Link>
          </li>
          <li>
            <Link href="/lieu" className="hover:text-[#d4a373] transition-colors">
              Lieu
            </Link>
          </li>
          <li>
            <Link href="/hebergement" className="hover:text-[#d4a373] transition-colors">
              Hébergement
            </Link>
          </li>
          <li>
            <Link href="/rsvp" className="hover:text-[#d4a373] transition-colors">
              RSVP
            </Link>
          </li>
        </ul>
      </nav>

      {/* Countdown Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-playfair text-4xl mb-12 text-gray-800">
            Notre grand jour approche
          </h2>
          <Countdown targetDate="2024-08-24T14:00:00" />
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-20 bg-[#faf7f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-playfair text-4xl mb-12 text-gray-800">
            Notre Histoire
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">
              Nous nous sommes rencontrés il y a 5 ans lors d'une soirée entre amis.
              Depuis ce jour, nous ne nous sommes plus quittés. Après toutes ces années
              de bonheur partagé, nous avons décidé de nous unir pour la vie.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}