import React, { useState } from "react";
import styled from "styled-components";
import Paginator from "./Paginator";
import SearchInput from "./SearchInput";

const PAGE_SIZE = 50;
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

const FlexContainer = styled.div`
  display: flex;
  height: 500px;
  flex-direction: row;
  width: 100%;
`;

const FlexSpaceBetweenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const LetterContainer = styled.div`
  margin: 0px 12px 0px 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ScrollContainer = styled.div`
  height: 470px;
  overflow-y: scroll;
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

const ContactsBrowser = ({ contacts, onSelectedContact }) => {
  const [browserPage, setBrowserPage] = useState(0);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const paginate = (elements, page, pageSize = PAGE_SIZE) => {
    return elements.slice(page * pageSize, page * pageSize + pageSize);
  };

  const handleSearch = searchValue => {
    setBrowserPage(0);
    const alphabeticallyBySearch = contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
    setFilteredContacts(alphabeticallyBySearch);
  };

  const handleLetterClick = letter => {
    setBrowserPage(0);
    const alphabeticallyByLetter = contacts
      .filter(contact =>
        contact.name.toLowerCase().startsWith(letter.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
    setFilteredContacts(alphabeticallyByLetter);
  };

  const handlePaginator = direction => {
    if (direction === "forward") {
      const maxPage = Math.floor(filteredContacts.length / PAGE_SIZE);
      setBrowserPage(Math.min(browserPage + 1, maxPage));
    } else {
      setBrowserPage(Math.max(browserPage - 1, 0));
    }
  };

  return (
    <div>
      <SearchInput onInputChange={handleSearch}></SearchInput>
      <FlexContainer>
        <LettersList onLetterClick={handleLetterClick} />
        <FlexSpaceBetweenContainer>
          <ScrollContainer>
            {paginate(filteredContacts, browserPage).map(contact => (
              <div key={contact.id} onClick={() => onSelectedContact(contact)}>
                {contact.name}
              </div>
            ))}
          </ScrollContainer>
          <Paginator
            currentPage={browserPage + 1}
            totalPages={Math.ceil(filteredContacts.length / PAGE_SIZE)}
            onForward={() => handlePaginator("forward")}
            onBackWards={() => handlePaginator("backwards")}
          />
        </FlexSpaceBetweenContainer>
      </FlexContainer>
    </div>
  );
};

export default ContactsBrowser;
