import React, {useState, useEffect} from 'react'

const Products = () => {
    const [data,setData]=useState([]);
    const [filter, setFilter]=useState(data);
    const[loading,setLoading]=useState(false);
    let componentMounted=true;
    useEffect(() => {
        const getProducts=async() => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () =>{
                componentMounted=false;
            }

        }
        getProducts();
    },[]);
const Loading = () =>{
    return(
        <>
            <h1 className="text-center">Loading...</h1>
        </>
    )
}
const ShowProducts = () =>{
return(
    <>
    <div className="buttons d-flex justify-content-center mb-5 pb-5">
    <button className="btn btn-outline-dark me-2">All</button>
    <button className="btn btn-outline-dark me-2">Men's Outfit</button>
    <button className="btn btn-outline-dark me-2">Women's Outfit</button>
    <button className="btn btn-outline-dark me-2">Electronics</button>
    <button className="btn btn-outline-dark me-2">Jewelery</button>
    </div>
    {filter.map((product)=>{
        return(
            <>
            <div className="col-md-3">
            <div className="card">
            <img src={product.image} alt={product.title}/>
            <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-text"> $ {product.price}</p>
        
            </div>
            </div>
            </div>
            </>
        )

    })}
    </>
);

};
  return (
    <div className='container my-5 py-5 ' >
    <div className='row'>
    <div className='col-12 mb-5'>
    <h1 className="display-6 fw-bolder text-center">Latest In Our Store</h1>
    <hr/>
    </div>
    </div>
    <div className='row justify-content-center'>
    {loading ?<Loading/>: <ShowProducts/>}
    </div>
    </div>
  )
}

export default Products