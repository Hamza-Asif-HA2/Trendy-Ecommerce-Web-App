import React from 'react'
import { Link } from 'react-router-dom'
function CategoryCard({category, description,imageUrl, title, isActive = false }) {

  return (
    
    <div className={!isActive?  " sm:h-auto p-4  rounded-lg transition duration-300 transform hover:scale-95 shadow-lg sm:mx-1 mx-4 active:bg-orange-700 active:text-white" : " p-4  rounded-lg transition duration-300 transform hover:scale-95 shadow-lg sm:mx-1 mx-4 active:bg-orange-700 text-white active:text-white bg-orange-700"}>
          <Link
        
          to={"/"+category}>
              <img
                src={imageUrl}
                alt={category}
                className="w-full h-44 sm:h-36 md:h-64 lg:h-90 object-cover mb-4 rounded-lg bg-white"
              />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className={!isActive? "text-gray-600 ": "text-white"}>
               {description} 
              </p>
              </Link>
          </div>
  )
}

export default CategoryCard