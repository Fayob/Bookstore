import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const status = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="status_container">
      <h2 className="status">{categories}</h2>
      <button type="button" onClick={status} className="check_status_btn"> Check Status </button>
    </div>
  );
};

export default Categories;
