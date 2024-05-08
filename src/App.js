import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';
import CardBox from './CardBox';
import RecentOrders from './RecentOrders';
import './styles.css';
import BarChart from './Barchart';

function App() {
  const values = [1304, 2918, 184, 9354];

  // const [isNavActive, setIsNavActive] = useState(false);

  // const toggleNav = () => {
  //   setIsNavActive(!isNavActive);
  // };
  
  return (
    <div className="App">
      <NavBar />
      <TopBar />
      <div className="main">
        <CardBox />
        <RecentOrders />
        <BarChart values={values} />
      </div>
    </div>
  );
}

export default App;
