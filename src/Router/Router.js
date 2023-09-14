import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './../Pages/Home'
import Shop from './../Pages/Shop'
import ProductDetails from "./../Pages/Product"
import Cart from "./../Pages/Cart"
import Checkout from '../Component/Checkout/Checkout';
import Login from '../Component/Login/Login';
import Signup from '../Component/Signup/Signup';
import ProtectedRoute from './protectedRoute';
import Admin from '../Dashboard/Dash/Admin';
import AllProduct from '../Dashboard/AllProduct/AllProduct';
import AddProduct from '../Dashboard/AddProduct/AddProduct';
import LoginDash from '../Component/LoginDashboard/LoginDash';
import Users from '../Dashboard/Users/Users';
export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="shop-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<ProtectedRoute>
                <Checkout />
            </ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute>
                <Admin />
            </ProtectedRoute>} />
            <Route path="dashboard/all-product" element={<ProtectedRoute>
                <AllProduct />
            </ProtectedRoute>} />
            <Route path="dashboard/add-product" element={<ProtectedRoute>
                <AddProduct />
            </ProtectedRoute>} />
            <Route path="dashboard/users" element={<ProtectedRoute>
                <Users />
            </ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login-dashboard" element={<LoginDash />} />
        </Routes>
    )
}
