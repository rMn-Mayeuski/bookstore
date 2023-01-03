import React, { FC } from 'react';
import search from "../../../../../assets/search.svg"
import styles from "./Search.module.scss"

interface ISearch {
    width: string
}

const Search: FC<ISearch> = ({width}) => {
    return (
        <form 
            className={styles.headerSearch} 
        >
            <input
                style={{width}} 
                type="text"
                placeholder='Search'
            />
            <button type='submit'>
                <img src={search} alt="Button search" />            
            </button>
        </form>
    );
};

export default Search;