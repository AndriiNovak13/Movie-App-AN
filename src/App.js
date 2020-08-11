import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Search from './components/Search';
import Main from './components/Main';
import Popup from './components/Popup';

import {fetchMoviesMain, fetchMoviesSearch, fetchCategory, setIdGenres, fetchMovie, closePopup} from './redux/actions/MoviesActions';


function App() {

  const dispatch = useDispatch();

  const {movies} = useSelector(({movies}) => movies);
  const category = useSelector(({movies}) => movies.category);

  const isLoaded = useSelector(({movies}) => movies.isLoaded);
  const isLoadedFilter = useSelector(({movies})=> movies.isLoadedFilter);

  const genresId = useSelector(({movies})=> movies.genres);

  const movie = useSelector(({movies})=> movies.movie)
  const isPopup = useSelector(({movies})=>movies.isPopup);


  // React.useEffect(()=>{
  //   dispatch(fetchMoviesMain(genresId));
  // }, [genresId]);


  React.useEffect(()=>{
    dispatch(fetchCategory());
    dispatch(fetchMoviesMain(genresId));
  }, []);

  const getFetchMoviesMainId = id => {
    dispatch(fetchMoviesMain(id))
  }

  const setMovieSearch = (name) => {
    dispatch(fetchMoviesSearch(name))
  }

  const setIdGeneresCategory = (id) => {
    dispatch(setIdGenres(id));
  }

  const setFetchMovie  = (idMovie) => {
    dispatch(fetchMovie(idMovie));
  }

  const closePopupNow = () => {
    dispatch(closePopup());
  }



  return (
      <div className="App">

        <Search setMovieSearch={setMovieSearch} setIdGeneresCategory={setIdGeneresCategory} genresId={genresId} />

        <Main
          movies={movies}
          isLoaded={isLoaded}
          setFetchMovie={setFetchMovie}

          category={category}
          isLoadedFilter={isLoadedFilter}
          setIdGeneresCategory={setIdGeneresCategory}
          genresId={genresId}
          getFetchMoviesMainId={getFetchMoviesMainId}
        />

        {isPopup && <Popup movie={movie} closePopupNow={closePopupNow} />}

      </div>

  );
}

export default App;
