import React from 'react';
import Card from './Card';

function CardBox() {
  return (
    <div className="cardBox">
      <Card num="1304" cardname="Daily Views" iconClass="fa fa-eye" />
      <Card num="2,918" cardname="Sales" iconClass="fa fa-shopping-cart" />
      {/* Add other cards here */}
    </div>
  );
}

export default CardBox;
