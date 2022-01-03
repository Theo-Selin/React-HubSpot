import React from 'react'
import styled, { css } from "styled-components"

const Button = styled.button`
    all: unset;
    background: ${props => props.bgColor};
    color: ${props => props.color};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`

const BigButton = styled(Button)`
    font-size: 25px;
    padding: 15px 70px;
    border-radius: 30px;
`

export default function MyButton(props) {
    return (
        <>
        {props.big ?
            <BigButton {...props}></BigButton>
            : <Button {...props}></Button>
        }
        </>
    )
}
