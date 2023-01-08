import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IBook } from '../../components/common/BookList/BookList';
import SelectedBook from '../../components/common/SelectedBook/SelectedBook';
import { getMovieCard } from '../../store/asyncActions/movieActions';
import { setMovieAction } from '../../store/reducer/movieReducer';

const BookPage: FC = () => {

    const dispatch = useDispatch();
    const {id = 1} = useParams();
    const [book, setBook] = useState<IBook | null>(null);

    const { movieCard } = useSelector((state: any) => state.movieCard)

    const getMovie = async () => {
        await dispatch(getMovieCard(+id))
    }

    useEffect(() => {
        dispatch(setMovieAction(null))
        getMovie()
    }, [id])

    useEffect(() => {
        setBook(movieCard)
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