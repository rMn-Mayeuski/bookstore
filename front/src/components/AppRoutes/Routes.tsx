import React, {FC} from 'react';
import AccountPage from '../../Pages/Account/AccountPage';
import BookPage from '../../Pages/Book/BookPage';
import CartPage from '../../Pages/Cart/CartPage';
import FavoritesPage from '../../Pages/Favorites/FavoritesPage';
import MainPage from '../../Pages/Main/MainPage';
import SearchPage from '../../Pages/Search/SearchPage';
import SignIn from "../../Pages/SignIn/SignIn";
import ResetPassword from "../../Pages/ResetPassword/ResetPassword";
import SignUp from "../../Pages/SignUp/SignUp";
import NewPassword from "../../Pages/NewPassword/NewPassword";

export interface PageProps {
    title?: string
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
}

export interface IRoute extends RouteObject{
    path: string,
    Element: FC<PageProps>,
    title?: string
}

export enum Routes {
    main = "/home",
    account = "/account",
    book = "/book",
    cart = "/cart",
    favorites = "/favorites",
    search = "/search",
    signIn = "/signin",
    signUp = "/signup",
    resetPassword = "/reset-password",
    newPassword = "/new-password"
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.main, Element: MainPage, title: "New Releases Books"},
    {path: Routes.account, Element: AccountPage, title: "Account"},
    {path: Routes.book, Element: BookPage},
    {path: Routes.cart, Element: CartPage, title: "Your cart"},
    {path: Routes.favorites, Element: FavoritesPage, title: "Favorites"},
    {path: Routes.search, Element: SearchPage},
    {path: Routes.signIn, Element: SignIn},
    {path: Routes.signUp, Element: SignUp},
    {path: Routes.resetPassword, Element: ResetPassword},
    {path: Routes.newPassword, Element: NewPassword},
]

export const PRIVATE_ROUTES: IRoute[] = [
    ...PUBLIC_ROUTES,
]