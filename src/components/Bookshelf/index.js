import React from 'react'

import { Container } from 'react-bootstrap'
import Book from '../Book'

export default function Bookshelf() {
    return (
        <div>
        <Container className="m-3 p-4 mx-auto border border-dark">
                <p>Saved Books</p>
            <Book />

            </Container>    
        </div>
    )
}
