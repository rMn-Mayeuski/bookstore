import React, { FC, MouseEventHandler, useState } from 'react';
import { IBook } from '../BookList/BookList';
import MoreDetailsBtn from './MoreDetailsBtn/MoreDetailsBtn';
import MoreDetailsMenu from './MoreDetailsMenu/MoreDetailsMenu';
import styles from "./SelectedBook.module.scss";

interface SelectedBookProps {
    book: IBook;
}

const SelectedBook: FC<SelectedBookProps> = ({book}) => {

    const [menuActive, setMenuActive] = useState(false);

    const MoreDetailsMenuActive = () => setMenuActive(!menuActive)

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
                        <p>
                            {book.price}
                        </p>
                        <p>
                            {book.stars}
                        </p>
                    </div>
                    <div className={styles.bookConteinerTopRightDetails}>
                        <div className={styles.bookConteinerTopRightDetailsBlock}>
                            <p className={styles.bookConteinerTopRightDetailsBlockText}>
                                Authors
                            </p>
                            <p className={styles.bookConteinerTopRightDetailsBlockTextMain}>
                                {book.author}
                            </p>
                        </div>
                        <div className={styles.bookConteinerTopRightDetailsBlock}>
                            <p className={styles.bookConteinerTopRightDetailsBlockText}>
                                Publisher
                            </p>
                            <p className={styles.bookConteinerTopRightDetailsBlockTextMain}>
                                {book.publisher}
                            </p>
                        </div>
                        <div className={styles.bookConteinerTopRightDetailsBlock}>
                            <p className={styles.bookConteinerTopRightDetailsBlockText}>
                                Language
                            </p>
                            <p className={styles.bookConteinerTopRightDetailsBlockTextMain}>
                                {book.language}
                            </p>
                        </div>
                        <MoreDetailsBtn 
                            onClick={MoreDetailsMenuActive}
                            menu={menuActive}
                        />
                        <MoreDetailsMenu 
                            format={!!book.format ? book.format : "Unknown"}
                            pages={!!book.pages ? book.pages : "Unknown"}
                            year={!!book.year ? book.year : "Unknown"}
                            menu={menuActive}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedBook;