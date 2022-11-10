import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const addBooks = () => {
    if (!state.title || !state.author || !state.category) {
      alert('pls enter book title, author and category in the required field');
      return;
    }
    dispatch(postBook(state));

    setState({
      item_id: '',
      title: '',
      author: '',
      category: '',
    });
  };

  const onChangeHandler = (e) => {
    setState({
      ...state,
      item_id: v4(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2 className="form_heading">Add New Book</h2>
      <form className="form">
        <div
          className="book_title"
        >
          <input
            type="text"
            placeholder="Book Title"
            name="title"
            value={state.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="book_title">
          <input
            type="text"
            placeholder="Book Author"
            name="author"
            value={state.author}
            onChange={onChangeHandler}
          />
        </div>
        <div className="select_container">
          <select name="category" value={state.category} onChange={onChangeHandler} className="select">
            <option value="">
              Category
            </option>
            <option value="Fiction">
              Fiction
            </option>
            <option value="Economy">
              Economy
            </option>
            <option value="Action">
              Action
            </option>
            <option value="Horror">
              Horror
            </option>
          </select>
        </div>
        <button type="button" onClick={addBooks} className="add_book"> ADD BOOK </button>
      </form>
    </>
  );
};

// Form.propTypes = {
//   addBook: PropTypes.func.isRequired,
// removeBook: PropTypes.func.isRequired,
// };

export default Form;
