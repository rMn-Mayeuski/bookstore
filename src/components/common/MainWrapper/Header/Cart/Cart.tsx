import React, { FC } from 'react';
import cart from "../../../../../assets/cart.svg"
import styles from "../Header.module.scss"

const Cart: FC = () => {
    return (
        <div className={styles.cart}>
            <img src={cart} alt="Cart" />
        </div>
    );
};

export default Cart;