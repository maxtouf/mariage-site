import Image from 'next/image'
import Link from 'next/link'

const hotels = [
  {
    name: 'Hôtel Le Luxe',
    description: 'Un hôtel 4 étoiles offrant confort et élégance à proximité du lieu de réception.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3',
    price: 'À partir de 150€/nuit',
    features: ['Wi-Fi gratuit', 'Petit-déjeuner inclus', 'Parking', 'Restaurant'],
    website: 'https://example.com',
  },
  {
    name: 'Résidence Le Confort',
    description: 'Une résidence moderne et confortable, idéale pour les familles.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3',
    price: 'À partir de 120€/nuit',
    features: ['Kitchenette équipée', 'Wi-Fi gratuit', 'Parking', 'Climatisation'],
    website: 'https://example.com',
  },
  {
    name: 'Hôtel Le Charme',
    description: 'Un charmant hôtel de caractère dans un cadre historique.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3',
    price: 'À partir de 100€/nuit',
    features: ['Wi-Fi gratuit', 'Bar', 'Jardin', 'Réception 24/7'],
    website: 'https://example.com',
  },
]

export default function Hebergement() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
            Hébergement
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Où se loger pour notre mariage
          </p>
        </div>

        {/* Information importante */}
        <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Information importante</h3>
                <div className="mt-2 text-sm text-gray-500">
                  <p>
                    Nous avons négocié des tarifs préférentiels avec ces établissements.
                    N'oubliez pas de mentionner "Mariage Maxime & Cousin" lors de votre réservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des hôtels */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
            >
              <div className="flex-shrink-0 relative h-48">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{hotel.description}</p>
                  <p className="mt-3 text-lg font-medium text-primary">{hotel.price}</p>
                  <ul className="mt-4 space-y-2">
                    {hotel.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-accent transition-colors"
                  >
                    Réserver
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/rsvp"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-accent transition-colors"
          >
            Confirmer votre présence
          </Link>
        </div>
      </div>
    </div>
  )
}