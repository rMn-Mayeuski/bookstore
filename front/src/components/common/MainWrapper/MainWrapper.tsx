import React, { FC, ReactNode } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from "./MainWrapper.module.scss" 

export interface IWithChildren {
    children?: ReactNode,
}

const MainWrapper: FC<IWithChildren> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainWrapper;