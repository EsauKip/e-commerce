import React, {useState, useEffect}from 'react'
import {useParams} from 'react-router'
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
            <p className="lead"> Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
            </p>
            </div>
            </>
        )
     }
  return (
    <div>
    <div className="container">
    <div className="row">
    {loading ?<Loading/>: <ShowProduct/>}
    </div>
    </div>
    </div>
  )
}

export default Product