import React from 'react';

const CategoryProductModal = ({ clickData }) => {
    console.log(clickData)
    const { name,price,category,condition } = clickData
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Product Name: {name}</h3>
                    <form className=''>
                        <input type="text" defaultValue={category} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" defaultValue={condition} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" defaultValue={price} readOnly className="input input-bordered input-accent w-full" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered input-accent w-full" />
                        <input type="text" placeholder="Meting Location" className="input input-bordered input-accent w-full" />
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Yay!</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductModal;