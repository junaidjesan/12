import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/WebContext';
import { MdVerified } from 'react-icons/md'

const AllSellers = () => {
    const {filter}=useContext(AuthContext)
    
    const [sellerRemain,setSellerRemain]=useState({})

    const handleDelete = data => {
        const permition=window.confirm('Are you sure for delete')
        if(permition){
            fetch(`https://assignment-five-beta.vercel.app/delete-user/${data._id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount > 0) {
                    const remainingSeller = sellerRemain.filter(seller => seller._id !== data._id)
                    setSellerRemain(remainingSeller)
                    toast.success('Successfully Deleted')
                }
            })
        }
    }

    const handleVerify=id=>{
        fetch(`https://assignment-five-beta.vercel.app/users/verify/${id._id}`,{
            method: 'PUT',
        })
        .then(res=>res.json())
        .then(result=>{
            toast.success('Seller Verified Successfully')
        })
    }

   
    return (
        <div>
            {
                filter.map(role =>
                <div key={role._id} className="card md:w-3/4 mb-9 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body flex">
                        <h2 className="card-title">
                            Name: {role.name}
                        </h2>
                        <h1 className='text-start flex items-center'>Email: {role.email} 
                        {
                            (role.verify==='verified')&& <span className='flex ml-3 items-center'><MdVerified className='text-blue-500'/> {role.verify}</span>
                        }
                        </h1>
                        <div className="card-actions items-center justify-end">
                            <Link><div onClick={()=>handleVerify(role)} className="badge badge-outline">verify</div></Link>
                            <Link><div onClick={()=>handleDelete(role)} className="badge badge-outline">delete</div></Link>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default AllSellers;