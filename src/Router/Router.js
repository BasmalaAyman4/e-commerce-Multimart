import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './../Pages/Home'
import Shop from './../Pages/Shop'
import ProductDetails from "./../Pages/Product"
export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="shop-details/:id" element={<ProductDetails />} />
        </Routes>
    )
}
