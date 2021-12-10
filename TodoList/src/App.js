import './App.css';

const nome = 'Guilherme Gomes';
const sobrenome = ' Branco Bravo'

function soma(n1, n2){
  return n1 + n2;
}

function subtracao(n1, n2){
  return n1 - n2;
}

function multiplicacao(n1, n2){
  return n1 * n2
}

function divisao(n1, n2){
  if (n1 === 0 || n2 === 0){
    return "Não é possível dividir por 0";
  } else {
    return n1 / n2;
  }
}


function App() {
  return (
    <div className="App">
          <p>O nome armazenado é: {nome + sobrenome}</p>
          <p>A soma {soma(1,2)}</p>
          <p>A subtração dos valores é: {subtracao(1, 2)}</p>
          <p>A multiplicação é {multiplicacao(5, 5)}</p>
          <p>A divisão é {divisao(10, 2)}</p>
    </div>
  );
}

export default App;
