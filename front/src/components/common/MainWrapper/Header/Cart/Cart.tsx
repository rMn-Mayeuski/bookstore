import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cart from "../../../../../assets/cart.svg"
import styles from "../Header.module.scss"

const Cart: FC = () => {
    return (
        <NavLink to={"/cart"}>
            <div className={styles.cart}>
                <img src={cart} alt="Cart" />
            </div>
        </NavLink>
    );
};

export default Cart;