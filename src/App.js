import './App.css';

function MyButton() {
    return (
        <button>
            Eu sou um botão
        </button>
    );
}

export default function MyApp() {
    return (
        <div className='App'>
            <header className="App-header">
                <h1>Bem-vindo ao meu aplicativo</h1>
                <MyButton />
            </header>
        </div>
    );
}