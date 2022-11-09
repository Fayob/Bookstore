import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    item_id: '',
    title: '',
    author: '',
  });

  const addBooks = () => {
    if (!state.title || !state.author) {
      alert('pls enter book title and author');
      return;
    }
    dispatch(postBook(state));

    setState({
      item_id: '',
      title: '',
      author: '',
    });
  };

  const onChangeHandler = (e) => {
    setState({
      ...state,
      item_id: v4(),
      [e.target.name]: e.target.value,
      category: 'Fiction',
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
        <option value="John Smith">
          John Smith
        </option>
        <option value="James Bond">
          James Bond
        </option>
        <option value="John Doe">
          John Doe
        </option>
        <option value="Lynn Vivian">
          Lynn Vivian
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
