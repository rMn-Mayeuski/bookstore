import React, { FC } from 'react';
import notFound from "../../../assets/book.png"
import { IBook } from '../BookList/BookList';
import styles from "./Book.module.scss"

interface IBookProps {
    book: IBook
    index?: number
    onClick?: () => void
}

const Book: FC<IBookProps> = ({book}) => {
    return (
        <div className={styles.bookContent}>
            <div className={styles.bookContentTop}>
                <img src={book?.bookImg ? book?.bookImg : notFound} alt="book" />
            </div>
            <div className={styles.bookContentText}>
                <h2>
                    {book?.bookName}
                </h2>
                <p>
                    {book?.author}
                </p>
            </div>
            <div className={styles.bookContentBottom}>
                <p className={styles.bookContentBottomPrice}>
                    {book?.price}
                </p>
                <p className={styles.bookContentBottomRating}>
                    {book?.stars}
                </p>
            </div>
        </div>
    );
};

export default Book;