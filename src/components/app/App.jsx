import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomePage from '../home/HomePage';
import NowPage from '../now/NowPage';
import Footer from './Footer';

function App() {
  return (
    <Router className="App">
      <main>
        <Switch>

          <Route exact path="/" component={HomePage}/>
          <Route exact path="/now" component={NowPage}/>
          <Redirect to="/"/>

        </Switch>
      </main>

      <Footer/>
    </Router>
  );
}

export default App;
