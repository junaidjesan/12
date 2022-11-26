
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/WebContext';

const FeedBack = () => {
    const {user}=useContext(AuthContext)
    const {email}=user
    const navigate=useNavigate()

    const handleSubmitfeedback=event=>{
        event.preventDefault()
        const text=event.target.text.value
        const feedbackData={
            email,
            feedback:text
        }

        fetch('http://localhost:5000/feedback',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedbackData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged===true){
                event.target.reset()
                navigate('/')
                toast.success('Thanks For Your Responsible Feedback')
            }
        })
    }
    return (
        <div className='bg-base-200'>
            <form onSubmit={handleSubmitfeedback} className='grid grid-cols-1 w-1/3 mx-auto py-16 gap-5'>
            <h1 className='text-center text-3xl font-bold'>FeedBack</h1>
                <input type="email" readOnly defaultValue={email} placeholder="Type Email Here" className="input w-full " />
                <textarea name='text' required className="textarea textarea-accent" placeholder="Feedback"></textarea>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default FeedBack;