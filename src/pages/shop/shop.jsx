
import {useEffect} from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import'./shop.css'


function Shop() {
    useEffect(() => {
        // console.log("shop mounted");
        fetchApi()
    })
    const [products, setProducts] =useState([]);
    const fetchApi = () => { 
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            // console.log(products);
    }
    return (
        <div className="container ">
            <h1>shop</h1>
            
                <div className='row'>
                {products.length>0?
                    products.map((product,i)=>{
                        return(
                        <div  key={product.id} className="col-4">
                            <Link to={`/shop/${product.id}`} className="link" >
                                    <div className="card p-3 mb-3 ">
                                    <img src={product.image} alt="img" className='w-100' ></img>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <h3>{product.price}$</h3>
                                    </div>
                            </Link>
                        </div>
                        )
                    })
                :
                <div className="spinner-border   m-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                }
                </div>
            
        </div>
        
    )
}

export default Shop;