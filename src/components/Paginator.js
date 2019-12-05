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

      <span
        style={{ margin: "0px 12px" }}
      >{`${currentPage} / ${totalPages}`}</span>

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
