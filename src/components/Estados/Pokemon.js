import { useState } from 'react';
const Pokemon = () => {
        const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        const [contador, setContador] = useState(1);

        const IncrementarContador = () => {
                setContador(contador => contador+1);
        }

        const DecrementarContador = () => {
            if(contador===1){
                alert("Não existe pokemon anterior")
                return 1;
            }
                setContador(contador => contador-1);
        }

    return (
        <div>
                <img src={url+contador+".png"} alt="pokemon" width={200}/>
                <button onClick={()=> IncrementarContador()}>Proximo Pokemon</button>
                <button onClick={() => DecrementarContador()}>Pokemon Anterior</button>
        </div>
    );
}

export default Pokemon;