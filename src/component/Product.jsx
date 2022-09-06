import React, {useState, useEffect}from 'react'
import {useParams} from 'react-router'
import { NavLink } from 'react-router-dom';
const Product = () => {
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading] = useState(false);
     useEffect(() =>{
        const getProduct = async () =>{
            setLoading(true);
            const response= await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
    
        }
        getProduct();
     },[]);
     const Loading = () => {
        return(
            <>
            Loading.......
            </>
        )
     };
     const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
            <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
            <h3 className="text-uppercase text-black-50">
            {product.category}
            </h3>
            <h1 className="display-6">{product.title}</h1>
            <p className="lead fw-border"> Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
            </p>
            <h2 className="display-5 fw-bolder">$ {product.price}</h2>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark me-2 px-4 py-2"> Add to Cart</button>
            <NavLink to="/cart" className="btn btn-outline-dark me-2 px-3 py-2">Go to Cart</NavLink>
            </div>
            </>
        )
     }
  return (
    <div>
    <div className="container py-5">
    <div className="row py-4">
    {loading ?<Loading/>: <ShowProduct/>}
    </div>
    </div>
    </div>
  )
}

export default Product