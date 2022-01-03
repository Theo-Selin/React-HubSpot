import React, { useState, useContext } from 'react'
import { CustomerContext } from '../App'
import { StyledForm } from '../pages/DetailPage'
import Container from './Container'
import MyButton from './MyButton'

export default function CreateCustomerForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [website, setWebsite] = useState("")
    const [organisationNr, setOrganisationNr] = useState("")

    const [vatNr, setVatNr] = useState("")
    const validVat = "(SE)[0-9]{10}"
    
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")

    const { fetchData } = useContext(CustomerContext)

    function renderInput(type, value, setValue, placeholder, pattern) {
        return (
            <input
                type={type}
                value={value}
                pattern={pattern}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
            />
        )
    }

    const [isVisible, setVisible] = useState("false")

    function handleToggle() {
        setVisible(!isVisible)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
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
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => fetchData())
    }

    return (
        <Container col={5}>
        <StyledForm className={isVisible ? "form-hidden" : "form-visible"}>
            <h2>Add new customer</h2>
                <form onSubmit={handleOnSubmit}>
                    {renderInput("text", name, setName, "Name")}
                    {renderInput("text", email, setEmail, "Email")}
                    {renderInput("text", phoneNumber, setPhoneNumber, "Phone")}
                    {renderInput("text", website, setWebsite, "Website")}
                    {renderInput("text", organisationNr, setOrganisationNr, "Org.nr")}
                    {renderInput("text", vatNr, setVatNr, "VAT.nr (format: SE0000000000)", validVat)}
                    {renderInput("text", reference, setReference, "Reference")}
                    {renderInput("text", paymentTerm, setPaymentTerm, "Payment")}
                    <br></br>
                    <br></br>
                    <MyButton color="white" bgColor="#ee7b5b" type="submit">Create</MyButton>
                </form>
        </StyledForm>
        <br></br>
        <MyButton color="white" bgColor="#ee7b5b" onClick={handleToggle}>{isVisible ? "Add Customer" : "Hide Form"}</MyButton>
        </Container>
    )
}