import React from 'react';

import './Main.scss';
import Filters from '../Filters';
import Movies from '../Movies';

function Main({movies, isLoaded, category, isLoadedFilter, setIdGeneresCategory, setFetchMovie, genresId, getFetchMoviesMainId}) {
    return (
        <div className="main">
            <div className="container">
                <div className="main__box">
                    <Filters
                        category={category}
                        isLoadedFilter={isLoadedFilter}
                        setIdGeneresCategory={setIdGeneresCategory}
                        genresId={genresId}
                        getFetchMoviesMainId={getFetchMoviesMainId}
                    />
                    <Movies 
                        movies={movies} 
                        isLoaded={isLoaded}
                        setFetchMovie={setFetchMovie}
                    />
                </div>
            </div>
        </div>
    )
}

export default Main;
