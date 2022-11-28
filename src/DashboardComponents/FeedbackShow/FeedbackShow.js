import { useQuery } from '@tanstack/react-query';
import React from 'react';

const FeedbackShow = () => {

    const { data: feedbacks = [] } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await fetch('https://assignment-five-beta.vercel.app/feedback')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='grid grid-cols-1'>
            {
                feedbacks.map(feedback =>
                    <div className=' gap-2' key={feedback._id}>
                        <div className="card mb-5 mx-7 lg:w-full bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title bg-slate-200 px-3">{feedback.email}</h2>
                                <p className='text-start'>{feedback.feedback}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FeedbackShow;