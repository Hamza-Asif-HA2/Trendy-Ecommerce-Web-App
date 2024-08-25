import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase"; // Firebase config
import { doc, updateDoc } from "firebase/firestore";

const UpdateProductModal = ({ product, isOpen, onClose }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newSizes, setNewSizes] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    if (product) {
      setNewTitle(product.title);
      setNewDesc(product.description);
      setNewSizes(product.sizes.join(", "));
      setNewPrice(product.price);
    }
  }, [product]);

  const handleUpdate = async () => {
    try {
      const productRef = doc(
        db,
        "products",
        String(product.category),
        String(product.subcategory),
        String(product.id)
      );

      await updateDoc(productRef, {
        title: newTitle,
        description: newDesc,
        price: parseFloat(newPrice),
        sizes: newSizes.split(",").map(size => size.trim())
      });

      alert("Product updated successfully!");
      onClose(); // Close the modal after updating
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Update Product</h2>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Title:</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description:</label>
            <textarea
              className="w-full p-2 border rounded"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Sizes (comma-separated):</label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              value={newSizes}
              onChange={(e) => setNewSizes(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Price:</label>
            <input
              className="w-full p-2 border rounded"
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-600 text-white rounded"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductModal;
