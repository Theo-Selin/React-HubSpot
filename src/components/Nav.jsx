import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from './Container'
import MyButton from './MyButton'

const StyledNav = styled.nav`
    float: right;
    list-style: none;

    @media (max-width: 768px) {
        float: none;
    }
`

export const linkStyle = {
    textDecoration: "none",
    color: "white"
}

export default function Nav() {
    return (
        <Container col={10}>           
            <StyledNav>
                <MyButton bgColor="black">
                    <Link to="/login-page" style={linkStyle}>Login</Link>
                </MyButton>
            </StyledNav>
        </Container>
    )
}
