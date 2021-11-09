import React from 'react'
import { Container } from 'react-bootstrap'
import Searchbar from "../components/Searchbar/index"

export default function Search() {
    return (
        <div>
            <Searchbar></Searchbar>
            <Container className="m-3 p-4 mx-auto border border-dark">
                <p>Results</p>
            </Container>
        </div>
    )
}
