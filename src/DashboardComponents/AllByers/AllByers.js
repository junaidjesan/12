
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/WebContext';

const AllByers = () => {
    const { usersWithRole } = useContext(AuthContext)

    const filtered = usersWithRole.filter(obj => {
        return obj.role === 'Buyer';
    });

    const [buyersRemain,setBuyerRemain]=useState({})

    const handleDelete = data => {
        const permition=window.confirm('Are you sure for delete')
        if(permition){
            fetch(`https://assignment-five-beta.vercel.app/us/${data._id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(d=>{
                if (d.deletedCount > 0) {
                    const remainingbuyer = buyersRemain.filter(usr => usr._id !== data._id)
                    setBuyerRemain(remainingbuyer)
                    toast.success('Successfully Deleted')
                }
            })
        }
    }


    return (
        <div>
            {
                filtered.map(role =>
                <div key={role._id} className="card w-3/4 mb-5 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body flex">
                        <h2 className="card-title">
                            Name: {role.name}
                        </h2>
                        <h1 className='text-start'>Email: {role.email}</h1>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">verify</div>
                            <div onClick={()=>handleDelete(role)} className="badge badge-outline"><Link>delete</Link></div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default AllByers;