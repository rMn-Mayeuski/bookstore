import React, {FC, MouseEventHandler} from 'react';
import {Routes} from "../../AppRoutes/Routes";
import {InputProps} from "../../../types/formElement";
import Input from "../Input/Input";
import {Link, useMatch} from "react-router-dom";
import Button from "../Button/Button";

import styles from "./AuthForm.module.scss";
export interface AuthFormProps {
    title: string
    actionButton: {
        title: string
        onSubmit: MouseEventHandler<HTMLButtonElement>
    }
    inputs?: InputProps[]
    topDescription?: string
}
const AuthForm: FC<AuthFormProps> = (
    {
        title = "",
        actionButton,
        inputs= [],
        topDescription
    }) => {

    const isSignInPage = useMatch(Routes.signIn);
    const isSignUpPage = useMatch(Routes.signUp);

    return (
        <form className={styles.form}>
            {(isSignInPage || isSignUpPage)
                ?
                <div className={styles.formTabs}>
                    <div className={`${styles.tab} ${isSignInPage ? styles.active : ""}`}>
                        <Link className={styles.link} to={Routes.signIn}>Sign In</Link>
                    </div>
                    <div className={`${styles.tab} ${isSignUpPage ? styles.active : ""}`}>
                        <Link className={styles.link} to={Routes.signUp}>Sign Up</Link>
                    </div>
                </div>
                :
                <div className={styles.formTitle}>{title}</div>
            }
            {!!topDescription &&
                <p
                    className={styles.formDescription}
                    dangerouslySetInnerHTML={{__html: topDescription}}
                >
                </p>
            }
            <div className={styles.formInputs}>
                {inputs.map(input => <Input className={styles.formInput} key={input.id} {...input}/>)}
            </div>
            {isSignInPage &&
                <Link
                    className={styles.formForgotPassword}
                    to={Routes.resetPassword}
                >
                    Forgot Password?
                </Link>
            }
            <Button className={styles.formSubmitButton} onClick={actionButton.onSubmit}>
                {actionButton.title}
            </Button>
        </form>
    );
};

export default AuthForm;