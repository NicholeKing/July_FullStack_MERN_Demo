import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Add from './views/Add';
import OneGame from './views/OneGame';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Home path="/"/>
        <Add path="/add"/>
        <OneGame path="/game/:_id"/>
        <Update path="/game/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
