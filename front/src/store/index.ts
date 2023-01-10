import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { bookReducer } from "./reducer/bookReducer";
// import { moviesReducer } from "./reducer/moviesReducer";
// import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
    bookCard: bookReducer,
    // movieCards: moviesReducer,
    // favorites: moviesReducer,
    // user: userReducer,
});

export const store = createStore(rootReducer, (applyMiddleware(thunk)));
export type RootStore = ReturnType<typeof store.getState>;
// export const getUser = ({ user }: RootStore) => user;