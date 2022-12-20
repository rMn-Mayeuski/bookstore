import React, { FC } from 'react';
import book from "../../../assets/book.png"
import styles from "./Book.module.scss"

const Book: FC = () => {
    return (
        <div className={styles.bookContent}>
            <div className={styles.bookContentTop}>
                <img src={book} alt="book" />
            </div>
            <div className={styles.bookContentText}>
                <h2>
                    Mastering ROS for Robotics Programming 
                </h2>
                <p>
                    by Lentin Joseph,  Apress 2018
                </p>
            </div>
            <div className={styles.bookContentBottom}>
                <p className={styles.bookContentBottomPrice}>
                    $31.38 
                </p>
                <p className={styles.bookContentBottomRating}>
                    Rating:4
                </p>
            </div>
        </div>
    );
};

export default Book;