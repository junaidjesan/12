import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/WebContext';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/all-products?email=${user?.email}`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(er => { console.log(er) })
    }, [user?.email])
    return (
        <div>
            {
                (products.length === 0) ?
                    <>
                        <h1>Add Your valuable Products</h1>
                    </>
                    :
                    <div className='grid grid-cols-2'>
                        {
                            products.map(product =>
                                <div key={product._id} className="card  w-96 bg-base-100 shadow-xl">
                                    <figure><img src={product.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {product.name}
                                            <div className="badge badge-secondary">{product.condition}</div>
                                        </h2>
                                        <p>{product.details}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Fashion</div>
                                            <div className="badge badge-outline">Products</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default MyProducts;