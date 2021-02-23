import axios from "axios";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1ca0919779771cad858efa04a2bc06c4",
    language: "ko-KR",
    region: "KR",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),

  //개별적으로 라우터 파라미터를 설정하는 방식
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("/tv/airing_today"),

  //개별적으로 라우터 파라미터를 설정하는 방식, api 전체를 위한 것이 아님
  showDetail: (id) =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: term,
      },
    }),
};
export default api;
