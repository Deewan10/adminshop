import React from 'react';
import Card from './Card';

function CardBox() {
  return (
    <div className="cardBox">
      <Card num="1304" cardname="Daily Views" iconClass="fa fa-eye" />
      <Card num="2,918" cardname="Sales" iconClass="fa fa-shopping-cart" />
      <Card num="184" cardname="Comments" iconClass="fa fa-comments" />
      <Card num="$9,354" cardname="Earnins" iconClass="fa fa-arrow-down" />

    </div>
  );
}

export default CardBox;
