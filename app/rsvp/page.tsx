'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    dietaryRestrictions: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre réponse !')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#faf7f5] py-20">
      <div className="container mx-auto px-4">
        <Link 
          href="/"
          className="inline-block mb-12 text-[#d4a373] hover:text-[#b08d62] transition-colors"
        >
          ← Retour à l'accueil
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-center font-playfair text-5xl mb-8 text-gray-800">
            RSVP
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Merci de nous confirmer votre présence avant le 24 juillet 2024
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nom et Prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a373] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a373] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="attending" className="block text-gray-700 mb-2">
                  Serez-vous présent ?
                </label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a373] focus:border-transparent"
                >
                  <option value="yes">Oui, je serai présent(e)</option>
                  <option value="no">Non, je ne pourrai pas être présent(e)</option>
                </select>
              </div>

              {formData.attending === 'yes' && (
                <>
                  <div>
                    <label htmlFor="guests" className="block text-gray-700 mb-2">
                      Nombre de personnes
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a373] focus:border-transparent"
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'personne' : 'personnes'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-gray-700 mb-2">
                      Restrictions alimentaires
                    </label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      placeholder="Allergies, régime particulier..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a373] focus:border-transparent"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4a373] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#d4a373] text-white rounded-lg hover:bg-[#b08d62] transition-colors"
              >
                Envoyer ma réponse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}