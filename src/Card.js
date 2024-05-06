import React from 'react';

function Card({ num, cardname, iconClass }) {
  return (
    <div className="card">
      <div className="text">
        <div className="num">{num}</div>
        <div className="cardname">{cardname}</div>
      </div>
      <div className="iconbx">
        <i className={iconClass}></i>
      </div>
    </div>
  );
}

export default Card;
