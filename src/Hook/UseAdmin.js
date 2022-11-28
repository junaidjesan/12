import { useEffect, useState } from "react"

const UseAdmin=email=>{
    const [isAdmin,setIsAdmin]=useState(false)
    const [adminLoading,setAdminLoading]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                    setIsAdmin(data.isAdmin)
                    setAdminLoading(true)
            })
        }
    },[email])
    return [isAdmin,adminLoading]
}

export default UseAdmin


// [
//     {name:"junaid",
// email:"juaid@jesan.com",
// isAdmin:"Admin",
// verify:"verified"}
// ]

// jibonJowbonSes