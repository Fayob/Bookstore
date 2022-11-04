import React from 'react';
import Book from '../component/Book';
import Form from '../component/Form';

const data = [
  {
    id: 1,
    title: 'book title here',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'book title name',
    author: 'John Doe',
  },
  {
    id: 3,
    title: 'book title',
    author: 'John Doe',
  },
  {
    id: 4,
    title: 'another book title',
    author: 'John Doe',
  },
];

const Books = () => (
  <>
    {data.map((item) => <Book key={item.id} title={item.title} author={item.author} />)}
    <br />
    <br />
    <Form />
  </>
);

export default Books;
