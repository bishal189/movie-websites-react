import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";
const MovieCard = ({movie}) => {
    // console.log(movie,'i am a movie but i cant disply sorry')
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className="movie_card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="image unloaded"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className="movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.rate_average} <img src={Star} alt="" className="card_emoji" />
          </p>
        </div>

        <p className="movie_description">
         {movie.overview.slice(0,100)+"..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
