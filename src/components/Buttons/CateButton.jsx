import React from 'react'
import { Link } from 'react-router-dom'
function CateButton({btnText, toPage}) {
  return (
    <Link
    to={"/"+toPage}>
    <button className=' w-20 p-3 border border-solid rounded-full hover:bg-black hover:text-white transition-all ease-in-out duration-300'>
      {btnText}
    </button>
    </Link>
  )
}

export default CateButton