import React from 'react'
import styled from "styled-components"
import Container from './Container'
import { Flex } from './styles/Flex.styled'
import Logo from './Logo'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
    background-color: #ebfbff;
    padding: 40px 0;
`
const StyledLink = {
    textDecoration: "none",
    display: "flex",
    marginLeft: "10px"
}

export default function Header() {
    return (
        <StyledHeader>
            <Container col={8} className="header">
                <Flex>
                    <Logo src="https://www.exsitec.se/hs-fs/hubfs/Bilder-Foto%20root/logos/Loggor_Webp/hubspot%20product%20logo%20card.png?width=592&name=hubspot%20product%20logo%20card.png" />
                    <Link to="/" style={StyledLink}>Home</Link>
                    <Link to="/home" style={StyledLink}>Customers</Link>
                    <Nav />
                </Flex>
            </Container>
            <Container col={2}>
            </Container>
        </StyledHeader>
    )
}
