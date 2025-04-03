export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Maxime & Cousin. Tous droits réservés.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Créé avec ❤️ pour notre mariage
          </p>
        </div>
      </div>
    </footer>
  )
}