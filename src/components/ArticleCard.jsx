import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleCard({ title, description, url }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <Link
        to={url}
        className="text-green-700 hover:text-green-900 font-semibold"
      >
        Leer más
      </Link>
    </div>
  )
}
