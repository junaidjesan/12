import React from 'react';
import banner from '../../../image/banner/banner.webp'

const Banner = () => {
    return (
        <div>
            <div className="hero max-h-screen bg-base-200" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content content-end justify-end text-right">
                    <div className="max-w-md text-orange-300">
                        <h1 className="md:text-5xl text-xl font-bold">Welcome to all</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;