import {responseToJSONHandler} from "../../utils/responseUtil";
import { setBookAction } from "../reducer/bookReducer";

export const getBookCard = (id: number):any => {
    return (dispatch: any) => {
        fetch(`http://localhost:3001/book/${id}`)
            .then(responseToJSONHandler)
            .then(res => dispatch(setBookAction(res)))
            .catch(console.error)
    }
}