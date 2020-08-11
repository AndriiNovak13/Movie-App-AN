import actionsTypes from '../actionTypes';
import axios from 'axios';

const API_URL =`https://api.themoviedb.org/3/`;
const API_KEY='api_key=1758775020531967fa47acbcea8cf470';

export const setLoaded = val => ({
    type: actionsTypes.SET_LOADED,
    payload: val
});

export const setLoadedFilter = val => ({
    type: actionsTypes.SET_LOADED_FILTER,
    payload: val
});

export const fetchMoviesMain = (idCat) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`${API_URL}discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&page=1${idCat !== null ? `&with_genres=${idCat}` : ''}`)
        .then(({data}) => {
            dispatch(getMovies(data.results));
        })
        .catch((er)=>{
            console.log(404);
        })
}

export const fetchMoviesSearch = (name) => (dispatch) => {
    dispatch(setLoaded(false));

    axios.get(`${API_URL}search/movie?${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
        .then(({data}) => {
            dispatch(getMovies(data.results));
        })
        .catch((er)=>{
            console.log(404);
        })
}

export const fetchCategory = () => (dispatch) => {
    dispatch(setLoadedFilter(false));

    axios.get(`${API_URL}genre/movie/list?${API_KEY}&language=en-US`)
        .then(({data}) => {
            dispatch(getCategory(data.genres));
        })
        .catch((er)=>{
            console.log(404);
        })
}

export const fetchMovie = (idMovie) => (dispatch) => {
    axios.get(`${API_URL}movie/${idMovie}?${API_KEY}&language=en-US`)
        .then(({data}) => {
            dispatch(getMovie(data));
        })
        .catch((er)=>{
            console.log(404);
        })
}

export const getMovies = (info) => ({
    type: actionsTypes.GET_MOVIES,
    payload: info
});

export const getMovie = (info) => ({
    type: actionsTypes.GET_MOVIE,
    payload: info
})

export const getCategory = (items) => ({
    type: actionsTypes.GET_CATEGORY,
    payload: items
});

export const setIdGenres = (id) => ({
    type: actionsTypes.GET_ID_CATEGORY,
    payload: id
})

export const closePopup = () => ({
    type: actionsTypes.CLOSE_POPUP
})

