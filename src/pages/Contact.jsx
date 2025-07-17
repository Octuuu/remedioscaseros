import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `Mensaje de ${name}`
    const body = `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`

    // Abrir el cliente de correo con mailto:
    window.location.href = `mailto:nosi98758@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    // Opcional: limpiar campos
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <Helmet>
        <title>Contacto - NaturalTips</title>
        <meta name="description" content="¿Tienes preguntas o sugerencias? Contacta con NaturalTips mediante nuestro formulario o por correo electrónico." />
        <meta name="keywords" content="contacto, mensaje, formulario, NaturalTips" />
        <meta name="author" content="NaturalTips" />

        {/* Open Graph */}
        <meta property="og:title" content="Contacto - NaturalTips" />
        <meta property="og:description" content="¿Tienes preguntas o sugerencias? Contacta con NaturalTips mediante nuestro formulario." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/contacto" />
        <meta property="og:image" content="https://tusitio.com/contact-og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto - NaturalTips" />
        <meta name="twitter:description" content="¿Tienes preguntas o sugerencias? Contacta con NaturalTips mediante nuestro formulario." />
        <meta name="twitter:image" content="https://tusitio.com/contact-twitter-image.jpg" />
      </Helmet>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12 text-green-900">
        <h1 className="text-3xl font-bold mb-6 mt-20">Contacto</h1>
        <p className="mb-6">¿Tienes preguntas, sugerencias o comentarios? Escríbenos usando el siguiente formulario.</p>

        {submitted ? (
          <p className="text-green-700 font-semibold">¡Gracias por tu mensaje! Te responderemos pronto.</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <textarea
              placeholder="Escribe tu mensaje..."
              required
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <button
              type="submit"
              className="bg-green-700 text-white rounded-lg py-2 px-6 hover:bg-green-800 transition"
            >
              Enviar
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  )
}
