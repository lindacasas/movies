import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from '../components/Header';

const MovieDetail = () => {
  const { id, title } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=eefedc7814de090a64f2d854190ae4c2`
        );
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        setError('Error al cargar los detalles de la película');
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1>{title}</h1>
        {error && <p className="text-danger">{error}</p>}
        {!error && (
          <>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt={title} className="img-fluid mb-4" />
            <p>{movieDetail.overview}</p>
            <p><strong>Calificación:</strong> {movieDetail.vote_average?.toFixed(1)}</p>
            <p><strong>Fecha de lanzamiento:</strong> {movieDetail.release_date}</p>
            <p><strong>Género:</strong> {movieDetail.genres?.map(genre => genre.name).join(', ')}</p>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetail;
