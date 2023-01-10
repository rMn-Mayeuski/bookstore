import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import { IBook } from "../components/common/BookList/BookList";

export interface IBookAPIResponse {
    docs: IBook[]
    limit?: number
    page?: number
    pages?: number
    total?: number
}

export default class BookService {
    static async getBooks(): Promise<IBookAPIResponse> {
        return await HTTPService.get(`http://localhost:3001/book/test`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}