export const getProducts = async ()=>{
    
        const res = await fetch("https://dummyjson.com/products")
        return await res.json(); // equivalente a res1 = res.json();
    
}

