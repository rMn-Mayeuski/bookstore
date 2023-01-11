import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import { IBook } from "../components/common/BookList/BookList";

export interface IBookAPIResponse {
    docs: IBook[]
    limit?: number
    page?: number
    pages?: number
    total?: number
    dataInfo: {
        countPage: []
    }
}

export default class BookService {
    static async getBooks(page: number): Promise<IBookAPIResponse> {
        return await HTTPService.get(`http://localhost:3001/book?page=${page}&limit=5`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}