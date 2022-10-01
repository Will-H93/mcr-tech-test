import PropTypes from "prop-types";
import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <div className="results">
        {results.map((image) => (
          <img
            className="card-image"
            src={image}
            alt="spaceImage"
            key={image}
          />
        ))}
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchResults;
