import React, { FC } from 'react';
import { IBook } from '../BookList/BookList';
import styles from "./SelectedBook.module.scss";

interface SelectedBookProps {
    book: IBook;
}

const SelectedBook: FC<SelectedBookProps> = ({book}) => {
    return (
        <section className={styles.bookConteiner}>
            <h1 className={styles.bookConteinerTitle}>
                {book.bookName}
            </h1>
            <div className={styles.bookConteinerTop}>
                <div className={styles.bookConteinerTopLeft}>
                    <img src={book.bookImg} alt="Book cover" />
                </div>
                <div className={styles.bookConteinerTopRight}>
                    <div className={styles.bookConteinerTopRightPriceAndRating}>
                        <p>${book.price}</p>
                        <p>{book.stars}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedBook;