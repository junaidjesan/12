import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from 'react-icons/fc'
import { GoLocation } from 'react-icons/go'
import CategoryProductModal from './CategoryProductModal';
import { MdVerified } from 'react-icons/md';
import { AuthContext } from '../../Context/WebContext';
import axios from 'axios';

const CategoryProduct = () => {
    const loaderData = useLoaderData()
    const Alldatas = loaderData.data
    // const [filter]=useContext(AuthContext)
    const [clickData, setClickData] = useState([])
    console.log(loaderData.category)

    // fetch(`http://localhost:5000//products-category?category=${loaderData.category}`)
    // .then(res=>res.json())
    // .then(confirmData=>{
    //     console.log(confirmData)
    // })

    useEffect(() => {
        axios.get(`http://localhost:5000//products-category?category=${loaderData.category}`)
        .then(res => {
                console.log(res.data)
            })
            .catch(er => { })
    }, [])

    const handleClick = (data) => {
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
                                <h1 className='text-start'>Year of use: {data.year}</h1>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div>
                                    <h1>Seller Email: {data.email}</h1>
                                    {
                                        (data.verify === 'verified') && <span className='flex ml-3 items-center'><MdVerified className='text-blue-500' /> {data.verify}</span>
                                    }
                                </div>
                                <div className="card-actions justify-end">
                                    <label className='' onClick={(e) => handleClick(data)} htmlFor="my-modal"><div className="badge badge-outline" >Book Now</div></label>
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