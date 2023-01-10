import React, { FC, MouseEventHandler } from 'react';
import styles from "./MoreDetailsMenu.module.scss"

interface IMoreDetailsMenu {
    menu: boolean
    author: string 
}

const MoreDetailsMenu: FC<IMoreDetailsMenu> = ({author, menu = false}) => {

    const handlerStylesDetailsMenu = menu ? styles.menuActive : styles.menuHide;

    return (
        <div className={handlerStylesDetailsMenu}>
            <p>{author}</p>
        </div>
    );
};

export default MoreDetailsMenu;