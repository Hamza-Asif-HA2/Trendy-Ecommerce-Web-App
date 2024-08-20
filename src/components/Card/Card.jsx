import React from "react";
import { Link } from "react-router-dom";
import SizeButton from "../Buttons/SizeButton";

function Card({
  productTitle,
  productPrice,
  productDesc,
  productSizes = ["S"],
  productImageUrl,
  toProductDetail = "men",
}) {
  return (
    <div class=" bg-gray-100 p-3 rounded-lg shadow-sm sm:mx-1 max-w-64 ">
      <Link to={"/" + toProductDetail}>
        <img
          src={productImageUrl}
          alt={productTitle}
          class="w-60 h-60 object-cover mb-4 rounded-lg  "
        />
        <div className="flex justify-between flex-wrap items-start ">
          <h3 class="text-sm font-semibold mb-2 sm:text-md">{productTitle}</h3>
          <h4 className=" text-xs sm:text-lg text-gray-400">$ {Number(productPrice)}</h4>
        </div>
        <p class="text-gray-600 text-sm sm:text-md text-ellipsis">{productDesc}</p>

        <div className="hidden sm:flex size-div mt-2  flex-wrap">
          {productSizes.map((size, index) => (
            <SizeButton key={index} size={size} />
          ))}
        </div>
      
        <button className="w-full mt-2 bg-white p-2 rounded-xl text-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 transition transform ease-in-out duration-200">
          Add to Cart
        </button>
      </Link>
    </div>
  );
}

export default Card;
