import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Article from './pages/Article.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

export default function App() {
  return (
    <HelmetProvider>
      <meta name="google-site-verification" content="oqma3a__68vc2U9VS23ImqNR4-ujWG2li9gyhnFtBJ4" />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/terminos" element={<Terms />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
