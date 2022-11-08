import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const status = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <h2>{categories}</h2>
      <h2>{ categories }</h2>
      <button type="button" onClick={status}> Check Status </button>
    </div>
  );
};

export default Categories;
