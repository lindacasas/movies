import MovieCard from '../components/MovieCard'
import Header from '../components/Header'
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [movieList, setMovieList] = useState({});
    const [isRequestDone, setIsRequestDone] = useState(false);

    useEffect(() => {
        // Sustituir <api_key> por su api_key generada propia
        const request = fetch('https://api.themoviedb.org/3/discover/movie?api_key=eefedc7814de090a64f2d854190ae4c2')
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                setMovieList(json);
                setIsRequestDone(true);
            })
            .catch(error => {
                console.log('An error ocurred');
                console.log(error);
            });
    }, [isRequestDone]);


    return (
        <>
            <Header />
            <div>
            {
                movieList.results?.map((movie, index) => <MovieCard titleName={movie.title} posterPath={movie.poster_path} movieId={movie.id} />)
            }
            </div>
        </>
        
    )
}

export default HomePage;