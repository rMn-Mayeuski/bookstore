import React, {ChangeEventHandler, useState} from 'react';
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";

import styles from "./ResetPassword.module.scss";

interface ResetPasswordProps {
    email: string
}
const ResetPassword = () => {
    const [resetPassword, setResetPassword] = useState<ResetPasswordProps>({email: ""});

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: { value: email } }) => {
        setResetPassword(prevState => ({...prevState, email}));
    }

    const handleResetPassword = () => {
        console.log("reset password")
    }

    const resetPasswordConfig: AuthFormProps = {
        title: "Reset Password",
        inputs: [
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                type: "email",
                value: resetPassword.email,
                onChange: handleSetEmail,
                placeholder: "Your email",
                // error: formFieldsError?.email
            }
        ],
        actionButton: {
            onSubmit: handleResetPassword,
            title: "Reset"
        }
    }
    return (
        <div className={styles.pageWrapper}>
            <AuthForm {...resetPasswordConfig}/>
        </div>
    );
};

export default ResetPassword;