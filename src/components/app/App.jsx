import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomePage from '../home/HomePage';
import NowPage from '../now/NowPage';
import UsesPage from '../uses/UsesPage';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <Router className="App">
      <Header/>

      <main>
        <Switch>

          <Route exact path="/" component={HomePage}/>
          <Route exact path="/now" component={NowPage}/>
          <Route exact path="/uses" component={UsesPage}/>
          <Redirect to="/"/>

        </Switch>
      </main>

      <Footer/>
    </Router>
  );
}

export default App;
