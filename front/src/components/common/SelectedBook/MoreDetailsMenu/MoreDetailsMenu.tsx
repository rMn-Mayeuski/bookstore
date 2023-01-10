import React from 'react';
import styles from "./MoreDetailsMenu.module.scss"

interface IMoreDetailsMenu {
    menu: boolean
    onClick: any 
    author: any
}

const MoreDetailsMenu: React.FC<IMoreDetailsMenu> = ({author, menu = false, onClick}) => {

    const handlerStylesDetailsMenu = menu ? styles.menuActive : styles.menuHide;

    return (
        <div className={handlerStylesDetailsMenu} onClick={onClick}>
            <p>{author}</p>
        </div>
    );
};

export default MoreDetailsMenu;