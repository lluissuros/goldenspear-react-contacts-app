import React, { useState } from "react";

const SearchInput = ({ searchValue, onInputChange }) => {
  return (
    <React.Fragment>
      <form>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          name="search"
          placeholder="by contains"
          value={searchValue}
          onChange={e => onInputChange(e.target.value)}
        />
      </form>
    </React.Fragment>
  );
};

export default SearchInput;
