
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import'./shop.css'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/features/shopSlice';



function Shop() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    },[])
    const {products,loading} = useSelector(state => state.shopSlice);
    return (
        <div className="container text-center">
            <h1 >shop</h1>
                <div >
                    {!loading ?(
                        <div className='row d-flex justify-content-center '>
                            {products?.map((product)=>{
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
                            })}
                        </div>
                        )
                    :
                    (
                    <div className="spinner-border   m-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    )
                    }
            </div>
            
        </div>
        
    )
}

export default Shop;