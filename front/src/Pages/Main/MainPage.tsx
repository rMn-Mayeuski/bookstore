import React, { FC, useEffect, useState } from 'react';
import { PageProps } from '../../components/AppRoutes/Routes';
import BookList, { IBook } from '../../components/common/BookList/BookList';
import Subscription from '../../components/common/Subscription/Subscription';
import Title from '../../components/common/Title/Title';
import BookService from '../../services/BookService';
import Pagination from '../../components/common/Pagination/Pagination';
import styles from "./MainPage.module.scss"

const MainPage: FC<PageProps> = ({title}) => {

    const [isLoading, setIsLoading] = useState<boolean>()

    const [books, setBooks] = useState<IBook[]>([]);
    const [pages, setPages] = useState<[]>()
    const [totalPages, setTotalPages] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const pageHandler = (e:any) => {
        setCurrentPage(e.target.id)
    }

    const getBooks = async () => {
        setIsLoading(true)
        
        const docs  = await BookService.getBooks(currentPage);

        setBooks(docs.results)
        setPages(docs.dataInfo.countPage)
        setTotalPages(docs.dataInfo.allPages)

        console.log(docs);

        setIsLoading(false)
    }

    useEffect(() => {
        getBooks()
    }, [currentPage])

    return (
        <>
            <Title title={title}/>
            {!!isLoading ? "Loading" 
                : 
            <BookList books={books}/>
            }
            <Pagination 
                currentPage={currentPage}
                lastPage={totalPages}
                maxLength={7}
                setCurrentPage={setCurrentPage}
                />
            <Subscription/>

                {/* <div className={styles.pagination}>
                    {pages?.map(i => { return <button onClick={pageHandler} id={i} key={i}>{i}</button> })}
                </div> */}
        </>
    );
};

export default MainPage;