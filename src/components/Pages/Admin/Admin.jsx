import React, { useState } from "react";
import { db, storage } from "../../Firebase/firebase"; // Import Firebase config
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Admin = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productSizes, setProductSizes] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [subProductCategory, setsubProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file) => {
    const storageRef = ref(storage, `products/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(resolve);
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = await handleImageUpload(productImage);

      const productData = {
        title: productTitle,
        price: parseFloat(productPrice),
        description: productDesc,
        sizes: productSizes.split(",").map((size) => size.trim()), // Convert sizes string to an array
        category: productCategory.split(",").map((size) => size.trim()), // Convert Category string to an array
        subcategory: subProductCategory.split(",").map((size) => size.trim()), // Convert Category string to an array
        imageUrl,
      };

      await addDoc(collection(db, "products", productCategory, subProductCategory), productData);

      alert("Product uploaded successfully!");
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-form bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        Upload New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-1">
            Product Title:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Product Price:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Product Description:
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Product Sizes (comma-separated):
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={productSizes}
            onChange={(e) => setProductSizes(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Product Category:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>

          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Product Sub-Category:
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={subProductCategory}
            onChange={(e) => setsubProductCategory(e.target.value)}
            required
          >
            <option value="">Select Sub Category</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Shirts">Shirts</option>
            <option value="Trousers">Trousers</option>
            <option value="Watches">Watches</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">
            Product Image:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="file"
            onChange={(e) => setProductImage(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Product"}
        </button>
      </form>
    </div>
  );
};

export default Admin;
