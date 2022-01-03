import React from 'react'
import Container from '../components/Container'
import CustomerCard from '../components/CustomerCard'
import MyInfo from '../components/MyInfo'

export default function HomePage() {

    return (
        <>
            <Container col={10}>
                <MyInfo />
            </Container>
            <Container col={8}>
                <CustomerCard />
            </Container>
        </>
    )
}
