import React, { FC } from 'react';
import logo from "../../../../assets/logo.svg"
import styles from "./Header.module.scss"

const Header: FC = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
        </header>
    );
};

export default Header;