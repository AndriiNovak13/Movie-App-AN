import React from 'react'

function Movie({item, setFetchMovie, idMovie}) {
    const handleSetFetchMovie = () => {
        setFetchMovie(idMovie);
    }
    return (
        <div className="movies__item" onClick={handleSetFetchMovie}>
            <div className="movies__item-img">
                {
                    item.poster_path &&
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="photo"/>
                }
            </div>
            <div className="movies__item-title">
                {item.title}
            </div>
        </div>
    )
}

export default Movie;
