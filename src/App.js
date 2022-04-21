import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Games from './Components/Games';
import Game from './Components/Game';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Welcome/>
     <Game/>
     <Footer/>
    </div>
  );
}

export default App;
