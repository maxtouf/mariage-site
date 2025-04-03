import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3"
            alt="Photo de mariage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto pt-16 pb-32 px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-serif">
              <span className="block">Maxime</span>
              <span className="block text-secondary">&</span>
              <span className="block">Cousin</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-white sm:max-w-3xl">
              Nous nous marions le 15 juin 2024
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <Link
                  href="/programme"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-accent transition-colors sm:px-8"
                >
                  Programme
                </Link>
                <Link
                  href="/rsvp"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-50 transition-colors sm:px-8"
                >
                  RSVP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections d'information */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {/* Programme */}
            <div className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Programme</h3>
                <p className="mt-4 text-base text-gray-500">
                  Découvrez le déroulé de notre journée de mariage.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link href="/programme" className="text-base font-medium text-primary hover:text-accent">
                  En savoir plus<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Lieu */}
            <div className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Lieu</h3>
                <p className="mt-4 text-base text-gray-500">
                  Trouvez toutes les informations pour vous rendre à notre mariage.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link href="/lieu" className="text-base font-medium text-primary hover:text-accent">
                  En savoir plus<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Hébergement */}
            <div className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Hébergement</h3>
                <p className="mt-4 text-base text-gray-500">
                  Consultez notre sélection d'hébergements à proximité.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link href="/hebergement" className="text-base font-medium text-primary hover:text-accent">
                  En savoir plus<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}