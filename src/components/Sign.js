import React from 'react';
import { AiOutlineFire } from "react-icons/ai";

const Sign = ({ title }) => {
  return (
    <div className="sign">
      <AiOutlineFire className="icon" />
      <h1>{ title }</h1>
    </div>
  );
}

export default Sign;