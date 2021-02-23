import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarRating from "react-star-ratings";

const Container = styled.div`
  font-size: 18px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 210px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  margin-bottom: 8px;
  transition: opacity 0.1s linear;
`;
const Rating = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin: 10px 7px 30px;
  font-size: 18px;
`;

const Year = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 30px;
`;

const Div = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: column;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPosterSmall.png").default
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            <Title>
              {title.length > 18 ? `${title.substring(0, 18)}...` : title}
            </Title>
            <Year>{year}</Year>
            <Div>
              <StarRating
                rating={rating / 2}
                starRatedColor="yellow"
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="2px"
                starEmptyColor="grey"
              />
              {Math.round(rating)} / 10
            </Div>
          </span>
        </Rating>
      </ImageContainer>
    </Container>
  </Link>
);

Poster.proptypes = {
  id: Proptypes.number.isRequired,
  imageUrl: Proptypes.string,
  title: Proptypes.string.isRequired,
  rating: Proptypes.number,
  year: Proptypes.string,
  isMovie: Proptypes.bool,
};
export default Poster;
