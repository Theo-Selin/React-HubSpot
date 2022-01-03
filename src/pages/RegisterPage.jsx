import React, { useState } from 'react'
import Container from '../components/Container'
import MyButton from '../components/MyButton'
import { Flex } from '../components/styles/Flex.styled'
import { StyledForm } from './DetailPage'
import { Image } from './StartPage'

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [organisationKind, setOrganisationKind] = useState("")

    const [response, setResponse] = useState(null)

    function renderInput(type, value, setValue, placeholder) {
        return (
            <input
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        )
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/auth/users/"
        const payload = {
            firstName,
            lastName,
            email,
            password,
            organisationKind
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => setResponse(data))
    }

    return (
        <StyledForm className="form-visible">
            <Container col={2}>
                <h1>Create new user</h1>
                <form onSubmit={handleOnSubmit}>
                    {renderInput("text", firstName, setFirstName, "First Name")}
                    {renderInput("text", lastName, setLastName, "Last Name")}
                    {renderInput("text", email, setEmail, "Email")}
                    {renderInput("password", password, setPassword, "Password")}
                    {renderInput("number", organisationKind, setOrganisationKind, "Organisation Kind (1)")}
                    <br></br>
                    <br></br>
                    <MyButton color="white" bgColor="#ee7b5b" type="submit">Create</MyButton>
                </form>
                {response && (
                    <p>A verification email has been sent to your email</p>
                )}
            </Container>
            <Container col={8}>
            <Flex>
                    <div>
                        <h1>
                            Join millions of users easily by providing
                            your organisations information.
                        </h1>
                    </div>
                    <Image src="./images/illustration-your-users.svg" alt="" />
                </Flex>
            </Container>
        </StyledForm>
    )
}
