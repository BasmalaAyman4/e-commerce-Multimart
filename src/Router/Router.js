import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './../Pages/Home'
import Shop from './../Pages/Shop'
import ProductDetails from "./../Pages/Product"
import Cart from "./../Pages/Cart"
import Checkout from '../Component/Checkout/Checkout';
import Login from '../Component/Login/Login';
import Signup from '../Component/Signup/Signup';
export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="shop-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}
