import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import HomePage from '../../views/home/HomePage';
import NowPage from '../../views/now/NowPage';
import UsesPage from '../../views/uses/UsesPage';
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
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/now" element={<NowPage />} />
          <Route exact path="/uses" element={<UsesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
