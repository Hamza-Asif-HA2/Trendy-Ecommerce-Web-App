import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from "./components/Pages/Home/Home";
import Men from "./components/Category/Men/Men";
import Women from "./components/Category/Women/Women";
import Kids from "./components/Category/Kids/Kids";
import Layout from "./Layout";
import About from "./components/Pages/About/About";
import Watches from "./components/Category/Watches/Watches";
import Admin from "./components/Pages/Admin/Admin";
import MenWatches from "./components/Category/Watches/MenWatches";
import All from "./components/Category/Watches/All";
import WomenWatches from "./components/Category/Watches/WomenWatch";
import KidsWatches from "./components/Category/Watches/KidsWatch";
import MenProduct from "./components/Category/Men/MenProduct";
import MenTshirts from "./components/Category/Men/MenTshirts";
import MenShirt from "./components/Category/Men/MenShirt";
import MenTrouser from "./components/Category/Men/MenTrouser";
import WomenProducts from "./components/Category/Women/WomenProducts";
import WomenTshirts from "./components/Category/Women/WomenTshirts";
import WomenShirts from "./components/Category/Women/WomenShirts";
import WomenTrousers from "./components/Category/Women/WomenTrousers";
import KidsProducts from "./components/Category/Kids/KidsProducts";
import KidsTshirts from "./components/Category/Kids/KidsTshirts";
import KidsShirts from "./components/Category/Kids/KidsShirts";
import KidsTrousers from "./components/Category/Kids/KidsTrousers";
import Cart from "./components/Cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="admin" element={<Admin />} />
      <Route path="men" element={<Men />}>
        <Route path='products' element={<MenProduct />} />
        <Route path='tshirts' element={<MenTshirts />} />
        <Route path='shirts' element={<MenShirt />} />
        <Route path='trousers' element={<MenTrouser />} />
        <Route path='watches' element={<MenWatches />} />
      </Route>
      <Route path="women" element={<Women />}>
      <Route path='products' element={<WomenProducts />} />
        <Route path='tshirts' element={<WomenTshirts />} />
        <Route path='shirts' element={<WomenShirts />} />
        <Route path='trousers' element={<WomenTrousers />} />
        <Route path='watches' element={<WomenWatches />} />
      </Route>
      <Route path="kids" element={<Kids />} >
      <Route path='products' element={<KidsProducts />} />
        <Route path='tshirts' element={<KidsTshirts />} />
        <Route path='shirts' element={<KidsShirts />} />
        <Route path='trousers' element={<KidsTrousers />} />
        <Route path='watches' element={<KidsWatches />} />
    
      </Route>
      
      <Route path="watches" element={<Watches />}>
        <Route path="all" element={<All />} />
        <Route path="menwatch" element={<MenWatches />} />
        <Route path="womenwatch" element={<WomenWatches />} />
        <Route path="kidswatch" element={<KidsWatches />} />
      </Route>
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
