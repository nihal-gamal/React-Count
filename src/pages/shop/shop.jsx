
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
                <div className='row d-flex justify-content-center '>
                {products.length>0?
                    products.map((product,i)=>{
                        return(
                        <div  key={product.id} className="col-lg-4 text-center">
                            <Link to={`/shop/${product.id}`} className="link" >
                                    <div className="card p-3 mb-3 ">
                                    <img src={product.image} alt="img" className='w-25 img-fluid d-flex m-auto' ></img>
                                    <h6 className='mt-3 mb-3'>{product.title}</h6>
                                    {/* <p>{product.description}</p> */}
                                    <h5>{product.price}$</h5>
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