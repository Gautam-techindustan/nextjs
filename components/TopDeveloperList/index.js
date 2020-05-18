import React from 'react'
import { Container } from 'react-bootstrap'
import TopDevelopers from './TopDevelopers'
import Slider from '../Common/Slider'

export default function TopDeveloperList() {
    return (
    <Container className="mt-5 mb-5">
        <Slider>
            <TopDevelopers/>
            <TopDevelopers/>
        </Slider>
        </Container>
    )
}
