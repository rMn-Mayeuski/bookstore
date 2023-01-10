import { Reducer } from "redux";
import { IBook } from "../../components/common/BookList/BookList";

enum BookActions {
    SET_BOOK = "SET_BOOK",
}

interface IInitialState {
    bookCard: IBook | null
}

const initialState: IInitialState = {
    bookCard: null,
}

export const bookReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case BookActions.SET_BOOK:
            return {state, bookCard: action.payload}
        default:
            return state
    }
}

export const setBookAction = (payload: any) => ({type: BookActions.SET_BOOK, payload});




