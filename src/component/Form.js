import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    id: '',
    title: '',
    author: '',
  });

  const addBooks = () => {
    if (!state.title || !state.author) {
      alert('pls enter book title and author');
      return;
    }
    dispatch(addBook(state));

    setState({
      id: '',
      title: '',
      author: '',
    });
  };

  const onChangeHandler = (e) => {
    setState({
      ...state,
      id: v4(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Book Title"
        name="title"
        value={state.title}
        onChange={onChangeHandler}
      />
      <select name="author" value={state.author} onChange={onChangeHandler}>
        <option value="">
          Author
        </option>
        <option value="option-1">
          Option-1
        </option>
        <option value="option-2">
          Option-2
        </option>
        <option value="option-3">
          Option-3
        </option>
      </select>
      <button type="button" onClick={addBooks}> Add Book </button>
    </>
  );
};

// Form.propTypes = {
//   addBook: PropTypes.func.isRequired,
// removeBook: PropTypes.func.isRequired,
// };

export default Form;
