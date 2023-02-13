import './App.css';
import { useState } from 'react';
import ItemContainer from './Components/Item-Container';
import Total from './Components/Total';
import ButtonPago from './Components/Button-Pay';
import Wallet from './Components/Wallet';
import ButtonAdd from './Components/Button-Add';
import ButtonRemove from './Components/Button-Remove';

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
  //variable for 
  let [totalAmount, setTotalAmount] = useState(0)

  const increaseAmount  = costItem =>{
    setTotalAmount(totalAmount + costItem)
  };
  const drecreaseAmount  = costItem =>{
    if(totalAmount !== 0)
    setTotalAmount(totalAmount - costItem)
  };

  return (
    <div className="App">
      <div className='item-counter'>
        <ItemContainer increaseAmount={increaseAmount} drecreaseAmount={drecreaseAmount} items={itemsList}/>
      </div>
      <div className='wallet-zone'>
        <div className='total'>increaseAmount
          <Total amount={totalAmount}/>
        </div>
        <div className='button-Pay'>
          <ButtonPago/>
        </div>
        <div className='wallet'>
          <Wallet/>
          <div className='wallet buttons'>
            <ButtonAdd/>
            <ButtonRemove/>
          </div>
        </div>
        <div className='input'>
          <input type="text" name="entrada-dinero" />
        </div>  
      </div>
      
      
    </div>
  );
}

export default App;
