import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import Products from "./Products"
import ConfirmActionAlert from "../components/sweetAlert/ConfirmActionAlert";

const Cart = ({ cart , removeFromCart , addToCart , clearCart }) => {
 
    const navigate = useNavigate();
    
    const navToProduct = () => {
        navigate("/products")
    }
    //     const numbers = [1, 2, 3, 4];
    // const total = numbers.reduce((acc, n) => acc + n, 0); 0 es por donde emepieza
    // 10
    let total
    if (cart.length === 0){
    }else{
        let sum = cart.reduce((prevValue, currentValue) => prevValue + currentValue.price * currentValue.quantity,0)
        total = String(sum.toFixed(2)).replace('.',',')   
    }
    return(
        <>
            {cart.length === 0  ? 
                (
                    <div className="d-flex justify-content-center mt-5 row">
                        <div className="d-flex w-50 row justify-content-center">

                        <Alert  variant="danger" >Aun no hay nada en el carrito</Alert>
                        <button className="btn btn-outline-primary" onClick={()=> navToProduct()} >Empiece su compra</button>
                        </div>
                    </div>
                ):
                <div className="row align-items-start">
                    <div className="col-10">
                        <Products addToCart= {addToCart}/>
                    </div>
                    <div className="col-2 card d-flex justify-content-start p-2">
                        <h4>Carrito:</h4>
                        <h5>Total: {total}€</h5>
                            <ConfirmActionAlert total={total} clearCart={clearCart}  />
                        <ul className="list-group list-group-flush">
                        {cart.map(p =>(
                            
                            <li key={p.id}  className="list-group-item p-1">
                                <div className="row">
                                    <div className="col-8 row px-0 m-0 d-flex justify-content-center align-items-center">
                                        <div className="col-4">
                                            <img src={p.images} className="card-img-top" style={{height: "50px", width: "50px"}} alt={p.name}></img>
                                        </div>
                                        <div className="col-8 ">
                                            <p className="" style={{fontSize: "14px"}}>{p.name} <span className="fw-bold">${p.price}</span></p>
                                            <p> x {p.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <button className="btn btn-outline-danger " onClick={()=>removeFromCart(p)}>
                                            x
                                        </button>
                                    </div>
                                </div>
                            </li>
                            ))                
                        }
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
export default Cart