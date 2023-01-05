import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import favorites from "../../../../../assets/favorites.svg"
import styles from "../Header.module.scss"

const Favorites: FC = () => {
    return (
        <NavLink to={"/favorites"}>
            <div className={styles.favotites}>
                <img src={favorites} alt="Favorites" />
            </div>
        </NavLink>
    );
};

export default Favorites;