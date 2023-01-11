import React, { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageProps } from '../../components/AppRoutes/Routes';
import BookList, { IBook } from '../../components/common/BookList/BookList';
import Subscription from '../../components/common/Subscription/Subscription';
import Title from '../../components/common/Title/Title';
import BookService from '../../services/BookService';

const MainPage: FC<PageProps> = ({title}) => {

    const [books, setBooks] = useState<IBook[]>([]);
    const [pages, setPages] = useState<[]>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const navigate = useNavigate()

    console.log(currentPage);
    
    const pageHandler = (e:any) => {
        setCurrentPage(e.target.id)
    }

    const getBooks = async () => {

        const docs  = await BookService.getBooks(currentPage);

        //@ts-ignore
        setBooks(docs.results)
        setPages(docs.dataInfo.countPage)
        setCurrentPage(currentPage)

        console.log(docs);
    }

    useEffect(() => {
        getBooks()
    }, [currentPage])

    return (
        <>
            <Title title={title}/>
            <BookList books={books}/>
            <Subscription/>
            <div>
                {pages?.map(i => { return <button onClick={pageHandler} id={i} key={i}>{i}</button>})}
            </div>
        </>
    );
};

export default MainPage;