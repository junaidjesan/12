
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/WebContext';
import useToken from '../../Hook/UseToken';

const current = new Date();
const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const currentTime=new Date()
const time = currentTime.toLocaleTimeString("en-US");

const AddProducts = () => {
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    // const [addAfterVerify,setAddAfterVerify]=useState('')
    // const [token]=useToken(addAfterVerify)

    // if(token){
    //     navigate('/dashboard/my-products')
    // }

    const handleAddProducts = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const mobile = event.target.mobile.value
        const condition = event.target.condition.value
        const price = event.target.price.value
        const realpPrice = event.target.realpPrice.value
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
                const insertSellerProducts = {
                    name,
                    mobile,
                    condition,
                    category,
                    price,
                    realpPrice,
                    location,
                    description,
                    year,
                    date:currentDate,
                    time:time,
                    image: data.data.display_url,
                    email:user.email
                }

                fetch('http://localhost:5000/add-products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(insertSellerProducts)
                })
                    .then(res => res.json())
                    .then(data => {
                        event.target.reset()
                        // setAddAfterVerify(user.email)
                        navigate('/dashboard/my-products')
                        toast.success('Product Added successfully!!!')
                    })

            })
    }

    return (
        <div>
            <form onSubmit={handleAddProducts} className='grid grid-cols-1 gap-5'>
                <input type="text" name='name' placeholder="Product Name" className="input input-bordered input-accent w-full " />
                <input type="number" name='price' placeholder="price" className="input input-bordered input-accent w-full " />
                <input type="number" name='realpPrice' placeholder="Market price" className="input input-bordered input-accent w-full " />
                <div>
                <select name='condition' className="select w-full">
                    <option disabled selected>Product Condition</option>
                    <option>Good</option>
                    <option defaultValue='fair'>fair</option>
                    <option>Excellent</option>
                </select>
                </div>
                <select name='category' className="select w-full">
                    <option disabled selected>Product Category</option>
                    <option >Honda</option>
                    <option >Yamaha</option>
                    <option >Suzuki</option>
                </select>
                <input type="number" name='mobile' placeholder="Mobile Number" className="input input-bordered input-accent w-full " />
                <input type="text" name='location' placeholder="Location" className="input input-bordered input-accent w-full" />
                <input type="text" name='description' placeholder="Description" className="input input-bordered input-accent w-full" />
                <input type="number" name='year' placeholder="User of year" className="input input-bordered input-accent w-full" />
                <input type="file" name='image' placeholder='Choose Image' className="file-input w-full" />
                <button className='btn btn-primary'>Add a New</button>
            </form>
        </div>
    );
};

export default AddProducts;