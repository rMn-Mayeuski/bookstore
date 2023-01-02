import { MouseEventHandler, ReactNode } from "react";

export interface ScreenWidthValue {
    screenWidth: number
}
export interface IWithChildren {
    children?: ReactNode,
}
export interface IBurgerMenuCondition {
    menuActive?: boolean;
    open?: boolean;
    handleClickAway?: MouseEventHandler;
    handleToggleBurgerMenu?: MouseEventHandler;
}