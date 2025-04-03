import Link from 'next/link'

export default function Programme() {
  const timeline = [
    {
      time: '14:00',
      event: 'Cérémonie',
      description: 'Cérémonie à l\'église Saint-Pierre'
    },
    {
      time: '15:30',
      event: 'Vin d\'honneur',
      description: 'Cocktail et photos dans les jardins du château'
    },
    {
      time: '19:00',
      event: 'Dîner',
      description: 'Repas de mariage dans la salle de réception'
    },
    {
      time: '22:00',
      event: 'Soirée dansante',
      description: 'Ouverture du bal par les mariés'
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
          Programme de la Journée
        </h1>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-[#d4a373]" />
              
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#d4a373]" />
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-3">
                  <span className="text-[#d4a373] font-bold text-xl">
                    {item.time}
                  </span>
                  <h3 className="ml-4 font-playfair text-2xl text-gray-800">
                    {item.event}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}