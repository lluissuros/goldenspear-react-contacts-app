import React, { useState } from "react";
import styled from "styled-components";

const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const LetterContainer = styled.div`
  margin: 0px 12px 0px 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LetterButton = styled.button`
  background: linear-gradient(to bottom, #ff9800, #ffc1074a);
  display: block;
  border-color: none;
  border-radius: 3px;
  width: 24px;
  height: 18px;
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #ff5722;
  }
  :focus {
    outline: none;
  }
`;

const LettersList = ({ onLetterClick }) => (
  <LetterContainer>
    {LETTERS.map(letter => (
      <LetterButton key={letter} onClick={() => onLetterClick(letter)}>
        {letter}
      </LetterButton>
    ))}
  </LetterContainer>
);

export default LettersList;
