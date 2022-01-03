import React, { useState, useEffect } from 'react'
import { useContext } from 'react/cjs/react.development'
import styled from 'styled-components'
import { CustomerContext } from '../App'
import CreateCustomerForm from './CreateCustomerForm'

const StyledInfo = styled.div`
    background-color: #ebfbff;
    text-align: center;
    min-height: 30vh;

    p {
        margin: 0;
    }
`

export default function MyInfo() {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const {myData, setMyData} = useContext(CustomerContext)

    useEffect(() => {
        const url = "https://frebi.willandskill.eu/api/v1/me"
        const token = localStorage.getItem("admin-token")

        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setMyData(data)
            setEmail(data.email)
            setFirstName(data.firstName)
            setLastName(data.lastName)
        })
    }, [])

    return (
        <StyledInfo>
            {myData && (
                <>
                    <p>Welcome to work</p>
                    <h1>{firstName} {lastName}</h1>
                    <p>{email}</p>
                    <CreateCustomerForm />
                </>
            )}
        </StyledInfo>
    )
}