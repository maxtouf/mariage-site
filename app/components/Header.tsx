import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center font-serif text-primary hover:text-accent transition-colors">
              M & C
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/programme" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary hover:text-accent transition-colors">
              Programme
            </Link>
            <Link href="/lieu" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary hover:text-accent transition-colors">
              Lieu
            </Link>
            <Link href="/hebergement" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary hover:text-accent transition-colors">
              Hébergement
            </Link>
            <Link href="/rsvp" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-accent transition-colors">
              RSVP
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}