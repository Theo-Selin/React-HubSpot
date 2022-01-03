import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"

export default function VerifyPage() {
    const navigate = useNavigate()
    let location = useLocation()

     useEffect(() => {
        const params = new URLSearchParams(location.search)
        let uid = params.get("uid")
        let token = params.get("token")
        const url = "https://frebi.willandskill.eu/auth/users/activate/"

         const payload = {
            uid,       
            token
            }

         fetch(url, {
             method: "POST",
             headers: {
                 "Content-Type" : "application/json",
             },
             body: JSON.stringify(payload)
         })
         .then(res => navigate("/login-page"))
    }, [])

    return (
        <div>
        </div>
    )
}
