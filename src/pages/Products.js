import { useEffect, useState } from "react";
import { getProducts } from "../service/ProductService";
import { Alert } from "react-bootstrap";
const Products = () => {
    const [products,setProducts] = useState([]);
    const [error, setError] = useState("")
            useEffect(() => {
            getProducts().then(data => {/*setProducts(data)*/;
            
                let items = data.products.map(prdcto => ({
                    id: prdcto.id,
                    name: prdcto.title,
                    description: prdcto.description,
                    category: prdcto.category,
                    price: prdcto.price,
                    images: prdcto.images[0]
                }));
                setProducts(items)    
            }).catch(() => {
        setError("Error fetch");

        setTimeout(() => {
          setError("");
        }, 2500);
      });
  }, []);
    return(
     <>
        {error  && (
            <Alert  variant="warning" onClose={() => setError(null)} >
                {error}
            </Alert>
        )}
        <div className="row gap-3 mt-3 d-flex justify-content-center">
        {products.map(p => (
                <div key={p.id}  className="card col-4" style={{width: "16rem"}}>
                <img src={p.images} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0, 60)}...</p>
                    <p className="fw-bold">${p.price}</p>
                </div>
                    <button className="btn btn-primary">
                        Añadir al carrito
                    </button>
                </div>
      ))}
      </div>
     </>   
    )
}
export default Products