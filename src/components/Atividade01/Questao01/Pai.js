import Filho from "./Filho";
const Pai = () =>{
    return (
        <div>
            <h1>Pai</h1>
            <Filho
                peso = {90}
                altura = {1.8}
            />
        </div>
    )
}

export default Pai;