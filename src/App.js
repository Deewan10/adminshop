import React, { useState } from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';
import CardBox from './CardBox';
import RecentOrders from './RecentOrders';

import './styles.css';

function App() {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleToggleClick = () => {
    setIsNavActive(!isNavActive);
  };


  return (
    <div className="App">
      <NavBar isNavActive={isNavActive} handleToggleClick={handleToggleClick} />
      <TopBar />
      <div  className={`main ${isNavActive ? 'active' : ''}`}>
        <CardBox />
        <RecentOrders />
      </div>
    </div>
  );
}

export default App;
