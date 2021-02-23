import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;
const Text = styled.span`
  margin-top: 80px;
`;
const H1 = styled.h1`
  font-size: 300px;
`;

const Message = ({ text }) => (
  <Container>
    <H1>404</H1>
    <Text>{text}</Text>
  </Container>
);
Message.proptypes = {
  text: Proptypes.string.isRequired,
};
export default Message;
