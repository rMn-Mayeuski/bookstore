import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import { IBook } from "../components/common/BookList/BookList";

export interface IMovieAPIResponse {
    docs: IBook[]
    limit?: number
    page?: number
    pages?: number
    total?: number
}

export default class BookService {
    static async getBooks(): Promise<IMovieAPIResponse> {
        return await HTTPService.get(`http://localhost:3001/book`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}