import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

const rotate = keyframes`
0%
{
    transform:rotate(0deg);
}
100%{
    transform:rotate(360deg);
}
`;
const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(#33ccff, #ff0066);
  animation: ${rotate} 0.5s linear infinite;
  &:after {
    content: "";
    position: absolute;
    top: 50px;
    left: 50px;
    right: 50px;
    bottom: 50px;

    border-radius: 50%;
  }
`;
const Span = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(#33ccff, #ff0066);
  &:nth-child(1) {
    filter: blur(5px);
  }
  &:nth-child(2) {
    filter: blur(10px);
  }
  &:nth-child(3) {
    filter: blur(25px);
  }
  &:nth-child(4) {
    filter: blur(50px);
  }
`;

const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  margin-top: 30px;
`;
const Dot = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 5px;
  background-color: transparent;
  opacity: 0.5;

  &:nth-child(1) {
    animation: scaling 2.5s 0.1s ease-out infinite;
  }
  &:nth-child(2) {
    animation: scaling 2.5s 0.2s ease-out infinite;
  }
  &:nth-child(3) {
    animation: scaling 2.5s 0.3s ease-out infinite;
  }
  &:nth-child(4) {
    animation: scaling 2.5s 0.4s ease-out infinite;
  }
  &:nth-child(5) {
    animation: scaling 2.5s 0.5s ease-out infinite;
  }
  &:nth-child(6) {
    animation: scaling 2.5s 0.6s ease-out infinite;
  }
  @keyframes scaling {
    0% {
      top: 2px;
    }
    1% {
      top: 4px;
    }
    2% {
      top: 6px;
    }
    3% {
      top: 8px;
    }
    4% {
      top: 10px;
    }
    5% {
      top: 12px;
      opacity: 1;
    }
    6% {
      top: -2px;
      opacity: 1;
    }
    7% {
      top: -4px;
      opacity: 1;
    }
    8% {
      top: -6px;
      opacity: 1;
    }
    9% {
      top: -8px;
      opacity: 1;
    }
    10% {
      top: -10px;
      opacity: 1;
    }
    11% {
      top: -12px;
      opacity: 1;
    }
    12% {
      top: 0;
      opacity: 0.5;
    }
    100% {
      top: 0;
      opacity: 0.5;
    }
  }
`;
const Char = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 15px;
`;
const Loader = () => (
  <Container>
    <Content>
      <Span />
      <Span />
      <Span />
      <Span />
    </Content>
    <DotContainer>
      <div>
        <Dot>
          <Char>로</Char>
        </Dot>
        <Dot>
          <Char>딩</Char>
        </Dot>
        <Dot>
          <Char>중</Char>
        </Dot>
      </div>
    </DotContainer>
  </Container>
);

export default Loader;
