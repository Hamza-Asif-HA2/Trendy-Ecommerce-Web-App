import React from 'react'
import { Link } from 'react-router-dom'
function CategoryCard({category, description,imageUrl, title }) {
  return (
    <div class=" p-4 rounded-lg transition duration-300 transform hover:scale-95 shadow-lg sm:mx-1 mx-4">
          <Link
          to={"/"+category}>
              <img
                src={imageUrl}
                alt={category}
                class="w-full h-44 sm:h-60 md:h-64 lg:h-90 object-cover mb-4 rounded-lg bg-white"
              />
              <h3 class="text-lg font-semibold mb-2">{title}</h3>
              <p class="text-gray-600">
               {description} 
              </p>
              </Link>
          </div>
  )
}

export default CategoryCard