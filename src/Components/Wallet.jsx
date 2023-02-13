import React from 'react';

function Wallet({myMoneyAmount}) {
    return (
      <div className='myMoney'>My Money:
        <p>{myMoneyAmount}</p>
        <button className='butto-add-money' onClick={()=>{console.log("le di click al Boton")}}>
        Agregar Dinero
        </button>
        <button className='button-remove-money' onClick={()=>{console.log("le di click al Boton")}}>
        Quitar Dinero
        </button>
        <div className='input'>
          <input type="text" value={0}/>
        </div>
      </div>
    );
}
  
  export default Wallet;
  