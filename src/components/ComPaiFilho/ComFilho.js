import React from "react";

const ComFilho = ({mensagem, enviarMensagemParaPai}) => {
    return (
        <>
            <h1>{mensagem}</h1>
            <button
                onClick={() => enviarMensagemParaPai("Carro Off Road")}
            >Carros tunados</button>
        </>
    );
}

export default ComFilho;