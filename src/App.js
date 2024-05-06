import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';
import CardBox from './CardBox';
import RecentOrders from './RecentOrders';
import './styles.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TopBar />
      <div className="main">
        <CardBox />
        <RecentOrders />
      </div>
    </div>
  );
}

export default App;
