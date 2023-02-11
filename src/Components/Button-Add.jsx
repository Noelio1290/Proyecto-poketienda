import React from 'react';

const ButtonAdd = () => {
  console.log('im re rendering tha button-Add')

  return (
    <button onClick={()=>{console.log("le di click al Boton")}}>
      Añadir Dinero
    </button>
  );
};

export default ButtonAdd;