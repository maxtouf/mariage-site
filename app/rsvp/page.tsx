'use client'

import { useState, FormEvent } from 'react'

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '0',
    dietary: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
    console.log('Form submitted:', formData)
    alert('Merci pour votre réponse !')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-serif">
              RSVP
            </h1>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Merci de confirmer votre présence avant le 15 mai 2024
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom et prénom
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Présence */}
            <div>
              <label htmlFor="attending" className="block text-sm font-medium text-gray-700">
                Serez-vous présent ?
              </label>
              <div className="mt-1">
                <select
                  name="attending"
                  id="attending"
                  required
                  value={formData.attending}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="yes">Oui, je serai présent</option>
                  <option value="no">Non, je ne pourrai pas être présent</option>
                </select>
              </div>
            </div>

            {/* Nombre d'invités (visible uniquement si présent) */}
            {formData.attending === 'yes' && (
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                  Nombre d'accompagnants
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="guests"
                    id="guests"
                    min="0"
                    value={formData.guests}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}

            {/* Restrictions alimentaires (visible uniquement si présent) */}
            {formData.attending === 'yes' && (
              <div>
                <label htmlFor="dietary" className="block text-sm font-medium text-gray-700">
                  Restrictions alimentaires
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="dietary"
                    id="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    placeholder="Végétarien, allergies, etc."
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message (optionnel)
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-accent transition-colors"
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