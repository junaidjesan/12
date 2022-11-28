import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { BiChevronDownCircle } from 'react-icons/bi';
import { AuthContext } from '../../../Context/WebContext';

const SendRepot = ({ sendRepot }) => {
    const { user } = useContext(AuthContext)
    
    const handlePostReport=event=>{
        event.preventDefault()
        const text=event.target.text.value 
        fetch('https://assignment-five-beta.vercel.app/add-report',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({email:user.email,text:text,items_id:sendRepot._id})
    }).then(res=>res.json()).then(er=>{
        if(er.acknowledged==='true'){
            event.target.reset()
            toast.success('Successfully Sent Report')
        }
    })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box mx-auto">
                <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handlePostReport} action="">
                        <h1 className='text-start text-red-600 mb-3'>product id: {sendRepot._id}</h1>
                    <input defaultValue={user.email} placeholder="Type here" className="input w-full input-bordered input-accent mb-4" />
                    <textarea required name='text' className="textarea w-full textarea-accent mb-2" placeholder="Bio"></textarea>
                    <button className='w-1/3 justify-center btn'>submit</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default SendRepot;