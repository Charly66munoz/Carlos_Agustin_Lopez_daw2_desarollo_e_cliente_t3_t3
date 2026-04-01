import React from 'react';
import { Routes, Route } from 'react-router-dom';


const AppRouter= ()=>{
    return(
        <>
        <Navbar />
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