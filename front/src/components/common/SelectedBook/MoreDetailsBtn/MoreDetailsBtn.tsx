import React, { MouseEventHandler } from 'react';
import arrow from "../../../../assets/vector.svg"
import styles from "./MoreDetailsBtn.module.scss"

interface IMoreDetailsBtn {
    onClick: MouseEventHandler
    menu: boolean
}

const MoreDetailsBtn: React.FC<IMoreDetailsBtn> = ({onClick, menu}) => {
    return (
        <button
        className={styles.button} 
        type='button' 
        onClick={onClick}
    >
        {!!menu 
            ?
            <>
                <p>Hide More Detailse</p>
                <img className={styles.arrow} src={arrow} alt="arrow" />
            </>
            :
            <>
                <p>Show More Detailse</p>
                <img src={arrow} alt="arrow" />
            </>
        }
    </button>
    );
};

export default MoreDetailsBtn;