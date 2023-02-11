import React from 'react';

const ItemRender = (props) => {
  const {name,cost,img} = props
  return (
    <div className='item'>
        <img src={img} alt=""/>
        <div>{name}</div>
        <div>${cost}</div>
    </div>
  );
};

export default ItemRender;