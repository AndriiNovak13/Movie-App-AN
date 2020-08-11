import React from 'react';

import './Popup.scss'

function Popup({movie, closePopupNow}) {
    return (
        <div className='popup'>
            <div className="container">
                <div className="popup__inner">
                    <div className="popup__title">
                        {movie.title}
                        <span>({movie.release_date})</span>
                        <p>
                            Rating: {movie.vote_average}
                        </p>
                    </div>
                    <div className="popup__box">
                        <div className="popup__photo">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="photoPopup"/>
                        </div>
                        <div className="popup__desc">
                            {movie.overview}
                        </div>
                    </div>
                    <button onClick={()=>closePopupNow()}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;
