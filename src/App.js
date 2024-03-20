import Pai from "./components/Atividade01/Questao01/Pai";
import PC from "./components/Atividade01/Questao02/meuPC";
function App() {
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Carro</h1>
      {/* <Calculadora/> */}
      {/* <Venda/> */}
      <div style={{color:"blue"}}>
        <Pai/>
      </div>
      <div style={{color:"red"}}>
        <PC/>
      </div>
    </div>
  );
}

export default App;
