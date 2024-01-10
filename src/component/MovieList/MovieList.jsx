
import React, { useEffect } from "react";
import _ from 'lodash';

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import { useState } from "react";
import FilterGroup from "./FilterGroup";

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

  const [Movies, Setmovies] = useState([]);
  const [filterMovies, Setfiltermovies] = useState([]);
  const [rateing, Setrate] = useState(0);
  const [sort,setSort]=useState(
    {
      by:"default",
      order:"asc"
    }
  )


  //   using async in of js
  useEffect(() => {
    fetchMovies();
  }, []);


  useEffect(() => {
    if(sort.by!=='default'){
      
      const sortedMovies=_.orderBy(filterMovies,[sort.by],[sort.order])
      Setfiltermovies(sortedMovies)      
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b69caf0b8190dd45dfe61e38c12dba36"
    );
    const data = await response.json();
    Setmovies(data.results);
    Setfiltermovies(data.results);
  };

  // console.log(Movies)

  const handleFilter = (rate) => {
      if (rateing===rate){
          Setrate(0)
          Setfiltermovies(Movies)

      }else{
        Setrate(rate);
        const filterMovie = Movies.filter((movie) => {
          return movie.vote_average >= rate;
        });
        Setfiltermovies(filterMovie);
      }
  };





const handleSort=e=>{
  const {name,value}=e.target

  setSort((prev)=>{
    return {...prev,[name]:value}
  })
}
// console.log(sort)



  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular
          <img src={Fire} alt="fire" className="navbar_emoji" />
        </h2>

        <div className="movie_list_fs">
          
         <FilterGroup  rateing={rateing} onRatingClick={handleFilter}/>

          <select name="by" id="" onChange={handleSort} value={sort.by} className="movie_sorting">
            <option value="default">SortBY</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>



          <select name="order" id="" onChange={handleSort} value={sort.order} className="movie_sorting">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {/* //it runs twenty times  */}
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
