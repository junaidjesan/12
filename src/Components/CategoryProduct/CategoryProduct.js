import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProduct = () => {
    const loaderData = useLoaderData()
    console.log(loaderData)
    const Alldatas = loaderData.data
    return (
        <div className='mt-28'>
            <h1 className='text-3xl font-bold'>{loaderData.category}</h1>
            <div className='md:pt-24 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8'>
                {
                    Alldatas.map(data =>
                        <div key={data._id} className="card mx-auto w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {data.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryProduct;