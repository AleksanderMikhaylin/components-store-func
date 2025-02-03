import logo from './logo.svg';
import './App.css';
import ShopItemFunc from './components/ShopItemFunc.jsx';
import item from './items/item';

function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item}/>
    </div>
  </div>
  );
}

export default App;
