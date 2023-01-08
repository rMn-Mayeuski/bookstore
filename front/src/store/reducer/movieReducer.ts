import { Reducer } from "redux";
import { IBook } from "../../components/common/BookList/BookList";

enum MoviesActions {
    SET_MOVIE = "SET_MOVIE",
}

interface IInitialState {
    movieCard: IBook | null
}

const initialState: IInitialState = {
    movieCard: null,
}

export const movieReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case MoviesActions.SET_MOVIE:
            return {state, movieCard: action.payload}
        default:
            return state
    }
}

export const setMovieAction = (payload: any) => ({type: MoviesActions.SET_MOVIE, payload});




