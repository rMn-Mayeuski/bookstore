import React, { FC } from 'react';
import { IBurgerMenuCondition } from '../../../../types/types';
import Search from '../Header/Search/Search';
import styles from "./BurgerMenu.module.scss"
import MenuBTN from './MenuBTN/MenuBTN';

const BurgerMenu: FC<IBurgerMenuCondition> = ({
    menuActive = false,
    handleClickAway,
}
) => {

    const handlerStylesBurgerMenu = menuActive ? styles.burgerMenuActive : styles.burgerMenu;

    return (
        <div 
            className={handlerStylesBurgerMenu}
            onClick={handleClickAway}
        >
            <div className={styles.burgerMenuContent}>
                <Search width='246px'/>
                <MenuBTN title='sign in'/>
            </div>
        </div>
    );
};

export default BurgerMenu;