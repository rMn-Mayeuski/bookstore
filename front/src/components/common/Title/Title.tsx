import React, { FC, ReactNode } from 'react';
import styles from "./Title.module.scss"

interface ITitle {
    title: ReactNode,
}

const Title: FC<ITitle> = ({title}) => {
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
    );
};

export default Title;