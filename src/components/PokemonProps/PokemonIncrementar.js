const Incrementar = () => {
    const {setId} = useContext(PokemonContexto);

    return (
        <button onClick={()=> {
            setId((id) => id + 1);
        }}>Incrementar</button>
    );
} 