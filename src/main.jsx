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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="admin" element={<Admin />} />
      <Route path="men" element={<Men />}>
        {/* <Route path='tshirts' element={<Tshirts />} /> */}
        {/* <Route path='shirts' element={<Shirts />} /> */}
        {/* <Route path='trousers' element={<Trousers />} /> */}
        {/* <Route path='watches' element={<Watches />} /> */}
      </Route>
      <Route path="women" element={<Women />}>
        {/* <Route path='tshirts' element={<Tshirts />} /> */}
        {/* <Route path='shirts' element={<Shirts />} /> */}
        {/* <Route path='trousers' element={<Trousers />} /> */}
        {/* <Route path='watches' element={<Watches />} /> */}
      </Route>
      <Route path="kids" element={<Kids />} />
      <Route path="watches" element={<Watches />}>
      
        <Route path="all" element={<All />} />
        <Route path="menwatch" element={<MenWatches />} />
        <Route path="womenwatch" element={<WomenWatches />} />
        <Route path="kidswatch" element={<KidsWatches />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
