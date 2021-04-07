import React from 'react';

const DishItem = ({ name, price }) => {
  return (
    <div className="dish-item">
      <span className="dish-name">{ name }</span>
      <span className="dot-line"></span>
      <span className="dish-price">
        { price.toLocaleString('vi-VN') } Đ
      </span>
    </div>
  );
}

const Dishes = ({ dishes = [] }) => {
  return (
    <div className="dishes">
      {
        dishes.map((item, index) => (
          <DishItem key={`dish-${index}`} name={ item.name } price={ item.price } />
        ))
      }
    </div>
  );
}

export default Dishes;