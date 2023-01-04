import React, { FC } from 'react';
import { useMenu } from '../../../../provider/BurgerMenuProvider';
import { IBurgerMenuCondition } from '../../../../types/types';
import BurgerBTN from '../Header/BurgerBTN/BurgerBTN';
import Search from '../Header/Search/Search';
import styles from "./BurgerMenu.module.scss"
import MenuBTN from './MenuBTN/MenuBTN';

const BurgerMenu: FC<IBurgerMenuCondition> = ({
    menuActive = false,
    handleClickAway,
}
) => {
    const menu = useMenu()

    const handlerStylesBurgerMenu = menu.open ? styles.burgerMenuActive : styles.burgerMenu;

    const handlerStylesBurgerMenuBackground = menu.open ? styles.burgerMenuBackgroundActive : "";

    return (
        <div className={handlerStylesBurgerMenuBackground} onClick={handleClickAway}>
            <div 
            className={handlerStylesBurgerMenu}
        >
            <BurgerBTN/>
                <div className={styles.burgerMenuContent}>
                    <Search width='246px'/>
                    <MenuBTN title='sign in'/>
                </div>
            </div>
        </div>
        
    );
};

export default BurgerMenu;