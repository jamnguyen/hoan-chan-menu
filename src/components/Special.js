import React from 'react';
import { GiNoodles } from 'react-icons/gi';

const Special = ({ dishes }) => {
  return (
    <div className="special">
      <h2><GiNoodles className="special-icon" />Đặc biệt!</h2>
      {
        dishes.map((item, index) => (
          <div key={`dish-special-${index}`} className="dish-special">
            <span className="dish-special-name">{ item.name }</span>
            <span className="dish-special-price">
              { item.price.toLocaleString('vi-VN') } Đ
            </span>
          </div>
        ))
      }
    </div>
  );
}

export default Special;