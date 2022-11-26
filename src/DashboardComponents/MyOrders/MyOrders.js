import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/WebContext';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [orderData, setOrderData] = useState([])

    fetch(`http://localhost:5000/my-orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setOrderData(data)
        })
    return (
        <div>
            {
                orderData.map(data =>
                    <div key={data._id} className="card mb-5 card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Product Name: {data.name}</h2>
                            <p>Category: {data.category}</p>
                            <p>Conditon Type: {data.condition}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Pay Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyOrders;