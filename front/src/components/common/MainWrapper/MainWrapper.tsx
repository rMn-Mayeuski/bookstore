import React, { FC, ReactNode } from 'react';
import { useMenu } from '../../../provider/BurgerMenuProvider';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from "./MainWrapper.module.scss" 

export interface IWithChildren {
    children?: ReactNode,
}

const MainWrapper: FC<IWithChildren> = ({children}) => {

    const menu = useMenu()

    const menuOpen = menu.open ? styles.wrapperMenuOpen : styles.wrapper;

    return (
        <>
            <div className={menuOpen}>
                <Header/>
                {children}
                <Footer/>
            </div>
            <BurgerMenu
                menuActive={menu.menuActive} 
                handleClickAway={menu.handleClickAway}
            />
        </>
    );
};

export default MainWrapper;