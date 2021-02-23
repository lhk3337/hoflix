import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import img from "assets/logo.png";
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  margin-left: 10px;
`;

const Item = styled.li`
  width: 100px;
  height: 60px;
  padding-top: 4px;
  text-align: center;
  border-bottom: 8px solid
    ${(props) => (props.current ? "#e50914" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 5px;
`;
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Img src={img} />
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">영 화</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">텔레비전</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">검 색</SLink>
      </Item>
    </List>
  </Header>
));
