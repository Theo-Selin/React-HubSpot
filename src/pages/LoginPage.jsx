import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Login from '../components/Login'
import { Flex } from '../components/styles/Flex.styled'
import { Image } from './StartPage'

const StyledLogin = styled.div`
background-color: #ebfbff;
text-align: center;
width: 100%;

h1 {
    padding-top: 10px;
    margin: 0
}

form {
    input {
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        padding: 5px;
        margin: 5px;
        width: 180px;
    }
}
`

export default function LoginPage() {
    return (
        <>
        <StyledLogin>
            <h1>Custom CRM System</h1>
            <h2>Login</h2>
            <Login />
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
                    <Image src="./images/illustration-grow-together.svg" alt="" />
                </Flex>
            </Container>
        </StyledLogin>

        </>
        
    )
}
