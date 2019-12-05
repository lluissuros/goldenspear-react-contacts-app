import React from "react";
import styled from "styled-components";
import { SmallButton } from "./StyledComponents";

const Container = styled.header`
  margin: 6px 12px 12px 3px;
  display: flex;
  justify-content: space-around;
`;

const Header = ({ username, onLogout }) => {
  return username ? (
    <React.Fragment>
      <Container>
        <h1 style={{ margin: "0px" }}>{`Welcome, ${username}`}</h1>
        <SmallButton onClick={() => onLogout()}>LOGOUT</SmallButton>
      </Container>
      <div>
        <hr />
      </div>
    </React.Fragment>
  ) : null;
};

export default Header;
