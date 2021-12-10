import './App.css';


var a = parseInt(prompt("Digite um valor: "));
var b = parseInt(prompt("Digite outro valor"));

function soma(a, b){
    return a + b;
}

function App01(){
    return(
        <div className="App01">
            <p>A soma de {a} com {b} é {soma(a, b)}</p>
        </div>
    );
}

export default App01;