import { useState } from "react"; 

const CounterItem = () => {
    let [count, setCount] = useState(0)
    const increasingHandler = () => {
              setCount(count + 1);
    };
  
    const decreasingHandler = () => {
          if(count !== 0)
              setCount(count - 1);
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