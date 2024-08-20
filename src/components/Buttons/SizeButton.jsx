import React from 'react'

function SizeButton({size}) {
  return (
    <button class="bg-white hover:bg-black transition-opacity hover:text-white rounded-full px-2 py-1 mr-1 mb-1 text-xs">
                {size}
              </button>
  )
}

export default SizeButton