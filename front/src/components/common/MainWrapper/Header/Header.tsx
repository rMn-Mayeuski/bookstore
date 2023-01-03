import React, { FC } from 'react';
import Search from './Search/Search';
import logo from "../../../../assets/logo.svg"
import styles from "./Header.module.scss"
import Favorites from './Favorites/Favorites';
import Cart from './Cart/Cart';
import User from './User/User';
import { useScreenWidth } from '../../../../provider/ScreenWidthProvider';
import BurgerBTN from './BurgerBTN/BurgerBTN';

const Header: FC = () => {

    const { screenWidth } = useScreenWidth()

    return (
        <header className={styles.headerContainer}>
            <img src={logo} alt="logo" />
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