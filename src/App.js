import { useState } from 'react';
import './App.css';

function MyButton() {
    return (
        <button>
            Eu sou um botão
        </button>
    );
}

function ItemDoCarrinho({ nomeDoItem, descricaoDoItem }) {

    const [quantidade, setQuantidade] = useState(1);    

    return (
        <>
            <h1>Item: {nomeDoItem}</h1>
            <h4>Descrição: {descricaoDoItem}</h4>
            <p>Quantidade: {quantidade}</p>
            <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar +1</button>
            <button onClick={() => setQuantidade(quantidade - 1)}>Remover -1</button>
        </>
    )
}

function Saudacao({ nome }) {
    return (
        <h1>Olá, {nome}</h1>
    )
}
let item1 = "Panela";
let item2 = "Caneca";
export default function MyApp() {
    return (
        <div className='App'>
            <header className="App-header">
                <h1>Bem-vindo ao meu aplicativo</h1>
                <ItemDoCarrinho nomeDoItem={item1} />
                <ItemDoCarrinho nomeDoItem={item2} />
            </header>
        </div>
    );
}

