import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from 'react-router-dom'
import { ProductsProvider } from "./components/Firebase/Fetch";

function Layout(){
    return (
        <ProductsProvider>
        <Header />
        <Outlet />
        <Footer />
        </ProductsProvider>
    )
}

export default Layout