import Logo from "./Logo"
import { Link } from "react-router"
import "./Navbar.css"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand  ps-0 pe-5 m-1 py-0">  
            
                <div >
                    <Logo/>                
                </div>
                <div className="d-flex gap-4 mx-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/products">Catalogo</Link>
                </div>
                <div>
                    <Link className="nav-link" to="/cart">Carrito</Link>
                </div>
            
        </nav>
    )
}

export default Navbar