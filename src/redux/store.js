import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./slices/cartSlice"
const Store = configureStore({
    reducer: {
        cart: CartSlice,

    }
})
export default Store;
