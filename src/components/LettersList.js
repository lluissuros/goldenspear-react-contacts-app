import React from "react";
import styled from "styled-components";
import { SmallButton } from "./StyledComponents";

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

const LettersList = ({ onLetterClick }) => (
  <LetterContainer>
    {LETTERS.map(letter => (
      <SmallButton key={letter} onClick={() => onLetterClick(letter)}>
        {letter}
      </SmallButton>
    ))}
  </LetterContainer>
);

export default LettersList;
