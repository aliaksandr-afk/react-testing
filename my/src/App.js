import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Programs />
    </div>
  );
}

const Programs = () => {
  return(
    <div>
      <ul>
        <li>Burn fat</li>
        <li>Easy</li>
        <li>Middle</li>
        <li>Hard</li>
      </ul>
    </div>
  )
}

const Header = () => {
  return(<div>
    <a href="#">Home</a>
    <a href="#">Programs</a>
    <a href="#">Prices</a>
  </div>
  )
}

export default App;
