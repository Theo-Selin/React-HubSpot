import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CustomerContext } from '../App'
import Container from './Container'

const StyledCard = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #fff;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;

&:hover {
    opacity: 0.9;
    transform: scale(0.98);
}
`

export default function CustomerCard() {
    const { customerData } = useContext(CustomerContext)
    return (
        <Container col={8}>
            {customerData && customerData.map((item, index) => {
                return (
                    <Link to={`/${index}`} key={index}>
                        <StyledCard>
                            <h2>{item.name}</h2>
                            <p>{item.email}</p>
                            <p>{item.website}</p>
                        </StyledCard>
                    </Link>
                )
            })}
        </Container>
    )
}
