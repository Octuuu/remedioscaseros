import React from 'react'

export default function ArticleCard({ title, description, url }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition cursor-pointer">
      <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
      <p className="text-green-700 mb-4">{description}</p>
      <a 
        href={url} 
        className="text-green-600 hover:text-green-800 font-semibold" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Leer más →
      </a>
    </div>
  )
}
