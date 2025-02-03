import logo from './logo.svg';
import './App.css';
import ShopItemFunc from './components/ShopItemFunc.jsx';
<<<<<<< HEAD
import item from './items/item';
=======
import item from './items/item.js';
>>>>>>> 5dda0659c92cff8d80227528906619f6409d6661

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
