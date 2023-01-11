import React, { FC, MouseEventHandler } from 'react';
import styles from "./MoreDetailsMenu.module.scss"

interface IMoreDetailsMenu {
    menu: boolean
    format: string 
    pages: string 
    year: string 
}

const MoreDetailsMenu: FC<IMoreDetailsMenu> = ({format, pages, year, menu = false}) => {

    const handlerStylesDetailsMenu = menu ? styles.menuActive : styles.menuHide;

    return (
        <div className={handlerStylesDetailsMenu}>
            <div className={styles.menuActiveBlock}>
                <p className={styles.menuActiveBlockText}>
                    Format
                </p>
                <p className={styles.menuActiveBlockTextMain}>
                    {format}
                </p>
            </div>
            <div className={styles.menuActiveBlock}>
                <p className={styles.menuActiveBlockText}>
                    Pages
                </p>
                <p className={styles.menuActiveBlockTextMain}>
                    {pages}
                </p>
            </div>
            <div className={styles.menuActiveBlock}>
                <p className={styles.menuActiveBlockText}>
                    Year
                </p>
                <p className={styles.menuActiveBlockTextMain}>
                    {year}
                </p>
            </div>
        </div>
    );
};

export default MoreDetailsMenu;