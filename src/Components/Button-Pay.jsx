import React from 'react';

const ButtonPago = () => {
  console.log('im re rendering tha button-Pay')

  return (
    <button onClick={()=>{console.log("le di click al Boton")}}>
      Pagar
    </button>
  );
};

export default ButtonPago;