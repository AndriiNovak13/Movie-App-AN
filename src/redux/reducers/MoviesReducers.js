import actionTypes from '../actionTypes';

const initialState = {
    movies: [],
    category: [],
    movie:{},
    isLoaded: false,
    isLoadedFilter: false,
    genres: null,
    isPopup: false
}

const movies = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_MOVIES: {
            return {
                ...state,
                movies: action.payload,
                isLoaded: true
            }
        }

        case actionTypes.GET_CATEGORY: {
            return {
                ...state,
                category: action.payload,
                isLoadedFilter: true
            }
        }

        case actionTypes.GET_MOVIE: {
            return {
                ...state,
                movie: action.payload,
                isPopup: true
            }
        }

        case actionTypes.SET_LOADED: {
            return {
                ...state,
                isLoaded:action.payload
            }
        }
        case actionTypes.SET_LOADED_FILTER: {
            return {
                ...state,
                isLoadedFilter:action.payload
            }
        }

        case actionTypes.GET_ID_CATEGORY: {
            return {
                ...state,
                genres: action.payload
            }
        }

        case actionTypes.CLOSE_POPUP: {
            return {
                ...state,
                isPopup: false,
                movie: {}
            }
        }


        default: return state;
    }
}

export default movies;