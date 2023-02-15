import React from 'react';

const ButtonPay = (
  {
    totalAmount,
    setTotalAmount,
    myMoneyTotalAmount,
    setMyMoneyTotalAmount,
    makePayment,
    setModalActive,
    setLegend
  }) => {
    const modalACT = ()=>{
      setModalActive("modalActive")
    };
    const legendChangeExito = () => {
      setLegend("Compra Exitosa!! ")
    }
    const legendChangeError = () => {
      setLegend("!Te Falta Dinero Pobre¡")
    }

    const legenOfNoArticle = () => {
      setLegend("Primero Selecciona un articulo")
    }

    const buttonFunction = ()=>{
      if(totalAmount === 0){
        legenOfNoArticle()
        modalACT()
      }else if(totalAmount <= myMoneyTotalAmount){
        makePayment()
        setMyMoneyTotalAmount(myMoneyTotalAmount-totalAmount)
        setTotalAmount(0)
        legendChangeExito()
        modalACT()
      }else{
        legendChangeError()
        modalACT()

      }
      
  };

  return (
    <button onClick={buttonFunction}>
      Pagar
    </button>
  );
};

export default ButtonPay;