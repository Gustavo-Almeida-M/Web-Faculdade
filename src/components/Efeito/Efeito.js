import { useState, useEffect } from "react"

const Efeito = () => {
    const [contador, setContador] = useState(0);
    const [ehPar, setEhPar] = useState(true);

    useEffect(
        ()=> {
            if(contador %2 === 0){
                setEhPar(true);
            }
            else{
                setEhPar(false);
            }
        }
        ,
        [contador]
    )

    return(
        <div>
            <h2>{contador} é par ?: {ehPar + ""}</h2>
            <button onClick={()=> setContador((contador)=> contador+1)}>Aumentar 1</button>
        </div>
    )
}

export default Efeito;