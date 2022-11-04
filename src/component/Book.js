/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ title, author }) => (
  <>
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="button"> Remove </button>
  </>
);

export default Book;
