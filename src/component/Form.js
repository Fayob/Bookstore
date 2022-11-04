import React from 'react';

const Form = () => (
  <>
    <input
      type="text"
      placeholder="Book Title"
    />
    <select>
      <option value="author">
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
    <button type="button"> Add Book </button>
  </>
);

export default Form;
