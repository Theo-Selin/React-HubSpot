import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MyButton from '../components/MyButton'
import { linkStyle } from '../components/Nav'
import { Flex } from '../components/styles/Flex.styled'
import Container from '../components/Container'
import StartCard from '../components/StartCard'

export const Image = styled.img`
    max-width: 475px;
    min-width: 300px;
    margin-left: 40px;
`
const StyledBody = styled.div`
    background-color: #ebfbff;
    padding-bottom: 40px;
`

export default function StartPage() {
    return (
        <>
        <StyledBody>
            <Container col={8}>
                <Flex>
                    <div>
                        <h1>Build and control your customer hub</h1>
                        <p>
                            Hubspot re-imagines the way we handle our customer data.
                            Gather hand-crafted information and edit them on the fly
                            with our price nominated super intuitive design. It can't get
                            any easier than this!
                        </p>
                        <MyButton big bgColor="#ee7b5b" color="white">
                            <Link style={linkStyle} to="/register">Get started for free</Link></MyButton>
                    </div>
                    <Image src="./images/illustration-mockups.svg" alt="" />
                </Flex>
            </Container>
        </StyledBody>
        <StartCard />
        </>
    )
}
