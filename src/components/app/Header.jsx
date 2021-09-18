import React from 'react';
import { useLocation, Link } from 'react-router-dom'

const Header = () => {

  const location = useLocation();

  return <>
    {location.pathname !== '/' && <header className="Header">
      <Link to="/">work.culi</Link>
    </header>}
  </>;
};

export default Header;
