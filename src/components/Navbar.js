import Logo from "./Logo"
import { Link } from "react-router"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";



const Navbar = ({cart}) => {
    
    let counter = cart.reduce(
        (acc, p) => acc + p.quantity, 0
    )
    return(
        <nav className="navbar navbar-expand  ps-0 pe-5 m-1 py-0">  
            
                <div >
                    <Logo/>                
                </div>
                <div className="d-flex gap-4 mx-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/products">Catalogo</Link>
                </div>
                <div className="row">
                    <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={ faCartShopping } size="lg" style={{color: "rgb(255, 255, 255)",}} />
                    {counter && counter > 0 ? (
                        <span>{counter}</span>
                    ): ("")
                    }
                    </Link>
                    
                </div>
            
        </nav>
    )
}

export default Navbar