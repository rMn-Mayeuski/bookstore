import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IBook } from '../../components/common/BookList/BookList';
import SelectedBook from '../../components/common/SelectedBook/SelectedBook';
import { getBookCard } from '../../store/asyncActions/bookActions';
import { setBookAction } from '../../store/reducer/bookReducer';

const BookPage: FC = () => {

    const dispatch = useDispatch();
    const {id = 1} = useParams();
    const [book, setBook] = useState<IBook | null>(null);

    const { bookCard } = useSelector((state: any) => state.bookCard)

    const getBook = async () => {
        await dispatch(getBookCard(+id))
    }

    useEffect(() => {
        dispatch(setBookAction(null))
        getBook()
    }, [id])

    useEffect(() => {
        setBook(bookCard)
    })
    
    return (
        <>
        {!!book ?
            <SelectedBook book={book}/>
            :
            ""
        }
        </>
    );
};

export default BookPage;