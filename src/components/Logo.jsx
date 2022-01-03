import React from 'react'
import styled, { css } from "styled-components"

const StyledLogo = styled.img`
    max-width: 350px;
    padding: 10px;
`

export default function Logo(props) {
    return (
            <StyledLogo src={props.src}></StyledLogo>
    )
}