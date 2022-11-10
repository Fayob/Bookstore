import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const removeBooks = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book_card">
      <div>
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="book_paragraph">{author}</p>
        <button type="button" onClick={() => removeBooks(id)} className="comment_book"> Comments </button>
        <button type="button" onClick={() => removeBooks(id)} className="remove_book"> Remove </button>
        <button type="button" onClick={() => removeBooks(id)} className="edit_book"> Edit </button>
      </div>
      <div className="percentage">
        <div className="circle" />
        <span>
          <p className="percent">80%</p>
          <p className="completed">Completed</p>
        </span>
      </div>
      <div className="progress_container">
        <p className="current_chapter">CURRENT CHAPTER</p>
        <p className="chapter">CHAPTER 17</p>
        <button type="button" className="update_progress_btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
