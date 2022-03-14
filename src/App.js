import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
const dataOver = require('./mockado/over.json')
const dataUnder = require('./mockado/under.json')

function App() {
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <div className='body'>
      <Cart data={dataOver} />
      <Cart data={dataUnder} />
    </div>
  );
}

export default App;
