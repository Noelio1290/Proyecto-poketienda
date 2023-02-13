import './App.css';
import { useState } from 'react';
import ItemContainer from './Components/Item-Container';
import Total from './Components/Total';
import ButtonPago from './Components/Button-Pay';
import Wallet from './Components/Wallet';

const itemsList = [
  {
      name:"Potion",
      cost: 200,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png"

  },
  {
      name:"Super-potion",
      cost:700,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png"

  },
  {
      name:"Hyper-potion",
      cost: 1500,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png"
  }    
]

function App() {
  //variable for Total
  let [totalAmount, setTotalAmount] = useState(0)
  //Variable for MyMoney
  let [myMoneyTotalAmount, setMyMoneyTotalAmount] = useState(1000)
  
  //Methods for var Total
  const increaseAmount  = costItem =>{
    setTotalAmount(totalAmount + costItem)
  };
  const drecreaseAmount  = costItem =>{
    if((totalAmount - costItem) <= 0) {
      setTotalAmount(0)
    } else {
      setTotalAmount(totalAmount - costItem)
    }
  };

  return (
    <div className="App">
      <div className='item-counter'>
        <ItemContainer increaseAmount={increaseAmount} drecreaseAmount={drecreaseAmount} items={itemsList}/>
      </div>
      <div className='wallet-zone'>
        <div className='total'>Total:
          <Total amount={totalAmount}/>
        </div>
        <div className='button-Pay'>
          <ButtonPago/>
        </div>
        <div className='wallet'>
          <Wallet myMoneyTotalAmount={myMoneyTotalAmount} setMyMoneyTotalAmount={setMyMoneyTotalAmount}/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
