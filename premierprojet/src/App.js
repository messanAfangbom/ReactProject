import './App.css';
import { Login } from './login/login';
import { BrowserRouter as Router, Redirect, Route, Switch } from
  'react-router-dom';
import { Homepage } from './homepage/homepage';
import { Verset } from './versetDuJour/verset';
import { MessageDuJour } from './messageDuJour/messageDuJour';
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
      <Route exact path='/Verset_du_jour' render={props => (
        <div className="App">
          <Verset />
        </div>)}>
      </Route>
      <Route exact path='/Message_du_jour' render={props => (
        <div className="App">
          <MessageDuJour />
        </div>)}>
      </Route>
    </Router>

  )
}

export default App;
