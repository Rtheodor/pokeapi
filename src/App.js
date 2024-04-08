import logo from './logo.svg';
import './App.css';
import PokemonList from './componentes/PokemonList';
import PokemonSearch from './componentes/PokemonSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="App">
          <h1>Minha Pokedex</h1>
          <PokemonList />
        </div>

        <div className="App">
            <h2>Busca de Pokémons</h2>
            <PokemonSearch />
        </div>
      </header>
    </div>
  );
}

export default App;
