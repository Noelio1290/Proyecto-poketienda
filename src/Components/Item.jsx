import React from 'react';

const Item = ({name,cost,img} ) => {
  return (
    <div className='item'>
        <img src={img} alt=""/>
        <div>{name}</div>
        <div>${cost}</div>
    </div>
  );
};

export default Item;