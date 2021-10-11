import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';
import HomePage from '../home/HomePage';
import NowPage from '../now/NowPage';
import UsesPage from '../uses/UsesPage';
import Footer from './Footer';
import Header from './Header';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router className="App">
      <ScrollToTop/>
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
