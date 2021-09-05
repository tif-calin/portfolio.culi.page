import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from '../home/HomePage';

function App() {
  return (
    <Router className="App">
      <main>
        <Switch>

          <Route exact path="/" component={Home}/>

          <Redirect to="/"/>

        </Switch>
      </main>

      <footer><a href="https://github.com/tif-calin/portfolio.culi.page">&#x1f12f; steal this content</a></footer>
    </Router>
  );
}

export default App;
