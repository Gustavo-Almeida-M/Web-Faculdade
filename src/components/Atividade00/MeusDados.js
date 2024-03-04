const MeusDados1 = ({nome, curso, universidade}) =>{
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {universidade}</h1>
        </div>
    );
}

function MeusDados2({nome, curso, universidade}){
    return (
        <div>
            <h1 >Nome: {nome}</h1>
            <h1>Curso: {curso}</h1>
            <h1>Universidade: {universidade}</h1>
        </div>
    )
}

const MeusDados3 = ({nome, curso, universidade}) =>
    <div>
        <h1>Nome: {nome}</h1>
        <h1>Curso: {curso}</h1>
        <h1>Universidade: {universidade}</h1>
    </div>


export default MeusDados3;