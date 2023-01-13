import React, {FC, MouseEventHandler} from 'react';

import styles from "./Button.module.scss";
import {IWithChildren} from "../../../types/types";

export enum ButtonVariant {
    primary = "primary",
    secondary = "secondary"
}

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
    type?: ButtonType
    variant?: ButtonVariant
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}

const Button: FC<ButtonProps & IWithChildren> = (
    {
        variant = ButtonVariant.primary,
        type= "button",
        onClick,
        className= "",
        children
    }) => {
    return (
        <button
            onClick={onClick}
            className={`
                ${styles.button} 
                ${className} 
                ${variant === ButtonVariant.primary ? styles.primary : styles.secondary}
            `}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;