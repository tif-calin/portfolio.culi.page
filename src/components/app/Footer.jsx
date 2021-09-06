import React from 'react';
import email from './email.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';

const Footer = () => {
  return <>
    <footer className="Footer">
      <a href="https://github.com/tif-calin/portfolio.culi.page">
        &#x1f12f; steal this
      </a>
      <ul class="links">
        <img src={email} alt="email" />
        <img src={linkedin} alt="linkedin" />
        <img src={github} alt="github" />
      </ul>
    </footer>
  </>;
};

export default Footer;
