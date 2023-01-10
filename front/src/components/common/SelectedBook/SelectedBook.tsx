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

    const burgerMenuActive = () => setMenuActive(!menuActive)

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            burgerMenuActive()
        }
    }

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
                        <p>{book.price}</p>
                        <p>{book.stars}</p>
                    </div>
                    <div className={styles.bookConteinerTopRightDetails}>
                        <p>{book.author}</p>
                        <MoreDetailsBtn onClick={burgerMenuActive}/>
                        <MoreDetailsMenu 
                            author={book.author}
                            menu={menuActive}
                            onClick={handleClickAway}
                            />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedBook;