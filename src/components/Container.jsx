import React from 'react'
import styled from "styled-components"

const StyledContainer = styled.div`
    margin: auto;
    width: ${props => props.col*10}%;
`

export default function Container(props) {
    return (
        <StyledContainer col={props.col}>
            {props.children}
        </StyledContainer>
    )
}
