import React from "react";

const CounterItem = (
  {
    identifier,
    count,
    increaseAmountButton,
    decreaseAmountButton,
    increaseItemCounter,
    decreaseItemCounter,
  }) => {
    const increasingHandler = () => {
      increaseItemCounter(identifier)
      increaseAmountButton()
    };
  
    const decreasingHandler = () => {
      if(count !==0){
        decreaseItemCounter(identifier); 
        decreaseAmountButton()    
      };   
    };

    return (
        <div className='counter'>
          <button className="button-decreasing-counter-item" onClick={decreasingHandler}>-</button>
          <p className="count">{count}</p>
          <button className="button-increasing-counter-item" onClick={increasingHandler}>+</button>
        </div>
        )

};


export default CounterItem;