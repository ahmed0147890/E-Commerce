import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetalis() {
    const params = useParams();
    const [Details, setDetails] = useState({})
    const api = "https://fakestoreapi.com/products";
    useEffect(() => {
        fetch(`${api}/${params.productId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div className="card mb-3 ">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Details.image} className="img-fluid rounded-start w-80" alt={Details.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{Details.title}</h5>
                        <p className="card-text">{Details.description}</p>
                        <p>price:{Details.price}$</p>
                       
                    </div>
                    <button type="button" className="btn  btn-outline-primary m-5">Add To Cart</button>
                        <button type="button" className="btn btn-outline-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
export default ProductDetalis;