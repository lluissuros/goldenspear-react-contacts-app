import React, { useState } from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";
import Paginator from "./Paginator";
import { paginate } from "../utils/helpers";

const PAGE_SIZE = 20;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10%;
`;

const Avatar = styled.img`
  height: 48px;
  border-radius: 50%;
`;

const ConnectionAvatar = styled.img`
  height: 70%;
  border-radius: 50%;
`;

const Name = styled.span`
  font-size: 36px;
  margin-left: 12px;
  vertical-align: top;
`;

const FlexSpaceBetweenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 520px;
`;

const ConnectionsListContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  height: 400px;
  overflow-y: scroll;
`;

const ConnectionCardItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 6px;
  justify-content: space-between;
  width: 15%;
  min-width: 75px;
  height: 80px;
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 3px;
  border-radius: 3px;
  border: solid 1px #ff980073;
  background-color: #ffeb3b45;
`;

const ContactTitle = ({ contact }) => (
  <div>
    <Avatar src={contact.avatar} />
    <Name>{contact.name}</Name>
  </div>
);

const ContactDetails = ({ contact, connections }) => {
  const [browserPage, setBrowserPage] = useState(0);
  const handleSearch = value => {
    console.log("search for ", value);
  };

  const handlePaginator = direction => {
    if (direction === "forward") {
      const maxPage = Math.floor(connections.length / PAGE_SIZE);
      setBrowserPage(Math.min(browserPage + 1, maxPage));
    } else {
      setBrowserPage(Math.max(browserPage - 1, 0));
    }
  };

  return (
    <FlexSpaceBetweenContainer>
      <Header>
        <div style={{ minWidth: "300px" }}>
          {contact && <ContactTitle contact={contact} />}
        </div>
        <div style={{ lineHeight: "3em" }}>
          <SearchInput onInputChange={handleSearch} />
        </div>
      </Header>

      <section>
        <ConnectionsListContainer>
          {connections &&
            paginate(connections, browserPage, PAGE_SIZE).map(connection => (
              <ConnectionCardItem key={connection.id}>
                <ConnectionAvatar src={connection.avatar}></ConnectionAvatar>
                <div>{connection.name}</div>
              </ConnectionCardItem>
            ))}
        </ConnectionsListContainer>
      </section>

      <footer>
        <Paginator
          currentPage={browserPage + 1}
          totalPages={Math.ceil(connections.length / PAGE_SIZE)}
          onForward={() => handlePaginator("forward")}
          onBackWards={() => handlePaginator("backwards")}
        />
      </footer>
    </FlexSpaceBetweenContainer>
  );
};

export default ContactDetails;
