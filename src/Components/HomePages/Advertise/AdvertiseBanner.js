import React from 'react';

const AdvertiseBanner = ({ pdt }) => {

    return (
        <div className=''>
            {
                (pdt.makeAds === 'true' && pdt.status === 'available') &&
                <div className="">
                    <img className='w-full h-28' src={pdt.image} alt="" />
                </div>
            }
        </div>
    );
};

export default AdvertiseBanner;