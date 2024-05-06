import React from 'react';

function OrderRow({ name, price, payment, statusClass, status }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{payment}</td>
      <td><span className={`status ${statusClass}`}>{status}</span></td>
    </tr>
  );
}

export default OrderRow;
