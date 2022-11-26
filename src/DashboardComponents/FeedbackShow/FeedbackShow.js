import { useQuery } from '@tanstack/react-query';
import React from 'react';

const FeedbackShow = () => {

    const { data: feedbacks = [] } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/feedback')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                feedbacks.map(feedback =>
                    <div className=' gap-2' key={feedback._id}>
                        <div className="card mb-5 lg:w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{feedback.email}</h2>
                                <p>{feedback.feedback}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FeedbackShow;