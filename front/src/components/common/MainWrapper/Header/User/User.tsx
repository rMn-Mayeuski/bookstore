import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import user from "../../../../../assets/user.svg"
import styles from "../Header.module.scss"

const User: FC = () => {
    return (
        <div className={styles.user}>
            <NavLink to="/signin">
                <img src={user} alt="User" />
            </NavLink>
        </div>
    );
};

export default User;