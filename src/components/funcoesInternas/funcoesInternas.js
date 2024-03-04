const Calculadora = () =>{
    
    function soma(x, y){
        return x + y;
    }

    function sub(x, y){
        return x - y;
    }

    function div(x, y){
        if(y === 0 ){
            return 0;
        }

        return x / y;
    }

    function mult(x, y){
        return x * y;
    }

    return (
        <div>
            <h1>Calculadora</h1>
            <h3>Valores de X e Y: 10 e 5</h3>
            <h4>Soma : {soma(10, 5)}</h4>
            <h4>Sub : {sub(10, 5)}</h4>
            <h4>Div : {div(10, 5)}</h4>
            <h4>Mult : {mult(10, 5)}</h4>
        </div>
    )
    
}

export default Calculadora