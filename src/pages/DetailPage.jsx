import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { CustomerContext } from '../App'
import styled from 'styled-components'
import MyButton from '../components/MyButton'
import Container from "../components/Container"
import { Flex } from '../components/styles/Flex.styled'
import { Image } from './StartPage'

export const StyledForm = styled.div`
    background-color: #ebfbff;
    text-align: center;
    width: 100%;

    h1 {
        padding-top: 10px;
        padding-bottom: 20px;
        margin: 0
    }

    form {
        input {
            border: none;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            padding: 5px;
            margin: 5px;
            width: 50%;
        }
    }
`

export default function DetailPage() {
    const params = useParams()
    const id = params.id
    const { customerData, fetchData } = useContext(CustomerContext)

    const [name, setName] = useState(`${customerData[id].name}`)
    const [email, setEmail] = useState(`${customerData[id].email}`)
    const [phoneNumber, setPhoneNumber] = useState(`${customerData[id].phoneNumber}`)
    const [website, setWebsite] = useState(`${customerData[id].website}`)
    const [organisationNr, setOrganisationNr] = useState(`${customerData[id].organisationNr}`)
    const [vatNr, setVatNr] = useState(`${customerData[id].vatNr}`)
    const [reference, setReference] = useState(`${customerData[id].reference}`)
    const [paymentTerm, setPaymentTerm] = useState(`${customerData[id].paymentTerm}`)

    const navigate = useNavigate()

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerData[id].id}/`
        const token = localStorage.getItem("admin-token")
        const payload = {
            name,
            email,
            phoneNumber,
            website,
            organisationNr,
            vatNr,
            reference,
            paymentTerm
        }
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then(data => fetchData(data))
            .then(navigate("/home"))
    }

    function handleOnDelete(id) {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem("admin-token")
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => fetchData())
            .then(navigate("/home"))
    }
    return (
        <>
        <StyledForm className="form-visible">
            <Container col={5}>
                {customerData && (
                    <form onSubmit={handleOnSubmit}>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                        <input
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                        />
                        <input
                            value={organisationNr}
                            onChange={e => setOrganisationNr(e.target.value)}
                        />
                        <input
                            value={vatNr}
                            onChange={e => setVatNr(e.target.value)}
                        />
                        <input
                            value={reference}
                            onChange={e => setReference(e.target.value)}
                        />
                        <input
                            value={paymentTerm}
                            onChange={e => setPaymentTerm(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <MyButton bgColor="#ee7b5b" color="white" type="submit">Update</MyButton>
                        <MyButton bgColor="black" color="white" onClick={(e) => handleOnDelete(customerData[id].id)}>Delete</MyButton>
                    </form>
                )}
            </Container>
            <Container col={8}>
                <Flex>
                    <div>
                        <h1>Get full access with our premium services</h1>
                        <p>
                            Use your free account to simply manage your customer data.
                            If you want more functions, please have a look at our premium services
                            where you can create customized automated processes for your every need!
                        </p>
                    </div>
                    <Image src="./images/illustration-flowing-conversation.svg" alt="" />
                </Flex>
            </Container>
        </StyledForm>
        </>
    )
}