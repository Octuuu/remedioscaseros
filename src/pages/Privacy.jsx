import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - NaturalTips</title>
        <meta name="description" content="Lee nuestra política de privacidad y cómo protegemos tus datos personales en NaturalTips." />
        <meta name="keywords" content="política de privacidad, datos personales, NaturalTips" />
        <meta name="author" content="NaturalTips" />

        {/* Open Graph */}
        <meta property="og:title" content="Política de Privacidad - NaturalTips" />
        <meta property="og:description" content="Lee nuestra política de privacidad y cómo protegemos tus datos personales." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/privacidad" />
        <meta property="og:image" content="https://tusitio.com/privacy-og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidad - NaturalTips" />
        <meta name="twitter:description" content="Lee nuestra política de privacidad y cómo protegemos tus datos personales." />
        <meta name="twitter:image" content="https://tusitio.com/privacy-twitter-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12 text-green-900">
        <h1 className="text-3xl font-bold mb-6 mt-20">Política de Privacidad</h1>
        <p className="mb-4">
          En este sitio nos tomamos muy en serio la privacidad de nuestros usuarios. A continuación te explicamos cómo recopilamos, usamos y protegemos tu información.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Información que recopilamos</h2>
        <p className="mb-4">Podemos recopilar información como tu nombre, dirección de correo electrónico o cualquier otro dato que nos proporciones voluntariamente a través de formularios o comentarios.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Uso de cookies</h2>
        <p className="mb-4">Este sitio utiliza cookies para mejorar la experiencia del usuario. Puedes desactivar las cookies desde la configuración de tu navegador.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Publicidad</h2>
        <p className="mb-4">Podemos mostrar anuncios proporcionados por Google AdSense u otros servicios. Estos pueden usar cookies para mostrar anuncios relevantes según tus intereses.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Terceros</h2>
        <p className="mb-4">No compartimos tu información personal con terceros, excepto cuando sea necesario para el funcionamiento del sitio o requerido por ley.</p>

        <p className="mt-6">Si tienes dudas sobre esta política, puedes contactarnos en la página de contacto.</p>
      </main>
      <Footer />
    </>
  )
}
