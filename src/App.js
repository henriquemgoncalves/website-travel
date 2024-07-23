import './App.css';
import ComoFunciona from './components/ComoFunciona';
import Contato from './components/Contato';
import HeroSite from './components/HeroSite';
import NavBar from './components/NavBar';
import Paraiso from './components/Paraiso';
import Rodape from './components/Rodape';
import Vantagens from './components/Vantagens';

// Tecnologias utilizadas:
// - React
// - React-icons
// - React Hooks ( useState , useEffect )
// - Styled Components
// - Resposividade
// - AOS

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSite/>
      <Vantagens/>
      <Contato/>
      <Paraiso/>
      <ComoFunciona/>
      <Rodape/>
    </div>
  );
}

export default App;