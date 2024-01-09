import React, { useEffect } from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import { useState } from "react";
const MovieList = () => {
  // useEffect(() => {
  //     fetch("https://api.themoviedb.org/3/movie/popular?api_key=b69caf0b8190dd45dfe61e38c12dba36")
  //         .then((res) => res.json())
  //         .then((result) => {
  //             console.log(result);
  //             // Further processing or state updates can be done here
  //         })
  //         .catch((error) => {
  //             console.error("Error fetching data:", error);
  //             // Handle errors, if any
  //         });
  // }, []);


  const[Movies,Setmovies]=useState([])
//   console.log(Movies,'display data to check')

//   using async in of js 
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b69caf0b8190dd45dfe61e38c12dba36"
    );
    const data=await response.json()
    // console.log(data)
    // console.log(data.results)
    Setmovies(data.results)
  };

  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular
          <img src={Fire} alt="fire" className="navbar_emoji" />
        </h2>

        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li className=" active movie_filter_item">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBY</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {/* //it runs twenty times  */}
        {
            Movies.map((movie)=>(
<MovieCard key={movie.id} movie={movie} />
            ))}
      </div>
    </section>
  );
};

export default MovieList;
