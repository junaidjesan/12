import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/WebContext';

const AllSellers = () => {
    const {usersWithRole}=useContext(AuthContext)

    const filtered = usersWithRole.filter(obj => {
        return obj.role === 'Seller';
    });
    console.log(filtered)

    const [sellerRemain,setSellerRemain]=useState({})

    const handleDelete = datas => {
        console.log(datas)
        const permition = window.confirm(`Are you sure to delete`)
        if (permition) {
            fetch(`https://localhost:5000/users/${datas._id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(deleteReview => {
                    console.log(deleteReview)
                    // if (deleteReview.deletedCount > 0) {
                    //     alert('Successfully Deleted')
                    //     const sellerRemains = sellerRemain.filter(usr => usr._id !== datas._id)
                    //     setSellerRemain(sellerRemains)
                    // }
                })
        }
    }
    console.log(sellerRemain)

   
    return (
        <div>
            {
                filtered.map(role =>
                <div key={role._id} className="card w-3/4 mb-9 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body flex">
                        <h2 className="card-title">
                            Name: {role.name}
                        </h2>
                        <h1 className='text-start'>Email: {role.email}</h1>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">verify</div>
                            <Link><div onClick={()=>handleDelete(role._id)} className="badge badge-outline">delete</div></Link>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default AllSellers;