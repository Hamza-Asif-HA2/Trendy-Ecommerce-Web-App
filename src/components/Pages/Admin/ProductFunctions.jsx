import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useProducts } from "../../Firebase/Fetch";
import UpdateProductModal from "./UpdateProduct";
import AddProduct from "./AddProduct"; // Import the AddProduct component
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

function ProductFunctions() {
  const { products, loading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openUpdateModal = (product) => {
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setSelectedProduct(null);
    setIsUpdateModalOpen(false);
  };

  const openAddModal = () => setIsAddModalOpen(true);

  const closeAddModal = () => setIsAddModalOpen(false);

  // Function to handle product deletion
  const handleDelete = async (product) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        // Reference to the specific document in Firestore
        const productRef = doc(
          db,
          "products",
          String(product.category),
          String(product.subcategory),
          String(product.id),
        );
        // Delete the document
        await deleteDoc(productRef);
        alert("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product.");
      }
    }
  };

  return (
    <>
      <div className="m-8 row flex space-x-4 justify-center">
        <button
          onClick={openAddModal}
          className="p-4 border border-solid rounded-lg text-2xl m-2 font-bold bg-orange-600 text-white"
        >
          Add Product
        </button>
      </div>
      <section className="Products flex items-center justify-center flex-col m-2 border p-2 rounded-xl bg-gray-400">
        <div className="section-title text-2xl md:text-3xl font-bold text-center text-white">
          All Products
        </div>
        <span className="product-count text-white font-bold text-lg m-2 p-2 bg-orange-600 rounded-lg">
          Product Count: {products.length}
        </span>
        {loading ? (
          <div className="flex items-center justify-center my-6">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-2 my-3 overflow-auto">
            {products.map((product, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 shadow-md rounded-md md:text-sm lg"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-16 h-16 m-4">
                      <img
                        src={product.imageUrl}
                        alt=""
                        className="rounded-md object-cover object-center w-full h-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold md:text-sm">
                        {product.title}
                      </h2>
                      <p className="text-gray-500 md:text-xs">
                        Description: {product.description}
                      </p>
                      <p className="text-gray-500 md:text-xs">
                        Size: {product.sizes.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="grid">
                    <button
                      onClick={() => openUpdateModal(product)}
                      className="bg-orange-600 text-white p-2 rounded-lg my-2 font-bold h-10 w-16"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product)}
                      className="bg-orange-600 text-white p-2 rounded-lg my-2 font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </div>
        )}
      </section>

      <UpdateProductModal
        isOpen={isUpdateModalOpen}
        product={selectedProduct}
        onClose={closeUpdateModal}
      />

      <AddProduct
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
      />

      <Outlet />
    </>
  );
}

export default ProductFunctions;
