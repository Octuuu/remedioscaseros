import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - NaturalTips</title>
        <meta name="description" content="Consulta los términos y condiciones que rigen el uso de NaturalTips y sus servicios." />
        <meta name="keywords" content="términos y condiciones, uso, NaturalTips" />
        <meta name="author" content="NaturalTips" />

        {/* Open Graph */}
        <meta property="og:title" content="Términos y Condiciones - NaturalTips" />
        <meta property="og:description" content="Consulta los términos y condiciones que rigen el uso de NaturalTips." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/terminos" />
        <meta property="og:image" content="https://tusitio.com/terms-og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Términos y Condiciones - NaturalTips" />
        <meta name="twitter:description" content="Consulta los términos y condiciones que rigen el uso de NaturalTips." />
        <meta name="twitter:image" content="https://tusitio.com/terms-twitter-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12 text-green-900">
        <h1 className="text-3xl font-bold mb-6 mt-20">Términos y Condiciones</h1>
        <p className="mb-4">
          Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo, por favor no utilices este sitio.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contenido</h2>
        <p className="mb-4">Todo el contenido publicado en este sitio es informativo y no reemplaza la consulta con un profesional médico.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Propiedad intelectual</h2>
        <p className="mb-4">Los textos, imágenes y demás materiales de este sitio están protegidos por derechos de autor. No está permitido copiar ni reproducir el contenido sin autorización.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitación de responsabilidad</h2>
        <p className="mb-4">No nos hacemos responsables por daños derivados del uso del sitio o la interpretación del contenido.</p>

        <p className="mt-6">Nos reservamos el derecho de actualizar estos términos en cualquier momento.</p>
      </main>
      <Footer />
    </>
  )
}
