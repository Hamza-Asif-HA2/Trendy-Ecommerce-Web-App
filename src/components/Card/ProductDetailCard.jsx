import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
function ProductDetailCard({
  productTitle,
  productPrice,
  productImageUrl,
  productSizes = ["S", "L"],
  onClose,
}) {
  const { addToCart } = useCart(); // Access addToCart from context
  const [selectedSize, setSelectedSize] = useState(""); // Manage selected size
  const [quantity, setQuantity] = useState(1); // Manage quantity

  const handleAddToCart = () => {
    if (selectedSize === '')
      {
        alert('Please Select a Size');
        return;
      }
    const item = {
      name: productTitle,
      price: productPrice,
      size: selectedSize,
      quantity,
      imageUrl: productImageUrl,
    };

 
    addToCart(item); // Add item to cart using context
    onClose(); // Optionally close the modal after adding to cart
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg max-w-4xl flex">
        <div className="w-1/2">
          <div className="relative">
            <img
              src={productImageUrl}
              alt={productTitle}
              className="w-full max-h-80 rounded-lg"
            />
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-2xl font-semibold mb-4 flex justify-between items-center">
            {productTitle}
            <button onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-gray-800 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </h2>
          <div className="text-gray-800 font-semibold">
            <div>
              <span className="text-orange-600">${productPrice}</span>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-gray-700">Select Size:</label>
            <div className="flex mt-2">
              {productSizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`${
                    selectedSize === size ? "bg-black text-white" : "bg-white"
                  } hover:bg-black transition-opacity hover:text-white rounded-full px-2 py-1 mr-1 mb-1 text-xs`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label className="text-gray-700">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-20 border rounded-md py-1 px-2 mt-2"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white py-2 px-4 rounded-lg mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
