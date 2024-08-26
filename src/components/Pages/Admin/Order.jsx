import React, { useState } from "react";
import { useProducts } from "../../Firebase/Fetch";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

function Order() {
  const { orders, loading } = useProducts();
  let [totalRevenue, setTotalRevenue] = useState(0);
  orders.forEach(element => {
    totalRevenue += element.totalPrice;
    setTotalRevenue(totalRevenue);
  });
  const handleStatusUpdate = async (orderId, currentStatus) => {
    const newStatus = window.prompt("Enter new status (Delivered or Pending):", currentStatus);
    if (newStatus === "Delivered"  || newStatus === "pending") {
      try {
        const orderRef = doc(db, "orders", orderId);
        await updateDoc(orderRef, { status: newStatus });
        alert("Order status updated successfully!");
      } catch (error) {
        console.error("Error updating order status:", error);
        alert("Failed to update order status.");
      }
    } else {
      alert("Invalid status entered.");
    }
  };

  return (
    <>
      <section className="Products flex items-center justify-center flex-col m-2 border p-2 rounded-xl bg-gray-400">
        <div className="section-title text-xl md:text-3xl font-bold text-center text-white">
          All Orders
        </div>
        <span className="order-count text-white font-bold text-sm m-2 p-2 bg-orange-600 rounded-lg">
          Order Count: {orders.length}
        </span>
        <span className="order-count text-white font-bold text-sm m-2 p-2 bg-orange-600 rounded-lg">
          Total Revenue: ${totalRevenue}
        </span>
        {loading ? (
          <div className="flex items-center justify-center my-6">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-2 my-3 ">
            {orders.map((order, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 shadow-md rounded-md md:text-sm lg"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <h2 className="text-md font-semibold md:text-sm">
                        Order ID: {order.id}
                      </h2>
                      <p className="text-gray-500 text-md md:text-xs">
                        Customer Name: {order.customerName}
                      </p>
                      <p className="text-gray-500 md:text-xs">
                        Address: {order.address}
                      </p>
                      <p className="text-gray-500 md:text-xs">
                        Contact: {order.phoneNumber}
                      </p>
                      <p className="text-gray-500 md:text-xs">
                        {order.products.map((product, index) => (
                        
                          <div key={index} className="mb-2">
                            <p className="text-gray-500 md:text-xs">
                              <strong>Product Name:</strong> {product.name}
                            </p>
                            <p className="text-gray-500 md:text-xs">
                              <strong>Product Price:</strong> {product.price}
                            </p>
                            <p className="text-gray-500 md:text-xs">
                              <strong>Quantity:</strong> {product.quantity}
                            </p>
                            <p className="text-gray-500 md:text-xs">
                              <strong>Size:</strong> {product.size}
                            </p>
                           
                          </div>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="grid">
                    <button
                      onClick={() => handleStatusUpdate(order.Oid, order.status)}
                      className={`uppercase text-white p-2 rounded-lg my-2 font-bold h-16 w-24 ${order.status === 'Delivered' ? 'bg-green-600' : 'bg-orange-600'}`}
                    >
                      Status: {order.status}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Order;
