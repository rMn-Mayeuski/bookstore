import React, { FC } from 'react';
import Search from './Search/Search';
import logo from "../../../../assets/logo.svg"
import styles from "./Header.module.scss"
import Favorites from './Favorites/Favorites';
import Cart from './Cart/Cart';
import User from './User/User';

const Header: FC = () => {
    return (
        <header className={styles.headerContainer}>
            <img src={logo} alt="logo" />
            <Search/>
            <div className={styles.headerContainerLeft}>
                <Favorites/>
                <Cart/>
                <User/>
            </div>
        </header>
    );
};

export default Header;