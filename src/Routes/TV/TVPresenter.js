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

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>텔레비전 | hoflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="최고 프로그램">
            {topRated.map((show) => (
              <Poster
                id={show.id}
                key={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}

        {popular && popular.length > 0 && (
          <Section title="현재 인기 프로그램">
            {popular.map((show) => (
              <Poster
                id={show.id}
                key={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}

        {airingToday && airingToday.length > 0 && (
          <Section title="오늘의 프로그램">
            {airingToday.map((show) => (
              <Poster
                id={show.id}
                key={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} />}
      </Container>
    )}
  </>
);
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
