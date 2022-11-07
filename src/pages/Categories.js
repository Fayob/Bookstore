/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const status = () => {
    dispatch(checkStatus());
  };

  useEffect(() => {
    status();
  }, []);

  return (
    <div>
      {categories}
    </div>
  );
};

export default Categories;
