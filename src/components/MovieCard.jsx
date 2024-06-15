import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ titleName, posterPath, movieId, releaseDate, voteAverage, overview }) => {
  const posterPathImageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  return (
    <div className="card">
      <figure className="movieCard">
        <img src={posterPathImageUrl} alt={titleName} className="imgMovies" />
        <figcaption className="movieInfo">
          <h4 className="titleInfo">
            <Link to={`/movieDetail/${movieId}/${titleName}`}>{titleName}</Link>
            <span className="rating">{voteAverage.toFixed(1)}</span>
          </h4>
          <p><strong>Año:</strong> {new Date(releaseDate).getFullYear()}</p>
          <p><strong>Fecha de lanzamiento:</strong> {releaseDate}</p>
          <p className="overview"><strong>Trama:</strong> {overview}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default MovieCard;