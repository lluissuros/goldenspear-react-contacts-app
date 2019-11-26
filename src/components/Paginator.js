import React from "react";
import styled from "styled-components";

const Paginator = ({ onForward, onBackWards, currentPage, totalPages }) => {
  return (
    <div>
      <button
        onClick={() => {
          onBackWards();
        }}
      >
        {"<"}
      </button>
      {`${currentPage} / ${totalPages}`}
      <button
        onClick={() => {
          onForward();
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginator;
