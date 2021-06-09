import React from "react";
import './style.css'

const Search = props => {
  return (
    <form>
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
  );
}

export default SearchForm;