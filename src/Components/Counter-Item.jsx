import { useState } from "react"; 

const CounterItem = ({increaseAmountButton,drecreaseAmountButton}) => {
    let [count, setCount] = useState(0)
    const increasingHandler = () => {
              setCount(count + 1);
              increaseAmountButton()
        };
  
    const decreasingHandler = () => {
          if(count !== 0)
              setCount(count - 1);
              drecreaseAmountButton()
              
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