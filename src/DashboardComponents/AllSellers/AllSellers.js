import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/WebContext';

const AllSellers = () => {
    const {usersWithRole}=useContext(AuthContext)

    const filtered = usersWithRole.filter(obj => {
        return obj.role === 'Seller';
    });

    const [sellerRemain,setSellerRemain]=useState({})

    const handleDelete = data => {
        const permition=window.confirm('Are you sure for delete')
        if(permition){
            fetch(`http://localhost:5000/us/${data._id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(d=>{
                if (d.deletedCount > 0) {
                    const remainingSeller = sellerRemain.filter(usr => usr._id !== data._id)
                    setSellerRemain(remainingSeller)
                    toast.success('Successfully Deleted')
                }
            })
        }
    }

   
    return (
        <div>
            {
                filtered.map(role =>
                <div key={role._id} className="card md:w-3/4 mb-9 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body flex">
                        <h2 className="card-title">
                            Name: {role.name}
                        </h2>
                        <h1 className='text-start'>Email: {role.email}</h1>
                        <div className="card-actions items-center justify-end">
                            <div className="badge badge-outline">verify</div>
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