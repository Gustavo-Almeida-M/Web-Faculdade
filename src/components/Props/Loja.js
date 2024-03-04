import Produto from "./Produto";

const Venda = () =>{
    return(
        <div>
            <h1>Carros Mombaça</h1>
            <hr/>
            <Produto
                nome = "Mustang"
                preco = "232000"
                quantidade = "1"
            />
            <hr/>
            <Produto
                nome = "Ford GT"
                preco = "1420000"
                quantidade = "1"
            />
            <hr/>
            <Produto
                nome = "Voyage"
                preco = "38000"
                quantidade = "4"
            />
            
        </div>
    )
}

export default Venda