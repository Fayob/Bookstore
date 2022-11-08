import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../component/Book';
import Form from '../component/Form';

const Books = () => {
  const bookState = useSelector((state) => state.book);

  return (
    <>
      {bookState.map(({ id, title, author }) => (
        <Book
          key={id}
          title={title}
          author={author}
          id={id}
        />
      ))}
      <br />
      <br />
      <Form />
    </>
  );
};

export default Books;
