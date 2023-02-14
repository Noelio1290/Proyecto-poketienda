import React from 'react';

const ButtonPay = ({totalAmount,myMoneyTotalAmount,setMyMoneyTotalAmount}) => {
  const buttonfunction = ()=>{
    if(totalAmount <= myMoneyTotalAmount){
      alert("Compra Exitosa!!")
      setMyMoneyTotalAmount(myMoneyTotalAmount-totalAmount)
    }else{
      alert("¡Te Falta Dinero!")
    }
  }

  return (
    <button onClick={buttonfunction}>
      Pagar
    </button>
  );
};

export default ButtonPay;