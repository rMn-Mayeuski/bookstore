import React, { FC } from 'react';
import Book from '../Book/Book';

export interface IBook{
    id?: number
    bookName?: string
    bookImg?: string
    author?: string
    price?: string
    stars?: number
}

interface IBookListProps {
    books?: IBook[]
}

const BookList: FC<IBookListProps> = ({books = []}) => {
    return (
        <div>
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