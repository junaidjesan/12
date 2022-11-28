import React, { useState } from 'react';
import AdvertiseBanner from './AdvertiseBanner';


const Advertise = () => {
    const [allProducts, setAllProducts] = useState([])
    fetch('http://localhost:5000/all-products')
        .then(res => res.json())
        .then(er => {
            setAllProducts(er)
        })

        
    return (
        <div className='grid grid-cols-2 w-full mt-5 lg:w-5/12 mx-auto'>
            {
                allProducts.map(pdt=><AdvertiseBanner pdt={pdt} key={pdt._id}></AdvertiseBanner>)
            }
        </div>
    );
};

export default Advertise;

