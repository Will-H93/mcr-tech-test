import PropTypes from "prop-types";
import React from "react";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <>
        {results.map((image) => (
          <img
            className="card-image"
            src={image}
            alt="spaceImage"
            key={image}
          />
        ))}
      </>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchResults;
