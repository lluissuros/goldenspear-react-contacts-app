import React from "react";
import { SmallButton } from "./StyledComponents";

const Paginator = ({ onForward, onBackWards, currentPage, totalPages }) => {
  return (
    <div>
      <SmallButton
        onClick={() => {
          onBackWards();
        }}
      >
        {"<"}
      </SmallButton>
      {`${currentPage} / ${totalPages}`}
      <SmallButton
        onClick={() => {
          onForward();
        }}
      >
        {">"}
      </SmallButton>
    </div>
  );
};

export default Paginator;
