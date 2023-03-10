import React, { FC } from 'react';
import Search from './Search/Search';
import logo from "../../../../assets/logo.svg"
import styles from "./Header.module.scss"
import Favorites from './Favorites/Favorites';
import Cart from './Cart/Cart';
import User from './User/User';
import { useScreenWidth } from '../../../../provider/ScreenWidthProvider';
import BurgerBTN from './BurgerBTN/BurgerBTN';
import { Link, NavLink } from 'react-router-dom';

const Header: FC = () => {

    const { screenWidth } = useScreenWidth()

    return (
        <header className={styles.headerContainer}>
            <NavLink to={"/home"} className={styles.headerContainerLogo}>
                <img src={logo} alt="logo" />
            </NavLink>
            {screenWidth > 977 ? <Search width='542px'/> : ""}
            <div className={styles.headerContainerLeft}>
                {screenWidth > 977 ? <Favorites/> : ""}
                <Cart/>
                {screenWidth > 977 ? <User/> : <BurgerBTN/>}
            </div>
        </header>
    );
};

export default Header;