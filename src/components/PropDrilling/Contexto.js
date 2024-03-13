import {Variavel} from "./VariavelContext";
import {useContext} from "react";

const CompA = () => {

    const variavelA = "Dodge Charger 1970"; 

    return (
        <div>
            <Variavel.Provider value={variavelA}>
                <CompB variavelDeA={variavelA}/>
                <CompC variavelDeA={variavelA}/>
            </Variavel.Provider>
        </div>
    );
}
const CompB = () => {
    const variavel = useContext(Variavel);
    return (
        <div>
            <h2>CompB: {variavel}</h2>
        </div>
    );
}
const CompC = () => {
    const variavel = useContext(Variavel);
    return (
        <div>
            <h2>CompC: {variavel}</h2>
        </div>
    );
}
const CompD = ({variavelDeA}) => {
    return (
        <div>
            <CompE variavelDeA={variavelDeA}/>
        </div>
    );
}
const CompE = () => {
    const variavel = useContext(Variavel);
    return (
        <div>
            <h2>CompE: {variavel}</h2>
        </div>
    );
}

export { CompA, CompB, CompC, CompD, CompE}