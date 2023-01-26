import { Link } from "react-router-dom";
 function Product(props){
    console.log(props)
    return(
        <>
        <div className="card">
                        <img src={props.product.image}className="card-img-top"height="250px" alt={props.product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{props.product.title.substring(0,12)}</h5>
                            <p>price:{props.product.price}</p>
                            <Link href="#" className="btn btn-success"to={`/products/${props.product.id}`}>Detalis</Link>
                        </div>
                    </div>
        </>
    )
 }
 export default Product;