import React, { FC, useEffect, useState } from 'react';
import { PageProps } from '../../components/AppRoutes/Routes';
import BookList, { IBook } from '../../components/common/BookList/BookList';
import Subscription from '../../components/common/Subscription/Subscription';
import Title from '../../components/common/Title/Title';
import BookService from '../../services/movieService';

const MainPage: FC<PageProps> = ({title}) => {

    const [books, setBooks] = useState<IBook[]>([]);

    const getBooks = async () => {

        const docs  = await BookService.getBooks();

        const books = await docs;

        //@ts-ignore
        setBooks(books)

        console.log(books);
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            <Title title={title}/>
            <BookList books={books}/>
            <Subscription/>
        </>
    );
};

export default MainPage;