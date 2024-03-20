import PlacaDeVideo from "./PlacaDeVideo";
import PlacaMae from "./PlacaMae";
import Memoria from "./Memoria";

const PC = () => {
    return (
        <div>
            <h1>Meu PC</h1>
            <PlacaDeVideo 
                nome = "gtx 1060"  
                preco = "980"
            />
            <PlacaMae 
                nome = "B450" 
                preco = "500"
            />
            <Memoria
                nome = "HyperX 8GB" 
                preco = "280"
            />
        </div>
    );
}

export default PC;