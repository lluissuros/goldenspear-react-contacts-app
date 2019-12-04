import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 12px 0px 3px;
  display: flex;
  justify-content: space-around;
`;

const Header = ({ username, onLogout }) => {
  return username ? (
    <Container>
      <h1>{`Welcome ${username}`}</h1>
      <button onClick={() => onLogout()}>LOGOUT</button>
    </Container>
  ) : null;
};

export default Header;
