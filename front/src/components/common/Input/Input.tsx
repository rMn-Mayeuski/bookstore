import React, {FC} from 'react';
import {InputProps} from "../../../types/formElement";

import styles from "./Input.module.scss";

const Input: FC<InputProps> = (
    {
        id = "",
        title= "",
        type = "text",
        value = "",
        name= "",
        onChange,
        placeholder= "",
        error= {text: null, error: false},
        disabled = false,
        className= ""
    }) => {
    return (
        <div className={`${styles.wrapper} ${!!className ? className : ""}`}>
            <label className={`${styles.wrapperLabel}`} htmlFor={id}>
                {title}
                <input
                    className={`${styles.wrapperInput} ${error?.error ? styles.error: ""}`}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    placeholder={placeholder}
                />
            </label>
            {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
        </div>
    );
};

export default Input;