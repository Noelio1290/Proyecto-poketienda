import React from 'react';
import Item from './Item';

const ItemContainer = ({ items }) =>{
    return (
        <div className='space-item-counter'>
            {items.map ? 
                items.map((item, i) => <Item  key={`Item-number-${i}`} name={item.name} cost={item.cost} img={item.img}/>): <>No hay ni madres</>}
        </div>
    )
};

export default ItemContainer;