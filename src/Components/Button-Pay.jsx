import React from 'react';

const ButtonPay = (
  {
    totalAmount,
    setTotalAmount,
    myMoneyTotalAmount,
    setMyMoneyTotalAmount,
    makePayment,
  }) => {
  const buttonfunction = ()=>{
    if(totalAmount <= myMoneyTotalAmount){
      makePayment()
      alert("Compra Exitosa!!")
      setMyMoneyTotalAmount(myMoneyTotalAmount-totalAmount)
      setTotalAmount(0)
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