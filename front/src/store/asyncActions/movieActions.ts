import {responseToJSONHandler} from "../../utils/responseUtil";
import { setMovieAction } from "../reducer/movieReducer";

export const getMovieCard = (id: number):any => {
    return (dispatch: any) => {
        fetch(`http://localhost:3001/book/${id}`)
            .then(responseToJSONHandler)
            .then(res => dispatch(setMovieAction(res)))
            .catch(console.error)
    }
}