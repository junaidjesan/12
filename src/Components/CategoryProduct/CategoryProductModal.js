import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/WebContext';

const CategoryProductModal = ({ clickData }) => {
    const {user}=useContext(AuthContext)
    const { name,price,category,condition } = clickData

    const handleSubmitOrder=event=>{
        event.preventDefault()
        const number=event.target.phoneNumber.value
        const meeting=event.target.meetingLocation.value 

        const orderData={
            name,
            price,
            category,
            condition,
            sellerName:user.name,
            sellerEmail:user.email,
            buyerNumber: number,
            location:meeting
        }

        fetch('https://assignment-five-beta.vercel.app/add-orders',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orderData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                event.target.reset()
                toast.success('Booked successfully')
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Product Name: {name}</h3>
                    <form onSubmit={handleSubmitOrder} className=''>
                        {/* <input type="text" defaultValue={user.name} readOnly className="input input-bordered input-accent w-full" /> */}
                        <input type="text" defaultValue={user.email} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" defaultValue={category} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" defaultValue={condition} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" defaultValue={price} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered input-accent w-full" />
                        <input type="text" name='meetingLocation' placeholder="Meeting Location" className="input input-bordered input-accent w-full" />
                        <div>
                            <label htmlFor="my-modal"><button className='btn mt-8'>Booked</button></label>
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