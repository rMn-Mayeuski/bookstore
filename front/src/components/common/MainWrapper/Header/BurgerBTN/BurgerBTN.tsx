import React, { FC } from 'react';
import { useMenu } from '../../../../../provider/BurgerMenuProvider';
import styles from "./BurgerBTN.module.scss"

const BurgerBTN: FC = () => {

    const menu = useMenu()

    const burger = menu.open ? styles.burgerOpen : styles.burger

    const lineTop = menu.open ? styles.burgerOpenLineTop : ""

    const lineCenter = menu.open ? styles.burgerOpenLineCenter : ""

    const lineBottom = menu.open ? styles.burgerOpenLineBottom : ""

    return (
        <div 
            className={burger}
            onClick={menu.handleToggleBurgerMenu}
            >
                <span className={lineTop}></span>
                <span className={lineCenter}></span>
                <span className={lineBottom}></span>
        </div>
    );
};

export default BurgerBTN;