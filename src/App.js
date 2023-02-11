import './App.css';
import Total from './Components/Total';
import ButtonPago from './Components/Button-Pay';
import Wallet from './Components/Wallet';
import ButtonAdd from './Components/Button-Add';
import ButtonRemove from './Components/Button-Remove';



function App() {
  return (
    <div className="App">
      <div className='contenedorItem'>

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
