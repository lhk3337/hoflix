import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import IMDB from "assets/imdb.png";
import Youtube from "react-youtube";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 40px;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 600px;
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  padding-left: 50px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;
const SubTitle = styled.h3`
  margin: 12px 0px;
`;

const ItemContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const Item = styled.div``;

const Divider = styled.div`
  margin: 0 10px;
`;

const Overview = styled.p`
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5;
`;

const Imdb = styled.span`
  margin: 0px 8px;
`;

const ComponyLogoImg = styled.img`
  background-color: rgb(145, 145, 147);
  border-radius: 3px;
  width: 5%;
  padding: 2px;

  margin-left: 3px;
`;
const VideoContainer = styled.div`
  text-align: center;
  justify-content: center;
`;

const VideoContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 12px;
`;

const TableContainer = styled.div`
  overflow-x: scroll;
  height: 240px;
  display: flex;
  white-space: nowrap;
`;

const SeasonContainer = styled.div`
  text-align: center;
`;

const SeasonImg = styled.img`
  width: 150px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  height: 200px;
`;

const opts = {
  height: "400px",
  width: "700px",
};
const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>읽는 중 | hoflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | hoflix</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date === undefined ||
                  result.release_date === null
                  ? "Not Found Year"
                  : `${result.release_date.substring(0, 4)}년`
                : result.first_air_date === null ||
                  result.first_air_date === undefined
                ? "Not Found Year"
                : `${result.first_air_date.substring(0, 4)}년`}
            </Item>

            <Divider>•</Divider>
            <Item>
              {result.runtime
                ? result.runtime === undefined ||
                  result.runtime === null ||
                  result.runtime === 0
                  ? "Not Found Time"
                  : `${result.runtime}분`
                : (result.episode_run_time &&
                    result.episode_run_time[0] === undefined) ||
                  (result.episode_run_time &&
                    result.episode_run_time[0] === null)
                ? "Not Found Time"
                : `${result.episode_run_time && result.episode_run_time[0]}분`}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Imdb>
              {result.imdb_id ? (
                <a href={`http://imdb.com/title/${result.imdb_id}`}>
                  <img src={IMDB} />
                </a>
              ) : (
                ""
              )}
            </Imdb>
            {result.production_companies &&
              result.production_companies.map((logo) =>
                logo.logo_path !== null ? (
                  <ComponyLogoImg
                    key={logo.id}
                    src={`https://image.tmdb.org/t/p/original${logo.logo_path}`}
                  />
                ) : (
                  ""
                )
              )}
            <Divider></Divider>
            <Item>
              {result.production_countries &&
                result.production_countries.map((country, index) =>
                  index === result.production_countries.length - 1
                    ? country.name
                    : `${country.name} / `
                )}
            </Item>
          </ItemContainer>
          <SubTitle>줄거리</SubTitle>
          <Overview>{result.overview}</Overview>
          <VideoContainer>
            <hr />
            <VideoContent>
              {result.videos.results && result.videos.results.length > 0 && (
                <Youtube videoId={result.videos.results[0].key} opts={opts} />
              )}
            </VideoContent>
          </VideoContainer>

          <TableContainer>
            {result.seasons &&
              result.seasons.map((season) =>
                season.poster_path !== null ? (
                  <SeasonContainer>
                    <SeasonImg
                      key={season.season_number}
                      src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                    />
                    <h2>{season.name}</h2>
                  </SeasonContainer>
                ) : (
                  ""
                )
              )}
          </TableContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
