import Link from 'next/link'
import Image from 'next/image'

export default function Lieu() {
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
          Le Lieu
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Cérémonie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-playfair text-3xl mb-4 text-gray-800">
                La Cérémonie
              </h2>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/eglise.jpg"
                  alt="Église Saint-Pierre"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Église Saint-Pierre</p>
                <p>1 Place de l'Église</p>
                <p>75000 Paris</p>
              </div>
              <a
                href="https://goo.gl/maps/xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-[#d4a373] text-white rounded-lg hover:bg-[#b08d62] transition-colors"
              >
                Voir sur Google Maps
              </a>
            </div>

            {/* Réception */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-playfair text-3xl mb-4 text-gray-800">
                La Réception
              </h2>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/chateau.jpg"
                  alt="Château des Roses"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Château des Roses</p>
                <p>123 Avenue des Fleurs</p>
                <p>75000 Paris</p>
              </div>
              <a
                href="https://goo.gl/maps/abc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-[#d4a373] text-white rounded-lg hover:bg-[#b08d62] transition-colors"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="font-playfair text-3xl mb-4 text-gray-800">
              Comment venir ?
            </h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">En voiture</h3>
                <p>Parking gratuit disponible sur place</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">En transport en commun</h3>
                <p>Métro : Ligne 1, station Saint-Paul</p>
                <p>Bus : Lignes 69, 76, 96, arrêt Saint-Paul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}