import React from 'react'
import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import Home from './../Pages/Home'
import Shop from './../Pages/Shop'
export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />

        </Routes>
    )
}
