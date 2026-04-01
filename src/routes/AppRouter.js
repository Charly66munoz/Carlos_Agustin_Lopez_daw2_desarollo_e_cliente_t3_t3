import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import LandingPage from "../pages/LandingPage"
import Cart from "../pages/Cart"
import Products from "../pages/Products"

const AppRouter= ()=>{
    return(
        <>
            <Routes>
                <Route element={<MainLayout />}> {/* Aqui separo por layouts para permitir escalabilidad a futuro */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/products" element={<Products />} />
                    {/*<Route path="/products/:id" element={<Product />} /> No se si lo voy hacer */}
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </>
    )
}
export default AppRouter