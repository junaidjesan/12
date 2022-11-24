import React from 'react';

const AddProducts = () => {

    const handleAddProducts=event=>{
        event.preventDefault()
        const name=event.target.name.value
        const mobile=event.target.mobile.value
        const condition=event.target.condition.value
        const price=event.target.price.value
        const location=event.target.location.value
        const description=event.target.description.value
        const year=event.target.year.value
        const image=event.target.image.value

        console.log(name,mobile,condition,price,location,description,year,image)
    }

    return (
        <div>
            <form onSubmit={handleAddProducts} className='grid grid-cols-1 gap-5'>
                <input type="text" name='name'  placeholder="Product Name" className="input input-bordered input-accent w-full " />
                <input type="number" name='price' placeholder="price" className="input input-bordered input-accent w-full " />
                <select  name='condition' className="select w-full">
                    <option disabled selected>Product Condition</option>
                    <option>Good</option>
                    <option defaultValue='fair'>fair</option>
                    <option>Excellent</option>
                </select>
                <input type="number"name='mobile'  placeholder="Mobile Number" className="input input-bordered input-accent w-full " />
                <input type="text"name='location'  placeholder="Location" className="input input-bordered input-accent w-full" />
                <input type="text"name='description'  placeholder="Description" className="input input-bordered input-accent w-full" />
                <input type="number"name='year' placeholder="Purchase Year" className="input input-bordered input-accent w-full" />
                <input type="file" name='image' className="file-input w-full" />
                <button className='btn btn-primary'>Add a New</button>
            </form>
        </div>
    );
};

export default AddProducts;