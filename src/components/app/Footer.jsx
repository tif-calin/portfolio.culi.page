import React from 'react';
import email from './email.svg';
import linkedin from './linkedin.svg';
import github from '../../style/github.svg';

const Footer = () => {
  return <>
    <footer className="Footer">
      <a href="https://github.com/tif-calin/portfolio.culi.page">
        &#x1f12f; steal this
      </a>
      <ul className="links">
        <a href="mailto:culitif@tuta.io">
          <img src={email} alt="email"/>
        </a>
        <a href="https://www.linkedin.com/in/tif-calin/">
          <img src={linkedin} alt="linkedin"/>
        </a>
        <a href="https://github.com/tif-calin/">
          <img src={github} alt="github" />
        </a>
      </ul>
    </footer>
  </>;
};

export default Footer;
