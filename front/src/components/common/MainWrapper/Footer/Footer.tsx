import React, { FC } from 'react';
import styles from "./Footer.module.scss"

const Footer: FC = () => {
    return (
        <footer className={styles.footerConteiner}>
            <p>
                ©2022 Bookstore
            </p>
            <p>
                All rights reserved
            </p>
        </footer>
    );
};

export default Footer;