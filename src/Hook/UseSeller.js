import { useEffect, useState } from "react"

const UseSeller=email=>{
    const [isSeller,setIsSeller]=useState(false)
    const [sellerLoading,setSellerLoading]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                    setIsSeller(data.isSeller)
                    setSellerLoading(true)
            })
        }
    },[email])
    return [isSeller,sellerLoading]
}

export default UseSeller