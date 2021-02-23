import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Helmet from "react-helmet";
import Poster from "Components/Poster";
const Container = styled.div`
  padding: 30px 32px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>영화 | hoflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="지금 상영중">
            {nowPlaying.map((movie) => (
              <Poster
                id={movie.id}
                key={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section> //<Section title="">children</Section> title는 props, children은 value
        )}

        {upcoming && upcoming.length > 0 && (
          <Section title="개봉 예정 영화">
            {upcoming.map((movie) => (
              <Poster
                id={movie.id}
                key={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}

        {popular && popular.length > 0 && (
          <Section title="인기 영화">
            {popular.map((movie) => (
              <Poster
                id={movie.id}
                key={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} />}
      </Container>
    )}
  </>
);
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
