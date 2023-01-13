import React, {ChangeEventHandler, useState} from 'react';
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";

import styles from "./SignIn.module.scss";

interface SignInFormProps {
    email: string,
    password: string
}
const SignIn = () => {
    const [signInForm, setSignInForm] = useState<SignInFormProps>({email: "", password: ""});

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: { value: email } }) => {
        setSignInForm(prevState => ({...prevState, email}));
    }

    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: { value: password } }) => {
        setSignInForm(prevState => ({...prevState, password}));
    }

    const handleSignIn = () => {
        console.log("sign in")
    }

    const signInFormConfig: AuthFormProps = {
        title: "",
        inputs: [
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                type: "email",
                value: signInForm.email,
                onChange: handleSetEmail,
                placeholder: "Your email",
                // error: formFieldsError?.email
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                type: "password",
                value: signInForm.password,
                onChange: handleSetPassword,
                placeholder: "Your password",
                // error: formFieldsError?.password
            }
        ],
        actionButton: {
            onSubmit: handleSignIn,
            title: "Sign In"
        }
    }

    return (
        <div className={styles.pageWrapper}>
          <AuthForm {...signInFormConfig}/>
        </div>
    );
};

export default SignIn;