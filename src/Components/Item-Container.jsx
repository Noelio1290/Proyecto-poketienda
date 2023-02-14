import {React, useEffect, useState} from 'react';
import Item from './Item';

const ItemContainer = (
    { 
        items, 
        increaseAmount, 
        decreaseAmount,
        increaseItemCounter,
        decreaseItemCounter
    }) =>{

    let [listItems, setListItems] = useState([])
    useEffect(() => {
        let temporaryList = [];
        for( const item of items.values()){
            temporaryList = [...temporaryList, item]
        }
        setListItems(temporaryList)
    }, [items])

    return (
        <div className='space-item-counter'>
            {listItems.map(item => (
                <Item 
                    key={item.id}
                    identifier={item.id}
                    name={item.name} 
                    cost={item.cost} 
                    img={item.img}
                    count={item.counter}
                    increaseAmount={increaseAmount} 
                    decreaseAmount={decreaseAmount}
                    increaseItemCounter={increaseItemCounter}
                    decreaseItemCounter={decreaseItemCounter}
                />)
            )}
        </div>
    )
};

export default ItemContainer;