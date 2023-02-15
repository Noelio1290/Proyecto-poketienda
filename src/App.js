import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import ItemContainer from './Components/Item-Container';
import Total from './Components/Total';
import ButtonPay from './Components/Button-Pay';
import Wallet from './Components/Wallet';
import ModalActive from './Components/Modal';
const api = "https://pokeapi.co/api/v2/item"



function App() {
  //variable for Total
  let [totalAmount, setTotalAmount] = useState(0)
  //Variable for MyMoney
  let [myMoneyTotalAmount, setMyMoneyTotalAmount] = useState(25000);
  //Variable for counter
  let [countersRecord, setCountersRecord] = useState(new Map());
  //Variable for purchase legend
  let [modalActive,setModalActive]= useState("modal");
  let [legend,setLegend] = useState("");

  //Methods to add a counter to the item
  useEffect(()=>{
    const getItem = async (id)=>{
      const payload = await fetch(`${api}/${id}`)
      const data = await payload.json()
      const datosPokemon = {
        img:data.sprites.default,
        name:data.name.charAt(0).toUpperCase() + data.name.slice(1),
        cost:data.cost
      }
      return datosPokemon
    }
  
    const getItems = async () => {
      console.log('im being calling')
      const itemId = [17,26,25,24,23,4,3,2,83]
      const pokeNames = []

      try {
        for(let i = 0; i < itemId.length; i++){
          pokeNames.push(await getItem(itemId[i]))
        }
      } catch (error) {
        console.log(error)
      }

      const temporaryRecord = new Map()
      for (let index = 0; index < pokeNames.length; index++) {
        const element = pokeNames[index];
        const id = `Item-number-${index}`;
        temporaryRecord.set(id, {...element, id, counter: 0})
      }
      setCountersRecord(temporaryRecord)
    };

    getItems()
  }, [])

  
  //Methods for var Total
  const increaseAmount  = costItem =>{
    setTotalAmount(totalAmount + costItem)
  };
  const decreaseAmount  = costItem =>{
    if((totalAmount - costItem) <= 0) {
      setTotalAmount(0)
    } else {
      setTotalAmount(totalAmount - costItem)
    }
  };

  //Methods for var Counter
  const increaseItemCounter = (itemId) => {
    const temporaryRecord = new Map(countersRecord)
    const item = temporaryRecord.get(itemId);
    item.counter = item.counter + 1;
    temporaryRecord.set(itemId, item)
    setCountersRecord(temporaryRecord)
  }

  const decreaseItemCounter = (itemId) => {
    const temporaryRecord = new Map(countersRecord)
    const item = temporaryRecord.get(itemId);
    if(item.counter>0 ){
    item.counter = item.counter - 1;
    temporaryRecord.set(itemId, item)
    setCountersRecord(temporaryRecord)
    }
  };

  const makePayment = () => {
    const temporaryRecord = new Map(countersRecord);
    for (const key of temporaryRecord.keys()) {
      const item = temporaryRecord.get(key)
      item.counter = 0;
      temporaryRecord.set(key, item)
    }
    setCountersRecord(temporaryRecord)
  };

  return (
    <div className="App">
      <div className='item-counter'>
        <ItemContainer 
          totalAmount={totalAmount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          increaseItemCounter={increaseItemCounter}
          decreaseItemCounter={decreaseItemCounter}
          items={countersRecord}/>
      </div>
      <div className='wallet-zone'>
        <div className='total'>Total:
          <Total amount={totalAmount}/>
        </div>
        <div className='button-Pay'>
          <ButtonPay
            makePayment={makePayment} 
            totalAmount={totalAmount} 
            setTotalAmount={setTotalAmount}
            myMoneyTotalAmount={myMoneyTotalAmount} 
            setMyMoneyTotalAmount={setMyMoneyTotalAmount}
            modalActive={modalActive}
            setModalActive={setModalActive}
            setLegend={setLegend} />
        </div>
        <div className='wallet'>
          <Wallet 
            myMoneyTotalAmount={myMoneyTotalAmount} 
            setMyMoneyTotalAmount={setMyMoneyTotalAmount}/>
        </div>
      </div>
      <ModalActive 
        modalActive={modalActive} 
        setModalActive={setModalActive} 
        oracion={legend}
      />
    </div>
  );
}

export default App;