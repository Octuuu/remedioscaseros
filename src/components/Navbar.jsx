import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-800">
          <NavLink to="/" className="hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
            NaturalTips
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-green-800 font-medium">
          {['/', '/sobre-nosotros', '/contacto', '/privacidad', '/terminos'].map((path, idx) => {
            const labels = ['Inicio', 'Sobre Nosotros', 'Contacto', 'Política de Privacidad', 'Términos y Condiciones']
            return (
              <li key={idx}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 border-green-600 pb-1'
                      : 'hover:text-green-600 transition'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {labels[idx]}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-green-800 transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-green-800 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-green-800 transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-green-800 font-medium">
          {['/', '/sobre-nosotros', '/contacto', '/privacidad', '/terminos'].map((path, idx) => {
            const labels = ['Inicio', 'Sobre Nosotros', 'Contacto', 'Política de Privacidad', 'Términos y Condiciones']
            return (
              <li key={idx}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 border-green-600 pb-1 block'
                      : 'hover:text-green-600 transition block'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {labels[idx]}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
