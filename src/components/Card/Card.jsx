import React, { useState } from "react";
import SizeButton from "../Buttons/SizeButton";
import ProductDetailCard from "./ProductDetailCard";

function Card({
  productTitle,
  productPrice,
  productDesc,
  productSizes = ["S"],
  productImageUrl,
}) {
  const [showDetail, setShowDetail] = useState(false);

  const handleAddToCart = () => {
    setShowDetail(true);
    // Hide the div after 3 seconds (or any preferred duration)
    setTimeout(() => {
      setShowDetail(false);
    }, 10000);
  };

  return (
    <div className="relative bg-gray-100 p-3 rounded-lg shadow-sm sm:mx-1 max-w-64">
      <img
        src={productImageUrl}
        alt={productTitle}
        className="w-60 h-60 object-cover mb-4 rounded-lg"
      />
      <div className="flex justify-between flex-wrap items-start">
        <h3 className="text-sm font-semibold mb-2 sm:text-md">
          {productTitle}
        </h3>
        <h4 className="text-xs sm:text-lg text-gray-400">$ {Number(productPrice)}</h4>
      </div>
      <p className="text-gray-600 text-sm sm:text-md text-ellipsis">
        {productDesc}
      </p>

      <div className="hidden sm:flex size-div mt-2 flex-wrap">
        {productSizes.map((size, index) => (
          <SizeButton key={index} size={size} />
        ))}
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full mt-2 bg-white p-2 rounded-xl text-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 transition transform ease-in-out duration-200"
      >
        Add to Cart
      </button>

      {showDetail && (
        <ProductDetailCard
          productTitle={productTitle}
          productPrice={productPrice}
          productImageUrl={productImageUrl}
          productSizes={productSizes}
          onClose={() => setShowDetail(false)}
        />
      )}
    </div>
  );
}

export default Card;
