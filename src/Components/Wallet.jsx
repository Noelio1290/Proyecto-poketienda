import React from 'react';
import { useState } from 'react';

function Wallet({myMoneyTotalAmount, setMyMoneyTotalAmount}) {
  //Variable for input
  let [inputValue,setInputValue] =useState(0)

  //Methods for input
  const handleInputChange = event => {
    setInputValue(parseInt(event.target.value));
  };

  //Methods for var MyMoney
  const increaseMyMoney = ()=>{
    setMyMoneyTotalAmount(myMoneyTotalAmount + inputValue)
  };
  const decreaseMyMoney = ()=>{
    if(myMoneyTotalAmount > 0){
      if(myMoneyTotalAmount >= inputValue){
        setMyMoneyTotalAmount(myMoneyTotalAmount - inputValue)
      } else {
        setMyMoneyTotalAmount(0)
      }
    }
  };


    return (
      <div className='myMoney'>My Money:
        <p>{myMoneyTotalAmount}</p>
        <div className='wallet-buttons'>
          <button className='butto-add-money' onClickCapture={increaseMyMoney}>
            Agregar Dinero
          </button>
          <button className='button-remove-money' onClick={decreaseMyMoney}>
            Quitar Dinero
          </button>
        </div>
        <div className='input'>
          <input type="number" name="amount" value={inputValue} onChange={handleInputChange}/>
        </div>
      </div>
    );
}
  
  export default Wallet;
  