import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-green-900">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} NaturalTips. Todos los derechos reservados.</p>
        <ul className="flex space-x-6 text-green-700 font-medium">
          <li>
            <Link to="/sobre-nosotros" className="hover:text-green-900 transition">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-green-900 transition">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/privacidad" className="hover:text-green-900 transition">
              Política de Privacidad
            </Link>
          </li>
          <li>
            <Link to="/terminos" className="hover:text-green-900 transition">
              Términos y Condiciones
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
