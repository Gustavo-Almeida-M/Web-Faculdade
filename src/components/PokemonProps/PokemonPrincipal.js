import PokemonImagem from "./PokemonImg";
import Pokemon from "../Estados/Pokemon";
import { PokemonContexto } from "./PokemonContexto";
import { useState } from "react";

const PokemonPrincipal = () => {

    const [id, setId] = useState(1);

  return (
    <div>
        <PokemonContexto.Provider value={{id, setId}}>
        <PokemonImagem/>
    </div>
  );
}

export default PokemonPrincipal;