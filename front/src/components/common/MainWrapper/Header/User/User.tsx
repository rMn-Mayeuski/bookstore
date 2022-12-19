import React, { FC } from 'react';
import user from "../../../../../assets/user.svg"
import styles from "../Header.module.scss"

const User: FC = () => {
    return (
        <div className={styles.user}>
            <img src={user} alt="User" />
        </div>
    );
};

export default User;