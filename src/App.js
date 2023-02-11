import './App.css';
import ItemContainer from './Components/Item-Container';
import Total from './Components/Total';
import ButtonPago from './Components/Button-Pay';
import Wallet from './Components/Wallet';
import ButtonAdd from './Components/Button-Add';
import ButtonRemove from './Components/Button-Remove';

const itemsList = [
  {
      name:"Potion",
      cost: 200,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png"

  },
  {
      name:"Super-potion",
      cost:700,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png"

  },
  {
      name:"Hyper-potion",
      cost: 1500,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png"
  }    
]

function App() {
  return (
    <div className="App">
      <div className='itemcontainer'>
        <ItemContainer items={itemsList}/>
      </div>
      <div className='wallet-zone'>
        <div className='total'>
          <Total/>
        </div>
        <div className='button-Pay'>
          <ButtonPago/>
        </div>
        <div className='wallet'>
          <Wallet/>
          <div className='wallet buttons'>
            <ButtonAdd/>
            <ButtonRemove/>
          </div>
        </div>
        <div className='input'>
          <input type="text" name="entrada-dinero" />
        </div>  
      </div>
      
      
    </div>
  );
}

export default App;
