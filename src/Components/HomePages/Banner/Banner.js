import React from 'react';
import banner from '../../../image/banner/banner.webp'

const Banner = () => {
    return (
        <div>
            <div className="hero max-h-screen bg-base-200" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-content content-end justify-end text-right">
                    <div className="max-w-md text-orange-300">
                        <h1 className="text-5xl font-bold">Welcome to all</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;