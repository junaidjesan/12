import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/404/404.png'

const Rout404 = () => {
    return (
        <div className='mt-20'>
            <div className=''>
                <img className='my-auto mx-auto' src={img} alt="" />
            </div>
            <p className='text-4xl'>You are on the wrong way</p>
            <h1 className='text-3xl'>GO <Link className='text-red-500' to='/'>Home</Link></h1>
        </div>
    );
};

export default Rout404;