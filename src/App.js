import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRouter from "./routes/AppRouter"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {  useState } from "react";

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    let exist = cart.find(p => p.id === product.id); //verificamos la existencia del producto

    if (exist) {  //si existe agregamos uno a quantity
      setCart(cart.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (product) => {
    let exist = cart.find(p => p.id === product.id); //aqui verificamos para eliminar por cantidad, lo cual nos permitira manejar de forma mas claro los productos duplicados

    if (exist.quantity > 1) {
      setCart(cart.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity - 1 }
          : p
      ));
    } else {
      setCart(cart.filter(p => p.id !== product.id));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return(
    <Router>
      <AppRouter cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}/>
    </Router>
  );
}

export default App;