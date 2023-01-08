import React, { FC } from 'react';
import { IBook } from '../BookList/BookList';
import styles from "./SelectedBook.module.scss";

interface SelectedBookProps {
    book: IBook;
}

const SelectedBook: FC<SelectedBookProps> = ({book}) => {
    return (
        <div>
            {book.bookName}
        </div>
    );
};

export default SelectedBook;