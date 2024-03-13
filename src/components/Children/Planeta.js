const Planeta = ({nome, tipo, ordem, galaxia}) => {
    return (
        <div>
            <h1>Planeta: {nome}</h1>
            <h2>Tipo: {tipo}</h2>
            <h3>Ordem: {ordem}</h3>
            <h3>Galaxia: {galaxia}</h3>
        </div>
    )
}

export default Planeta;