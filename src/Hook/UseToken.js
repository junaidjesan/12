import { useEffect, useState } from "react";

const useToken=email=>{
    const  [jwtToken,setJwtToken]=useState('')
    useEffect(()=>{
            if(email){
            fetch(`https://assignment-five-beta.vercel.app/jwt?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                if(data.accessToken){
                    localStorage.setItem('accessToken', data.accessToken)
                    setJwtToken(data.accessToken)
                }
            })
            }
        },[email])
    return [jwtToken]
}

export default useToken;



