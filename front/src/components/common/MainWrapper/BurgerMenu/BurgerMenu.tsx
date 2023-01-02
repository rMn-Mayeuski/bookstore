import React, { FC } from 'react';
import { IBurgerMenuCondition } from '../../../../types/types';
import styles from "./BurgerMenu.module.scss"

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
        123
        </div>
    );
};

export default BurgerMenu;