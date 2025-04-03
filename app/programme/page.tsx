import Link from 'next/link'

const events = [
  {
    time: '14h30',
    title: 'Cérémonie civile',
    description: 'Mairie de la ville',
  },
  {
    time: '15h30',
    title: 'Cérémonie religieuse',
    description: 'Église de la ville',
  },
  {
    time: '17h00',
    title: 'Cocktail',
    description: 'Vin d\'honneur et animations',
  },
  {
    time: '20h00',
    title: 'Dîner',
    description: 'Repas et animations',
  },
  {
    time: '23h00',
    title: 'Soirée dansante',
    description: 'Ouverture du bal par les mariés',
  },
]

export default function Programme() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
            Programme
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Le déroulé de notre journée de mariage
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {events.map((event, eventIdx) => (
                <li key={event.time}>
                  <div className="relative pb-8">
                    {eventIdx !== events.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-white">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-lg font-medium text-gray-900">{event.title}</p>
                          <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-primary font-medium">
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/lieu"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-accent transition-colors"
          >
            Voir le lieu du mariage
          </Link>
        </div>
      </div>
    </div>
  )
}