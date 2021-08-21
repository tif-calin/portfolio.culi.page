import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from '../home/HomePage';

function App() {
  return <>
    <header></header>

    <Router>
      <main>
        <Switch>

          <Route exact path="/" component={Home}/>

          <Redirect to="/"/>

        </Switch>
      </main>
    </Router>

    <footer></footer>
  </>;
}

export default App;
