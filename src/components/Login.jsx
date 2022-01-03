import React, { useState, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomerContext } from '../App'
import MyButton from './MyButton'

export const userContext = createContext({})

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { fetchData } = useContext(CustomerContext)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const payload = {
            email,
            password
        }
        setUser(payload)
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                const token = data.token
                localStorage.setItem("admin-token", token)
                fetchData()
                navigate("/home")
            })
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <br></br>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <br></br>
                <br></br>
                <MyButton color="white" bgColor="#ee7b5b" type="submit">Login</MyButton>
            </form>
        </div>
    )
}
