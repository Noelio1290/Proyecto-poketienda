import React from 'react';

const ButtonRemove = () => {
  console.log('im re rendering tha button-Remove')

  return (
    <button onClick={()=>{console.log("le di click al Boton")}}>
      Quitar Dinero
    </button>
  );
};

export default ButtonRemove;