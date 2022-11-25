import React from 'react';
import { Link } from 'react-router-dom';
import honda from '../../../image/categories/honda.png'
import yamaha from '../../../image/categories/yamaha.png'
import suzuki from '../../../image/categories/suzuki.png'

const CategorisItems = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Product Categories</h1>
            <div className='justify-around flex mt-10'>
                <Link>
                <img to={'/params/:id'} className='w-42 h-40' src={honda} alt="" />
                </Link>
                <Link>
                <img className='w-42 h-40' src={yamaha} alt="" />
                </Link>
                <Link>
                <img className='w-42 h-40' src={suzuki} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default CategorisItems;