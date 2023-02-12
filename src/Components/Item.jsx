import React from "react";
import CounterItem from "./Counter-Item";

const Item = ({name,cost,img,increaseAmount,drecreaseAmount} ) => {
  const increaseAmountButton= () => {
    increaseAmount(cost)
  }
  const drecreaseAmountButton=()=>{
    drecreaseAmount(cost)
  }
  return (
    <div className='item-full'>
      <div className="item">
        <img className="img" src={img} alt=""/>
        <div className="name">{name}</div>
        <div className="cost">${cost}</div>
      </div>
      <CounterItem increaseAmountButton={increaseAmountButton} drecreaseAmountButton={drecreaseAmountButton}/>
    </div>
  );
};

export default Item;