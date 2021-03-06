import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
  :not(:first-child) {
    margin-top: 25px;
  }
`;
const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
`;
const Grid = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 25px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-gap: 1px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default Section;
