import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import { IBook } from "../components/common/BookList/BookList";

export interface IBookAPIResponse {
    results: IBook[]
    limit?: number
    page?: number
    pages?: number
    total?: number
    dataInfo: {
        countPage: []
        allPages: number
        
    }
}

export default class BookService {

    static async getBooks(page: number): Promise<IBookAPIResponse> {
        return await HTTPService.get(`http://localhost:3001/book?page=${page}&limit=1`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}