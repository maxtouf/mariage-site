import Link from 'next/link'
import Image from 'next/image'

export default function Hebergement() {
  const hotels = [
    {
      name: 'Hôtel du Château',
      description: 'À 5 minutes à pied du lieu de réception',
      image: '/images/hotel1.jpg',
      price: 'À partir de 120€/nuit',
      features: ['Wi-Fi gratuit', 'Petit-déjeuner inclus', 'Parking'],
      website: 'https://hotel-chateau.com'
    },
    {
      name: 'Le Grand Hôtel',
      description: 'En plein centre-ville, à 10 minutes en voiture',
      image: '/images/hotel2.jpg',
      price: 'À partir de 150€/nuit',
      features: ['Restaurant gastronomique', 'Spa', 'Service voiturier'],
      website: 'https://legrandhotel.com'
    },
    {
      name: 'Résidence Les Jardins',
      description: 'Appartements pour 2 à 4 personnes',
      image: '/images/hotel3.jpg',
      price: 'À partir de 90€/nuit',
      features: ['Cuisine équipée', 'Terrasse privée', 'Parking gratuit'],
      website: 'https://residence-jardins.com'
    }
  ]

  return (
    <div className="min-h-screen bg-[#faf7f5] py-20">
      <div className="container mx-auto px-4">
        <Link 
          href="/"
          className="inline-block mb-12 text-[#d4a373] hover:text-[#b08d62] transition-colors"
        >
          ← Retour à l'accueil
        </Link>

        <h1 className="text-center font-playfair text-5xl mb-16 text-gray-800">
          Hébergement
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-playfair text-2xl mb-2 text-gray-800">
                    {hotel.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {hotel.description}
                  </p>
                  <p className="text-[#d4a373] font-semibold mb-4">
                    {hotel.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {hotel.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-[#d4a373]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-6 py-2 bg-[#d4a373] text-white rounded-lg hover:bg-[#b08d62] transition-colors"
                  >
                    Réserver
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h2 className="font-playfair text-3xl mb-6 text-gray-800">
              Informations importantes
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Nous avons négocié des tarifs préférentiels pour nos invités dans ces établissements.
                N'oubliez pas de mentionner le code "MARIAGE2024" lors de votre réservation.
              </p>
              <p>
                Pour toute question concernant l'hébergement, n'hésitez pas à nous contacter
                directement ou à contacter notre wedding planner au 06 12 34 56 78.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}