import { useEffect, useState } from "react";
import Product from "./Product";




function Products() {
    const api = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([])
    const [categories,setCatagories]=useState([])

    const getCatagorie=()=>{
        fetch(`${api}/categories`)
        .then(res=>res.json())
        .then(data=>setCatagories(data))
    }
    const filtering=(catName)=>{
        fetch(`${api}/category/${catName}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    }
    const getProduct=()=>{
        fetch(api)
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }
    useEffect(()=>{
        getProduct()
        getCatagorie();
        

    },[])
    return (
        <>
            <h1 className="text-center p-4">Our Prouducts</h1>
            <div className="container">
                <button className="btn btn-outline-primary"onClick={()=>{
                    getProduct()
                }}>All</button>
                {categories.map((cat)=>{
                    return(
                        <button type={cat}className="btn btn-outline-primary"onClick={()=>{
                           filtering(cat)

                        }}>{cat}</button>
                    )
                })}












                 <div className="row">
                {products.map(product=>{
                    return(
                       
                        <div className="col-3"key={product.id}>
                            <Product product={product}/>
                        </div>
                   
                    )

                })}
                </div>

            </div>

        </>
    )
}
export default Products;