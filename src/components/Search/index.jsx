import React from 'react';

import './Search.scss'

function Search({setMovieSearch, setIdGeneresCategory, genresId}) {
    const [inputValue, setInputValue] = React.useState('');

    const getMovieName = (e) => {
        if(e.key === 'Enter'){
            if(inputValue){
                setMovieSearch(inputValue);
                setInputValue('');
                genresId !==null && setIdGeneresCategory(null);
            }
        }
    }

    return (
        <div className="search">
            <div className="container">

                <h1>
                    Movie App
                </h1>

                <div className="search__inner">
                    <input 
                        type="text" 
                        className="search__input"
                        placeholder="Enter a movie title . . ."
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}
                        onKeyPress={getMovieName}
                    />
                </div>

            </div>
        </div>
    )
}

export default Search;
