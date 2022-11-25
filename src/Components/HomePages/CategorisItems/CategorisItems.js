import React from 'react';
import { Link } from 'react-router-dom';
import honda from '../../../image/categories/honda.png'
import yamaha from '../../../image/categories/yamaha.png'
import suzuki from '../../../image/categories/suzuki.png'
import { useQuery } from '@tanstack/react-query';

const CategorisItems = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category-products')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h1 className='text-xl font-bold'>Product Categories</h1>
            <div className='justify-around flex mt-10'>
                {
                    products.map(product =>
                        <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                                <Link to={`/category-products/${product._id}`}>
                            <figure>
                                <img className='rounded' src={product.categoryImage} alt="Shoes" />
                            </figure>
                                </Link>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default CategorisItems;