import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {FcLike} from 'react-icons/fc'
import { GoLocation } from 'react-icons/go'
import CategoryProductModal from './CategoryProductModal';

const CategoryProduct = () => {
    const loaderData = useLoaderData()
    const Alldatas = loaderData.data
    const [clickData,setClickData]=useState([])

    // const handleFavourite

    const handleClick=(data)=>{
        setClickData(data)
    }
    return (
        <div className='mt-28'>
            <h1 className='text-3xl font-bold'>{loaderData.category}</h1>
            <div className='md:pt-24 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8'>
                {
                    Alldatas.map(data =>
                        <div key={data._id} className="card font-semibold mx-auto w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-60' src={data.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {data.name}
                                    <div className="badge badge-secondary">{data.price}</div>
                                    <div className="badge badge-secondary">{data.condition}</div>
                                </h2>
                                <p className='text-start justify-between flex'>
                                    <h1>Mobile Number: {data.mobile}</h1>
                                    <h1 className='flex items-center'><GoLocation />{data.location}</h1>
                                </p>
                                <h1 className='text-start'>Purcheas Year: {data.year}</h1>
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