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

    return (
        <>
            <div className={styles.wrapper}>
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