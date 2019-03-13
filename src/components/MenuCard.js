/* eslint-disable camelcase */
import React from 'react';

const MenuCard = (props) => {
  const token = localStorage.getItem('token');
  const addButton = token ? <button type="button" className="addButton">Add food</button> : null;
  const { food } = props;
  const { food_name, food_price } = food;
  return (
    <div className="card">
      <div className="card-body row">
        <div className="col-sm-3">
          <h5>{food_name}</h5>
        </div>
        <div className="col-sm-3">
          <h5>{food_price}</h5>
        </div>
        <div className="col-sm-6">
          {addButton}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
