import React from 'react';

const FeedBack = () => {
    return (
        <div className='bg-base-200'>
            <form className='grid grid-cols-1 w-1/3 mx-auto py-16 gap-5'>
                <input type="text" placeholder="Type Name here" className="input w-full " />
                <input type="email" placeholder="Type Email Here" className="input w-full " />
                <textarea className="textarea textarea-accent" placeholder="Feedback"></textarea>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default FeedBack;