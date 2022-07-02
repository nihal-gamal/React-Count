import {useParams} from "react-router-dom";
import {useEffect} from 'react';
import {useState} from 'react';
import'./shop.css';

function Products() {
    const {id} = useParams();
    useEffect(() => {
        fetchProdApi()
    },[])
    const [product, setProduct] =useState([]);
    const fetchProdApi = () => { 
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }
    return (
        
        <div className="container text-center">
                {product.id?
                        <div className="border w-25 m-auto p-3">
                                    <img src={product.image} alt="img" className="w-100"></img>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <h3>{product.price}$</h3>
                        </div>
                :
                <div className="spinner-border m-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
        </div>
        
    )
}

export default Products;