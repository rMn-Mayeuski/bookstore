import React, {ChangeEventHandler, useState} from 'react';
import AuthForm, {AuthFormProps} from "../../components/common/AuthForm/AuthForm";

import styles from "./SignUp.module.scss";

interface SignUpFormProps {
    name: string
    email: string
    password: string
    confirmPassword: string
}
const SignUp = () => {
    const [signUpForm, setSignUpForm] = useState<SignUpFormProps>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: {value: name} }) => {
        setSignUpForm(prevState => ({...prevState, name}));
    }
    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email} }) => {
        setSignUpForm(prevState => ({...prevState, email}));
    }
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password} }) => {
        setSignUpForm(prevState => ({...prevState, password}));
    }
    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword} }) => {
        setSignUpForm(prevState => ({...prevState, confirmPassword}));
    }

    const handleSignUp = () => {
        console.log("sign up")
    }

    const signUpFormConfig: AuthFormProps = {
        title: "",
        inputs: [
            {
                title: "Name",
                id: "name",
                name: "userName",
                value: signUpForm.name,
                onChange: handleSetName,
                placeholder: "Your name",
                // error: formFieldsError?.email
            },
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                type: "email",
                value: signUpForm.email,
                onChange: handleSetEmail,
                placeholder: "Your email",
                // error: formFieldsError?.email
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                type: "password",
                value: signUpForm.password,
                onChange: handleSetPassword,
                placeholder: "Your password",
                // error: formFieldsError?.email
            },
            {
                title: "Confirm Password",
                id: "confirmPassword",
                name: "userConfirmPassword",
                type: "password",
                value: signUpForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                placeholder: "Confirm your password",
                // error: formFieldsError?.password
            }
        ],
        actionButton: {
            onSubmit: handleSignUp,
            title: "Sign Up"
        }
    }
    return (
        <div className={styles.pageWrapper}>
            <AuthForm {...signUpFormConfig}/>
        </div>
    );
};

export default SignUp;