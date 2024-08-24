import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from 'react-router-dom'
import { ProductsProvider } from "./components/Firebase/Fetch";
import { CartProvider } from "./components/Cart/CartContext";
function Layout(){
    return (
        <CartProvider>
        <ProductsProvider>
        <Header />
        <Outlet />
        <Footer />
        </ProductsProvider>
        </CartProvider>
    )
}

export default Layout