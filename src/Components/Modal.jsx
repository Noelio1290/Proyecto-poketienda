import React from "react";

const ModalActive = ({modalActive,setModalActive,oracion}) => {
const closeModal = () => {
    setModalActive("modal")
}

    return (
        <div className={modalActive}>
            <div className="ventana">
                <p>{oracion}</p>
                <button onClick={closeModal}>Aceptar</button>
            </div>
        </div>
    )
};

export default ModalActive;