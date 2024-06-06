import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MainPage = () => {

    const [movieList, setMovieList] = useState({});
    const [isRequestDone, setIsRequestDone] = useState(false);

    useEffect(() => {
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
    <div>
        <h1>Aquí van mis cards</h1>

        {
            movieList.results?.map((movie, index) => <MovieCard titleName={movie.title} posterPath={movie.poster_path} />)
        }

    </div>
)
}

export default MainPage;