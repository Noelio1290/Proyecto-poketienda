import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import ItemContainer from './Components/Item-Container';
import Total from './Components/Total';
import ButtonPago from './Components/Button-Pay';
import Wallet from './Components/Wallet';

export const acountCout = React.createContext();

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
  let [myMoneyTotalAmount, setMyMoneyTotalAmount] = useState(59000)
  //Variable for counter
  let [countersRecord, setCountersRecord] = useState(new Map())

  useEffect(()=>{
    const temporaryRecord = new Map()
    for (let index = 0; index < itemsList.length; index++) {
      const element = itemsList[index];
      const id = `Item-number-${index}`;
      temporaryRecord.set(id, {...element, id, counter: 0})
    }
    setCountersRecord(temporaryRecord)
  }, [])

  
  //Methods for var Total
  const increaseAmount  = costItem =>{
    setTotalAmount(totalAmount + costItem)
  };
  const decreaseAmount  = costItem =>{
    if((totalAmount - costItem) <= 0) {
      setTotalAmount(0)
    } else {
      setTotalAmount(totalAmount - costItem)
    }
  };

  const increaseItemCounter = (itemId) => {
    const temporaryRecord = new Map(countersRecord)
    const item = temporaryRecord.get(itemId);
    item.counter = item.counter + 1;
    temporaryRecord.set(itemId, item)
    setCountersRecord(temporaryRecord)
  }

  const decreaseItemCounter = (itemId) => {
    const temporaryRecord = new Map(countersRecord)
    const item = temporaryRecord.get(itemId);
    if(item.counter>0 ){
    item.counter = item.counter - 1;
    temporaryRecord.set(itemId, item)
    setCountersRecord(temporaryRecord)
    }
  }

  const makePayment = () => {
    const temporaryRecord = new Map(countersRecord);
    for (const key of temporaryRecord.keys()) {
      const item = temporaryRecord.get(key)
      item.counter = 0;
      temporaryRecord.set(key, item)
    }
    setCountersRecord(temporaryRecord)
  }


  return (
    <div className="App">
      <div className='item-counter'>
        <ItemContainer 
          totalAmount={totalAmount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          increaseItemCounter={increaseItemCounter}
          decreaseItemCounter={decreaseItemCounter}
          items={countersRecord}/>
      </div>
      <div className='wallet-zone'>
        <div className='total'>Total:
          <Total amount={totalAmount}/>
        </div>
        <div className='button-Pay'>
          <ButtonPago
            makePayment={makePayment} 
            totalAmount={totalAmount} 
            setTotalAmount={setTotalAmount}
            myMoneyTotalAmount={myMoneyTotalAmount} 
            setMyMoneyTotalAmount={setMyMoneyTotalAmount} />
        </div>
        <div className='wallet'>
          <Wallet 
            myMoneyTotalAmount={myMoneyTotalAmount} 
            setMyMoneyTotalAmount={setMyMoneyTotalAmount}/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
