import React from 'react'
import styled from 'styled-components'
import content from '../content'
import Container from './Container'

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({ layout }) => layout || "row"};
    
    @media (max-width: 768px) {
        flex-direction: column;  
        text-align: center;
    }

    img {
        width: 80%
    }
`

const Image = styled.img`
    width: 375px;
    margin-left: 40px;
`

export default function StartCard() {
    return (
        <>
            {content && content.map((item, index) => {
                return (
                    <Container col={8}  key={index}>
                        <StyledCard layout={item.id % 2 === 0 && "row-reverse"}>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.body}</p>
                            </div>
                            <div>
                                <Image src={`./images/${item.image}`} alt="" />
                            </div>
                        </StyledCard>
                    </Container>
                )
            })}
        </>
    )
}
