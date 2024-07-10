import './App.css';

function MyButton() {
    return (
        <button>
            Eu sou um botão
        </button>
    );
}

function Saudacao({ nome }) {
    return (
        <h1>Olá, {nome}</h1>
    )
}
let nomeCompleto = "Carlos Sampaio"
export default function MyApp() {
    return (
        <div className='App'>
            <header className="App-header">
                <h1>Bem-vindo ao meu aplicativo</h1>
                <Saudacao nome={nomeCompleto} />
            </header>
        </div>
    );
}