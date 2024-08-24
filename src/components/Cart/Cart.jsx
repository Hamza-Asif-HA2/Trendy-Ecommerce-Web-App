import React from "react";
import { useCart } from "./CartContext"; // Import the useCart hook

export default function Cart() {
  const { cartItems, removeFromCart, checkout } = useCart(); // Use the context

  return (
    <div className="max-w-4xl mx-auto p-4 flex justify-center items-center flex-col">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg-5xl font-bold mb-6">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 rounded-lg pb-4"
              >
                <div className="w-24 h-24 m-4">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="rounded-md object-cover object-center w-full h-full"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Size: {item.size}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="ml-20 text-red-600 bg-orange-600 text-white p-2 rounded-full hover:scale-105 transition duration-200 ease-in-out"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={checkout}
            className="bg-orange-700 text-white py-2 px-4 rounded-lg mt-6 hover:scale-105 transition duration-200 ease-in-out"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
