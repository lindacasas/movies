import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isRequestDone, setIsRequestDone] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?api_key=eefedc7814de090a64f2d854190ae4c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'
        );
        const data = await response.json();
        setMovieList(data.results);
        setFilteredMovies(data.results);
        setIsRequestDone(true);
      } catch (error) {
        console.error('Error al cargar las películas', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filter = searchParams.get('filter');
    const sort = searchParams.get('sort');

    let updatedMovies = [...movieList];

    if (filter === 'top3') {
      updatedMovies = updatedMovies.sort((a, b) => b.vote_average - a.vote_average).slice(0, 3);
    } else if (sort === 'date') {
      updatedMovies = updatedMovies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    } else if (sort === 'title') {
      updatedMovies = updatedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredMovies(updatedMovies);
  }, [location, movieList]);

  const handleSearch = (searchTerm) => {
    const searchResults = movieList.filter(movie => 
      movie.release_date.includes(searchTerm) ||
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.vote_average.toString().includes(searchTerm)
    );
  
    const sortedResults = searchResults.sort((a, b) => b.vote_average - a.vote_average);
  
    setFilteredMovies(sortedResults);
  };
  

  return (
    <>
      <Header onSearch={handleSearch} />
      <div id="container" className="container" >
        <div className="row">
          {filteredMovies.map((movie, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 container-card">
              <MovieCard
                titleName={movie.title}
                posterPath={movie.poster_path}
                movieId={movie.id}
                releaseDate={movie.release_date}
                voteAverage={movie.vote_average}
                overview={movie.overview}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
