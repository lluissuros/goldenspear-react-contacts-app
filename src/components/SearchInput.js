import React, { useState } from "react";

const SearchInput = ({ onInputChange }) => {
  const [input, setInput] = useState("");
  const handleInputChange = value => {
    setInput(value);
    onInputChange(value);
  };

  return (
    <React.Fragment>
      <form style={{ margin: "6px" }}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          name="search"
          placeholder="by contains"
          value={input}
          onChange={e => handleInputChange(e.target.value)}
        />
      </form>
    </React.Fragment>
  );
};

export default SearchInput;
