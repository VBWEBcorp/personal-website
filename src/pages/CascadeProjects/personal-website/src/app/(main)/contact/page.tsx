import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - VBWEB',
  description: 'Contactez-nous pour discuter de votre projet web. Création de sites, SEO, développement sur mesure.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto section-padding">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Contactez-nous
        </h1>
        <p className="text-xl text-center mb-12 text-gray-300">
          Discutons de votre projet et trouvons la meilleure solution pour votre entreprise
        </p>

        <form className="space-y-6 bg-white/10 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block mb-2">
              Entreprise (optionnel)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="service" className="block mb-2">
              Service souhaité
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
              required
            >
              <option value="">Sélectionnez un service</option>
              <option value="website">Création de site web</option>
              <option value="seo">Référencement SEO</option>
              <option value="development">Développement sur mesure</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-accent focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-3 text-lg font-medium"
          >
            Envoyer le message
          </button>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white/10">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">contact@vbweb.fr</p>
          </div>
          <div className="p-6 rounded-xl bg-white/10">
            <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
            <p className="text-gray-300">+33 6 XX XX XX XX</p>
          </div>
          <div className="p-6 rounded-xl bg-white/10">
            <h3 className="text-xl font-semibold mb-2">Localisation</h3>
            <p className="text-gray-300">Paris, France</p>
          </div>
        </div>
      </div>
    </div>
  )
}
