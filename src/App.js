import './App.css';
import ItemRender from './Components/Item';
import Total from './Components/Total';
import ButtonPago from './Components/Button-Pay';
import Wallet from './Components/Wallet';
import ButtonAdd from './Components/Button-Add';
import ButtonRemove from './Components/Button-Remove';

const items = [
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
      <div className='contenedorItem'>
        <ItemRender img={items.img} name={items.name} cost={items.cost}/>
      </div>
      <div className='zona-Bolsillo'>
        <div className='total'>
          <Total/>
        </div>
        <div className='button-Pay'>
          <ButtonPago/>
        </div>
        <div className='billetera'>
          <Wallet/>
          <div className='buttons-Billetera'>
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
