import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../component/Book';
import Form from '../component/Form';
import { getAllBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const bookState = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      {
        Object.keys(bookState).map((book) => {
          const { title, author, category } = bookState[book][0];
          return (
            <Book
              key={book}
              title={title}
              author={author}
              id={book}
              category={category}
            />
          );
        })
}
      <br />
      <br />
      <Form />
    </>
  );
};

export default Books;
