import React, { useState } from "react";
import Search from "./Search";
import "../styles/app.css";
import SearchResults from "./SearchResults";

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
