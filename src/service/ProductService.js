import { useState } from "react"
import { Alert } from "react-bootstrap";

export const getProducts = async ()=>{
    
        const res = await fetch("https://dummyjson.com/products")
        return await res.json();
    
}

