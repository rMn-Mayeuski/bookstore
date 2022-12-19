import React, { FC } from 'react';
import search from "../../../../../assets/search.svg"
import styles from "./Search.module.scss"

const Search: FC = () => {
    return (
        <form className={styles.headerSearch}>
            <input 
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