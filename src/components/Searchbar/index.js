import React from "react";
import { Container} from "react-bootstrap";


const Searchbar = props => {
  return (
    <Container className="m-3 p-4 mx-auto border border-dark">
      <form>
        <p>Book Search</p>
        <div className="search-form">
          <input style={{ textAlign: "left" }}
            onChange={props.handleInputChange}
            value={props.value}
            name="title"
            type="text"
            className="form-control"
            placeholder="Search for a Book, Author, or Topic"
            id="title"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="button">
            Search for Books!
          </button>
        </div>
      </form>
    </Container>
  );
}

export default Searchbar;