import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import articles from '../data/data.js'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
    <Helmet>
        <title>NaturalTips - Remedios Caseros y Consejos Naturales</title>
        <meta name="description" content="Descubre remedios caseros naturales y consejos para una vida saludable. Información confiable y actualizada." />
        <meta name="keywords" content="remedios caseros, salud natural, consejos de salud, medicina natural" />
        <meta name="author" content="NaturalTips" />

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="NaturalTips - Remedios Caseros y Consejos Naturales" />
        <meta property="og:description" content="Descubre remedios caseros naturales y consejos para una vida saludable. Información confiable y actualizada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/" />
        <meta property="og:image" content="https://tusitio.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NaturalTips - Remedios Caseros y Consejos Naturales" />
        <meta name="twitter:description" content="Descubre remedios caseros naturales y consejos para una vida saludable." />
        <meta name="twitter:image" content="https://tusitio.com/twitter-image.jpg" />
      </Helmet>

      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center mt-20">
          🌿 Salud Natural y Bienestar
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map(article => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              url={`/article/${article.id}`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
