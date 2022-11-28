
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const FeedBack = () => {
    const navigate=useNavigate()

    const handleSubmitfeedback=event=>{
        event.preventDefault()
        const text=event.target.text.value
        const email=event.target.email.value
        const feedbackData={
            email:email,
            feedback:text
        }

        fetch('https://assignment-five-beta.vercel.app/add-feedback',{
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
            <form onSubmit={handleSubmitfeedback} className='grid grid-cols-1 lg:w-2/3 md:mx-auto py-16 gap-5'>
            <h1 className='text-center text-3xl font-bold'>FeedBack</h1>
                <input type="email" name='email' required defaultValue={''} placeholder="Type Email Here" className="input w-full " />
                <textarea name='text' required className="textarea textarea-accent" placeholder="Feedback"></textarea>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default FeedBack;