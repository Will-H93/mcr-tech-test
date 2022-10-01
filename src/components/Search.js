import PropTypes from "prop-types"
import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";


const Search = ({ setResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResults(await getImages(value));
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  setResults: PropTypes.func.isRequired
}

export default Search;
