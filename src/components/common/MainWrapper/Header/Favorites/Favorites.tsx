import React, { FC } from 'react';
import favorites from "../../../../../assets/favorites.svg"
import styles from "../Header.module.scss"

const Favorites: FC = () => {
    return (
        <div className={styles.favotites}>
            <img src={favorites} alt="Favorites" />
        </div>
    );
};

export default Favorites;