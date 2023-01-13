import React, {ChangeEventHandler, useState} from 'react';
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";

import styles from "./NewPassword.module.scss";

interface NewPasswordProps {
    newPassword: string
    confirmPassword: string
}

const NewPassword = () => {
    const [newPasswordForm, setNewPasswordForm] = useState<NewPasswordProps>({
        newPassword: "",
        confirmPassword: ""
    });

    const handleSetNewPassword: ChangeEventHandler<HTMLInputElement> = ({target: { value: newPassword } }) => {
        setNewPasswordForm(prevState => ({...prevState, newPassword}));
    }

    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: { value: confirmPassword } }) => {
        setNewPasswordForm(prevState => ({...prevState, confirmPassword}));
    }

    const handleSetPassword = () => console.log("Set Password");

    const newPasswordFormConfig: AuthFormProps = {
        title: "New Password",
        inputs: [
            {
                title: "Password",
                id: "newPassword",
                name: "userNewPassword",
                type: "password",
                value: newPasswordForm.newPassword,
                onChange: handleSetNewPassword,
                placeholder: "Your password"
            },
            {
                title: "Confirm Password",
                id: "confirmPassword",
                name: "userConfirmPassword",
                type: "password",
                value: newPasswordForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                placeholder: "Confirm your password"
            }
        ],
        actionButton: {
            onSubmit: handleSetPassword,
            title: "Set Password"
        }

    }

    return (
        <div className={styles.pageWrapper}>
            <AuthForm {...newPasswordFormConfig}/>
        </div>
    );
};

export default NewPassword;