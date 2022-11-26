import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/WebContext';

const CategoryProductModal = ({ clickData }) => {
    const {user}=useContext(AuthContext)
    const [upUser,setUpuser]=useState([])
    const { name,price,category,condition } = clickData

    // fetch(`http://localhost:5000/one-users?email=${user.email}`)
    //     .then(res=>res.json())
    //     .then(datd=>setUpuser(datd))
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Product Name: {name}</h3>
                    <form className=''>
                        {/* <input type="text" defaultValue={upUser.name} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" defaultValue={upUser.email} readOnly className="input input-bordered input-accent w-full" /> */}
                        <input type="text" defaultValue={category} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" defaultValue={condition} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" defaultValue={price} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered input-accent w-full" />
                        <input type="text" placeholder="Meting Location" className="input input-bordered input-accent w-full" />
                        <div>
                            <button className='btn mt-8'>Booked</button>
                        </div>
                    </form>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="">close</label>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductModal;