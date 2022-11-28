import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/WebContext';

const MyProducts = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    
    const [productRemain,setproductRemain]=useState({})

    const handleDelete = data => {
        const permition=window.confirm('Are you sure for delete')
        if(permition){
            fetch(`https://assignment-five-beta.vercel.app/product-delete/${data._id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount > 0) {
                    const remainingproduct = productRemain.filter(product => product._id !== data._id)
                    setproductRemain(remainingproduct)
                    toast.success('Successfully Deleted')
                }
            })
        }
    }

    const handleAvailable=available=>{
        fetch(`https://assignment-five-beta.vercel.app/product/available/${available._id}`,{
            method: 'PUT',
        })
        .then(res=>res.json())
        .then(result=>{
                toast.success('Make Available Successful')
        })
    }
    const handlesoled=soled=>{
        fetch(`https://assignment-five-beta.vercel.app/product/soled/${soled._id}`,{
            method: 'PUT',
        })
        .then(res=>res.json())
        .then(result=>{
                toast.success('Make Soled Successful')
        })
    }
    const handleMakeAds=ads=>{
        fetch(`https://assignment-five-beta.vercel.app/product/make_ads/${ads._id}`,{
            method: 'PUT',
        })
        .then(res=>res.json())
        .then(result=>{
                toast.success('Add to ads page Successful')
        })
    }
    
    useEffect(() => {
        axios.get(`https://assignment-five-beta.vercel.app/user-products?email=${user?.email}`)
        .then(res => {
                setProducts(res.data)
            })
            .catch(er => { })
    }, [user?.email])
    return (
        <div>
            {
                (products.length === 0) ?
                    <>
                        <h1>Add Your valuable Products</h1>
                    </>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 mx-auto mt-8'>
                        {
                            products.map(product =>
                                <div key={product._id} className="card  lg:w-96 bg-base-100 shadow-xl">
                                    <figure><img className='h-36' src={product.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title grid grid-cols-1 text-start">
                                            {product.name}
                                            <div className='grid grid-cols-1 justify-around md:grid-cols-3'>
                                                <div className="badge badge-secondary">{product.condition}</div>
                                                <div className="badge badge-secondary">{product.category}</div>
                                                <div className="badge badge-secondary">${product.price}</div>
                                            </div><br />
                                            <div>Market Price {product.realpPrice}</div>
                                        </h2>
                                        <p className='text-black text-start'>{product.description}</p>
                                        <div className="card-actions justify-end">
                                            <label htmlFor=""><div onClick={()=>handleDelete(product)} className="badge badge-outline">Delete</div></label>
                                            <label htmlFor=""><div onClick={()=>handleAvailable(product)} className="badge badge-outline">Available</div></label>
                                            <label htmlFor=""><div onClick={()=>handlesoled(product)} className="badge badge-outline">Soled</div></label>
                                            <label htmlFor=""><div onClick={()=>handleMakeAds(product)} className="badge badge-outline">Make Ads</div></label>
                                                <div className='gap-5'>Time: {product.time}
                                                    <span className='ml-4'>Date: {product.date}</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default MyProducts;