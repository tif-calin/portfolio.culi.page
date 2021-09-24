import React from 'react';
import { useLocation, Link } from 'react-router-dom'

const Header = () => {

  const location = useLocation();

  const page = location.pathname;

  return <>
    {page !== '/' && <header className="Header">
      <Link to="/">work.culi</Link>
      <nav>
        <Link to="/">home</Link>
        {page !== '/now' && <Link to="/now">now</Link>}
        {/* page !== '/uses' && <Link to="/uses">uses</Link> */}
      </nav>
    </header>}
  </>;
};

export default Header;
