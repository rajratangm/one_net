export const API_END_POINT = 'http://localhost:8080/api/v1/user'
// export const API_END_POINT = 'https://netflix-clone-fd8h.onrender.com/api/v1/user';


export const Now_Playing_Movie = 'https://api.themoviedb.org/3/movie/now_playing';
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWEyY2MzMmFmOWMyMjUyMzk5YTc4NzMwZjI1NjUxYiIsInN1YiI6IjY2Mzc0YjMxMGY1MjY1MDEyNWJiYmQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rkHRtwOC2qTIGbUwifC7KeMhwEwHG9_i9f3kLkqTxZ4'
  }
};

export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";


export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

