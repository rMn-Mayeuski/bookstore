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
                        <p>
                            {book.author}
                        </p>
                        <MoreDetailsBtn 
                            onClick={MoreDetailsMenuActive}
                        />
                        <MoreDetailsMenu 
                            author={!!book.author ? book.author : "Unknown"}
                            menu={menuActive}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedBook;