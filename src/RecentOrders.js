import React from 'react';
import OrderRow from './OrderRow';

function RecentOrders() {
  return (
    <div className="details">
      <div className="recent">
        <div className="cardHead">
          <h2>Recent Orders</h2>
          <a href="#" className="btn">View All</a>  
        </div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Payment</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <OrderRow name="Floral Shirt" price="$429" payment="Paid" statusClass="inProgress" status="In Progress" />
            {/* Add other order rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
