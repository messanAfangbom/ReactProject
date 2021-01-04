import logo from './logo.svg';
import './App.css';
import { Login } from './login/login';
import { BrowserRouter as Router, Redirect, Route, Switch } from
  'react-router-dom';
import { Homepage } from './homepage/homepage';
function App() {
  return (
    <Router>
      <Route exact path='/' render={props => (
        <div className="App">
          <Login />
        </div>)}>
      </Route>
      <Route exact path='/Page_Accueil' render={props => (
        <div className="App">
          <Homepage />
        </div>)}>
      </Route>
    </Router>

  )
}

export default App;
