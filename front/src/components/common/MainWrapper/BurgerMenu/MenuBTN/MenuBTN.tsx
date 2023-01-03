import React, { FC } from 'react';
import styles from "./MenuBTN.module.scss"

interface IMenuBTN {
    title: string
}

const MenuBTN: FC<IMenuBTN> = ({title}) => {
    return (
        <button type='button' className={styles.button}>
            {title}
        </button>
    );
};

export default MenuBTN;