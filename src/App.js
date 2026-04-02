import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRouter from "./routes/AppRouter"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)

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

  useEffect(()=>{
    cart.forEach(item => {
      setPrice(price + item.price)
    });
  },[cart])
  return(
    <Router>
      <AppRouter cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
    </Router>
  );
}

export default App;

/*

const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find(p => p.id === product.id);

    if (exist) {
      setCart(cart.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };



  const total = cart.reduce((acc, p) => acc + p.quantity, 0);*/