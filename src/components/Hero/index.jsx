import React from "react";
import { Container} from "react-bootstrap";

function Hero() {
  return (
    <Container className="m-5 p-4 mx-auto border border-dark" >
          <div className="mx-auto w-50 text-center" > 
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
          </div>
    </Container>
  );
}

export default Hero;
