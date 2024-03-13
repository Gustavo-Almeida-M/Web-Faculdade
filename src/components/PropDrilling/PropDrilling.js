const CompA = () => {

    const variavelA = "Carro tunado"; 

    return (
        <div>
            <CompB variavelDeA={variavelA}/>
            <CompC variavelDeA={variavelA}/>
        </div>
    );
}
    const CompB = ({variavelDeA}) => {
    return (
        <div>
            <h2>CompB: {variavelDeA}</h2>
        </div>
    );
}

const CompC = ({variavelDeA}) => {
    return (
        <div>
            <CompD variavelDeA={variavelDeA}/>
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
const CompE = ({variavelDeA}) => {
    return (
        <div>
            <h2>CompE: {variavelDeA}</h2>
        </div>
    );
}

