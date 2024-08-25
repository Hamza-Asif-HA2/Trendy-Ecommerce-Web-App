import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{}}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (category=['Men', 'Women', 'Kids'], subCategory = ['T-Shirts', 'Shirts', 'Trousers', 'Watches']) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let allProducts = [];
        let allOrders = [];
        // Loop through each category and sub-category passed as props
        for (let Eachcategory of category) {
          for (let EachsubCategory of subCategory) {
            const productsRef = collection(db, `products/${Eachcategory}/${EachsubCategory}`);
            const productsSnapshot = await getDocs(productsRef);
            const productsList = productsSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            allProducts = [...allProducts, ...productsList];
          }
        }
        const ordersRef = collection(db, `orders`);
        const ordersSnapshot = await getDocs(ordersRef);
        const ordersList = ordersSnapshot.docs.map(doc => ({
          Oid: doc.id,
          ...doc.data(),
        }));
        allOrders = [...allOrders, ...ordersList];

        setOrders(allOrders);
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, subCategory]);

  return { products,orders, loading };
};
