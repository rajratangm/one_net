import React, { useEffect } from "react";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./MainContainer";
import { MovieContainer } from "./MovieContainer";
import axios from "axios";
import { Now_Playing_Movie, options } from "../utils/constants";
// import { getNowPlayingMovies } from '../redux/movieSlice'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import SearchMovie from "./SearchMovie";
// import { useNavigate } from 'react-router-dom'
export const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.movie.toggle);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
};
