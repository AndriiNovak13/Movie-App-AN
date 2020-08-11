import React from 'react';

import './Movies.scss';
import Movie from './Movie';

function Movies({movies,isLoaded, setFetchMovie}) {
    return (
        <div className="movies">
            <div className="movies__box">
                {
                    
                    !isLoaded ? <h2>Loading ...</h2>
                    :
                    movies.length> 0 ?
                    movies.map((item) => (
                        <Movie
                            key={item.id}
                            item={item}
                            setFetchMovie={setFetchMovie}
                            idMovie={item.id}
                        />
                    ))
                    :
                    <h2>Not found</h2>
                }
                
            </div>
        </div>
    )
}

export default Movies
