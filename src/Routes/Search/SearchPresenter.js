import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import SearchIcon from "@material-ui/icons/Search";
import Helmet from "react-helmet";
import Message from "Components/Message";
import Poster from "Components/Poster";
const Container = styled.div`
  margin: 50px 60px;
`;
const Form = styled.form`
  margin-bottom: 30px;
  width: 100%;
  background-color: #262626;
  border-radius: 6px;
  padding: 10px 15px;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  margin-left: 10px;
  width: 100%;
`;
const SearchContainer = styled.div`
  display: flex;
`;
const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  updateTerm,
  error,
}) => (
  <Container>
    <Helmet>
      <title>검색 | hoflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchIcon fontSize="large" style={{ color: "#919193" }} />
        <Input
          placeholder="hoflix 영화 및 TV 프로 검색"
          value={searchTerm}
          onChange={updateTerm}
        />
      </SearchContainer>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="찾은 영화">
            {movieResults.map((movie) => (
              <Poster
                id={movie.id}
                key={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={
                  movie.release_date === undefined
                    ? ""
                    : movie.release_date.substring(0, 4)
                }
                isMovie={true}
              />
            ))}
          </Section>
        )}

        {tvResults && tvResults.length > 0 && (
          <Section title="찾은 티비 프로">
            {tvResults.map((show) => (
              <Poster
                id={show.id}
                key={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={
                  show.first_air_date === undefined
                    ? ""
                    : show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} />}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
