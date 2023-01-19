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
        allPages: number
        allPosts: number
    }
}

export default class BookService {
    static async getBooks(): Promise<IBookAPIResponse> {
        return await HTTPService.get(`http://localhost:3001/book/?page=2&limit=5`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}