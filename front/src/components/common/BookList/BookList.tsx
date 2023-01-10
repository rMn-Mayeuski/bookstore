import React, { FC } from 'react';
import Book from '../Book/Book';
import styles from "./BookList.module.scss"

export interface IBook{
    id?: number
    bookName?: string
    bookImg?: string
    author?: string
    price?: string
    publisher?: string
    year?: number
    pages?: number
    language?: string
    format?: string
    stars?: number
}

interface IBookListProps {
    books?: IBook[]
}

const BookList: FC<IBookListProps> = ({books = []}) => {
    return (
        <div className={styles.bookListWrappper}>
            {books.map((book, index) => {
                return (
                    <Book
                        book={book}
                        key={book?.id}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default BookList;