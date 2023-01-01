import React from 'react';
import Socials from '../Socials';

const Footer = () => {
  return <>
    <footer className="Footer">
      <a href="https://github.com/tif-calin/portfolio.culi.page">
        <span style={{ transform: "rotate(180deg)" }}>&copy;</span> steal this
      </a>
      <Socials/>
    </footer>
  </>;
};

export default Footer;
