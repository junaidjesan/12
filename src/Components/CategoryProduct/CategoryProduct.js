import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {FcLike} from 'react-icons/fc'
import CategoryProductModal from './CategoryProductModal';

const CategoryProduct = () => {
    const loaderData = useLoaderData()
    const Alldatas = loaderData.data
    const [clickData,setClickData]=useState([])

    const handleClick=(data)=>{
        setClickData(data)
    }
    return (
        <div className='mt-28'>
            <h1 className='text-3xl font-bold'>{loaderData.category}</h1>
            <div className='md:pt-24 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8'>
                {
                    Alldatas.map(data =>
                        <div key={data._id} className="card mx-auto w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-60' src={data.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {data.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <label className=''  onClick={(e)=>handleClick(data)} htmlFor="my-modal"><div className="badge badge-outline" >Book Now</div></label>
                                    <div className="badge badge-outline"><FcLike /></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
                <CategoryProductModal
                clickData={clickData}
                ></CategoryProductModal>
        </div>
    );
};

export default CategoryProduct;