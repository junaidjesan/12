import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcLike } from 'react-icons/fc'
import { GoLocation } from 'react-icons/go'
import CategoryProductModal from './CategoryProductModal';
import { MdReport, MdVerified } from 'react-icons/md';
import axios from 'axios';
import SendRepot from './SendRepot/SendRepot';

const CategoryProduct = () => {
    const loaderData = useLoaderData()
    const [CategoryProductData,setCategoryProductData]=useState([])
    const [clickData, setClickData] = useState([])
    const [sendRepot,setSendRepot]=useState([])

    useEffect(() => {
        axios.get(`https://assignment-five-beta.vercel.app/products-category?category=${loaderData.category}`)
        .then(res => {
            setCategoryProductData(res.data)
            })
            .catch(er => { })
    }, [])

    const handleClick = (data) => {
        setClickData(data)
    }

    const handleReportClick=(repot)=>{
        setSendRepot(repot)
    }
    return (
        <div className='mt-28'>
            <h1 className='text-3xl font-bold'>{loaderData.category}</h1>
            <div className='md:pt-24 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {
                    CategoryProductData.map(data =>
                        <div key={data._id} className="card font-semibold mx-auto lg:w-96 my-18 bg-base-100 shadow-xl">
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
                                <div className='text-left'>
                                    <h1>Seller Email: {data.email}</h1>
                                    {
                                        (data.verify === 'verified') && <span className='flex ml-3 items-center'><MdVerified className='text-blue-500' /> {data.verify}</span>
                                    }
                                </div>
                                <div className='text-left justify-around flex'>
                                    <h1>Time: {data.time}</h1>
                                    <h1>Date: {data.date}</h1>
                                </div>
                                <div className="card-actions items-center justify-end">
                                    <label htmlFor='my-modal-2' onClick={()=>handleReportClick(data)}><MdReport className='h-5 w-5'/></label>
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
            <SendRepot
            sendRepot={sendRepot}
            ></SendRepot>
        </div>
    );
};

export default CategoryProduct;