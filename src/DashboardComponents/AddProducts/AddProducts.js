
import React, { useState } from 'react';

const AddProducts = () => {

    const handleAddProducts = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const mobile = event.target.mobile.value
        const condition = event.target.condition.value
        const price = event.target.price.value
        const location = event.target.location.value
        const description = event.target.description.value
        const year = event.target.year.value
        const category = event.target.category.value
        const image = event.target.image.files[0]

        const formData = new FormData()
        formData.append('image', image)

        const url = 'https://api.imgbb.com/1/upload?key=e5aa734cd805f9072ab47c2d99a4c25e';

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data.display_url)
                const insertSellerProducts = {
                    name,
                    mobile,
                    condition,
                    category,
                    price,
                    location,
                    description,
                    year,
                    image: data.data.display_url
                }

                fetch('http://localhost:5000/all-products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(insertSellerProducts)
                })
                    .then(res => res.json())
                    .then(data => {
                    })

            })
    }

    return (
        <div>
            <form onSubmit={handleAddProducts} className='grid grid-cols-1 gap-5'>
                <input type="text" name='name' placeholder="Product Name" className="input input-bordered input-accent w-full " />
                <input type="number" name='price' placeholder="price" className="input input-bordered input-accent w-full " />
                <select name='condition' className="select w-full">
                    <option disabled selected>Product Condition</option>
                    <option>Good</option>
                    <option defaultValue='fair'>fair</option>
                    <option>Excellent</option>
                </select>
                <select name='category' className="select w-full">
                    <option disabled selected>Product Category</option>
                    <option>Honda</option>
                    <option>Yamaha</option>
                    <option>Suzuki</option>
                </select>
                <input type="number" name='mobile' placeholder="Mobile Number" className="input input-bordered input-accent w-full " />
                <input type="text" name='location' placeholder="Location" className="input input-bordered input-accent w-full" />
                <input type="text" name='description' placeholder="Description" className="input input-bordered input-accent w-full" />
                <input type="number" name='year' placeholder="Purchase Year" className="input input-bordered input-accent w-full" />
                <input type="file" name='image' placeholder='Choose Image' className="file-input w-full" />
                <button className='btn btn-primary'>Add a New</button>
            </form>
        </div>
    );
};

export default AddProducts;