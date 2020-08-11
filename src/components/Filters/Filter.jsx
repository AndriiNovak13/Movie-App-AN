import React from 'react';

function Filter({item, setIdGeneresCategory, id, genresId, getFetchMoviesMainId}) {
    const handleSetIdGeneresCategory = () => {
        setIdGeneresCategory(id);
        getFetchMoviesMainId(id)
    }
    return (
        
        <li onClick={handleSetIdGeneresCategory} className={genresId === id ? 'active' : ''} >
            {item.name}
        </li>
    )
}

export default Filter;
