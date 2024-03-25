const Filho = ({peso, altura}) => {

    function calcularIMC(peso, altura){
        return peso/(altura*altura);
    }

    function mensagem(imc){
        if(imc < 18){
            return (<h3>Abaixo do Peso</h3>);
        }
        if(imc > 25){
            return (<h3>Acima do peso</h3>);
        }
        else{
            return (<h3>Peso normal</h3>);
        }
    }

    const imc = calcularIMC(peso, altura);

    return (
        <div>
            <h2>Filho</h2>
            <h3>IMC: {imc.toFixed(2)}</h3>
            {mensagem(imc)}
        </div>
    )
}

export default Filho;