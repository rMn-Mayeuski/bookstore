import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from "../../../assets/book.png"
import { IBook } from '../BookList/BookList';
import styles from "./Book.module.scss"

interface IBookProps {
    book: IBook
    index?: number
}

const Book: FC<IBookProps> = ({book}) => {

    const navigate = useNavigate();
    const handleBookPageOpen = () => navigate(`/book/${book?.id}`)

    return (
        <div 
            className={styles.bookContent}
            onClick={handleBookPageOpen}
        >
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