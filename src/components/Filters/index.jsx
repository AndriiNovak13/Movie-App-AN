import React from 'react';

import './Filters.scss';
import Filter from './Filter';

function Filters({category, isLoadedFilter, setIdGeneresCategory, genresId, getFetchMoviesMainId}) {
    const handleSetIdAndActive = () =>{
        setIdGeneresCategory(null);
        getFetchMoviesMainId(null)
    }
    return (
        <div className="filters">
            <ul className="filters__category">
                <li onClick={handleSetIdAndActive}  className={(genresId === null) ? 'active' : ''}>
                    MAIN
                </li>
                {
                    !isLoadedFilter ? <h5>Loading ...</h5>
                    :
                    category &&
                    category.map(item => (
                        <Filter key={item.id} item={item} setIdGeneresCategory={setIdGeneresCategory} id={item.id} genresId={genresId} getFetchMoviesMainId={getFetchMoviesMainId} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Filters;
