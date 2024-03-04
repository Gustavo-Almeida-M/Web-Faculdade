// import Calculadora from "./components/funcoesInternas/funcoesInternas";
//import Venda from "./components/Props/Loja";
import MeusDados3 from "./components/Atividade00/MeusDados";
import Informacoes from "./components/Props/informacoes";
import Temperatura from "./components/Atividade00/temperatura";

function App() {
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Carro</h1>
      {/* <Calculadora/> */}
      {/* <Venda/> */}
      <div style={{color:"blue"}}>
      <MeusDados3
        nome = "Gustavo Almeida Monteiro"
        curso = "Sistemas de Informação"
        universidade = "UFC"
      />
      <Informacoes/>
      <Temperatura/>
      </div>
      
    </div>

  );
}

export default App;
