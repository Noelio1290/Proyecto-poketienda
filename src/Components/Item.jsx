import React from "react";
import CounterItem from "./Counter-Item";

const Item = (
  {
    name,
    cost,
    img,
    count,
    identifier,
    increaseAmount,
    decreaseAmount,
    increaseItemCounter,
    decreaseItemCounter,

  }) => {
  const increaseAmountButton= () => {
    increaseAmount(cost)
  }
  const decreaseAmountButton=()=>{
    decreaseAmount(cost)
  }
  return (
    <div className='item-full'>
      <div className="item">
        <img className="img" src={img} alt=""/>
        <div className="name">{name}</div>
        <div className="cost">${cost}</div>
      </div>
      <CounterItem
        identifier={identifier}
        increaseAmountButton={increaseAmountButton} 
        decreaseAmountButton={decreaseAmountButton}
        increaseItemCounter={increaseItemCounter}
        decreaseItemCounter={decreaseItemCounter}
        count={count}
      />
    </div>
  );
};

export default Item;