import { PokemonContexto } from "./PokemonContexto";
import React, { useState } from "react";
const PokemonImagem = () => {
    const 
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const [contador, setContador] = useState(1);

    return(
        <img
        src={url+contador+".png"}
        alt="Imagem do Pokemon"
        width={200}
        />
    )
}

export default PokemonImagem;