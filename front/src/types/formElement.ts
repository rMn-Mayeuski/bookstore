import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";

interface FormElementError {
    text: string | null
    error: boolean
}
export interface FormElementProps {
    id: string
    title: string
    name?: string
    value?: string
    placeholder?: string
    error?: FormElementError
    disabled?: boolean
    required?: boolean
    className?: string
}

export interface InputProps extends FormElementProps {
    type?: HTMLInputTypeAttribute
    onChange: ChangeEventHandler<HTMLInputElement>
}