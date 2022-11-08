import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const removeBooks = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={() => removeBooks(id)}> Remove </button>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
