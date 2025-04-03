import Image from 'next/image'
import Link from 'next/link'

export default function Lieu() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
            Le Lieu
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Où nous célèbrerons notre mariage
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative h-64 lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3"
                alt="Lieu du mariage"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Informations */}
            <div className="space-y-8">
              {/* Cérémonie civile */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-serif">Cérémonie civile</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">Mairie de la ville</p>
                  <p className="text-gray-600">1 Place de la Mairie</p>
                  <p className="text-gray-600">75000 Paris</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-primary hover:text-accent"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Voir sur Google Maps
                  </a>
                </div>
              </div>

              {/* Cérémonie religieuse */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-serif">Cérémonie religieuse</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">Église de la ville</p>
                  <p className="text-gray-600">2 Rue de l'Église</p>
                  <p className="text-gray-600">75000 Paris</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-primary hover:text-accent"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Voir sur Google Maps
                  </a>
                </div>
              </div>

              {/* Réception */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-serif">Réception</h2>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">Domaine de la Réception</p>
                  <p className="text-gray-600">3 Route du Domaine</p>
                  <p className="text-gray-600">75000 Paris</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-primary hover:text-accent"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/hebergement"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-accent transition-colors"
          >
            Voir les hébergements
          </Link>
        </div>
      </div>
    </div>
  )
}