import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - NaturalTips</title>
        <meta name="description" content="Conoce más sobre NaturalTips, nuestra misión, visión y el equipo que trabaja para brindarte consejos y remedios naturales confiables." />
        <meta name="keywords" content="sobre nosotros, equipo NaturalTips, misión, visión" />
        <meta name="author" content="NaturalTips" />

        {/* Open Graph */}
        <meta property="og:title" content="Sobre Nosotros - NaturalTips" />
        <meta property="og:description" content="Conoce más sobre NaturalTips, nuestra misión y el equipo detrás de este proyecto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/sobre-nosotros" />
        <meta property="og:image" content="https://tusitio.com/about-og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nosotros - NaturalTips" />
        <meta name="twitter:description" content="Conoce más sobre NaturalTips, nuestra misión y el equipo detrás de este proyecto." />
        <meta name="twitter:image" content="https://tusitio.com/about-twitter-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12 text-green-900 space-y-6">
        <h1 className="text-3xl font-bold mb-4 mt-20">Sobre Nosotros</h1>
        <p>
          Somos un equipo apasionado por la salud natural, el bienestar integral y los remedios caseros. Creemos firmemente en el poder de la naturaleza para sanar, prevenir y mejorar nuestra calidad de vida.
        </p>
        <p>
          Nuestro objetivo es brindarte información confiable, práctica y actualizada sobre cómo cuidar tu cuerpo y tu mente con métodos naturales, sin necesidad de recurrir siempre a fármacos o productos químicos.
        </p>
        <p>
          Cada artículo que compartimos está pensado para ayudarte a tomar decisiones más conscientes sobre tu salud, con consejos sencillos, remedios accesibles y recomendaciones basadas en tradiciones ancestrales y conocimientos actuales.
        </p>
        <p>
          Queremos que este espacio sea un refugio donde encuentres inspiración para vivir mejor, de forma más natural, conectando con tu bienestar físico, mental y emocional.
        </p>
        <p>
          Gracias por ser parte de esta comunidad. Juntos, podemos volver a lo esencial y redescubrir los beneficios que la naturaleza tiene para ofrecernos.
        </p>
      </main>
      <Footer />
    </>
  )
}
