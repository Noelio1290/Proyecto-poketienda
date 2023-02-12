import React from "react";
import CounterItem from "./Counter-Item";

const Item = ({name,cost,img,totalAmountSetter} ) => {
  const clickHandler= () => {
    totalAmountSetter(cost)
  }
  return (
    <div className='item-full'>
      <div className="item">
        <img className="img" src={img} alt=""/>
        <div className="name">{name}</div>
        <div className="cost">${cost}</div>
      </div>
      <CounterItem clickHandler={clickHandler}/>
    </div>
  );
};

export default Item;