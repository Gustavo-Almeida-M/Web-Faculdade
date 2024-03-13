import React from "react";
import ComFilho from "./ComFilho";

const ComPai = () => {

    const receberMensagemDoFilho = (mensagem) => {
        alert(mensagem);
    }

    return (
        <>
            <ComFilho 
                mensagem="Olá, eu sou o pai"
                enviarMensagemParaPai={receberMensagemDoFilho}
            />
        </>
    );
}

export default ComPai;