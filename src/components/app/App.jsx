import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from '../home/HomePage';
import Footer from './Footer';

function App() {
  return (
    <Router className="App">
      <main>
        <Switch>

          <Route exact path="/" component={Home}/>

          <Redirect to="/"/>

        </Switch>
      </main>

      <Footer/>
    </Router>
  );
}

export default App;
