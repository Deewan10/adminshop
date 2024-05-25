import React from 'react';
import OrderRow from './OrderRow';
import PieChart from './PieChart';

function RecentOrders() {
  return (
    <div className="details1" >
      <div className="details" >
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
              <OrderRow name="Jean Short" price="$222" payment="Due" statusClass="pending" status="Pending" />
              <OrderRow name="Vintage Shirt" price="$209" payment="Paid" statusClass="delivered" status="Delivered" />
              <OrderRow name="Black Jacket" price="$399" payment="Paid" statusClass="return" status="Returned" />
              <OrderRow name="Blue Shirt" price="$429" payment="Paid" statusClass="inProgress" status="In Progress" />
              <OrderRow name="Jean Jacket" price="$522" payment="Due" statusClass="pending" status="Pending" />
              <OrderRow name="Milk Dress" price="$79" payment="Paid" statusClass="delivered" status="Delivered" />
              <OrderRow name="Black Hoodie" price="$399" payment="Paid" statusClass="return" status="Returned" />
          </tbody>
          </table>
        </div>
      </div>
      <div className="pie-container">
        <div className="pie">
          <h2>Analytics</h2>
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default RecentOrders;
