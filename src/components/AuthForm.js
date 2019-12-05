import React, { useState } from "react";
import logoImg from "../img/logo_goldenspear.jpg";
import {
  Card,
  Logo,
  Form,
  Input,
  Button,
  Error
} from "../components/StyledComponents";
import styled from "styled-components";

const LogoContainer = styled.div`
  height: 175px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function AuthForm({ error, onConfirm }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleConfirm = () => {
    onConfirm(userName, password, rememberMe);
  };

  return (
    <Card style={{ width: "300px" }}>
      <LogoContainer>
        <Logo src={logoImg} />
      </LogoContainer>
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={() => handleConfirm()}>Log In</Button>
        <Button onClick={() => console.log("TODO")}>Remember Me</Button>
      </Form>
      {error && <Error>{`error message: ${error} `}</Error>}
    </Card>
  );
}

export default AuthForm;
