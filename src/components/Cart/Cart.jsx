import  { useState } from 'react';
import { useCart } from './CartContext';
import { db } from '../Firebase/firebase'; 
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'; // Import Firestore functions


const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const orderId = new Date().getTime().toString(); // Generate a unique order ID based on timestamp
    const totalPrice = cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
    



      try {  
        const productData = { 
          id: orderId,
          products: cartItems, totalPrice,
          customerName: formData.name,
          address: formData.address,
          phoneNumber: formData.phone,
          additionalInfo: formData.additionalInfo,
          createdAt: serverTimestamp(), // Timestamp
          status: "pending",
          }
  
        await addDoc(collection(db, "orders"), productData);
  
        alert('Order submitted successfully!');
        setShowForm(false);
        // Optionally, clear the cart or redirect the user
      } catch (error) {
        console.error('Error submitting order:', error);
        alert('Failed to submit order. Please try again.');
      }
    };

   

      

  return (
    <div className="relative container max-w-7xl mx-auto p-6">
      <h1 className="text-center sm:text-left text-3xl font-bold mb-4">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-white p-4 shadow-md rounded-md"
                  >
                    <div className="flex">
                      <div className="w-16 h-16 m-4">
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="rounded-md object-cover object-center w-full h-full"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-gray-500">Quantity: {item.quantity}</p>
                        <p className="text-gray-500">Size: {item.size}</p>
                        <p className="text-gray-700 font-bold">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Summary */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <p className="text-gray-700">Items: {cartItems.length}</p>
              <p className="text-gray-700 font-bold">
                Total: $
                {cartItems
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Modal/Form Overlay */}
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
                <div className=' flex justify-between'>

                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <button onClick={() => setShowForm(false)}>
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
                  </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1  p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1  p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
