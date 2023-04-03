import logo from './logo.svg';
import './App.css';
import ContactoComponente from './components/container/Contacto_componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoComponente></ContactoComponente>
      </header>
    </div>
  );
}

export default App;
