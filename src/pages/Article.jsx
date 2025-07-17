import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import articles from '../data/data.js'

export default function Article() {
  const { id } = useParams()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-12 text-center text-red-600">
          <h1 className="text-2xl font-bold mb-4 mt-20">Artículo no encontrado</h1>
          <p>Lo sentimos, el artículo que buscas no existe.</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12 text-green-900">
        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
        <p className="whitespace-pre-line leading-relaxed">{article.content}</p>
      </main>
      <Footer />
    </>
  )
}
